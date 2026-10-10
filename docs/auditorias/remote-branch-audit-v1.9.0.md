# Auditoria de branches remotas — v1.9.0

Data: 2026-09-16

## Objetivo

Classificar branches remotas antigas do repositório `Dejotacode/dejotacode` antes de qualquer limpeza.

Nenhuma branch foi removida nesta etapa.

## Critérios

Uma branch é tratada como candidata técnica à limpeza somente quando há evidência de que seu trabalho já foi integrado, substituído ou era deliberadamente temporário.

Foram usados:
- ancestralidade contra `official/main`;
- `git cherry` para equivalência de patch;
- histórico de Pull Requests;
- comparação com commits squash integrados;
- inspeção dos arquivos alterados em branches fechadas sem merge.

## Branches já ancestrais da main

Há branches antigas cujo HEAD já pertence diretamente ao histórico da `main`, incluindo frentes de v1.2, v1.3 e parte da v1.4. Elas não contêm trabalho exclusivo fora da linha principal atual.
## Branches integradas via PR/squash

As branches abaixo têm PRs merged correspondentes e divergências de `git cherry` explicadas pelo squash/rebase:
- `chore/release-v1.5.0` → PR #27 / `635b0f9`;
- `chore/release-v1.6.0` → PR #30 / `ac28415`;
- `chore/release-v1.7.0` → PR #33 / `27f1ecf`;
- `feat/analytics-growth-v1.5.0` → PR #23 / `8887f67`;
- `feat/growth-conversion-v1.5.0` → PR #22 / `822e638`;
- `feat/growth-seo-v1.7.0` → PR #32 / `8fe8ebe`;
- `feat/metrics-dashboard-v1.5.0-clean` → PR #26 / `6eb15b1`;
- `feat/metrics-dashboard-v1.6.0` → PR #29 / `4202408`;
- `ops/smoke-editorial-v1.9.0` → PR #42 / `5cebba3`.

As branches documentais recentes com `unique_commits=0` também têm seus patches já representados na `main`.

## Branches temporárias/fechadas

`ops/release-v1.3.0`, `ops/tag-v1.3.0` e `qa/visual-review-p1` terminam removendo os próprios workflows temporários; o diff final desde o merge-base é vazio.

`qa/visual-v1.4.0` contém somente um script e um workflow de QA visual temporário. O PR #20 foi fechado sem merge; não há código de produto nessa branch. Ela deve ser tratada como artefato histórico, não como funcionalidade pendente.
## Branch legada de consentimento/API

`fix/api-consent-v1.1.0` não possui PR correspondente no frontend moderno e carrega estrutura antiga combinando `api/` e `site/`.

A funcionalidade relevante foi preservada na API canônica:
- o histórico da API contém `fix(api): exige consentimento explícito em inscrições`;
- `src/routes/leads.ts` exige `consent: true` e mantém validação explícita;
- o histórico também preserva a ampliação do analytics da v1.5.0;
- os eventos de funil correspondentes existem na API atual.

Por segurança histórica, esta branch continua marcada como legado reconciliado; não foi removida.

## Conclusão operacional

Não foi identificado trabalho de produto exclusivo que precise ser resgatado das branches remotas revisadas.

A limpeza futura pode ser feita em lote controlado, mas somente após uma autorização específica de exclusão. Os stashes locais permanecem fora deste escopo e continuam preservados.

## Guardrails mantidos

- nenhuma branch local ou remota removida;
- nenhum stash aplicado ou descartado;
- nenhuma mudança em runtime, conteúdo público, funil, D1, Worker, DNS, R2, secrets ou deploy;
- baseline D+7/D+14 preservado.
