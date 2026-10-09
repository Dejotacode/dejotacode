# DejotaCode — Documento Mestre de Frontend, Identidade Visual e Organização

Versão: 1.0 — regras vigentes; migração local em validação  
Revisão: 09/10/2026  
Aplicação: projeto local canônico /home/dejota/Workspace/fullstack/dejotacode, preview 4321. Sem publicação.

## 1. Objetivo e situação atual

Criar uma referência única para manter toda a DejotaCode coerente: HTML, CSS, tipografia, componentes, imagens, ícones, marca, pastas e documentação. Deve orientar tanto a revisão das páginas atuais quanto a criação de conteúdo futuro.

Documento consolidado com o código em 09/10/2026. As seções 1–16 preservam a origem da proposta; a seção 17 define as decisões vigentes após inventário e resolve os nomes, valores e caminhos. O andamento de validação é registrado por modelo e rota em frontend-review.md; a existência deste documento não certifica integração externa ou aprovação visual.

Regra central: elementos com a mesma função usam o mesmo padrão compartilhado. Uma página pode ter composição própria; diferenças de estilo precisam corresponder a variantes documentadas.

## 2. Escopo e sequência

Abrange Início, Blog, artigos, categorias, Trilhas e seus detalhes, Store e produtos, Recursos, guias, e-book Linux do Zero, Serviços, Parcerias, Contato, Setup, Portfólio, Sobre, busca, páginas legais e estados de erro. A lista definitiva virá das rotas reais, incluindo rotas dinâmicas.

Sequência acordada:

1. Finalizar a estruturação das páginas.
2. Inventariar rotas, componentes, estilos, mídia e documentos existentes.
3. Consolidar este documento com os valores e arquivos oficiais.
4. Padronizar a base compartilhada.
5. Revisar cada página e cada modelo de conteúdo.
6. Validar os dois temas e telas pequenas e grandes.
7. Registrar o resultado e orientar futuras alterações.

## 3. HTML semântico

Escolher a tag pela função do conteúdo, e a classe pela apresentação.

| Conteúdo | Elemento preferido | Regra |
| --- | --- | --- |
| Conteúdo principal | main | Um conteúdo principal por página |
| Navegação | nav | Identificar navegações diferentes |
| Conteúdo independente | article | Artigos e unidades que fazem sentido isoladamente |
| Seção temática | section | Usar quando houver agrupamento com título adequado |
| Informação complementar | aside | Relacionada ao conteúdo principal |
| Título | h1 a h6 | Um h1 principal; níveis pela hierarquia do conteúdo |
| Parágrafo | p | Texto corrido |
| Rótulo curto | span ou p | Conforme o contexto; sem simular títulos |
| Destino | a com href | Navegar para página, arquivo ou seção |
| Ação | button | Abrir menu, trocar tema, enviar ou executar ação |
| Lista | ul ou ol com li | ol quando a ordem importar |
| Imagem com legenda | figure e figcaption | Relacionar mídia e explicação |
| Dados tabulares | table | Nunca usar como estrutura de layout |
| Contêiner sem significado próprio | div | Quando nenhuma tag semântica se adequar |

Usar strong para importância e em para ênfase. Não usar br para construir espaçamento nem escolher o nível de título para obter um tamanho visual. O idioma da página deve estar definido, normalmente pt-BR. A ordem do HTML deve continuar compreensível sem CSS.

## 4. Papéis tipográficos compartilhados

| Papel | Exemplo do projeto | Padrão |
| --- | --- | --- |
| Rótulo de abertura | Aprenda no seu ritmo | Uma família, peso, espaçamento e cor semântica compartilhados |
| Título principal | O que você quer aprender? | Escala oficial de abertura interna |
| Título principal com imagem | Escolha melhor antes de comprar | Variante de abertura com imagem |
| Título de seção | Conteúdos recentes / Escolha sua trilha | Mesmo papel, mesmo estilo |
| Título de card | Linux do zero | Estilo compartilhado entre cards equivalentes |
| Texto introdutório | Descrição logo abaixo do título | Escala e largura de leitura definidas |
| Texto comum | Parágrafos e explicações | Legibilidade e entrelinha consistentes |
| Metadados | Data e tempo de leitura | Estilo secundário próprio |
| Categoria ou estado | Linux / Pesquisado | Variante com significado definido |

Nas capturas de referência, “Aprenda no seu ritmo” aparece em ciano e com letras espaçadas no Blog, mas cinza e com fonte comum em Trilhas. A correção prevista é usar o mesmo papel de rótulo em ambos.

Um span não precisa se parecer com todos os spans do site. Um span que funciona como rótulo de abertura deve se parecer com os outros rótulos de abertura.

## 5. Tokens, CSS e temas

Centralizar valores recorrentes de identidade: fontes, escalas tipográficas, cores por função, espaçamentos, raios, sombras, larguras de conteúdo, camadas e movimento. Valores específicos de um layout podem permanecer locais quando não constituírem um padrão reutilizável.

Nomes semânticos descrevem o uso: texto principal, texto secundário, superfície, borda, ação principal e foco. Paletas de referência podem existir internamente; componentes devem preferir os tokens de função.

Temas claro e escuro mudam os tokens de cor e os arquivos de marca quando necessário. Não devem criar tipografias ou espaçamentos diferentes. Preservar o mecanismo existente de data-theme, após conferência. Ciano usado em texto no tema escuro pode precisar de um tom mais escuro no tema claro.

Organização lógica da cascata: tokens → base → layout compartilhado → componentes → estilos específicos → utilitários explícitos. A ordem será documentada; alterações exigem conferir seus efeitos. No Astro, estilos específicos podem ser importados nos componentes ou páginas. Não é obrigatório criar um main.css que carregue todo o site.

Separar reset e estilos de tags das classes de layout e componentes. Preferir BEM nos componentes padronizados, por exemplo card, card__title e card--featured. A migração das classes existentes será planejada. Evitar seletores amplos que alterem componentes de outras páginas e evitar !important como correção rotineira.

## 6. Componentes, estados e responsividade

Reutilizar cabeçalho, rodapé, rótulos, títulos de seção, botões, cards equivalentes, categorias, breadcrumbs, paginação, formulários e avisos. Antes de criar uma nova variante, conferir se já existe uma adequada.

Definir estados normal, hover, foco, selecionado, carregamento, indisponível, sucesso e erro quando aplicáveis. A ação principal mantém uma hierarquia visual consistente. Links de compra e recomendações devem comunicar o destino e a relação comercial.

Grades e conteúdo precisam encolher sem rolagem horizontal indevida. Textos longos devem quebrar de forma legível. Títulos mudam conforme a escala responsiva oficial; não recebem um tamanho improvisado por página. Não forçar alturas que cortem conteúdo com zoom ou textos maiores.

## 7. Imagens e mídia

Definir modelos por uso, não uma proporção única para todo o site:

| Uso | Direção proposta | Cuidados |
| --- | --- | --- |
| Capa editorial | Modelo consistente para Blog e conteúdos | Funcionar em miniatura; evitar textos pequenos incorporados |
| Capa de trilha | Assunto reconhecível e identidade comum | Não cortar palavras, símbolos ou assunto principal |
| Abertura de página | Composição adequada ao espaço aprovado | Ter recorte próprio para telas menores quando necessário |
| Produto | Mostrar o produto correto | Não sugerir características que ele não possui |
| Captura de tutorial | Interface real e legível | Explicar o que observar; manter informações relevantes |
| Setup e Portfólio | Fotografias ou materiais identificados | Não apresentar ilustração como registro real |

As proporções e dimensões finais serão registradas por modelo após inventário. Usar enquadramento e ponto focal definidos; object-fit não substitui revisar o recorte. Otimizar arquivos, reservar espaço com dimensões e carregar imagens abaixo da abertura sob demanda quando adequado.

Fotografia, ilustração e captura de tela podem coexistir com funções documentadas. O uso de azul/ciano e neutros deve unir a identidade sem obrigar fotos reais ou produtos a mudar de cor. Textos importantes devem preferir HTML, em vez de ficar presos à imagem.

Imagens informativas recebem alt que descreve sua contribuição. Decorativas usam alt vazio. Vídeos com fala precisam de legenda e, quando útil, transcrição.

## 8. Ícones e categorias

Adotar uma família oficial para ícones de interface, com desenho, espessura, alinhamento e tamanhos definidos. Marcas de terceiros podem usar seus símbolos oficiais, diferenciados dos ícones de interface.

Manter um registro único para categorias atuais e futuras:

| Campo obrigatório | Exemplo de preenchimento |
| --- | --- |
| Identificador | linux |
| Nome visível | Linux |
| Arquivo ou componente oficial | A confirmar no projeto |
| Tipo | Ícone de categoria ou marca de terceiro |
| Tamanhos e cor por uso | Definidos nos tokens e variantes |
| Nome acessível | Linux, quando não houver texto equivalente |

Linux, Windows, Android, Programação, IA, Tecnologia prática e Renda Digital terão entradas conforme existirem no projeto. Não escolher desenhos definitivos sem conferir o sistema atual. A mesma categoria usa o mesmo ícone em Blog, Trilhas e Recursos. Ícones decorativos junto a texto equivalente ficam ocultos da leitura assistiva. Controles que exibem apenas ícone precisam de nome acessível.

## 9. Símbolo e logotipo DejotaCode

Usar apenas arquivos oficiais verificados. Registrar versão principal, versão adequada a cada fundo, símbolo isolado e arquivos de exportação. Preservar proporção, cores e desenho. Não esticar, redesenhar ou gerar uma aproximação do símbolo.

Definir espaço de proteção, tamanho mínimo e posicionamento por modelo. Capas editoriais e comerciais devem ter uma política explícita de assinatura: posição, escala e casos em que a assinatura é dispensada. Não adicionar a marca indiscriminadamente em capturas, fotos de produto e conteúdo de terceiros.

Ao produzir uma imagem com IA, aplicar depois o arquivo oficial da marca quando necessário. A assinatura precisa ser legível e manter distância das bordas. No cabeçalho, versões publicadas e locais devem convergir para a mesma apresentação aprovada.

## 10. Organização de pastas e migração

O objetivo é localizar arquivos por responsabilidade. A organização foi conciliada com o código e aplicada localmente por autorização do usuário. A seção 17 informa os componentes e caminhos reais; a tabela abaixo descreve as responsabilidades.

| Pasta | Responsabilidade | Regra |
| --- | --- | --- |
| src/pages | Rotas Astro | Estrutura e composição das páginas |
| src/layouts | Estruturas de página | Base, metadados e organização comum |
| src/components/ui | Elementos compartilhados | Botões, títulos, rótulos e controles |
| src/components/layout | Cabeçalho, rodapé e navegação | Uma implementação compartilhada por função |
| src/components/content | Componentes de conteúdo | Cards e elementos editoriais |
| src/components/store | Componentes comerciais próprios | Reutilizar a base de UI |
| src/styles | Tokens, base e estilos compartilhados | Organizar por responsabilidade, sem duplicar tokens |
| src/content | Conteúdo editorial estruturado | Seguir o mecanismo já usado no projeto |
| src/data | Registros e dados compartilhados | Categorias, ícones e catálogos quando apropriado |
| src/assets | Mídia processada pela aplicação | Separar por marca, editorial, trilhas, produtos e institucional |
| public | Arquivos servidos diretamente | Apenas o que precisa de endereço estável ou não será processado |
| docs | Documentação atual | Índice único e responsabilidades claras |
| scripts | Rotinas de manutenção | Nome e instrução de uso claros |
| tests | Verificações necessárias | Usar a organização existente após inventário |

Não duplicar a mesma imagem em src/assets e public. Escolher conforme o uso. Usar nomes descritivos, sem espaços e preferencialmente em kebab-case: linux-terminal-capa.webp. Evitar nomes como final-final-2. Para componentes, manter a convenção do projeto, normalmente PascalCase em Astro.

Fontes de imagens, arquivos editáveis e exportações precisam ser distinguíveis. Arquivos grandes de produção que não pertencem à aplicação ficam em um acervo próprio, com referência no registro de mídia. Não incluir segredos, dependências instaladas, builds ou backups manuais no repositório.

## 11. Organização da documentação

Criar ou atualizar docs/README.md como entrada única: o que ler, em qual situação e qual arquivo é a referência atual. Evitar reescrever a mesma regra em vários documentos.

| Documento | Papel |
| --- | --- |
| Documento base do projeto | Público, proposta, escopo e decisões de produto |
| Documento Mestre | Regras comuns de frontend, identidade e organização |
| Sistema visual | Catálogo de tokens e componentes com exemplos exatos |
| Sistema de ícones | Registro oficial de categorias e ícones |
| Arquitetura | Responsabilidades técnicas, integrações e fluxos |
| Registro de mídia e marca | Arquivos oficiais, origem, uso, recorte e modelos |
| Revisão de padronização | Situação e evidências de cada página |
| Backlog | Pendências e ideias futuras |
| Histórico | Decisões substituídas e relatórios anteriores |

Os documentos existentes visual-system.md, icon-system.md e architecture.md foram conferidos e conciliados. docs/README.md é a entrada única. Manter documentos atuais com nomes estáveis e histórico pelo Git; registros datados são preservados para não quebrar referências.

Cada documento deve ter situação, responsável por função, data de revisão, escopo e links relacionados. Distinguir proposta, regra vigente e registro histórico. Nenhuma regra deve ter duas fontes oficiais concorrentes. Em conflito, registrar a decisão e atualizar os documentos afetados, sem resolver silenciosamente.

Ao aplicar este padrão, atualizar as instruções do repositório, incluindo AGENTS.md se esse for o mecanismo adotado, com o caminho do Documento Mestre e a obrigação de consultá-lo. Não basta depender da memória do chat.

## 12. Conteúdos futuros e comandos

Antes de criar página, artigo, produto ou imagem: consultar este documento, usar o modelo adequado, reutilizar tokens e componentes e conferir arquivos oficiais. Novos padrões entram no catálogo antes de se espalharem por várias páginas.

| Comando ou função | Responsabilidade |
| --- | --- |
| @control | Organizar escopo, etapas, pendências e decisões |
| @dev | Aplicar padrões ao código e verificar o resultado |
| @studio | Produzir mídia seguindo modelos e marca oficial |
| @dejotacode | Criar conteúdo editorial dentro dos modelos |
| @store | Criar conteúdo comercial e recomendações coerentes |

Esses comandos descrevem o fluxo de trabalho; não representam automações já implementadas.

## 13. Revisão página por página

Manter uma tabela com rota/modelo, situação, divergências, correções, evidências, tema, largura testada e pendências. Estados: não revisada, em revisão, ajustada, validada e bloqueada com motivo. A criação deste documento não altera o estado das páginas.

Conferir em cada página:

- HTML e hierarquia de títulos coerentes.
- Papéis tipográficos, cores e espaçamentos oficiais.
- Componentes compartilhados e variantes justificadas.
- Imagens corretas, legíveis e sem recortes indevidos.
- Ícones e marca oficiais.
- Navegação por teclado, foco e nomes acessíveis.
- Formulários com rótulos, instruções e retorno de erro/sucesso.
- Temas claro e escuro; celular, tablet e desktop; zoom e textos longos.
- Links, conteúdo, metadados e funcionalidades preservados.

Nos modelos dinâmicos, revisar o modelo e as variações reais: títulos longos, ausência de imagem, descrições maiores e conteúdos de diferentes categorias. Uma rota representativa não comprova todas as variações.

## 14. Referências visuais desta conversa

Capturas de 08/10/2026: 2026-10-08_22-39.png, 2026-10-08_22-39_1.png, 2026-10-08_22-40.png e 2026-10-08_22-40_1.png.

Observações visíveis: rótulos de abertura diferentes entre Blog, Trilhas e Store; textos cortados em imagens de programação; mistura de estilos de imagem que precisa de critérios; assinatura de marca aplicada de forma variável. A captura do Início é do site publicado e as demais do preview local; diferenças entre versões não devem ser tratadas automaticamente como diferenças entre páginas.

## 15. Consolidação da proposta original
Inventário de código, documentação, fontes, tokens, ícones e marca concluído. Papéis tipográficos e variantes definidos na seção 17; organização conciliada com os caminhos existentes.
Índice criado em docs/README.md; acervo em media-inventory.json; modelos e rotas em frontend-review.md.
Os arquivos de imagens aprovados foram preservados. Origem/licença e assinatura incorporada de cada raster não são certificadas automaticamente; pendências são explícitas no registro de mídia.
Validação técnica e revisão do usuário são estados distintos.

## 16. Histórico deste documento

v1.0: consolidação com o repositório, papéis oficiais, organização de componentes e aplicação local por autorização do usuário.

v0.1: consolidação inicial de HTML, CSS, papéis tipográficos, temas, componentes, mídia, marca, ícones, estrutura de pastas, documentação e revisão futura. Nenhuma alteração foi aplicada ao site nesta etapa.


## 17. Decisões vigentes após inventário — 09/10/2026

Responsáveis: @control mantém decisões e andamento; @dev mantém código e validação; @studio mantém origem e identidade de mídia.
Escopo: todas as famílias públicas. Admin preservado como frente funcional própria; saídas RSS/sitemap mantidas.
Esta seção resolve as propostas e exemplos anteriores quando houver divergência. Catálogo exato em [Sistema visual](visual-system.md), arquivos em [Mídia e marca](media-registry.md), progresso em [Revisão por página](frontend-review.md).

### Fontes e tokens oficiais
- Títulos: Plus Jakarta Sans Variable, token --font-heading.
- Corpo: Inter Variable, token --font-body.
- Código, rótulos e metadados técnicos: JetBrains Mono Variable, --font-code.
- Única definição de valores em src/styles/tokens.css; fonts.css carrega fontes locais. Não copiar hexadecimais para componentes.
- Claro: fundo #f7f9fc, superfície #ffffff, texto #111827, secundário #4a5870, texto turquesa #00778a, ação #00cbe5.
- Escuro: fundo #0a0d12, superfície #121721, texto #f7f8fa, secundário #aab6ca, texto turquesa #28e9ff, ação #00e5ff.
- Preservado data-theme em html e armazenamento dejotacode-theme.
- Rótulo de abertura: .eyebrow, --type-eyebrow = 600 .73rem/1.5 --font-code, tracking .1em, cor --color-accent-strong.
- Abertura interna: --size-title-page = clamp(2rem,4vw,3.3rem).
- Abertura com mídia: --size-title-media = clamp(2rem,3.8vw,3.5rem), Home/Sobre/Store/e-book.
- Leitura e utilidade compacta: --size-title-reading = clamp(1.8rem,3vw,2.8rem), artigo/Privacidade/ficha/404.
- Título de seção: --size-title-section = clamp(1.5rem,2.5vw,2rem).
- Títulos usam --leading-title 1.15, --tracking-title -.035em; seções 1.25 e -.025em.
- Card comum, destaque editorial e trilha são variantes documentadas; não aplicar tamanho de h1 a card.
- Container 73.75rem, margem de página clamp(1rem,4vw,2rem); raios .5/.75/1rem; alvos principais 2.75rem.

### Componentes e pastas definitivas
- src/components/layout: Header, Footer, Brand.
- src/components/ui: CategoryIcon, Pagination e futuros controles básicos.
- src/components/content: PostCard, TrailCard, ConversionCTA, ArticleGuideResources, ResourceRecommendations, SocialShare.
- src/components/visual, resources e store mantêm suas responsabilidades atuais.
- src/styles permanece plano por família: tokens/fonts/global, editorial e estilos específicos. Separar em subpastas só quando necessário, evitando caminhos longos.
- src/pages são as rotas; src/layouts preserva SEO e estrutura; src/content preserva os dados; src/data preserva registros.
- Mídia atual permanece public/assets por área, com URLs estáveis. Não mover para src/assets nem duplicar sem necessidade.
- Documentação tem entrada única docs/README.md; registros datados são históricos. Sistema visual antigo preservado em docs/history/visual-system-before-master-2026-10-09.md.
- Cascata: global.css importa fonts/tokens e define base; CSS de família controla layout e consome papéis; scoped styles de componentes controlam apenas seu contexto. Sem !important novo.

### Ícones e marca
Registro de categorias permanece src/data/categoryIcons.ts; desenho permanece src/components/ui/CategoryIcon.astro. ViewBox 24, traço 1.8, currentColor, tamanhos 18/20/24/28/32. Ilustrações grandes são variantes decorativas, não controles.
Brand.astro usa símbolos oficiais dark/light via --brand-symbol; mínimo atual 32px, normal 36px; proteção mínima .5rem. Não gerar marca aproximada.
Redes sociais usam símbolos preenchidos de terceiros, exceção intencional à família linear.
Nenhuma categoria futura é ativada apenas por existir no registro.

### Modelos de mídia e assinatura
- Editorial: 16:9; Store catálogo/cards editoriais: 16:10 desktop, abertura 16:9 mobile; produto/nota do guia pode usar recorte quadrado.
- VisualMedia tem wide 16:9, card 4:3 e square 1:1. Os nomes são variantes de moldura; componentes podem documentar 16:10 editorial. Não confundir o formato real do raster com a moldura CSS.
- Retrato Sobre e captura Portfólio têm modelos próprios. Amostra do e-book preserva a página inteira.
- A migração preserva os assets aprovados. A auditoria de URLs e carregamento não certifica todos os detalhes de todas as artes.
- Artes novas: sem texto crítico incorporado; preferir WebP, fallback e loading adequados; marca oficial aplicada separadamente, em posição com área livre e proteção.
- Capturas reais não recebem assinatura por padrão; fotos de produto não recebem marca como se fosse do fabricante. Ilustração gerada é identificada como editorial.
- Assinaturas já incorporadas não são substituídas automaticamente. Registro de mídia lista o acervo; revisão de origem/recortes e capa Elementor permanece identificada.

### Preservação e validação
Não alterar conteúdo, rotas, SEO, afiliados ou comportamento para padronizar apresentação.
Comparar hashes de src/content e public, rotas e metadados do build antes/depois. Validar check/build/QA, famílias em 320/390/768/1440, ambos temas, foco, navegação e estados reais.
Tabela por modelo e por rota em frontend-review.md. Validação automatizada não equivale a aprovação visual do usuário nem a teste completo de integrações.
Publicação requer instrução explícita separada; nenhum push/deploy nesta aplicação.

## 18. Cards e CTA — segunda etapa
Card de artigo regular: --size-card-title clamp(1.1rem,1.6vw,1.35rem), entrelinha 1.3 e tracking de seção. Blog e categorias compartilham esse papel.
Destaque editorial: --size-card-title-featured. Trilhas mantêm variante --size-card-title-trail; cards comerciais e utilitários mantêm variantes de sua função.
CTA normal: --size-title-cta; compactos de artigo continuam menores conforme seu contexto documentado. Botões mantêm alvo de 44px e removem transição em redução de movimento.
Recortes existentes preservados: Blog usa foco superior esquerdo; Store foco central salvo capas específicas; e-book página integral. Não substituir imagens para igualar layouts.


### Formulários — aplicação da terceira etapa
Campos públicos de Contato e Newsletter usam tipografia do corpo com 1rem. Estados de envio anunciam aria-busy; ao finalizar, preservar a estrutura original do botão. Rótulos, consentimento, validação e mensagens de retorno permanecem obrigatórios. Testes de interface podem simular a API; não equivalem a entrega real. Andamento e evidências em frontend-review.md.
