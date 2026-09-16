# DejotaCode v1.7.1

Data: 2026-09-16

## Objetivo

Consolidar uma entrega de produção pronta para revisão visual e editorial, preservando a arquitetura estável da v1.7.0 e iniciando a publicação contínua de conteúdo.

## Conteúdo publicado

- Novo tutorial: **Como organizar seu ambiente de estudos em tecnologia**.
- Categoria: Tecnologia prática.
- URL: `/blog/organizar-ambiente-estudos-tecnologia/`.
- Conteúdo indexável, com title, description, canonical, H1, sitemap e RSS validados.

O site passa a ter 18 conteúdos editoriais publicados no frontend atual.
## Estado de produção

- Frontend: Cloudflare Pages.
- API: Cloudflare Workers.
- Banco: Cloudflare D1.
- Mídia: Cloudflare R2.
- Domínio oficial: `https://dejotacode.com.br`.
- API oficial: `https://api.dejotacode.com.br`.

A homologação percorreu as 40 rotas HTML públicas/administrativas geradas atualmente no domínio oficial. Todas responderam HTTP 200 e apresentaram `title` e `h1`.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 41 páginas estáticas, incluindo `404.html`.
- QA de links: 1.682 referências internas verificadas, 0 destinos quebrados.
- QA de HTML: 41 HTML analisados, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- API health: HTTP 200 com status `healthy`.

## Deploy homologado

Deploy do conteúdo realizado no Cloudflare Pages:

`https://833645e4.dejota-code.pages.dev`

O domínio oficial foi validado após o deploy, incluindo homepage, blog, categorias, trilhas, páginas institucionais, Admin, novo conteúdo, sitemap e RSS.

## Escopo preservado

Esta entrega não altera:

- comportamento de CTA ou formulários;
- taxonomia/eventos de analytics;
- schema ou dados do D1;
- Worker da API;
- DNS;
- buckets R2;
- secrets de produção.

As evoluções de CRO orientadas pelos checkpoints D+7/D+14 e o Admin Editorial avançado continuam como roadmap posterior à entrega operacional atual.