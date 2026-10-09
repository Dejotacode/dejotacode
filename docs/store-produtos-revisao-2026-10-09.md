# Revisão das fichas de produtos da Store

Revisão local após aprovação visual das categorias. Nenhuma interface de produto alterada, sem publicação.

## Estrutura existente

Template único src/pages/store/[slug].astro: breadcrumbs, imagem, selo, título e descrição, resumo comercial, recomendação de uso e compatibilidade; categorias; análise editorial e pontos positivos/atenção; parceiros e transparência; artigos relacionados e metodologia. Conteúdo e dados comerciais existentes devem ser preservados.

## Preview inspecionado

Mouse Logitech MX Anywhere 3S, pendrive SanDisk Ultra Flair sem oferta, Metricool com selo de uso e curso Programação do Iniciante ao Avançado: HTTP 200 em 390/1440 px, tema escuro, sem overflow ou imagens ausentes. Oito combinações, sem afirmar auditoria visual exaustiva de todas as fichas. Captura desktop do mouse inspecionada.

A abertura varia de 545 a 690 px no desktop e 906 a 1076 px no celular nos casos conferidos. Imagens desktop esticam entre 497 e 642 px pela altura do resumo. Navegação mantém padrão anterior. Artigos relacionados usam slug transformado em texto em vez do título editorial real.

## Recomendações

1. Compactar abertura, controlar proporção da imagem e tamanho do título, preservando selos, descrição e dados reais.
2. Aproximar bordas, espaçamentos e navegação do catálogo aprovado; manter escopo exclusivo da ficha.
3. Agrupar análise e resumo com hierarquia clara, sem esconder pontos de atenção ou compatibilidade.
4. Facilitar acesso à seção de parceiros por âncora quando houver links comerciais; manter estado sem oferta explícito.
5. Resolver títulos de artigos relacionados pela coleção de posts, preservando rotas e analytics.
6. Manter metodologia, comissão e atributos sponsored/nofollow/noopener.

## Consistência comercial a resolver

Metricool: cards contam apenas offers.filter(active), resultando em zero, mas a ficha usa fallback affiliateLinks e apresenta um parceiro. Foi confirmada a existência do link legado no arquivo, sem nova verificação externa do programa ou promoção. Alinhar a interpretação entre catálogo, categorias e ficha antes de modificar dados; não excluir link validado nem presumir disponibilidade externa. A mesma regra pode afetar outros itens legados.

## Próxima etapa

Esboço da ficha seguindo identidade e padrão da Store, ou implementação direta se escolhida pelo usuário. Validar produto físico/digital/curso, com e sem oferta e com compatibilidade; temas claro/escuro e 360/390/768/1440 px, teclado, links e analytics preservados.

## Implementação local — padrão aprovado da Store

Autorização do usuário: opção 2, aplicar diretamente. Template [slug].astro preserva conteúdo, selos, compatibilidade, pontos positivos/atenção, parceiros, transparência e analytics. Novo store-product.css escopado à ficha; navegação reutiliza store-catalog.css. Abertura compactada com imagem proporcional e título menor. Indicação de uso e compatibilidade foram deslocadas para bloco abaixo da abertura. CTA leva à seção de parceiros quando há links; estado sem oferta mantido. Relacionados resolvem títulos e descrições da coleção de posts publicados, mantendo rotas e eventos.

Novo src/lib/storeOffers.ts extrai a resolução que já existia na ficha: ofertas estruturadas ativas, com fallback para affiliateLinks quando não há ofertas ativas. Catálogo principal, paginação e categorias usam a mesma resolução para contagem. Nenhum link, conteúdo comercial, valor ou promoção foi editado ou verificado externamente. Metricool passou a contar 1 em card e ficha.

Check: 78 arquivos sem erros, avisos ou hints. Build: 115 páginas. QA: links internos e HTML aprovados; diff-check limpo. Todas as 19 fichas conferidas em 360/390/768/1440 px e ambos os temas: 152 combinações sem overflow ou imagens ausentes, contagem de links igual à do catálogo e atributos comerciais/analytics preservados. Foco por teclado visível. Regressão das categorias: outras 40 combinações sem falhas. Capturas do mouse desktop escuro e celular claro inspecionadas. Abertura do mouse desktop passou de 571 para 376 px; imagem de 523 para 318 px.

Ajuste visual final: rótulo Análise editorial excluído da regra de parágrafos do corpo para manter tipografia de eyebrow; espaçamento entre texto e seta do CTA. Revisão visual do usuário pendente. Sem push ou publicação.

## Revisão visual solicitada pelo usuário

Conferidos mouse Logitech, pendrive SanDisk, Metricool e hub UGREEN em 390/1440 px, temas claro/escuro: 16 combinações adicionais. Bordas dos painéis e imagens em 9 px, eyebrow editorial 11,68 px, imagem desktop 508×318 px estável. Abertura continua adaptando a altura ao título real, sem esticar a imagem. Nenhum overflow. Capturas Metricool desktop claro e UGREEN celular escuro inspecionadas. Preservados estados com/sem oferta, verificação editorial e transparência.

Nenhuma ficha atual possui bloco estruturado compatibility no frontmatter. A descrição e os textos existentes de compatibilidade continuam disponíveis; o componente condicional foi preservado, mas sua renderização com dados reais permanece pendente para quando o campo for preenchido. Não foram inventadas compatibilidades para preencher a interface.

Não foram feitas novas alterações na interface nesta revisão. Aprovação visual do usuário continua pendente; publicação não autorizada.
