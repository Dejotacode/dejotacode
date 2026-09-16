# DejotaCode v1.5.0 — Crescimento e Conversão

A v1.5.0 adiciona a base de mensuração do funil de crescimento do DejotaCode, preservando o modelo de privacidade do projeto e mantendo o progresso detalhado das trilhas no navegador.

## Destaques

- Analytics first-party ampliado para nove eventos agregados.
- Novos eventos: `form_start`, `guide_access`, `trail_start`, `trail_lesson_click` e `trail_complete`.
- `form_start` restrito ao funil de leads.
- Acesso ao Guia do Iniciante instrumentado.
- Início, avanço e conclusão das trilhas medidos de forma agregada.
- Deduplicação de eventos de trilha com `sessionStorage`, sem identificador persistente de analytics.
- API preparada para receber toda a taxonomia v1.5.0 e resumir métricas por campanha.
- Arquitetura e texto de privacidade atualizados para refletir o modelo de coleta.

## Privacidade

A instrumentação trabalha com eventos agregados e payload mínimo (`event`, `path` e `campaign`). O fluxo não adiciona cookies de analytics, identificadores de visitante, e-mail, fingerprinting ou armazenamento remoto do progresso detalhado das trilhas.

## Homologação

### Frontend

- CI do PR aprovado.
- CI pós-merge #55 aprovado.
- Build de produção com 38 páginas estáticas.
- 1583 referências internas verificadas e 0 destinos quebrados.
- 38 documentos HTML e 88 controles de formulário validados, sem problemas detectados pelo QA estrutural.
- Deploy concluído no Cloudflare Pages.
- Instrumentação v1.5.0 confirmada no deployment e no domínio oficial `dejotacode.com.br`.

### API e D1

- `/api/health` retornando HTTP 200 em produção.
- Os cinco novos eventos retornando HTTP 201.
- Evento inválido retornando HTTP 400 `VALIDATION_ERROR`.
- Persistência confirmada em `daily_metrics` no D1 production.
- Dados sintéticos de homologação removidos após o teste (`remaining = 0`).
- Nenhuma migration executada.

## Segurança operacional

A entrega não exigiu alteração de DNS, secrets ou schema do banco de dados.

## Referências

- Frontend integrado à `main`: `822e638af4210cc9e40de42332cd35cad01c7742`.
- Deployment homologado: `https://853222b4.dejota-code.pages.dev`.
- PR principal da instrumentação: #22.
