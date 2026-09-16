# Inventário de higiene Git — v1.9.0

## Objetivo

Registrar o que existe antes de qualquer exclusão de branches ou stashes.

## Estado auditado

Em 2026-09-16, o frontend mantinha várias branches de feature, QA, release e documentação criadas durante as versões v1.2.0 a v1.9.0. Muitas foram integradas por squash ou por fluxos intermediários, portanto o simples resultado de `git branch --merged` não é evidência suficiente para apagá-las.

Também existem dois stashes locais preservados:

- `backup-local-release-v1.7.0-pos-merge`;
- `backup-local-antes-sync-v1.5.0`.

Nenhum deles deve ser descartado antes de revisar o diff e confirmar que não contém trabalho único.

## Política de limpeza

Uma branch só pode ser removida quando houver evidência de que seu conteúdo relevante está representado em `main`, em uma tag/release, ou em outro commit preservado. Branches de release antigas podem ser mantidas até o fechamento da v1.9.0 sem custo operacional relevante.

Stashes devem ser inspecionados com `git stash show --stat` e `git stash show -p` antes de qualquer `drop`. Se houver dúvida, preservar.

## API

O repositório canônico `Dejotacode/dejotacode-api` iniciou sua vida operacional com apenas `main`, reduzindo dívida de branches no backend.

## Decisão atual

A v1.9.0 não fará limpeza destrutiva automática. Primeiro documenta e classifica; exclusões podem ser executadas depois, em bloco próprio, com evidência de redundância.
