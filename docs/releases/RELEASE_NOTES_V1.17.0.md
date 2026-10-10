# DejotaCode v1.17.0 — Gate de Limpeza de Mídia

## Resumo
A v1.17.0 adiciona uma segunda barreira operacional antes de qualquer futura limpeza de mídia no R2.

## Entregas
- Gate final separado da revisão inicial.
- Aprovação explícita apenas para mídias já marcadas como `candidate`.
- Estado persistente `cleanup_status` com nota, responsável e data.
- Ação reversível `Reabrir gate`.
- Geração de plano de remoção somente informativo.
- Nenhuma chamada DELETE adicionada ao Admin.

## Evidência real
A mídia ID 2 (`images/2026/09/1beb8aca-0144-40c1-8745-543f2cd2a524.png`) foi aprovada no segundo gate após duas revisões humanas. O objeto continua acessível no R2 via HTTP 200.

## Segurança
`approved` significa apenas “apta a constar em um plano de remoção”. Não executa exclusão e não autoriza remoção automática.

## Qualidade
- Astro check: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas.
- QA de links: 1.896 referências internas, 0 quebradas.
- Smoke: 10/10 PASS.
