#!/usr/bin/env python3
"""Validate documentation locations, index coverage and local Markdown links."""
from pathlib import Path
import re
import sys
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
ALLOWED = {"padroes", "arquitetura", "decisoes", "operacao", "editorial",
           "releases", "auditorias", "historico", "brand", "assets",
           "prototypes", "editorial-backlog", "history"}
TOP_FILES = {"README.md", "organizacao-documental.md", "estado-atual.md"}
LINK = re.compile(r"!?\[[^\]\n]*\]\(([^\s)]+)(?:[^)]*)\)")
REF = re.compile(r"^\s*\[[^\]]+\]:\s*(\S+)", re.M)
errors = []
files = sorted(DOCS.rglob("*.md")) + sorted(ROOT.glob("*.md"))
references = 0
for p in DOCS.iterdir():
    if p.is_dir() and p.name not in ALLOWED:
        errors.append(f"Destino sem regra: {p.relative_to(ROOT)}")
    if p.is_file() and p.name not in TOP_FILES:
        errors.append(f"Documento solto em docs/: {p.name}")
for p in ROOT.glob("RELEASE_NOTES*.md"):
    errors.append(f"Nota de release na raiz: {p.name}")
for folder in ALLOWED:
    p = DOCS / folder
    if p.exists() and not (p / "README.md").is_file():
        errors.append(f"Índice ausente: {p.relative_to(ROOT)}")
for p in files:
    text = re.sub(r"```[\s\S]*?```", "", p.read_text())
    urls = LINK.findall(text) + REF.findall(text)
    for url in urls:
        if url.startswith(("#", "/", "http:", "https:", "mailto:", "data:", "app:", "sandbox:")):
            continue
        base = unquote(url.split("#", 1)[0].split("?", 1)[0].strip("<>"))
        if not base:
            continue
        references += 1
        if not (p.parent / base).exists():
            errors.append(f"Link inexistente: {p.relative_to(ROOT)} -> {url}")
    if p.is_relative_to(DOCS) and p.name != "README.md" and p.parent != DOCS:
        index = p.parent / "README.md"
        if index.exists() and p.name not in index.read_text():
            errors.append(f"Documento fora do índice: {p.relative_to(ROOT)}")
if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"Documentação OK: {len(files)} Markdown, {references} referências locais, destinos e índices válidos.")
