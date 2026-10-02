# DejotaStore — Catálogo inicial v1

Status: pronto para revisão, ainda não aprovado para produção.

## Objetivo

Organizar a primeira versão comercial da DejotaStore sem transformar o site em marketplace. A regra editorial permanece: ensinar primeiro, recomendar depois.

## Escopo desta versão

O catálogo inicial destaca sete produtos físicos com ficha editorial e oferta afiliada registrada:

- Baseus FC11 Power Bank
- Baseus FM11 Power Bank 10.000 mAh
- Fifine AM8 USB/XLR
- Gshield Hub USB-C 6 em 1
- Logitech Pebble 2 M350s
- SanDisk Portable SSD 1 TB
- UGREEN Uno Hub USB-C 6 em 1

## Modelo editorial

Cada produto mantém o status editorial separado do status comercial. `editorialStatus` registra se o item foi pesquisado, testado ou usado; `catalogStage` define se pertence ao catálogo inicial, catálogo geral ou avaliação.

Preço não é tratado como dado permanente. Disponibilidade e valor devem ser conferidos diretamente no parceiro.
## Modelo comercial

As ofertas novas usam a lista estruturada `offers`, com parceiro, URL afiliada, estado ativo, data de verificação e rótulo. O campo legado `affiliateLinks` foi mantido temporariamente para compatibilidade com páginas já publicadas.

Campos adicionais preparados:

- marca;
- tipo de produto;
- verificação editorial;
- compatibilidade por plataforma;
- múltiplas ofertas por produto.

## Interface

A home da Store destaca somente os sete itens marcados como `catalogo-v1`. Os demais produtos não-rascunho permanecem disponíveis nas categorias e páginas individuais.

Os cards mostram marca e quantidade de ofertas verificadas. A página individual prioriza ofertas estruturadas e usa os links antigos apenas como fallback.

As fichas exibem a data da última verificação quando disponível e mantêm disclosure de afiliação próximo aos CTAs externos.

## Integração editorial

O mecanismo Blog → Store existente foi preservado. Não foram adicionados links comerciais novos em artigos nesta etapa; isso continua dependendo de revisão editorial por conteúdo.

As categorias existentes foram mantidas para evitar quebra de URLs e de navegação: Linux, Setup, Programação, Criadores e Ferramentas digitais.
## Validação técnica

Executado em 02/10/2026:

- `npm run build`: aprovado; 103 páginas geradas;
- `npm run check`: 0 erros, 0 warnings, 0 hints;
- `npm run qa`: 5.367 referências internas verificadas, 0 links quebrados;
- QA HTML: 103 páginas analisadas, 0 páginas com problemas.

## Pendências deliberadas

Não foram adicionadas imagens oficiais dos produtos. Imagens só devem entrar depois de confirmar fonte, licença e correspondência exata com a oferta.

Não foram congelados preços ou percentuais de comissão na interface, porque podem mudar.

A migração de todos os produtos antigos para `offers` pode ser feita depois da revisão desta v1.

## Branch de revisão

`feat/dejotastore-catalog-v1`

A branch não deve ser mergeada na main até a revisão final do DejotaCode.

## Evolução futura da home da DejotaStore

Não executar nesta versão. Registrar para planejamento futuro.

A home da DejotaStore hoje destaca os sete produtos físicos do catálogo inicial. No futuro, a área de recomendações pode evoluir de uma vitrine fixa para um catálogo editorial dinâmico, mais próximo da lógica de um blog/feed:

- misturar produtos físicos, ferramentas digitais, serviços e conteúdos comerciais das categorias existentes;
- dar visibilidade equilibrada a Linux, Setup, Programação, Criadores e Ferramentas digitais, evitando que a home pareça apenas uma vitrine de links de Shopee/Mercado Livre;
- ordenar itens por uma regra editorial explícita, com conteúdos/recomendações mais recentes aparecendo primeiro quando fizer sentido;
- preparar paginação, “carregar mais” ou outra forma de navegação quando o volume crescer;
- preservar curadoria e relevância: novidade não deve substituir contexto editorial nem transformar a Store em marketplace;
- manter as páginas de categoria como caminhos de exploração específicos, mesmo que a home passe a funcionar como feed misto.

Antes de implementar, definir o campo canônico de ordenação (por exemplo, `publishedAt`, `updatedAt` ou `catalogPublishedAt`) e a política para itens fixos/destaques editoriais.
