# Arquitetura do DejotaCode

## Objetivo

Este documento descreve a arquitetura atual do frontend DejotaCode e os limites de responsabilidade entre o site público e a API.

## Frontend

O frontend é um projeto Astro com saída estática (`output: "static"`). A URL canônica configurada é:

```text
https://dejotacode.com.br
```

Responsabilidades principais do frontend:

- renderização das páginas públicas;
- blog, categorias e trilhas;
- páginas institucionais;
- recursos, portfólio e newsletter;
- SEO técnico, sitemap e RSS;
- envio de formulários para a API;
- envio de métricas first-party agregadas para a API.

## API

A API é mantida separadamente do frontend e roda em Cloudflare Workers.

Responsabilidades principais da API:

- recebimento e validação de leads;
- recebimento de mensagens de contato;
- persistência em D1;
- métricas agregadas;
- rate limiting e controles de segurança de borda;
- integração com recursos de mídia quando necessário.

O frontend conhece a API apenas pela variável pública `PUBLIC_API_URL`.

## Ambientes

### Desenvolvimento

O desenvolvimento local pode usar:

```env
PUBLIC_API_URL=http://localhost:8787
```

Esse valor deve ficar em `.env.development.local`, que não deve ser versionado.

### Preview

O build de preview usa `.env.preview` e é validado por `scripts/validate-build-env.mjs`.

### Produção

O build de produção usa `.env.production` e também passa pela validação de ambiente antes do Astro gerar os arquivos estáticos.

## Validação de ambiente

`scripts/validate-build-env.mjs` garante que os builds de preview e produção:

- tenham `PUBLIC_API_URL` definida;
- usem uma URL válida;
- usem HTTPS;
- não apontem para `localhost` ou `127.0.0.1`;
- correspondam exatamente ao endpoint esperado para o modo selecionado.

Isso reduz o risco de publicar um frontend apontando acidentalmente para a API errada.

## Analytics first-party

O frontend usa `src/scripts/analytics.ts` para enviar métricas agregadas à API.

Eventos enviados pelo frontend:

- `page_view` — uma medição de visualização de rota;
- `cta_click` — clique em elementos instrumentados com `data-analytics-cta`.

O payload inclui caminho da rota e, quando aplicável, identificador de campanha do CTA.

O fluxo do frontend não usa cookies, fingerprinting ou parâmetros de query para identificar visitantes.

## SEO

O projeto usa `@astrojs/sitemap` e define o domínio canônico na configuração do Astro.

Rotas que não devem aparecer no sitemap podem ser filtradas explicitamente em `astro.config.mjs`.

O feed RSS é exposto por `src/pages/rss.xml.js`.

## CI

O workflow em `.github/workflows/ci.yml` valida mudanças antes da integração e depois de pushes em `main`.

Etapas:

1. checkout;
2. Node 24;
3. `npm ci`;
4. `npm run check`;
5. `npm run build:production`.

O workflow usa `permissions: contents: read` e não executa deploy.

## Separação entre CI e release

CI e release são fluxos diferentes.

O CI prova que o código instala, valida e gera o build de produção. Ele não:

- publica no Cloudflare Pages;
- cria tags;
- cria releases;
- altera D1;
- executa migrations;
- altera secrets.

Essa separação mantém as validações automáticas com menor privilégio e reduz o impacto de uma falha no pipeline de qualidade.
