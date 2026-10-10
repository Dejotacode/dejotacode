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

O caminho normal de produção é o workflow `.github/workflows/ci.yml`: após merge/push na `main`, o job de qualidade precisa passar e então `Deploy Cloudflare Pages` publica `dist` e executa o smoke de produção.

O deploy manual com Wrangler fica reservado para homologação controlada, incidente ou rollback. Nesses casos, valide primeiro o commit e o build e então use explicitamente o projeto/branch corretos:

```bash
npm run build:production
npm run qa
npx wrangler pages deploy dist \
  --project-name dejota-code \
  --branch main \
  --commit-hash <SHA_EXATO> \
  --commit-message "<mensagem operacional>"
```

Registrar a URL `*.pages.dev` retornada pelo Wrangler e executar `npm run smoke:production`.

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

A API vive no repositório público dedicado `Dejotacode/dejotacode-api`. Mantenha o clone da API em workspace separado do frontend para reduzir risco operacional.

Antes de deploy, executar pelo menos:

```bash
npm ci
npm run check
```

Antes de qualquer deploy da API, confirme migrations pendentes separadamente. Não acople migrations ao deploy do Worker sem revisão explícita.

Quando não houver migration necessária, execute o deploy do Worker diretamente a partir do repositório `Dejotacode/dejotacode-api` com o ambiente `production` correto e registre a Version ID retornada.

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
