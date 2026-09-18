# Linux do Zero — Sistema editorial de navegação v0.7

Status: cabeçalho, rodapé e paginação em revisão pré-PDF
Edição: 2026

## Escopo

A v0.7 acrescenta navegação editorial discreta às páginas internas sem alterar o conteúdo aprovado ou a identidade visual do restante do projeto.

O sistema inclui:

- `LINUX DO ZERO` e o título do capítulo corrente em uma faixa contínua no cabeçalho;
- `DEJOTACODE`, domínio e número físico calculado automaticamente em uma faixa contínua no rodapé;
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

Antes de promover a prova a candidata de lançamento:

1. gerar o HTML com `python3 scripts/build-linux-ebook.py`;
2. exportar pelo pipeline oficial do Firefox;
3. confirmar a contagem física final;
4. revisar visualmente cabeçalhos e rodapés em todas as páginas internas;
5. atualizar o sumário com os números finais somente depois de estabilizar a paginação.
