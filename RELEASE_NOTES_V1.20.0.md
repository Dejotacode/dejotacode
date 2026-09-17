# DejotaCode v1.20.0 — Histórico e Auditoria de Mídia

## Destaques

- adiciona Histórico de auditoria dentro da Zona de risco;
- carrega o histórico somente sob demanda para a mídia selecionada;
- exibe marcos de upload, revisão humana, gate final e último dry-run;
- exibe responsável e data/hora de cada marco disponível;
- exibe trilha técnica das mutações registradas, incluindo método, rota e request ID;
- mantém tokens e hashes de dry-run fora da interface;
- preserva a Zona de risco e todas as barreiras de exclusão da v1.19.0.

## Segurança

- nenhuma exclusão automática ou em lote;
- nenhuma mudança no fluxo de confirmação destrutiva;
- histórico é somente leitura;
- nenhum token, hash ou secret é retornado para a timeline;
- nenhuma migration nesta versão do frontend.

## Validação

- Astro check: 0 erros / 0 warnings / 0 hints;
- build production: 46 páginas;
- QA de links: 1.896 referências / 0 quebradas;
- HTML QA: PASS;
- smoke de produção: 10/10 PASS;
- timeline validada visualmente em produção com 4 marcos e 3 eventos técnicos para a mídia ID 2.
