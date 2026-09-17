# DejotaCode v1.19.0 — Zona de Risco de Mídia

## Destaques

- Move dry-run e exclusão definitiva para uma Zona de risco separada da biblioteca editorial.
- Mantém os cards focados em inserção, cópia e revisão de mídia.
- Exibe candidata aprovada, estado das revisões e checks de segurança em uma área dedicada.
- Mantém `Excluir definitivamente` oculto até existir dry-run válido em memória.
- Corrige o layout responsivo da toolbar de filtros para evitar sobreposição de rótulos.

## Segurança

- Nenhuma mudança no contrato da API ou nas regras de exclusão da v1.9.0.
- Nenhuma exclusão automática ou em lote.
- Ação final continua exigindo dry-run válido, objectKey exato, confirmação literal e revalidação no servidor.

## Validação

- Astro check: 0 erros / 0 warnings / 0 hints.
- Build production: 46 páginas.
- QA de links: 1.896 referências / 0 quebradas.
- HTML QA: PASS.
- Smoke de produção: 10/10 PASS.
- Validação visual da Zona de risco em produção.
