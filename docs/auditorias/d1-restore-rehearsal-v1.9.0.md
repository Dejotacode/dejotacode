# Ensaio de restauração D1 — v1.9.0

## Objetivo

Validar que um export real do D1 de produção pode ser restaurado e consultado em ambiente isolado, sem alterar produção.

## Data e origem

Ensaio executado em 2026-09-16 a partir do banco `dejotacode-production`.

O export foi gerado com Wrangler 4.132.0 usando `d1 export` remoto. A origem foi somente leitura; nenhuma migration ou mutação foi executada em produção.

## Evidência do backup

Arquivo local temporário:

`/tmp/dejotacode-production-20260916-102848.sql`

SHA-256:

`afeec579ea0ee6744ec9dad69723b826034439cbc6fc12ce1a157bafcdd42a1b`

O arquivo tinha aproximadamente 62 KiB.

## Primeiro controle

O SQL também foi carregado em um banco SQLite temporário independente. `PRAGMA integrity_check` retornou `ok`.
## Restauração isolada com Wrangler

Foi criado um `wrangler.jsonc` temporário fora dos repositórios, apontando para um D1 local isolado chamado `dejotacode-restore-rehearsal`.

O export foi importado com `wrangler d1 execute --local --file` usando `--persist-to` em `/tmp`, separado do estado local normal do projeto.

O Wrangler executou 190 comandos SQL com sucesso.

## Verificação de dados

As contagens restauradas coincidiram com as contagens consultadas em produção para:

- `categories`: 8;
- `daily_metrics`: 96;
- `leads`: 1;
- `media`: 22;
- `posts`: 21;
- `sessions`: 1;
- `users`: 1;
- `d1_migrations`: 5.

Nenhum conteúdo sensível foi copiado para esta documentação; somente contagens agregadas e metadados operacionais foram registrados.
## Resultado

PASS — o backup de produção foi exportado, validado e restaurado em um D1 local isolado com contagens compatíveis com a origem.

O ensaio não alterou D1 remoto, DNS, R2, Worker, secrets ou dados de produção.

## Limites

Este ensaio valida exportação e restauração técnica do D1, mas não substitui um plano completo de desastre. Ainda permanecem pendentes política de retenção, armazenamento externo dos backups e estratégia de cópia do R2.

Os arquivos temporários de backup e do banco restaurado não devem ser versionados, porque podem conter dados operacionais reais.
