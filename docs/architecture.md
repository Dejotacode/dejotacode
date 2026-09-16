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
- autenticação e sessão do Admin;
- integração editorial com GitHub para branch, Pull Request, leitura de CI e merge protegido;
- mídia editorial em R2, com metadados operacionais no D1;
- rate limiting e controles de segurança de borda.

O frontend conhece a API apenas pela variável pública `PUBLIC_API_URL`. Tokens e credenciais de GitHub/Cloudflare permanecem no backend ou no GitHub Actions e nunca são expostos ao frontend.

## Fonte editorial e Admin

O conteúdo público continua canônico em `src/content/posts/*.md`. O Admin Editorial não publica posts diretamente a partir do D1: ele prepara Markdown, cria uma branch `content/admin-*`, abre Pull Request e depende do CI antes do merge.

Imagens editoriais enviadas pelo Admin ficam no R2 em caminhos organizados por post. O Markdown versionado referencia a URL pública da mídia; o D1 guarda metadados, não substitui o Git como fonte editorial.

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

O frontend usa `src/scripts/analytics.ts` como emissor central das métricas agregadas enviadas para a API.

Eventos enviados pelo frontend:

- `page_view` — visualização de uma rota pública;
- `cta_click` — clique em elementos instrumentados com `data-analytics-cta`;
- `form_start` — primeira interação relevante com um formulário de lead, limitada a uma ocorrência por carregamento da página;
- `lead_submit` — inscrição de lead concluída com sucesso pela API;
- `guide_access` — acesso ao download do Guia do Iniciante;
- `trail_start` — primeiro engajamento com uma trilha durante a sessão atual;
- `trail_lesson_click` — acesso a uma etapa a partir da página da trilha;
- `trail_complete` — transição da trilha para 100% concluída durante a sessão atual.

A API também registra `contact_submit` diretamente no fluxo de contato, sem depender de um segundo evento emitido pelo frontend.

O payload de analytics é mínimo e contém:

- `event`;
- `path`;
- `campaign`, quando houver contexto de origem, recurso, CTA ou trilha.

O fluxo de analytics não envia nome, e-mail, conteúdo de formulário, estado detalhado da trilha ou identificador de visitante.

O progresso das trilhas continua armazenado apenas em `localStorage` no navegador. Marcadores usados exclusivamente para evitar duplicidade de `trail_start` e `trail_complete` usam `sessionStorage` e expiram com a sessão do navegador.

O projeto não usa cookies de analytics, fingerprinting ou parâmetros de query para identificar visitantes.

## SEO

O projeto usa `@astrojs/sitemap` e define o domínio canônico na configuração do Astro.

Rotas que não devem aparecer no sitemap podem ser filtradas explicitamente em `astro.config.mjs`.

O feed RSS é exposto por `src/pages/rss.xml.js`.

## CI e deploy do frontend

O workflow em `.github/workflows/ci.yml` roda em Pull Requests e pushes para `main`.

O job `Check and build` executa checkout, Node 24, `npm ci`, `npm run check`, `npm run build:production` e `npm run qa`.

Em Pull Requests, o fluxo termina após a validação. Em push para `main`, um segundo job dependente do QA faz novo build/QA, publica `dist` no Cloudflare Pages e executa `npm run smoke:production`. O token Cloudflare usado nesse job é secret do GitHub e não é incorporado ao frontend.

## Separação entre deploy e release

O merge na `main` pode disparar deploy automático do frontend, mas não cria tag nem GitHub Release. Release continua sendo uma decisão separada e deliberada.

O workflow do frontend não altera D1, não executa migrations e não modifica secrets ou DNS. A API possui repositório e ciclo de release independentes.

Essa separação mantém as validações automáticas com menor privilégio e reduz o impacto de uma falha no pipeline de qualidade.
