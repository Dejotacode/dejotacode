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
