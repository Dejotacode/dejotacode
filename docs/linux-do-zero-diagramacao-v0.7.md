# Linux do Zero — Sistema editorial de navegação v0.7

Status: prova local gerada; aguardando aprovação visual
Edição: 2026

## Escopo

A v0.7 acrescenta navegação editorial discreta às páginas internas e finaliza o fechamento editorial sem alterar a estrutura didática aprovada ou a identidade visual do restante do projeto.

O sistema inclui:

- `LINUX DO ZERO` à esquerda e o título do capítulo à direita, sobre o fundo branco da própria página;
- `DejotaCode · dejotacode.com.br` à esquerda e o número físico da página à direita;
- linhas divisórias finas alinhadas às mesmas margens do conteúdo, sem faixas preenchidas;
- pequeno acento cyan no rodapé para preservar a assinatura visual do DejotaCode;
- supressão da navegação na capa, páginas iniciais, sumário, aberturas de capítulo, Referências, Agradecimento, Sobre o autor e contracapa;
- paginação física calculada automaticamente apenas nas páginas editoriais internas.

## Integridade de navegação

O gerador passa a prefixar os identificadores produzidos pelo Pandoc com a chave do respectivo capítulo. Isso elimina IDs repetidos, preserva a navegação interna e evita ambiguidade em leitores de tela.

## Limites da mudança

Esta versão preserva:

- a estrutura didática e o conteúdo principal dos capítulos;
- componentes e estilos do site Astro;
- infraestrutura, formulários, métricas e produção.

O fechamento editorial passa a incluir Referências, Agradecimento, Sobre o autor com a foto aprovada e contracapa. Também foram feitos refinamentos pontuais de precisão em `sudo`, `chmod 777` e checksum.

## Validação necessária

Antes de gerar a prova, instale as dependências isoladas do e-book:

```bash
python3 -m pip install -r requirements-linux-ebook.txt
```

Fluxo validado:

1. gerar o HTML com `python3 scripts/build-linux-ebook.py`;
2. executar `python3 scripts/print-linux-ebook.py --output /caminho/linux-do-zero-v0.7.pdf`;
3. o Firefox produz a base e `stamp-linux-ebook.py` aplica a navegação vazada somente nas páginas internas;
4. confirmar que o resultado permanece em 88 páginas A4;
5. revisar visualmente cabeçalho, rodapé, Referências, Agradecimento, Sobre o autor e contracapa.

O pós-processador interrompe a execução se a quantidade de páginas deixar de ser 88. Nesse caso, os intervalos editoriais devem ser revisados antes de gerar uma nova versão.
