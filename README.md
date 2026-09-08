# DejotaCode

Plataforma educacional construída integralmente no ecossistema Cloudflare.

## Arquitetura

- `site/`: Astro em modo estático (SSG), publicado por Cloudflare Workers Static Assets.
- `api/`: Hono em Cloudflare Workers, com D1 para dados e R2 para mídias.
- `docs/`: instruções progressivas para desenvolvimento e produção.

O site público e a API são serviços independentes. O navegador nunca recebe credenciais do D1 ou R2.

## Primeiro uso

1. Instale Node.js 22 ou superior.
2. Na raiz, execute `npm install`.
3. Em um terminal, execute `npm run dev:api`.
4. Em outro terminal, execute `npm run dev:site`.
5. Abra `http://localhost:4321`.

Leia `docs/ETAPA-1-FUNDACAO.md` antes de configurar a conta Cloudflare.
