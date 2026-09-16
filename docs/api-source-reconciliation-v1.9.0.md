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

## Direção recomendada

Adotar um repositório dedicado para a API em vez de recolocar o backend dentro do frontend moderno.

Motivos:

- a arquitetura atual já trata frontend e API como componentes independentes;
- deploy e risco operacional são diferentes;
- o frontend pode continuar SSG sem carregar dependências do backend;
- CI, releases e rollback da API passam a ter rastreabilidade própria;
- evita ressuscitar o monorepo legado apenas por conveniência histórica.

## Guardrails da migração

Antes de criar ou mover a fonte canônica da API:

- preservar a branch `fix/api-consent-v1.1.0` e seus commits;
- não executar deploy, migration, DNS ou alteração de secret;
- manter `wrangler.jsonc`, migrations e código do Worker juntos;
- adicionar CI/typecheck no repositório destino;
- registrar o primeiro commit/tag canônico da API;
- atualizar os runbooks do frontend para apontar para a nova origem.

A criação do repositório e a migração da fonte devem ser uma operação explícita e auditável.
