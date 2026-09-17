# Linux do Zero — Diagramação integral v0.6

Status: página Sobre o autor redesenhada e prova técnica revisada
Edição: 2026

## Mudança principal

A v0.6 substitui a página Sobre o autor da v0.5 pelo modelo editorial aprovado em 17/09/2026.

A composição usa:
- nova foto real do autor, com fundo removido;
- fundo geométrico azul alinhado à identidade DejotaCode;
- biografia canônica em `docs/linux-do-zero-sobre-o-autor.md`;
- assinatura manuscrita baseada no modelo visual aprovado;
- quatro princípios: Aprender de verdade, Colocar em prática, Construir autonomia e Evoluir sempre;
- símbolo oficial DejotaCode no cabeçalho e no rodapé;
- CTA para `dejotacode.com.br`;
- frase “Conhecimento abre caminhos”.

## Assets

- `docs/assets/linux-do-zero/author-v06/dejota-author-cutout.png`
- `docs/assets/linux-do-zero/author-v06/dejota-signature-model.png`
- `docs/assets/linux-do-zero/author-v06/dejotacode-symbol-dark.svg`
- `docs/assets/linux-do-zero/author-v06/dejotacode-symbol-light.svg`

A foto foi recortada a partir do original `IMG_20240318_095417.jpg` em ambiente isolado. O derivado não contém EXIF. Os SVGs são cópias exatas dos símbolos oficiais do projeto.

## Pipeline

O Markdown continua sendo a fonte canônica. O gerador produz:

`docs/prototypes/linux-do-zero-full-v0.6/index.html`

A exportação continua disponível por:

```bash
python3 scripts/build-linux-ebook.py
python3 scripts/print-linux-ebook.py --output /caminho/linux-do-zero-v0.6.pdf
```

## QA da prova

- 85 páginas A4.
- Página Sobre o autor ocupa uma única página.
- Texto da biografia e do rodapé permanece pesquisável no PDF.
- Margens seguras na página 85.
- Nenhuma página com densidade anormalmente baixa.
- Foto e assinatura sem EXIF.
- Símbolos dark/light conferidos byte a byte com os assets oficiais.
- Python compile e `git diff --check`: OK.
- Astro check: 0 erros, 0 warnings e 0 hints.
- Astro build: 47 páginas.

A prova técnica permanece fora do Git.
