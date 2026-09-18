# Linux do Zero — Sistema editorial de navegação v0.7

Status: cabeçalho, rodapé e paginação validados no PDF oficial
Edição: 2026

## Escopo

A v0.7 acrescenta navegação editorial discreta às páginas internas sem alterar o conteúdo aprovado ou a identidade visual do restante do projeto.

O sistema inclui:

- `LINUX DO ZERO` e o título do capítulo corrente em uma faixa contínua no cabeçalho;
- `DejotaCode`, domínio e número físico calculado automaticamente em uma faixa contínua no rodapé;
- faixa clara azulada no cabeçalho, com linha de destaque em azul DejotaCode;
- faixa navy no rodapé, com linha e numeração em azul claro;
- supressão do cabeçalho e do rodapé na capa, páginas iniciais, sumário, aberturas de capítulo e página Sobre o autor;
- remoção do número `85` que estava fixo na página Sobre o autor.

## Integridade de navegação

O gerador passa a prefixar os identificadores produzidos pelo Pandoc com a chave do respectivo capítulo. Isso elimina IDs repetidos, preserva a navegação interna e evita ambiguidade em leitores de tela.

## Limites da mudança

Esta versão não altera:

- os arquivos Markdown canônicos;
- a redação dos capítulos;
- o layout aprovado da página Sobre o autor;
- componentes ou estilos do site Astro;
- infraestrutura, formulários, métricas ou produção.

## Validação necessária

Antes de gerar a prova, instale as dependências isoladas do e-book:

```bash
python3 -m pip install -r requirements-linux-ebook.txt
```

Fluxo validado:

1. gerar o HTML com `python3 scripts/build-linux-ebook.py`;
2. executar `python3 scripts/print-linux-ebook.py --output /caminho/linux-do-zero-v0.7.pdf`;
3. o Firefox produz a base e `stamp-linux-ebook.py` aplica as faixas somente nas páginas internas;
4. confirmar que o resultado permanece em 85 páginas A4;
5. revisar visualmente cabeçalhos, rodapés, aberturas e página Sobre o autor.

O pós-processador interrompe a execução se a quantidade de páginas deixar de ser 85. Nesse caso, os intervalos editoriais devem ser revisados antes de gerar uma nova versão.
