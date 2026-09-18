#!/usr/bin/env python3
import argparse
import io
from pathlib import Path

try:
    from pypdf import PdfReader, PdfWriter
    from reportlab.lib.colors import HexColor
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.pdfgen import canvas
except ImportError as exc:
    raise SystemExit(
        "Dependências ausentes. Instale com: "
        "python3 -m pip install -r requirements-linux-ebook.txt"
    ) from exc

EXPECTED_PAGES = 85
CHAPTERS = [
    (5, 7, "Bem-vindo ao mundo do Linux - sem medo"),
    (9, 13, "Linux sem medo: o que é e onde ele aparece"),
    (15, 21, "Escolhendo sua primeira distribuição"),
    (23, 31, "Preparação, backup e teste antes da instalação"),
    (33, 46, "Instalação passo a passo"),
    (48, 56, "Primeiros passos depois da instalação"),
    (58, 64, "Terminal sem medo: 20 comandos essenciais"),
    (66, 70, "Arquivos, usuários e permissões sem mistério"),
    (72, 77, "Problemas comuns e como procurar solução com segurança"),
    (79, 84, "Materiais de consulta e prática"),
]

def register_fonts():
    regular = Path("/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf")
    bold = Path("/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf")
    if not regular.exists() or not bold.exists():
        raise SystemExit("Fonte Noto Sans não encontrada no sistema.")
    pdfmetrics.registerFont(TTFont("NotoSans", regular))
    pdfmetrics.registerFont(TTFont("NotoSans-Bold", bold))


def chapter_title(page_number):
    for start, end, title in CHAPTERS:
        if start <= page_number <= end:
            return title
    return None


def make_overlay(width, height, title, page_number):
    packet = io.BytesIO()
    pdf = canvas.Canvas(packet, pagesize=(width, height))
    pdf.setFillColor(HexColor("#eef4fb"))
    pdf.rect(0, height - 34, width, 34, stroke=0, fill=1)
    pdf.setFillColor(HexColor("#075ee8"))
    pdf.rect(0, height - 34, width, 1.3, stroke=0, fill=1)
    pdf.setFillColor(HexColor("#203a63"))
    pdf.setFont("NotoSans-Bold", 6.8)
    pdf.drawString(20, height - 21, f"LINUX DO ZERO  |  {title}".upper())

    pdf.setFillColor(HexColor("#071a35"))
    pdf.rect(0, 0, width, 37, stroke=0, fill=1)
    pdf.setFillColor(HexColor("#19adff"))
    pdf.rect(0, 37, width, 1.3, stroke=0, fill=1)
    pdf.setFillColor(HexColor("#e8f3ff"))
    pdf.setFont("NotoSans", 6.6)
    footer = f"DejotaCode - dejotacode.com.br  |  {page_number}"
    pdf.drawString(20, 15, footer)
    pdf.save()
    packet.seek(0)
    return PdfReader(packet).pages[0]


def stamp(input_path, output_path):
    register_fonts()
    reader = PdfReader(input_path)
    if len(reader.pages) != EXPECTED_PAGES:
        raise SystemExit(
            f"PDF com {len(reader.pages)} páginas; esperado: {EXPECTED_PAGES}. "
            "Revise a paginação antes de aplicar as faixas."
        )

    writer = PdfWriter()
    for page_number, page in enumerate(reader.pages, start=1):
        title = chapter_title(page_number)
        if title:
            width = float(page.mediabox.width)
            height = float(page.mediabox.height)
            page.merge_page(
                make_overlay(width, height, title, page_number),
                over=True,
            )
        writer.add_page(page)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("wb") as stream:
        writer.write(stream)


def main():
    parser = argparse.ArgumentParser(
        description="Aplica cabeçalho e rodapé ao PDF Linux do Zero."
    )
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()

    input_path = Path(args.input).expanduser().resolve()
    output_path = Path(args.output).expanduser().resolve()
    if input_path == output_path:
        raise SystemExit("Use caminhos diferentes para entrada e saída.")
    stamp(input_path, output_path)
    print(f"PDF final gerado: {output_path}")


if __name__ == "__main__":
    main()
