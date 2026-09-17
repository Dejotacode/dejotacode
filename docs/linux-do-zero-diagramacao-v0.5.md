# Linux do Zero — Diagramação integral v0.5

Status: página Sobre o autor integrada e prova técnica revisada
Edição: 2026

## Mudança principal

A v0.5 acrescenta uma página editorial **Sobre o autor** como fechamento do ebook, depois dos bônus.

A página usa:
- foto real escolhida pelo autor;
- biografia canônica em `docs/linux-do-zero-sobre-o-autor.md`;
- quatro princípios do DejotaCode;
- monograma **DJC Classic**, derivado do traço original do autor;
- citação de fechamento;
- chamada para `dejotacode.com.br`.

## Assets

- `docs/assets/linux-do-zero/author/dejota-author.jpg`
- `docs/assets/linux-do-zero/author/djc-classic.png`

Os dois derivados editoriais foram exportados sem EXIF. A foto original permanece fora do repositório.

## Pipeline

O Markdown continua sendo fonte canônica. O gerador agora produz `docs/prototypes/linux-do-zero-full-v0.5/index.html`.

A exportação continua disponível por:
```bash
python3 scripts/build-linux-ebook.py
python3 scripts/print-linux-ebook.py --output /caminho/linux-do-zero-v0.5.pdf
```

## QA da prova

- 85 páginas A4.
- Página Sobre o autor ocupa uma única página.
- Nenhuma página com densidade anormalmente baixa.
- Margens da página do autor preservadas.
- 24 screenshots técnicos anteriores preservados.
- Astro check: 0 erros, 0 warnings e 0 hints.
- Astro build: 47 páginas.
