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

## DejotaStore — Store Card Premium v1

O card comercial da DejotaStore usa a referência visual premium aprovada em 02/10/2026 sem transformar a Store em marketplace.

Estrutura do card:
- imagem 16:9 como elemento visual principal;
- categoria sobre a imagem para leitura rápida de contexto;
- status editorial e marca separados do conteúdo comercial;
- título e descrição curta com hierarquia forte;
- bloco comercial com preço tratado como dado volátil: enquanto não houver fonte automatizada e verificada, exibir `Consultar no parceiro`;
- quantidade de ofertas ativas visível;
- CTA primário `Ver produto` aponta para a ficha interna da DejotaStore;
- CTA secundário `Ver artigo` aparece quando houver conteúdo editorial relacionado;
- a ficha interna continua responsável por disclosure, contexto, limitações e links externos de afiliado.

A imagem pode elevar a percepção de qualidade, mas não deve substituir informação verificável. Em produto físico, imagem oficial/autorizada continua tendo prioridade sobre mockup editorial quando disponível.

## Recursos — Resource Card Premium v1

O card editorial de Recursos usa a mesma linguagem premium da DejotaStore, mas preserva caráter utilitário e educativo.

Estrutura do card:
- imagem 16:9 como elemento visual principal;
- categoria sobre a imagem para leitura rápida;
- status editorial e relação comercial identificados separadamente;
- título e descrição com hierarquia forte e limite visual de linhas;
- bloco `Indicado para` destacado para orientar decisão;
- CTAs mantêm prioridade editorial: conteúdo, Store ou fonte oficial conforme contexto;
- critérios, custo e limitações permanecem recolhíveis no próprio card;
- nenhum elemento visual deve esconder a relação comercial nem transformar Recursos em vitrine de vendas.

## DejotaStore — Store Home Premium v2

A home da DejotaStore evolui a referência premium aprovada sem alterar o modelo editorial nem criar dados comerciais não verificados.

Elementos principais:
- hero com collage de produtos reais já presentes no catálogo;
- chips de confiança: curadoria editorial, links verificados e compra no parceiro;
- navegação horizontal por categorias, preparada para crescer sem alongar a página;
- contagem de itens editoriais como informação de catálogo, não como prova social;
- seção de recomendações mantém os sete produtos iniciais com Store Card Premium v1;
- faixa de confiança explica parceiro, compra externa, preço variável e curadoria;
- não exibir avaliações, selos de loja oficial, garantia, entrega ou preço fixo sem fonte atual e verificável.

## DejotaStore — navegação e hero v3

A navegação por categorias da Store é persistente entre home e páginas de categoria.

Regras:
- a home exibe todas as categorias como cards clicáveis em grid, sem barra horizontal;
- páginas de categoria exibem a mesma navegação, destacando a categoria atual;
- o visitante pode trocar de categoria sem voltar para `/store/`;
- o hero visual da home deve preencher integralmente o painel direito, sem aparência de placeholder dentro de outro container;
- chips de confiança podem sobrepor a imagem, mas sem criar um bloco visual pesado no mobile;
- a navegação de categorias deve permanecer legível em desktop e reorganizar em 2/1 colunas no mobile.

## Componentes reutilizáveis — base premium v1

A linguagem premium não deve ser copiada página por página. A base reutilizável atual é:

- `VisualMedia.astro`: mídia 16:9, dimensões intrínsecas, loading controlado e fallback;
- `StoreCategoryNav.astro`: navegação persistente das categorias da DejotaStore, com estado ativo;
- `StoreCard.astro`: card comercial/editorial especializado da Store;
- `ResourceCard.astro`: card editorial/utilitário especializado de Recursos;
- `storeVisuals.ts`: fonte única para mídia específica, fallback e rótulo de categoria dos produtos/serviços da Store.

Regra arquitetural: compartilhar comportamento e linguagem visual, sem forçar um componente genérico único quando Store e Recursos têm semânticas diferentes. Novas áreas (Blog, Trilhas e Home) devem consumir `VisualMedia` e os mesmos tokens, mas podem ter cards próprios quando a intenção da interface for diferente.

## Editorial Premium v1 — Blog, Trilhas e Home

A linguagem premium foi estendida às áreas editoriais sem copiar a estética comercial da Store.

### Blog
- `PostCard` usa mídia editorial por categoria até que cada artigo possua capa própria;
- a imagem comunica contexto editorial, não promessa específica sobre o conteúdo;
- categoria, tipo, data, tempo de leitura e dificuldade continuam visíveis.

### Trilhas
- `TrailCard` usa mídia temática por trilha;
- número, nível, ícone e progresso continuam sendo os elementos de orientação;
- a mídia reforça o tema sem transformar trilha em produto.

### Home
- hero usa collage de mídias já aprovadas do próprio ecossistema DejotaCode;
- trilhas da home reutilizam a resolução visual editorial;
- conteúdos em destaque usam a mesma mídia por categoria do Blog;
- a Home representa a marca como fluxo `aprender → construir → publicar`.

### Evolução futura
Quando artigos ou trilhas receberem capas próprias, a resolução visual deve priorizar a mídia específica e manter categoria/tema apenas como fallback.

## Premium Alignment v1 — páginas secundárias e detalhes editoriais

Passe de alinhamento aplicado para reduzir a diferença visual entre as áreas premium mais novas e páginas da geração anterior.

Inclui:
- heroes com mídia editorial em Sobre, Portfólio e Guia do iniciante;
- Setup do Dejota transformado de placeholder em página de curadoria deliberada;
- cards institucionais com profundidade visual discreta e estados de hover coerentes;
- artigos internos com mídia editorial por categoria no hero;
- trilhas internas com mídia temática integrada ao bloco de progresso;
- correção do title duplicado da Home;
- dimensões intrínsecas declaradas nas imagens antigas auditadas para reduzir layout shift.

Regra: premium significa consistência, hierarquia, mídia contextual e acabamento; não significa adicionar decoração indiscriminadamente. Páginas legais, formulários e fluxos utilitários podem permanecer mais sóbrios.

## Premium Reality v2 — refinamento de produto real

Segundo passe de acabamento com foco em reduzir sinais de template e encurtar fricções no mobile.

Inclui:
- artigos usam mídia específica quando já existe asset realmente relacionado ao assunto;
- fallback por categoria permanece para conteúdos sem mídia específica;
- a trilha `Primeiros passos na programação` passa a usar mídia do VS Code em vez de arte genérica;
- navegação compacta de categorias da Store usa duas colunas no mobile;
- navegação principal de categorias da Store também compacta no mobile, sem carrossel horizontal;
- a quinta categoria ocupa a largura inteira para fechar o grid;
- previews do e-book Linux do Zero passam a WebP lossless, preservando pixels e reduzindo transferência.

Regra: mídia específica só deve substituir o fallback quando existir relação editorial clara entre imagem e conteúdo. Não usar imagem de marca ou produto apenas para criar variedade visual.

## Premium Cohesion v3 — coerência entre Home e institucionais

Passe de coesão focado em remover resquícios da linguagem abstrata antiga e aproximar o ritmo das páginas secundárias da experiência premium atual.

Inclui:
- Guia do iniciante na Home passa a usar mídia editorial real em vez de composição abstrata;
- preview de Portfólio na Home passa a usar mídia contextual de infraestrutura Cloudflare;
- heros institucionais com mídia recebem menor altura e menor padding vertical para reduzir espaço morto;
- páginas utilitárias e legais permanecem inalteradas.

Regra: quando já existir mídia editorial contextual aprovada, ela deve substituir padrões abstratos legados. Elementos abstratos continuam válidos apenas quando tiverem função clara de marca, não como preenchimento visual.

## Recursos Premium v2 — densidade e hierarquia

Refinamento da página `/recursos/` para reduzir sensação de catálogo denso e reforçar curadoria editorial.

Regras:
- navegação de categorias usa grid responsivo em vez de faixa horizontal longa;
- títulos de grupo exibem o ícone oficial da categoria;
- cards mostram apenas um metadado principal no topo;
- descrição visível fica limitada a duas linhas;
- “Indicado para” funciona como linha auxiliar, não como bloco interno dominante;
- CTAs continuam presos ao rodapé e “Critérios e limitações” preserva transparência;
- no mobile, hero e mídia são mais compactos e cards deixam de usar altura mínima fixa;
- o material próprio Linux do Zero recebe tratamento editorial distinto das recomendações de terceiros.

## DejotaStore Premium v3

Refinamento aplicado para reduzir densidade comercial e alinhar a Store ao acabamento de Recursos.

Regras:
- cards de produto usam descrição curta (até duas linhas) e CTA preso ao rodapé;
- bloco comercial fica reduzido a `Consultar no parceiro` + quantidade de ofertas;
- hover segue o padrão global de elevação discreta de 2px e respeita `prefers-reduced-motion`;
- faixas de confiança não usam glifos improvisados como ícones; usam rótulos editoriais curtos;
- hero mobile deve permitir chegar às categorias rapidamente, evitando collage excessivamente alta;
- preço e disponibilidade continuam tratados como dados voláteis consultados no parceiro.
