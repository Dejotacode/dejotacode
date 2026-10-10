# Store — revisão da página principal

Sem alterações de interface ou publicação. src/pages/store/index.astro sem diff local. Componentes StoreCard e StoreCategoryNav compartilhados com outras rotas; preservar dados, status e links de afiliados.

## Estado atual
Hero com imagem editorial e chamadas para catálogo/Setup; cinco categorias oficiais; faixa de três princípios; catálogo paginado (12 cards por página); outra faixa de quatro informações de confiança; dois painéis Blog/metodologia; disclosure comercial.
Preview informa 19 itens editoriais, duas páginas. Ordem final do catálogo é alfabética; a ordenação inicial por featured é substituída pela ordenação por título, de modo que o título Recomendações em destaque não descreve uma seleção efetiva por featured.
Existem cards com Sem oferta ativa; a afirmação Todos têm oferta afiliada registrada deve ser revista para distinguir oferta registrada de oferta ativa, sem prometer disponibilidade de compra. Cards preservam níveis Uso/Testado/Pesquisado. Não criar checkout interno ou preços não atualizados.

## Inspeção
Chromium 360,390,768,1440 px, claro/escuro: nenhuma imagem ausente nem overflow do documento. overflow:hidden da página já existe; essa medição não substitui inspeção de possíveis recortes individuais. Hero 740 px desktop e 1072 px em 360; conteúdo principal 5701 px desktop e 11907 px em 360. Captura /tmp/store-review-dark.png.
Imagem do hero tem tratamento roxo/cinza diferente da direção turquesa atual; não substituir automaticamente, pois auditoria global de imagens está adiada. Enquadramento de algumas capas merece comparação com assets durante a proposta; não diagnosticar perda de símbolo sem inspeção de cada imagem.

## Direção recomendada
Abertura compacta, categorias próximas do catálogo, informações de confiança consolidadas em uma faixa menor, catálogo com hierarquia clara e estados comerciais corretos. Dar acesso a pesquisa/filtros somente se necessário e compatível com as categorias existentes. Distinguir catálogo de produtos de recursos educacionais. Encerramento enxuto com Blog, metodologia e disclosure preservado. Setup continua claramente pessoal, sem atribuir Uso aos modelos pesquisados.

Próximo passo: pesquisar referências de curadoria e catálogos de afiliados antes de esboço. Não alterar StoreCard globalmente sem avaliar categorias, paginação e guias.
Preview http://localhost:4322/store/.
