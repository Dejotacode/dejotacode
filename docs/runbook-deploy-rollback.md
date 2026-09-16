# Runbook de deploy e rollback

## Objetivo

Padronizar deploy, homologação e rollback do DejotaCode sem misturar CI, release e operações de produção.

## Pré-condições

Antes de qualquer deploy:

- working tree limpa;
- commit exato identificado;
- `npm ci`, `npm run check`, `npm run build:production` e `npm run qa` aprovados no frontend;
- CI do commit verde;
- endpoint de produção validado por `env:check:production`;
- confirmar se a mudança exige ou não alteração na API.

## Frontend — Cloudflare Pages

Na raiz do frontend:

```bash
npm run build:production
npx wrangler pages deploy dist \
  --project-name dejota-code \
  --branch main \
  --commit-hash <SHA_EXATO> \
  --commit-message "<mensagem da release>"
```

Registrar a URL `*.pages.dev` retornada pelo Wrangler.

## Homologação do frontend

Validar no deployment e no domínio oficial:

- homepage;
- `/trilhas/`;
- `/blog/`;
- `/newsletter/`;
- uma categoria;
- uma página de artigo;
- sitemap e RSS quando o escopo envolver SEO.

Conferir HTTP 200, title/canonical quando aplicável e ausência de regressão funcional óbvia.

## API — Cloudflare Workers

A API vive no repositório separado `dejotacode-api-consent-v1.1.0`.

Antes de deploy, executar pelo menos:

```bash
npm run typecheck
```

O script histórico `deploy:api:production` executa migrations remotas antes do Worker. Por segurança, não deve ser usado automaticamente sem revisão explícita das migrations pendentes.

Quando não houver migration necessária, prefira revisar e executar o comando de deploy do Worker diretamente com o ambiente `production` correto.

## Rollback do frontend

Rollback deve reutilizar um commit previamente homologado. O procedimento preferido é:

1. identificar o SHA estável anterior;
2. gerar o build desse SHA em working tree limpa ou worktree isolada;
3. executar `wrangler pages deploy` apontando `--branch main` e o SHA estável;
4. homologar novamente o domínio oficial.

Não reescreva `main` apenas para efetuar rollback operacional de Pages.

## Rollback da API

Antes de rollback do Worker, verificar compatibilidade com o schema D1 atual. Código antigo pode não ser compatível com migrations já aplicadas.

Não reverter migrations de produção de forma automática. Se o incidente envolver schema ou dados, interromper o rollout e tratar recuperação de D1 como operação separada.

## Evidência mínima

Registrar em issue/release:

- SHA implantado;
- URL do deployment;
- resultado de QA/CI;
- resultado da homologação;
- se houve ou não mudança em D1, Worker, DNS, R2 ou secrets.
