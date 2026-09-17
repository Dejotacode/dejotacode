# DejotaCode — Ponto de pausa v1.21.0 / API v1.11.0

Registrado em 17/09/2026 para permitir uma pausa segura no fluxo de exclusão de mídia.

## Estado homologado

- Frontend: `v1.21.0`
- Frontend main: `6c1dc0ecc7b1e3b91bb83f28ed8013027ca0a97e`
- API: `v1.11.0`
- API main/tag: `7826cb623b6558cf2716f3404d1be8d3be3a9d29`
- Worker de produção: `e0199de7-76df-4f7d-9cbf-8b549c029ebf`
- Produção: `https://dejotacode.com.br`
- API: `https://api.dejotacode.com.br`

## Snapshot de pré-exclusão

O fluxo homologado exige revisão humana, gate final, dry-run válido e snapshot append-only antes de qualquer DELETE. O snapshot registra evidências, request ID, ator e SHA-256.

**Nenhum DELETE real de mídia foi executado até este ponto.**

## Banco e mídia

- migration `0009_media_delete_snapshots.sql` aplicada em produção;
- tabela e triggers append-only validados;
- backup D1 realizado antes da migration;
- inventário R2: 23/23 objetos alcançáveis no momento da homologação.

## Atenção ao retomar

O ambiente `preview` da API estava atrasado nas migrations `0006` a `0009`. Não assumir que preview e produção possuem o mesmo schema sem nova auditoria.

Ao retomar, confirmar primeiro branch/HEAD, migrations pendentes, versão do Worker e estado do D1/R2 antes de qualquer teste destrutivo.
