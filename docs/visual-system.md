# DejotaCode — Sistema visual reutilizável

## Objetivo
Centralizar o uso de imagens e mídia para evitar páginas visualmente vazias e impedir que cada área crie um padrão próprio.

## Responsabilidades
- `@dev`: define proporção, componente, contexto de uso, acessibilidade e performance.
- `@studio`: produz ou substitui capas, thumbnails, banners, mockups e ilustrações editoriais.
- Imagens devem ser consumidas pelos componentes; páginas não devem inventar tratamentos isolados.

## Estrutura
- `src/components/visual/VisualMedia.astro`: moldura única para imagem e fallback.
- `src/components/resources/ResourceCard.astro`: card editorial da página Recursos.
- `public/assets/resources/`: ilustrações leves reutilizáveis por categoria.
- `public/assets/brand/`: identidade oficial.
- `public/assets/og/`: artes editoriais existentes que podem ser reaproveitadas quando fizer sentido.

## Regras
1. Preferir 16:9 em hero e cards editoriais.
2. Usar imagem real do conteúdo quando existir; caso contrário, usar ilustração de categoria.
3. Não inserir texto importante dentro da imagem; o HTML continua sendo a fonte principal.
4. Imagem decorativa usa `alt=""`; imagem informativa recebe texto alternativo objetivo.
5. Todo card deve continuar funcional sem a imagem.
6. Recursos é editorial/utilitário; Store é comercial/editorial. Eles compartilham linguagem visual, não finalidade.

## Fluxo para novas imagens
`@dev` define necessidade → `@studio` gera/entrega asset → asset entra em `public/assets/<area>/` → componente recebe `src` e `alt` → build e revisão visual.

## Contrato visual oficial — v1.1
1. Prioridade de fonte: imagem real/autorizada do conteúdo ou produto → arte editorial específica → fallback específico → fallback da categoria.
2. Produto físico: imagem real/autorizada tem prioridade. Mockup fotorealista é arte editorial e não deve afirmar detalhes físicos não verificados.
3. Raster padrão para cards: WebP 720×405 (16:9), otimizado e validado por decodificação antes de entrar no repositório.
4. Todo raster novo deve passar por `ffmpeg -v error -i <arquivo> -f null -`; HTTP 200 sozinho não valida a imagem.
5. Carregamento: `eager` apenas na primeira linha imediatamente visível; demais cards usam `lazy`.
6. Todo card deve ter fallback válido e dimensões intrínsecas para evitar layout shift e área vazia.
7. Antes de escalar um lote visual: build, check, QA, revisão desktop, revisão mobile e teste de navegação/scroll real.
8. Recursos e Store compartilham linguagem visual, mas não significado: Recursos é editorial/utilitário; Store é comercial/editorial.
