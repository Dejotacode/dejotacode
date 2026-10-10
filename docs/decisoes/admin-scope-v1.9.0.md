# Escopo do Admin — v1.9.0

## Objetivo

Registrar a decisão de produto sobre o painel administrativo moderno do DejotaCode antes de qualquer expansão para CMS.

## Estado atual

O frontend moderno expõe apenas duas rotas administrativas:

- `/admin/` — autenticação e estado de sessão;
- `/admin/metricas/` — dashboard de métricas agregadas.

O conteúdo público atual não é carregado da API. Os 17 conteúdos editoriais são versionados em `src/content/posts/*.md` e gerados pelo Astro no build estático.

Isso torna o Git a fonte de verdade editorial da versão moderna.

## Capacidade legada existente

O repositório legado/API já possui backend para:

- autenticação, sessão, convites e papéis `admin`/`editor`;
- CRUD de posts com estados `draft`, `review`, `published` e `archived`;
- biblioteca de mídia em R2 com metadados no D1;
- upload e exclusão protegida de mídia;
- auditoria de mutações administrativas.

O frontend legado também possuía telas para conteúdo, editor, convites, registro e biblioteca de mídias.

Essas capacidades não estão integradas ao fluxo editorial moderno.

## Risco de integrar o CMS agora

Ativar o CMS legado no frontend moderno criaria duas fontes de verdade para conteúdo:

1. Markdown versionado em Git, usado pelo Astro no build;
2. posts persistidos no D1, usados pelas rotas antigas da API.

Sem uma migração arquitetural explícita, publicar pelo CMS não garante que o conteúdo apareça no site estático moderno. O inverso também é verdadeiro: editar Markdown não atualiza o D1.

Isso aumenta risco operacional, duplicação editorial e inconsistência de SEO, URLs e releases.

## Decisão para a v1.9.0

Manter o admin moderno focado em:

- autenticação;
- sessão segura;
- métricas agregadas;
- futuras ferramentas operacionais que não criem uma segunda fonte editorial.

O CMS completo e a biblioteca de mídia não entram automaticamente na v1.9.0.

Antes de reativá-los, deve existir uma decisão separada sobre a fonte de verdade editorial: Git/Markdown ou D1/CMS.

## Critério para reconsiderar CMS

Reavaliar CMS somente se houver necessidade operacional comprovada, como:

- frequência de publicação tornar Git/Markdown um gargalo;
- necessidade real de múltiplos editores não técnicos;
- necessidade de edição web com workflow editorial;
- necessidade de gestão de mídia sem acesso ao repositório.

Se isso ocorrer, a implementação deve começar por uma migração de arquitetura e não por copiar as telas legadas.

## Pendência relacionada

O repositório da API ainda carrega versionamento e estrutura histórica anteriores ao frontend moderno. Essa reconciliação deve ser tratada na v1.9.0 antes da definição de estabilidade da v2.0.0.

## Atualização pós-v1.10.0

A decisão da v1.9.0 foi preservada no ponto essencial: Git/Markdown continua sendo a fonte canônica. A v1.10.0 adicionou um Admin Editorial sem ativar D1 como segunda fonte de posts.

O Admin moderno agora inclui `/admin/editor/`, integração GitHub por PR/CI/merge protegido e upload de mídia no R2. O D1 permanece limitado a metadados/estado operacional. Portanto, a necessidade que motivava reconsiderar um CMS foi atendida por uma camada editorial sobre Git, sem migração para conteúdo público em D1.
