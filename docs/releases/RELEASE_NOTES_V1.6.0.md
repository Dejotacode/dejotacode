# DejotaCode v1.6.0 — Painel de Métricas

A v1.6.0 integra ao frontend atual do DejotaCode uma área administrativa autenticada para acompanhamento das métricas agregadas do projeto.

## Destaques

- Nova área administrativa em `/admin/`.
- Dashboard autenticado em `/admin/metricas/`.
- Totais dos eventos agregados de analytics.
- Indicadores do funil de crescimento e conversão.
- Ranking de páginas mais lidas.
- Visão agregada de campanhas.
- Interface responsiva com temas claro e escuro.
- Layout administrativo separado do site público.

## Segurança e privacidade

A versão não altera a taxonomia de analytics nem adiciona rastreamento individual.

A área administrativa usa a sessão autenticada da API existente, proteção CSRF nos endpoints mutáveis, `noindex, nofollow` e não dispara o `page_view` do site público.

Nenhuma alteração de DNS, secrets, schema do D1 ou migration foi necessária.

## Homologação

Validado localmente com frontend em `http://localhost:4321`, API em `http://localhost:8787` e D1 local, incluindo criação do administrador, login, sessão, carregamento das métricas, logout, bloqueio sem sessão, temas claro/escuro, mobile 375 px e tablet 768 px.

## Qualidade

- PR principal: #29.
- Head homologado: `a2b15c46453c839b37fc892f3e13bd5b9215a73e`.
- Commit na `main`: `4202408ff0c06a6e4e24649459db9b15c9d44419`.
- CI #60: aprovado.
- CI pós-merge #61: aprovado.
- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build estático: 40 páginas.

## Escopo

O CMS editorial, editor de conteúdo, biblioteca de mídia e gerenciamento de convites permanecem fora do escopo da v1.6.0.

## Estado do rollout

A integração está homologada localmente e integrada à `main`. O rollout no domínio oficial permanece como etapa operacional posterior.
