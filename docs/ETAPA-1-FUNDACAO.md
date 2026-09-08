# Etapa 1 — Fundação

## O que já existe

- Monorepo npm com projetos independentes `site` e `api`.
- Astro com saída estática e página inicial-base responsiva.
- Hono Worker com health check e respostas JSON padronizadas.
- Primeiro schema D1 para categorias, posts, usuários, sessões, leads, contatos, eventos e mídias.
- Bindings `DB` (D1) e `MEDIA` (R2), separados para preview e produção.
- CORS restrito por `SITE_ORIGIN` e cabeçalhos básicos de segurança.

## Ambientes

- Local: recursos simulados pelo Wrangler, sem tocar na produção.
- Preview: Worker e recursos com sufixo `-preview`.
- Produção: recursos oficiais, configurados antes do primeiro deploy.

Os IDs do D1 devem ser preenchidos depois que os bancos forem criados. Segredos nunca entram no Git.

## Comandos úteis

- `npm run dev:site`: abre o site local.
- `npm run dev:api`: abre a API local.
- `npm run typecheck`: verifica TypeScript dos dois projetos.
- `npm run build`: gera o site estático e valida a API.

## Exemplo dos bindings

- `GET /api/health` verifica o Worker.
- `GET /api/health/storage` executa uma consulta preparada no D1 e uma listagem mínima no R2.

Essas rotas permitem confirmar a ligação dos recursos sem expor credenciais ou conteúdo privado.

## Decisão moderna adotada

O Astro continua 100% SSG, mas seu diretório `dist` será publicado por Workers Static Assets. A API permanece em um segundo Worker, preservando isolamento, segurança e deploy independente.
