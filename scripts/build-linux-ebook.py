#!/usr/bin/env python3
from pathlib import Path
import html
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
OUT = DOCS / "prototypes" / "linux-do-zero-full-v0.5"
OUT.mkdir(parents=True, exist_ok=True)

SCREEN = "../../assets/linux-do-zero/screenshots"
AUTHOR_ASSET = "../../assets/linux-do-zero/author"

AUTHOR_ENTRY = ("author", "Sobre o autor", "Dejota e o propósito do DejotaCode")

CHAPTERS = [
    ("intro", "Introdução", "Bem-vindo ao mundo do Linux — sem medo"),
    ("c01", "Capítulo 1", "Linux sem medo: o que é e onde ele aparece"),
    ("c02", "Capítulo 2", "Escolhendo sua primeira distribuição"),
    ("c03", "Capítulo 3", "Preparação, backup e teste antes da instalação"),
    ("c04", "Capítulo 4", "Instalação passo a passo"),
    ("c05", "Capítulo 5", "Primeiros passos depois da instalação"),
    ("c06", "Capítulo 6", "Terminal sem medo: 20 comandos essenciais"),
    ("c07", "Capítulo 7", "Arquivos, usuários e permissões sem mistério"),
    ("c08", "Capítulo 8", "Problemas comuns e como procurar solução com segurança"),
    ("bonus", "Bônus", "Materiais de consulta e prática"),
]
def figure(name, caption, alt):
    src = f"{SCREEN}/{name}"
    return (
        f'<figure class="figure"><img src="{src}" alt="{html.escape(alt)}">'
        f'<figcaption>{caption}</figcaption></figure>'
    )

FIGURES = {
    "c03": {
        "## Passo 5 — Inicie pelo pendrive e use o modo live": [
            figure("c03-06-menu-boot.png", "Menu de boot da mídia de instalação.", "Menu de boot com a opção Try or Install Ubuntu selecionada."),
            figure("c03-07-experimentar-ou-instalar.png", "Escolha entre experimentar e instalar o Ubuntu.", "Tela do instalador com as opções Instalar Ubuntu e Experimentar Ubuntu."),
            figure("c03-08-desktop-live.png", "Desktop da sessão live, usado para testar o sistema antes da instalação.", "Desktop do Ubuntu executado em modo live, antes da instalação no disco."),
        ]
    },
    "c04": {
        "## Passo 1 — Confirme idioma, teclado e conexão": [
            figure("c04-01-idioma.png", "Seleção de Português do Brasil.", "Tela de escolha de idioma com Português do Brasil selecionado."),
            figure("c04-02-teclado.png", "Layout de teclado Português (Brasil).", "Tela do instalador mostrando layout de teclado Português Brasil."),
            figure("c04-03-rede.png", "Conexão de rede durante a instalação.", "Tela do instalador oferecendo conexão cabeada ou instalação sem internet."),
            figure("c04-04-instalacao-interativa.png", "Instalação interativa: caminho usado neste livro.", "Tela do instalador com Instalação interativa selecionada."),
            figure("c04-05-aplicativos.png", "Instalação padrão de aplicativos.", "Tela do instalador com a opção Instalação padrão selecionada."),
            figure("c04-06-drivers-codecs.png", "Opções de drivers de terceiros e formatos de mídia.", "Tela do instalador com opções de software proprietário, drivers e suporte a mídia."),
        ],
        "### Cenário A — Usar o disco inteiro para Linux": [
            figure("c04-08-apagar-disco.png", "A opção que apaga o disco precisa ser compreendida antes de continuar.", "Tela do instalador Ubuntu com a opção Apagar o disco e instalar o Ubuntu e aviso de que os dados serão apagados."),
        ],
        "## Passo 3 — Pense na criptografia antes de clicar em instalar": [
            figure("c04-11-criptografia.png", "Opções de criptografia e sistema de arquivos.", "Tela de criptografia do instalador com opções sem criptografia, senha e suporte de hardware."),
        ],
        "## Passo 4 — Crie seu usuário com calma": [
            figure("c04-13-conta.png", "Conta de exemplo com dados fictícios.", "Tela de criação de conta do Ubuntu preenchida com nome e usuário fictícios e senha mascarada."),
        ],
        "## Passo 5 — Leia o resumo antes da mudança definitiva": [
            figure("c04-14-resumo.png", "Revise disco, partições, aplicativos e criptografia antes de instalar.", "Tela Revise suas escolhas com disco, partições, aplicativos e criptografia da instalação."),
        ],
        "## Passo 6 — Deixe o instalador trabalhar": [
            figure("c04-15-instalacao.png", "Instalação em andamento: agora é hora de esperar.", "Tela do Ubuntu mostrando o sistema sendo instalado."),
        ],
        "## Passo 7 — O primeiro boot não é hora de correr": [
            figure("c04-17-primeiro-boot.png", "Primeiro boot concluído e tela de login disponível.", "Tela de login do Ubuntu após a instalação, com conta fictícia."),
        ],
    },
    "c05": {
        "## Passo 1 — Faça a primeira atualização": [
            figure("c05-02-atualizador.png", "Atualizador de programas indicando atualizações disponíveis.", "Janela Atualizador de programas mostrando atualizações disponíveis no Ubuntu."),
        ],
        "## Passo 2 — Conheça a interface antes de trocar a interface": [
            figure("c05-01-desktop.png", "Desktop Ubuntu recém-instalado, ainda sem customizações.", "Desktop padrão do Ubuntu 26.04.1 LTS após a instalação."),
            figure("c05-03-configuracoes.png", "Configurações: ponto central para rede, som, energia e outros ajustes.", "Janela Configurações do Ubuntu aberta na seção Rede."),
            figure("c05-04-arquivos.png", "Arquivos mostra a pasta pessoal e as pastas padrão do usuário.", "Gerenciador Arquivos aberto na pasta pessoal com Documentos, Downloads, Imagens e outras pastas."),
        ],
        "## Passo 3 — Instale programas por fontes confiáveis": [
            figure("c05-05-app-center.png", "Centro de Aplicativos: caminho gráfico para descobrir software.", "Centro de Aplicativos do Ubuntu na tela Explorar."),
        ],
        "## Passo 4 — Remover também faz parte de aprender": [
            figure("c05-06-07-gerenciar-apps.png", "A área Gerenciar mostra aplicativos instalados, atualizações e ações de desinstalação.", "Centro de Aplicativos na seção Gerenciar com aplicativos instalados e botões Desinstalar."),
        ],
        "## Passo 5 — Revise hardware e periféricos": [
            figure("c05-09a-bluetooth.png", "Bluetooth pode mostrar ausência de hardware em ambientes virtuais.", "Configurações do Ubuntu na seção Bluetooth informando que nenhum Bluetooth foi encontrado."),
            figure("c05-09b-som.png", "Som: valide saída, volume e entrada no seu próprio hardware.", "Configurações do Ubuntu na seção Som com controles de saída e entrada."),
        ],
    },
}
def read_source(path):
    return (DOCS / path).read_text(encoding="utf-8")


def strip_meta(text):
    lines = text.splitlines()
    out = []
    for i, line in enumerate(lines):
        if i == 0 and line.startswith("# Linux do Zero"):
            continue
        if line.startswith("Status:") or line.startswith("Edição:"):
            continue
        out.append(line)
    return "\n".join(out).strip()


def split_sources():
    intro_full = read_source("linux-do-zero-introducao-capitulo-1.md")
    marker = "\n---\n\n# Capítulo 1 — Linux sem medo: o que é e onde ele aparece"
    before, after = intro_full.split(marker, 1)
    intro = strip_meta(before)
    intro = re.sub(r"^# Bem-vindo ao mundo do Linux — sem medo\s*", "", intro)
    chapter1 = after.strip()
    data = {"intro": intro, "c01": chapter1}

    for n in range(2, 9):
        key = f"c{n:02d}"
        txt = strip_meta(read_source(f"linux-do-zero-capitulo-{n}.md"))
        txt = re.sub(r"^## [^\n]+\n+", "", txt, count=1)
        data[key] = txt.strip()

    bonus = strip_meta(read_source("linux-do-zero-bonus.md"))
    data["bonus"] = bonus
    return data
def inject_figures(key, markdown):
    mapping = FIGURES.get(key, {})
    if not mapping:
        return markdown
    out = []
    for line in markdown.splitlines():
        out.append(line)
        if line in mapping:
            out.append("")
            out.extend(mapping[line])
            out.append("")
    return "\n".join(out)


def markdown_to_html(markdown):
    proc = subprocess.run(
        ["pandoc", "--from=markdown+raw_html", "--to=html5", "--wrap=none"],
        input=markdown,
        text=True,
        capture_output=True,
        check=True,
    )
    return proc.stdout


CALLOUT_CLASSES = {
    "ENTENDA": "understand",
    "ATENÇÃO": "warning",
    "DICA DO DEJOTA": "tip",
    "SE DER ERRADO": "trouble",
    "PRATIQUE": "practice",
    "VOCÊ NÃO PRECISA DECORAR": "memory",
}


def style_callouts(fragment):
    pattern = re.compile(r"<blockquote>\s*<p><strong>([^<]+)</strong>", re.I)
    def repl(match):
        label = html.unescape(match.group(1)).strip().upper()
        cls = CALLOUT_CLASSES.get(label, "note")
        return f'<blockquote class="callout {cls}"><p><strong>{match.group(1)}</strong>'
    fragment = pattern.sub(repl, fragment)
    # Keep the explanatory paragraph together with a following Dejota tip.
    # This avoids tip-only pages at section/chapter boundaries in the PDF.
    pair = re.compile(
        r'(<p>(?:(?!</p>).)*</p>\s*)(<blockquote class="callout tip">.*?</blockquote>)',
        re.S,
    )
    fragment = pair.sub(r'<div class="keep-together">\1\2</div>', fragment)
    heading_figure = re.compile(
        r'((?:<h2[^>]*>(?:(?!</h2>).)*</h2>|<h3[^>]*>(?:(?!</h3>).)*</h3>)\s*)(<figure class="figure">.*?</figure>)',
        re.S,
    )
    return heading_figure.sub(r'<div class="heading-figure">\1\2</div>', fragment)
def chapter_opener(key, label, title):
    number = ""
    if key.startswith("c") and key[1:].isdigit():
        number = str(int(key[1:])).zfill(2)
    elif key == "bonus":
        number = "B"
    return f'''<section class="chapter-opener" id="{key}">
  <div class="opener-number">{number}</div>
  <div class="opener-copy">
    <div class="eyebrow">{label}</div>
    <div class="rule"></div>
    <h1>{html.escape(title)}</h1>
  </div>
</section>'''


def build_toc():
    items = []
    for key, label, title in CHAPTERS + [AUTHOR_ENTRY]:
        items.append(
            f'<li><a href="#{key}"><span>{html.escape(label)}</span>'
            f'<strong>{html.escape(title)}</strong></a></li>'
        )
    return "\n".join(items)


def build_author_page():
    raw = read_source("linux-do-zero-sobre-o-autor.md")
    lines = []
    for line in raw.splitlines():
        if line.startswith("# Sobre o autor"):
            continue
        if line.startswith("> **Tecnologia não precisa"):
            continue
        if line.startswith("Continue aprendendo em"):
            continue
        lines.append(line)
    fragment = markdown_to_html("\n".join(lines).strip())
    return f"""<section class=\"author-page\" id=\"author\">
  <div class=\"author-topline\"><span>Linux do Zero</span><span>DejotaCode</span></div>
  <div class=\"author-grid\">
    <div class=\"author-left\">
      <img class=\"author-photo\" src=\"{AUTHOR_ASSET}/dejota-author.jpg\" alt=\"Retrato de Dejota, criador do DejotaCode.\">
      <div class=\"author-values\">
        <div class=\"author-value\"><strong>Aprender de verdade</strong><span>Conteúdo prático e direto.</span></div>
        <div class=\"author-value\"><strong>Colocar em prática</strong><span>Exemplos do mundo real.</span></div>
        <div class=\"author-value\"><strong>Construir autonomia</strong><span>Você no controle da sua evolução.</span></div>
        <div class=\"author-value\"><strong>Evoluir sempre</strong><span>Tecnologia como oportunidade.</span></div>
      </div>
    </div>
    <div class=\"author-right\">
      <div class=\"eyebrow\">Sobre o autor</div>
      <h1>Dejota</h1>
      <p class=\"author-tagline\">Tecnologia explicada de forma simples e real.</p>
      <div class=\"author-copy\">{fragment}</div>
      <div class=\"author-signature\">
        <img src=\"{AUTHOR_ASSET}/djc-classic.png\" alt=\"Monograma DJC usado como assinatura de Dejota.\">
        <div><strong>Dejota</strong><span>Criador do DejotaCode</span></div>
      </div>
    </div>
  </div>
  <div class=\"author-quote\"><strong>“</strong><span>Tecnologia não precisa ser complicada.<br>Ela precisa fazer sentido na sua vida.</span><small>DEJOTA</small></div>
  <div class=\"author-cta\"><span>Continue aprendendo em</span><strong>dejotacode.com.br</strong><b>DejotaCode</b></div>
</section>"""


def build_html():
    sources = split_sources()
    sections = []
    for key, label, title in CHAPTERS:
        markdown = inject_figures(key, sources[key])
        fragment = style_callouts(markdown_to_html(markdown))
        sections.append(chapter_opener(key, label, title))
        sections.append(f'<main class="chapter-body content">{fragment}</main>')

    sections.append(build_author_page())
    body = "\n".join(sections)
    toc = build_toc()
    return f'''<!-- GENERATED by scripts/build-linux-ebook.py — do not edit manually -->\n<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Linux do Zero — Edição 2026</title>
<link rel="stylesheet" href="./style.css">
</head>
<body>
'''+ FRONT.format(toc=toc) + body + '''
</body>
</html>
'''

FRONT = '''
<section class="cover">
  <div class="cover-grid"></div>
  <div class="cover-accent"></div>
  <img class="cover-symbol" src="../../../public/assets/brand/dejotacode-symbol-dark.svg" alt="">
  <div class="cover-copy">
    <div class="eyebrow">DejotaCode · Edição 2026</div>
    <h1>Linux<br>do Zero</h1>
    <p>Guia prático para começar com segurança, entender o sistema e ganhar autonomia.</p>
  </div>
  <div class="cover-footer"><span>Tecnologia explicada de forma simples, prática e responsável.</span><span>DejotaCode</span></div>
</section>
<section class="front-page legal">
  <div class="eyebrow">Sobre esta edição</div>
  <h1>Entenda primeiro.<br>Execute depois.</h1>
  <p>Este livro foi escrito para quem está começando. As telas usam Ubuntu LTS como referência visual, mas os princípios de segurança e aprendizagem continuam úteis em outras distribuições.</p>
  <p>Comandos, screenshots e contas de exemplo foram preparados em ambientes controlados. Antes de qualquer ação que altere discos ou dados, confirme seu backup e leia a tela inteira.</p>
  <p class="muted">DejotaCode · Edição 2026 · Material educativo.</p>
</section>
<section class="front-page toc">
  <div class="eyebrow">Conteúdo</div>
  <h1>Seu caminho neste livro</h1>
  <ol>{toc}</ol>
</section>
'''


def main():
    html_text = build_html()
    (OUT / "index.html").write_text(html_text, encoding="utf-8")
    print(f"Gerado: {OUT / 'index.html'}")
    print(f"Capítulos/blocos: {len(CHAPTERS)} + página Sobre o autor")


if __name__ == "__main__":
    main()
