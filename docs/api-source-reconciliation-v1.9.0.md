# Reconciliação da fonte da API — v1.9.0

## Objetivo

Registrar o estado real do backend e definir uma direção segura para sua fonte canônica antes da v2.0.0.

## Evidência encontrada

O clone local da API usa a branch `fix/api-consent-v1.1.0`, HEAD `6eb15b184adef703a5af8798c05a410122e289a1`.

Essa linha contém quatro commits posteriores ao antigo `main` v1.0.0, cobrindo consentimento, preview, analytics de funil e dashboard de crescimento.

O `main` moderno do repositório `Dejotacode/dejotacode` não contém mais a árvore `api/`.

## Divergência

As linhas compartilham o commit `24759cb1e1c2b5a58081b2517ffaffa1d78ad1d7` como base, mas evoluíram separadamente.

A comparação entre a API atual e o `main` moderno mostra remoção da árvore antiga do monorepo e reconstrução do frontend como projeto independente.

Por isso, tentar fundir a branch da API diretamente na `main` moderna teria alto risco de reintroduzir estrutura legada e conflitos de arquitetura.

## Produção observada

O Worker de produção tem deployment mais recente em `2026-09-16T01:50:11.220Z`, versão Cloudflare `693c8628-c3de-4831-94df-54dc4064e080`.

Esse deployment ocorreu poucos minutos depois dos commits `8887f67` e `6eb15b1`. Isso é evidência temporal forte de que a linha atual da API foi usada no rollout, mas o metadata do Worker não registra SHA Git; portanto não deve ser tratado como prova criptográfica do commit exato.

Os bindings de produção observados incluem D1, R2, rate limiters, `ENVIRONMENT=production`, `SITE_ORIGIN=https://dejotacode.com.br` e o secret de bootstrap do CMS.

## Fonte canônica criada

A API passou a ter repositório público dedicado em `https://github.com/Dejotacode/dejotacode-api`. O histórico da antiga árvore `api/` foi preservado por `git subtree split`, sem reintroduzir o monorepo legado na `main` moderna.

O primeiro commit de consolidação no repositório canônico é `ae3011c3866ec857937792d82508e72a708339a5`, com versão de pacote `1.5.0`, lockfile próprio, README, `.gitignore` e CI de typecheck. O CI inicial passou com sucesso.

## Decisão arquitetural

Manter um repositório dedicado para a API em vez de recolocar o backend dentro do frontend moderno.

Motivos:

- a arquitetura atual já trata frontend e API como componentes independentes;
- deploy e risco operacional são diferentes;
- o frontend pode continuar SSG sem carregar dependências do backend;
- CI, releases e rollback da API passam a ter rastreabilidade própria;
- evita ressuscitar o monorepo legado apenas por conveniência histórica.

## Guardrails preservados

Durante a criação da fonte canônica:

- a branch histórica `fix/api-consent-v1.1.0` foi preservada;
- nenhum deploy, migration, DNS ou secret foi alterado;
- `wrangler.jsonc`, migrations e código do Worker permanecem juntos;
- CI/typecheck foi criado e validado no repositório destino;
- o primeiro commit canônico foi registrado;
- os runbooks do frontend passaram a apontar para a nova origem.

O deployment de produção observado continua sendo a versão Cloudflare `693c8628-c3de-4831-94df-54dc4064e080`. Como o metadata do Worker não armazena SHA Git, a relação com o commit histórico continua documentada como evidência temporal, sem afirmar prova criptográfica inexistente.

## Atualização pós-v1.10.0 / API v1.6.0

A reconciliação foi concluída: `Dejotacode/dejotacode-api` é o repositório canônico e possui versionamento independente. A API v1.6.0 foi publicada a partir do commit `596f94131b24d50b30786f310eac842cc5dc2d2d`, com Worker Version ID `7846621e-8aa8-426d-96c9-3872f2d652e9`.

O endpoint `/api/health` foi validado em produção com HTTP 200 e não havia migrations D1 pendentes no rollout. A API atual sustenta autenticação Admin, analytics, mídia R2 e publicação editorial assistida via GitHub.
