# DejotaCode v1.7.0 — SEO Editorial e Crescimento

A v1.7.0 fortalece a base de crescimento do DejotaCode com melhorias de SEO técnico, arquitetura editorial e linking interno, preservando a privacidade e a mensuração first-party já existente.

## Destaques

- Baseline técnico de crescimento documentado.
- Inventário de indexação e sitemap revisado.
- Mapa editorial das quatro trilhas e dos 17 conteúdos publicado.
- Página `/trilhas/` com `CollectionPage` + `ItemList` em JSON-LD.
- Categorias com `BreadcrumbList` em JSON-LD.
- Titles e descriptions refinados para páginas de maior intenção.
- Sitemap alinhado com páginas `noindex`.
- Linking editorial reforçado entre conteúdo, trilha e portfólio.

## SEO e indexação

- `/trilhas/` passou a usar metadata mais específica para Linux, programação, inteligência artificial e segurança digital.
- Categorias receberam titles orientados à intenção de aprendizado para iniciantes.
- `/busca/`, o Guia do Iniciante pós-conversão e toda a árvore `/admin/` permanecem fora do sitemap.
- O Guia do Iniciante continua com `noindex, follow`.
- A busca continua com `noindex, follow`.
- A área administrativa continua com `noindex, nofollow`.

## Arquitetura editorial

A base publicada possui 17 conteúdos editoriais:

- 15 fazem parte diretamente das quatro trilhas;
- 2 permanecem fora delas com função complementar.

As trilhas atuais são:

1. Linux do zero;
2. Primeiros passos na programação;
3. IA no dia a dia;
4. Segurança digital essencial.

O artigo “Como escolher seu primeiro projeto de portfólio” recebeu novos links contextuais para a trilha de programação e para o case DejotaCode no portfólio.

## Conversão e analytics

Nenhum CTA principal foi alterado nesta versão.

A taxonomia existente de analytics foi preservada:

- `page_view`
- `cta_click`
- `form_start`
- `lead_submit`
- `guide_access`
- `trail_start`
- `trail_lesson_click`
- `trail_complete`

Os testes de conversão ficam preparados para uma comparação futura com baseline de 7/14 dias.

## Qualidade

- Astro check: 0 erros, 0 warnings e 0 hints.
- Build de produção: 40 páginas estáticas.
- QA de links: 1.631 referências internas verificadas.
- Links internos quebrados: 0.
- QA estrutural: 40 HTML analisados.
- Páginas com problemas: 0.
- CI do PR e CI pós-merge concluídos com sucesso.

## Produção

Deploy homologado no Cloudflare Pages e no domínio oficial:

`https://dejotacode.com.br`

Commit integrado:

`8fe8ebea5b8f2f2ff55565029842aa62256b80a4`

Nenhuma migration D1, alteração de Worker, DNS ou secrets de produção foi necessária para esta versão.
