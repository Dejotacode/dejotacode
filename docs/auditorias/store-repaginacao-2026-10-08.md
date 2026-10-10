# Store — implementação local

Esboço aprovado para implementação em 2026-10-08. Resultado final aprovado visualmente por Dejota em 2026-10-08. Sem push ou publicação.

Abertura compacta com imagem editorial existente Logitech MX Anywhere 3S, sem criar imagem de usuário/setup ou alterar asset. Categorias compactas com ícones oficiais; três informações de confiança consolidadas; catálogo, paginação, dois destinos Blog/metodologia e disclosure enxutos.

Catálogo mantém 19 itens, 12 na página principal e 7 na página 2, ordem alfabética, filtros de draft/catalogStage, imagens e dados existentes. Título corrigido para Recomendações para o seu contexto. Eliminada afirmação genérica de oferta afiliada em todos os itens; card informa número de ofertas ativas ou Sem oferta ativa. CTA sem oferta é Conhecer recomendação e mantém destino interno da ficha; sem novo checkout ou preço. Links de artigos e eventos analytics preservados.

StoreCard recebeu prop editorial opcional (padrão false). Novo tratamento ativado apenas no catálogo e sua paginação; categorias e outros usos mantêm o padrão existente. StoreCategoryNav não foi alterado: apresentação ajustada via seletor restrito a store-catalog-page. Selos mantêm texto e níveis originais; posicionados à direita nas capas. Enquadramento superior preserva o símbolo quando presente. Novo CSS store-catalog.css restrito às duas rotas; sem alteração de VisualMedia ou imagens globais.

Diferenças do mockup: catálogo real completo e ordem existentes em vez de seis exemplos; assets existentes em vez de imagens ilustrativas; cabeçalho/rodapé reais; links Ver artigo preservados. Hero de 740 para 428 px no desktop e 1072 para 621 px em 360.

Escopo: src/pages/store/index.astro; src/pages/store/pagina/[page].astro; src/components/store/StoreCard.astro; novo src/styles/store-catalog.css.

Validação: npm run check, 77 arquivos, zero erros/avisos/hints. Build 115 páginas. QA nenhum link interno quebrado, 115 HTML, 480 imagens, 259 controles, zero problemas. git diff --check passou. Chromium ambas as páginas em 360,390,768,1440 claro/escuro: sem overflow/imagens ausentes; estados sem oferta corretos, foco por teclado visível; categoria Linux não recebeu opt-in. Inspeção de capturas desktop claro/escuro e celular com enquadramento final.

Preview http://localhost:4322/store/ e http://localhost:4322/store/pagina/2/.
Capturas /tmp/store-final-dark.png, /tmp/store-final-light.png, /tmp/store-final-mobile-dark.png.

Pendências: visual aprovado pelo usuário; categorias, produto e guias continuam nas etapas seguintes. Auditoria global de imagens permanece separada. Conferência de disponibilidade comercial externa não faz parte desta alteração visual: contagens representam os flags active do catálogo, não teste de estoque/checkout externo. Mais navegadores na consolidação.

## Ajuste solicitado no hero
Dejota pediu o sombreamento/degradê do esboço. Aplicada máscara CSS na imagem existente: transição horizontal da esquerda para o fundo no desktop e vertical no celular. Borda removida apenas do figure do hero. Asset original preservado. Build 115 páginas e diff-check passaram; Chromium desktop/celular claro/escuro sem overflow. Inspeção visual da captura /tmp/store-hero-gradient-1440-dark.png. Visual do catálogo e paginação aprovado após o ajuste do hero.

## Aprovação
Dejota aprovou o visual do catálogo com o degradê no hero e escolheu manter local. Sem autorização de push ou publicação. Aprovação não abrange novas alterações em categorias, produtos ou guias.
