# Etapa 3 — Blog e experiência editorial

## Rotas públicas

- `/blog`: listagem, busca instantânea, filtros, populares e paginação visual.
- `/blog/[slug]`: artigo com breadcrumbs, índice, autor, CTA e relacionados.
- `/tutorial/[slug]`: guia passo a passo com blocos de código copiáveis.
- `/categoria/[slug]`: coleção de conteúdos por tema.

## Fonte de conteúdo

No desenvolvimento, `CONTENT_SOURCE=fixture` permite construir o site sem conta Cloudflare. Os dados são claramente demonstrativos. Em preview e produção, defina `CONTENT_SOURCE=api` e `CONTENT_API_URL`; o build falha se a API não estiver disponível, impedindo publicação com conteúdo antigo ou demonstrativo por engano.

## API

- `GET /api/posts` aceita `q`, `category`, `type`, `page` e `limit`.
- `GET /api/posts/:slug` entrega o conteúdo individual.
- `GET /api/categories` lista categorias e contagens.
- `GET /api/categories/:slug` entrega a categoria individual.

Todas as consultas usam prepared statements para valores fornecidos pelo visitante. Os trechos SQL dinâmicos são montados apenas a partir de opções validadas no servidor.
