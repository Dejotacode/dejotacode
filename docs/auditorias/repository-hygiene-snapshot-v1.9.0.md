# Snapshot de higiene do repositório — v1.9.0

Data: 2026-09-16

## Objetivo

Registrar o estado atual de branches e stashes antes de qualquer limpeza, sem excluir referências automaticamente.

## Estado da main

- branch: `main`
- HEAD auditado: `3ede3d5fd06ccff278702d61d9d45a8abb044791`
- working tree limpo no início da auditoria

## Branches com patch já representado na main

`git cherry main <branch>` retornou apenas `-` para:

- `docs/a11y-visual-audit-v1.9.0`
- `docs/api-canonical-v1.9.0`
- `docs/d1-restore-rehearsal-v1.9.0`
- `docs/operations-v1.9.0`
- `docs/performance-audit-v1.9.0`
- `docs/production-audit-v1.9.0`
- `docs/security-session-audit-v1.9.0`
- `docs/supply-chain-audit-v1.9.0`
- `docs/v1.7-measurement-protocol`
- `docs/v1.9-readiness`
- `fix/admin-resilience-v1.9.0`
Essas branches são candidatas técnicas à limpeza futura, mas **não foram removidas**.

## Branches que exigem revisão antes de qualquer limpeza

`git cherry` ainda mostrou commits `+` em:

- `chore/release-v1.5.0`
- `docs/admin-scope-v1.9.0`
- `docs/api-reconciliation-v1.9.0`
- `feat/metrics-dashboard-v1.6.0`

O sinal `+` não prova que o conteúdo esteja ausente da `main`; squash merges e reescritas podem impedir equivalência por patch. Essas referências devem ser revisadas por diff/PR antes de qualquer exclusão.

## Branches antigas já ancestrais da main

`git branch --merged main` confirmou como ancestrais, entre outras:

- `chore/release-v1.6.0`
- `chore/release-v1.7.0`
- `feat/analytics-v1.3.0`
- `feat/ci-v1.3.0`
- `feat/conversion-seo-v1.2.0`
- `feat/growth-conversion-v1.5.0`

Nenhuma foi removida nesta auditoria.
## Stashes preservados

Continuam existentes:

- `stash@{0}` — `backup-local-release-v1.7.0-pos-merge`
  - `CHANGELOG.md`
  - `package-lock.json`
  - `package.json`
- `stash@{1}` — `backup-local-antes-sync-v1.5.0`
  - `src/scripts/analytics.ts`
  - `src/scripts/form-adapter.ts`

Nenhum stash foi aplicado, alterado ou removido.

## Política para limpeza futura

Antes de remover branch ou stash:

1. confirmar origem e PR relacionado;
2. revisar diferença contra `main` atual;
3. comprovar que não existe trabalho único útil;
4. registrar a decisão;
5. só então excluir de forma deliberada.

Este snapshot é operacional e não altera runtime, conteúdo público, infraestrutura ou baseline de métricas.

## Verificação das branches com commits não equivalentes por patch

Uma segunda revisão foi executada sobre as quatro branches locais que ainda apareciam com `+` em `git cherry`.

O objetivo foi distinguir trabalho realmente único de diferenças artificiais causadas por squash/rebase durante a integração.

Resultado:

- `chore/release-v1.5.0` — conteúdo idêntico ao commit integrado `635b0f9` nos arquivos de release;
- `docs/admin-scope-v1.9.0` — conteúdo idêntico ao commit integrado `043fb72` no escopo revisado;
- `docs/api-reconciliation-v1.9.0` — conteúdo idêntico ao commit integrado `4042d6a` no escopo revisado;
- `feat/metrics-dashboard-v1.6.0` — conteúdo idêntico ao commit integrado `4202408` nos arquivos do Admin/Métricas.

Em todos os quatro casos, `git diff` contra o commit histórico correspondente na `main` retornou vazio no conjunto de arquivos relevante.

Conclusão: nenhuma dessas quatro branches contém alteração única necessária à árvore atual; a divergência observada em `git cherry` decorre da forma como os commits foram integrados, não de funcionalidade perdida.

### Política de limpeza após esta verificação

Essas branches passam a ser candidatas técnicas à remoção futura, mas continuam preservadas por enquanto.

Antes de qualquer exclusão, a operação deve:

1. confirmar que a branch não recebeu commits novos após este snapshot;
2. confirmar o PR/commit de integração correspondente;
3. revisar branches remotas relacionadas;
4. manter os stashes fora da limpeza automática;
5. executar `git fetch --prune` apenas depois de uma decisão explícita sobre as refs remotas.

Nenhuma branch ou stash foi removido nesta revisão.
