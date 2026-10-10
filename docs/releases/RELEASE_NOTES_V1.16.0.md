# DejotaCode v1.16.0 — Revisão Manual de Mídia

## Resumo

A v1.16.0 transforma o relatório de segurança da v1.15.0 em um fluxo operacional de revisão humana persistente, ainda sem permitir exclusão de arquivos.

## Revisão manual

- Filtro de segurança na biblioteca de mídia.
- Estados persistentes: `pending`, `keep` e `candidate`.
- Nota opcional por decisão.
- Ações `Manter`, `Marcar candidata` e `Reabrir revisão`.
- Atualização autenticada e protegida por CSRF via API.

## Evidência real

A única mídia classificada como `Requer revisão` foi identificada como:

- ID 2.
- `images/2026/09/1beb8aca-0144-40c1-8745-543f2cd2a524.png`.
- Alt: `Capa temporária do artigo Primeiros passos no DejotaCode`.

A revisão humana foi registrada como `candidate` com a nota: `Capa temporária sem referência no Markdown canônico, CMS ou código atual.`

Nenhum arquivo foi apagado ou alterado no R2.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas.
- QA de links: 1.896 referências internas, 0 quebradas.
- Smoke de produção: 10/10 verificações aprovadas.

## Compatibilidade

- Frontend base anterior: v1.15.0.
- API mínima para o fluxo de revisão: DejotaCode API v1.7.0.
- Git/Markdown permanece como fonte canônica do conteúdo editorial público.

## Segurança

A marcação `candidate` é apenas uma decisão de revisão. Ela não autoriza nem executa exclusão automática. Qualquer futura limpeza do R2 deve ter um gate separado e explícito.
