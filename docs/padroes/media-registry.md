# Registro de mídia e marca
Situação: vigente; acervo atual preservado. Revisão: 09/10/2026. Responsável: @studio/@dev.
Escopo: arquivos oficiais, modelos e origem. Regras: [Documento Mestre](frontend-master.md).
Inventário completo: [media-inventory.json](media-inventory.json). Hash identifica o arquivo, não comprova licença ou origem.

## Marca oficial verificada no código
| Uso | Arquivo |
| --- | --- |
| Fundo escuro | /assets/brand/dejotacode-symbol-dark.svg |
| Fundo claro | /assets/brand/dejotacode-symbol-light.svg |
| Monocromático | /assets/brand/dejotacode-symbol-monochrome.svg |
| Ícone aplicativo | /assets/brand/dejotacode-app-icon.svg |
| Social padrão | /assets/brand/opengraph-dark.png |
| Retrato real | /assets/brand/dejota-author.webp |
Brand em components/layout/Brand.astro. Proteção .5rem; símbolo normal 36px e compacto 32px. Não deformar nem gerar aproximação.
Fallback VisualMedia acompanha o símbolo do tema.

## Modelos de consumo
| Uso | Moldura | Regra |
| --- | --- | --- |
| Editorial/hero | 16:9 | Foco no assunto; sem texto crítico incorporado |
| Catálogo Store | 16:10 | Modelo aprovado; hero mobile 16:9 |
| VisualMedia card | 4:3 | Variante existente; a família pode mudar a moldura explicitamente |
| Guia, recomendação compacta | 1:1 | Imagem real editorial preservada |
| Retrato Sobre | Própria da fotografia | Não simular foto real com IA |
| Portfólio | Captura real | Capturas atualizadas em 09/10/2026; não assinar screenshot |
| E-book amostra | Página integral | Não cortar conteúdo da página |
Resolução específica/fallback: src/data/editorialVisuals.ts e src/data/storeVisuals.ts. Arquivos grandes de produção não entram como dependências da aplicação.
Assets existentes, metadados e URLs estáveis preservados. Revisão de direitos, detalhes de produtos e assinatura incorporada não é certificada por validação técnica.
Capa comercial roxa de Elementor é exceção identificada; não recolorir automaticamente a marca de terceiro.


## Capturas do Portfólio — revisão local de 09/10/2026
Home, Blog e Trilhas: captura real do preview 4321, tema escuro, viewport 1280 × 960; exportação WebP qualidade 85. Fontes e imagens carregadas antes da captura; barra de desenvolvimento removida. Mantidos os arquivos /assets/portfolio/{home,blog,trilhas}.webp, proporção 4:3 e links existentes.
A captura permanece escura também na apresentação clara: documenta uma versão real, sem simular troca do tema dentro do raster. São os únicos três assets alterados nesta etapa; inventário atualizado.
Pendência visual observada: capa de programação nas Trilhas contém texto incorporado parcialmente cortado no card. Revisar a arte em etapa própria; título e descrição HTML permanecem legíveis. Não recolorir nem substituir automaticamente a arte aprovada.

## Capa da trilha de programação — sétima etapa
Pendência de recorte resolvida na trilha em 09/10/2026: novo /assets/trails/primeiros-passos-programacao.svg, moldura 16:9 e símbolo de desenvolvimento integral, derivado do SVG category-desenvolvimento.svg já existente. Sem texto incorporado, sem assinatura inventada e sem alterar os arquivos originais. O registro anterior de corte é histórico; vscode.webp permanece nos Recursos. Resolver da trilha atualizado para catálogo, detalhe e Busca.

## Atualização final da captura de Trilhas — décima primeira etapa
/assets/portfolio/trilhas.webp recapturada em 09/10/2026 após a nova capa de programação. Mantém 1280 × 960, tema escuro, WebP qualidade 85 e caminho estável. Exportação pelo ImageMagick; imagem real do preview, sem assinatura. Home/Blog não alterados. Evidências em frontend-review.md.

## Notebook do case de Serviços — 09/10/2026
Captura services-dejotacode-case.webp atualizada do preview Home 4321, escuro, 1440x900, WebP qualidade 85, fontes e imagens aguardadas e toolbar removida. Tela real dentro de moldura ilustrativa CSS, sem assinatura adicionada.


## Padrão de assinatura aprovado — 09/10/2026
Aplica-se a artes editoriais próprias que receberem assinatura. Símbolo único, arquivo oficial dark em fundo escuro ou light em fundo claro; não redesenhar, distorcer, adicionar sombra, efeitos, quadrado ou placa de fundo. Preservar as cores do arquivo oficial.

| Parâmetro | Regra |
| --- | --- |
| Posição | Canto superior esquerdo |
| Escala | Caixa do símbolo com largura de 5% da largura total da imagem; altura proporcional |
| Margens | 3% da largura à esquerda e 3% da altura no topo, medidas até a caixa SVG |
| Quantidade | Um símbolo por arte |
| Fundo | Transparente atrás do símbolo; escolher versão pela região da imagem |
| Captura real | Sem assinatura adicional; preservar a marca já capturada |
| Arte de fornecedor/foto de produto | Preservar identidade do fornecedor; não acrescentar marca DejotaCode |
| Recorte | Conferir 16:9, 16:10 e 4:3 no uso real; não duplicar marca para compensar recorte |

Exemplo 1600 × 900: caixa 80 × 80; posição x=48, y=27. Modelos vetoriais transparentes em docs/brand/assinatura-editorial-dark.svg e assinatura-editorial-light.svg; contêm geometria copiada dos símbolos oficiais, sem recriação. São referências de produção, não assets carregados pelas páginas.

Migração do acervo: consultar revisao-esbocos-fechamento-2026-10-09.md. Remover assinatura antiga antes de aplicar a nova, sem cobrir com placa nem empilhar símbolos. Se a marca estiver fundida ao raster, tratar a imagem individualmente e conferir assunto/produto após edição. Aprovação do padrão não certifica que os rasters atuais já foram migrados.


## Lote de assinaturas preparado — 09/10/2026
61 rasters únicos nos mapas Store/editorial: 49 artes próprias com assinatura tratadas; 12 imagens sem assinatura mantidas fora do lote. Quatro atlas de recortes limpos com imagegen; somente regiões mascaradas reincorporadas aos originais, depois composição determinística do SVG oficial. Originais preservados por SHA-256; pixels fora do canto 20% × 25% idênticos em 49/49 comparações; dimensões preservadas. A limpeza gera fundo local aproximado dentro da máscara, portanto exige revisão visual individual na galeria.
49 versões irmãs -assinatura-v2.webp, em WebP lossless (38,6 MiB no total) para comparação; otimização para entrega deve ocorrer após aprovação visual. Nenhum resolver ou página pública foi alterado para usar estas versões. Não confundir preparação com migração concluída.
Galeria conjunta: http://localhost:4323/, servidor restrito a 127.0.0.1; frontend canônico continua 4321. Fonte da galeria: docs/brand/preview-assinaturas.html, com assets servidos pelo diretório temporário /tmp/dejota-assinaturas-preview. Não integra o build do site.
Registro: docs/brand/signature-batch-20261009.json. Recortes preparados persistidos em docs/brand/signature-batch-sources; receita em scripts/compose-signature-batch.py, sem sobrescrever originais ou versões divergentes.
Validação: check 78 arquivos, zero erros/avisos/hints; build 115 páginas; QA de links e HTML passou. Galeria em 320/390/768/1440 e claro/escuro: oito combinações, 98 imagens carregadas, sem overflow; capturas desktop/mobile inspecionadas. Assinatura regular conferida na imagem de pendrive e montagem das 49 versões. Sem publicação, push ou deploy. Ottocast preexistente preservado fora do commit.
Próximo passo: revisão conjunta do lote, ajustes pontuais se necessários e integração local das versões aprovadas.


## Assinaturas aprovadas e integradas localmente — 09/10/2026
Esta seção atualiza o estado do lote preparado. Usuário aprovou visualmente as versões e autorizou integração local. 49 imagens mapeadas migradas nos resolvers Store/editorial, Home e recomendações de artigos. Hotmart Extensões continua mapeada, sem uso nas páginas atuais; 48 das 49 imagens aparecem em 81 rotas do build. Imagens excluídas do lote preservadas, sem alteração de conteúdo, afiliados, rotas ou controles.
WebP qualidade 90: lote de 38,63 para 6,16 MiB, redução de 84,1%. Mestres lossless preservados em docs/brand/signature-masters; originais públicos anteriores intactos por SHA-256. A prova anterior de pixels idênticos fora do canto refere-se aos mestres lossless; exportações finais usam compressão com perdas. Receita de composição e inventário sincronizados com as exportações.
Recortes ancorados no topo esquerdo para as novas assinaturas em VisualMedia, StoreCard, hero Home e recomendações de artigos. Degradê da Home preservado; ele atenua decorativamente o símbolo na borda da mídia, sem alterar o raster ou duplicar a marca.
Validação final: check 78 arquivos sem erros/avisos/hints, build 115 páginas, QA de links/HTML aprovado. 81 rotas × 320/390/768/1440 × claro/escuro = 648 combinações, 2.088 instâncias das novas imagens carregadas; zero overflow e caixas de assinatura integralmente dentro dos recortes. Capturas Store desktop, artigo mobile e Home desktop inspecionadas. Teste intermediário interrompido por recarga do preview durante edição; rodada final estável passou e substitui o resultado intermediário. Sem acessos externos, envios reais ou publicação.
Evidência resumida: docs/brand/signature-integration-validation.json. Galeria http://localhost:4323/ agora exibe exportações finais; preview do site http://localhost:4321/. Não iniciar 4322. Publicação continua sem autorização; arquivo preexistente Ottocast não incluído nesta alteração.


## Capturas sincronizadas após assinaturas — 09/10/2026
Portfólio: Home, Blog e Trilhas recapturadas do preview 4321, 1280 × 960, escuro; notebook Serviços: Home 1440 × 900, escuro. Mantidos os caminhos estáveis, proporções, moldura CSS e links. Fontes/imagens aguardadas, toolbar oculta por regra persistente durante captura; WebP qualidade 85. Nenhuma assinatura adicionada às capturas reais. Inventário atualizado.
Check 78 arquivos sem erros/avisos/hints; build 115 páginas; QA de links/HTML aprovado. Portfólio e Serviços em 320/390/768/1440 e claro/escuro: 16 combinações sem overflow, com capturas carregadas. Blog e tela do notebook inspecionados visualmente. Apenas quatro rasters de captura e registros alterados; nada publicado. Frontend continua 4321.
Padrão de assinaturas e atualização das capturas concluídos localmente. Setup e Termos continuam pendências de confirmação/conteúdo conforme revisão dos esboços; esta atualização não os resolve por inferência.


## Ottocast Mini Cube 3.0 — integração local de 10/10/2026
Capa editorial ilustrativa criada com IA a partir da fotografia oficial do modelo, seguida de composição separada do símbolo oficial dark. Referência: https://www.ottocast.com/pt-br/products/ottocast-mini-cube-3-0-wireless-carplay-android-auto-adapter. Não é fotografia de teste físico. Referência pública não comprova licença para publicação; permissão de uso permanece sem confirmação documental.
Asset: /assets/store/ottocast-mini-cube-3-0-assinatura-v2.webp, 1672 × 941, WebP qualidade 88; mestre PNG preservado separadamente. Reutilizado por storeVisuals.ts e editorialVisuals.ts. Inventário com tamanho e SHA-256 atualizado.
Símbolo único, caixa 5% da largura e margens 3%; recortes 16:9, 16:10 e 4:3 validados em 320/390/768/1440px, claro/escuro. Override center top do catálogo cortava a assinatura: corrigido em store-catalog.css com regra específica para este asset. Nenhuma mídia dos demais produtos alterada.
Artigo e ficha liberados para entrega conjunta por instrução do usuário em 10/10; ficha draft false e catalogStage catalogo-geral. Mantida classificação Pesquisado. Artigo informa natureza ilustrativa da capa. Condições Awin registradas em 09/10 não revalidadas nesta etapa.
Check/build/QA aprovados na etapa visual; release em validação para publicação pelo fluxo oficial. Comissão/cookie não apresentados como condição atual; licença da referência sem certificação documental, registrada como lacuna.


## Conferência obrigatória antes de integrar mídia — 10/10/2026
Regra vigente, responsável @studio/@dev. Em cada nova entrega, conferir o arquivo efetivamente resolvido pela página, mesmo quando reutilizado de um produto já publicado. Imagem carregada, build aprovado e nome de arquivo não comprovam identidade visual correta.
1. Identificar origem: arte editorial própria, fornecedor ou captura; aplicar a regra correspondente e registrar exceção quando houver.
2. Em arte própria assinada, conferir visualmente símbolo oficial, quantidade única, versão adequada ao fundo, topo esquerdo, caixa 5% e margens 3%. Conferir também marcas antigas incorporadas em outros pontos do raster; não empilhar assinatura nova.
3. Registrar original, derivado, SHA-256 e consumidores; preservar o original. Arquivo excluído de migração anterior não é automaticamente aprovado para nova entrega.
4. Conferir o arquivo nos resolvers e usos reais: capa do artigo, recomendação, ficha e catálogo, em claro/escuro e recortes 16:9/16:10/4:3 conforme uso. Confirmar símbolo inteiro e produto sem corte indevido.
5. Registrar separadamente identidade visual, carregamento/layout e aprovação editorial. Se a assinatura ainda não foi conferida, declarar revisão visual pendente e não apresentar o pacote como pronto para publicação.
Motivo: a imagem MX Anywhere 3S ficou excluída do lote anterior e continha uma marca antiga no caderno; a preparação de 10/10 conferiu layout, mas não a identidade. Esta regra explicita a revisão exigida pelo padrão existente, sem certificar licenças ou detalhes de produto.


## MX Anywhere 3S — assinatura corrigida em 10/10/2026
Arte editorial existente, excluída do lote de 49 e com símbolo antigo no caderno, corrigida individualmente. Imagegen removeu a marca; somente recorte 190 × 140 em x1245/y590 reincorporado ao original com máscara suavizada. Pixels fora dessa região preservados antes do enquadramento/exportação. Original 1448 × 1086 preservado; capa central 16:9 exportada 1440 × 810 e SVG oficial dark aplicado separadamente: 72 × 72, x43/y24. Não é foto de teste físico.
Novo /assets/store/logitech-mx-anywhere-3s-assinatura-v2.webp, qualidade 90, reutilizado por resolver editorial e Store. Catálogo tem regra específica left top. Original público não sobrescrito. Mestre PNG e fonte da limpeza preservados separadamente. Identidade conferida visualmente: símbolo oficial único e marca antiga removida. Artigo/ficha/catálogo/destaque Store em 32 combinações passaram; símbolo dentro dos recortes. Degradê aprovado atenua a assinatura no destaque Store, sem duplicação de marca. Check/build:production/QA passaram. Registro anterior de pacote pronto sem conferir símbolo foi superado. Nenhuma publicação nesta correção.


## Capas das lacunas editoriais — 10/10/2026
Três ilustrações editoriais próprias geradas via imagegen: Hub Data (tarefas gravadas para IA), e-book programação (tablet e prática de código), Jornada Python (estudo e projetos web). Sem alegação de capa oficial, teste físico, renda ou conclusão de formação. Arquivos public/assets/posts/{hub-data,programacao-ebook,jornada-python}-capa-assinatura-v1.webp, 1440x810, WebP qualidade 90. SVG oficial dark aplicado separadamente, caixa 72x72 em x43/y24, símbolo único. Originais gerados preservados. Jornada Python reutilizada no artigo e produto; flags de rascunho preservadas. Resolvers locais atualizados. Sem publicação.


## Família de capas das Trilhas — 10/10/2026
Cinco artes editoriais ilustrativas geradas com imagegen, linguagem fotográfica consistente: mesa grafite, fundo azul escuro, luz ciano e iluminação quente discreta. Assuntos Linux, programação, IA cotidiana, segurança digital e primeiro serviço digital. Interfaces ilustrativas, sem alegação de captura real ou resultado financeiro. Exportações public/assets/trails/{slug}-capa-assinatura-v1.webp, 1440 × 810, qualidade 90. Símbolo oficial dark aplicado separadamente, único, caixa 72 × 72, posição x43/y24. Originais anteriores preservados. Resolver compartilhado atualiza cards e detalhes; ícones de categoria mantidos. Sem publicação. Evidência de layout e recortes em ../auditorias/trilhas-capas-validation-20261010.json.


## Capas de conteúdos em preparação — revisão de 10/10/2026
Estado editorial atual: artigos Hub Data, e-book programação e Jornada Python draft true; produto Jornada Python draft true/catalogStage avaliacao. Estado anterior de Hub Data/programação sem rascunho é histórico. Flags preservadas no principal. Preview isolado local em 4324 expõe somente cópias dos rascunhos para conferir rotas; não constitui liberação editorial ou publicação.
Assinatura v1 agora reconhecida no VisualMedia/StoreCard/catálogo. Card 4:3 da Jornada Python antes cortava o notebook; variante contain/center preserva quadro integral. Catálogo 16:10 e capas 16:9 usam cover/left top. Originais e assets preservados; nenhuma nova imagem gerada. Registro responsivo em ../auditorias/capas-rascunhos-validation-20261010.json. Aprovação de conteúdo e condições comerciais permanece separada da validação visual.


Estado atual 10/10/2026: capas Hub Data/programação/Jornada Python publicadas via PR 274; três artigos e ficha Python liberados. Estados de rascunho anteriores são históricos. Originais/símbolo preservados; evidências no frontend-review.


## Diversidade de cenas — oito capas atuais — 10/10/2026
Status: integrado localmente, publicação pendente. A instrução aprovada substitui a ambientação obrigatória de mesa das Trilhas. Oito novos derivados -diversidade-assinatura-v1.webp, 1440x810, WebP qualidade 90. Capas anteriores preservadas e hashes conferidos. Três artigos, ficha Python e cinco Trilhas recebem cenas distintas; geração built-in image_gen e assinatura SVG oficial separada, 72x72 em x43/y24. Python e Tux vêm de referências verificadas, sem redesenho por IA; cores/proporções preservadas. Tux creditado no detalhe Linux. São ilustrações editoriais, não capturas/evidências/capas oficiais de produtos.
[Direções, fontes e hashes](../auditorias/diversidade-capas-20261010.json). Mestres PNG gerados preservados; intermediários em Workspace/media-dejotacode/diversidade-20261010. Inspeção conjunta: nenhuma das oito usa notebook como protagonista; variam tarefa doméstica, construção modular, percurso, Linux, página web, diálogo, acesso e entrega de serviço. Não substitui auditoria de diversidade de todo o acervo.


## Ficha Store — moldura editorial sem faixas (10/10/2026)

Status: correção local, publicação pendente. A abertura de /store/jornada-python-hotmart/ usa a variante product-visual--editorial-wide para capas -diversidade-assinatura-v1.webp: moldura 16:9 igual ao raster 1440×810, mantendo contain e imagem integral. Elimina as faixas da antiga moldura 16:10 sem cortar Python ou o símbolo DejotaCode. Cards e demais fotos de produtos mantêm suas variantes.


## Acervo local fora do repositório — 10/10/2026

Status: vigente para novos arquivamentos; primeira retirada local concluída, sem publicação. Manter no projeto imagens utilizadas por conteúdo, rascunhos, interface, SEO, fallbacks e procedimentos técnicos. Imagens comprovadamente substituídas vão para /home/dejota/Workspace/media-dejotacode/acervo, com catálogo, caminho anterior, motivo e SHA-256 verificado antes da retirada. Consultar esse catálogo antes de gerar ou reutilizar imagens; conferir assunto, referência, licença, símbolo e diversidade visual. Não excluir por ausência de referência literal: existem caminhos dinâmicos.

Oito capas antigas substituídas foram arquivadas, com originais idênticos por hash. [Inventário e lacunas da revisão](../auditorias/acervo-imagens-inventory-20261010.json). Referências em auditorias anteriores registram o estado histórico e não indicam arquivos ativos. A retirada reduz os arquivos do checkout e de futuras publicações; o histórico Git continua contendo as versões anteriores, sem reescrita. Acervo local precisa ser incluído na próxima validação de backup, sem cópia externa nesta etapa.

Segunda rodada: mais 44 arquivos legados arquivados localmente após conferir também HTML/CSS/JS/JSON/XML do build, totalizando 52 arquivos e 1.555.215 bytes retirados do checkout. Imagens OG e Portfólio identificadas como usos dinâmicos e mantidas. Originais dependentes da receita de composição permanecem no projeto; referências documentais restantes exigem revisão. Catálogo preserva cada caminho, hash e justificativa.

Terceira rodada: 52 originais técnicos e dois arquivos com referências históricas arquivados após conferir ausência de uso na fonte e no build. A receita scripts/compose-signature-batch.py resolve fontes ausentes no acervo; variável DEJOTACODE_MEDIA_ARCHIVE ou --archive-root permite outro local. --verify-only confere fontes e entregas sem gerar arquivos; --output-dir e --only-source permitem recuperação isolada. A galeria histórica docs/brand/preview-assinaturas.html usa caminhos locais para consulta, sem servir o acervo pela aplicação. Fontes de tratamento e mestres em docs/brand continuam como material técnico do projeto, fora de public.

Fechamento desta triagem de public: 106 imagens arquivadas, 7.573.586 bytes, integridade conferida. Catálogo visual pesquisável em /home/dejota/Workspace/media-dejotacode/acervo/catalogo.html. Recuperação: 49 fontes e entregas verificadas; uma reconstrução isolada reproduziu exatamente o SHA-256 aprovado. Build/QA/documentação do candidato aprovados. Acervo não foi enviado externamente e ainda deve entrar na próxima validação de backup. Materiais técnicos em docs/brand mantidos; histórico Git não reescrito.


## Acervo de imagens — backup local validado (10/10/2026)

Status: registro. Snapshot de Workspace/media-dejotacode, incluindo catálogo, 106 imagens arquivadas e intermediários das capas. Restauração temporária isolada conferiu todos os arquivos por SHA-256; 49 fontes da receita verificadas e uma reconstrução reproduziu o hash aprovado. [Evidência e lacunas](../auditorias/acervo-backup-validation-20261010.json). Originais e backups anteriores preservados, sem publicação ou cópia externa. Cópia na mesma máquina/sistema de arquivos não protege contra perda física do disco. Mestres gerados no ChatGPT não estão incluídos nesse snapshot.


## Diversidade dos destaques Home/Blog — 10/10/2026

Status: integrado localmente, publicação pendente. Três ilustrações distintas substituem mesas genéricas: escolher pequeno projeto (modelos 3D), hábitos de segurança (cena cotidiana ilustrativa) e estudo com objetivo (percurso arquitetônico). [Briefs e hashes](../auditorias/diversidade-destaques-20261010.json). Capas 1440×810, SVG oficial dark único 72×72 em x43/y24, composto separadamente. Hero Home reconhece também assinatura-v1 e mantém ancoragem left top, máscara e demais variantes. Rotas: /, /blog/, /blog/escolher-primeiro-projeto-portfolio/, /blog/habitos-seguranca-digital-iniciantes/, /blog/como-estudar-tecnologia-sem-se-perder/. Ilustrações não são capturas nem evidências de teste. Capas anteriores preservadas.


## Diversidade das capas de programação — 10/10/2026

Status: integração local, publicação pendente. Quatro ilustrações distintas: camadas HTML/CSS/JavaScript, transformação de valores, montagem artesanal de primeira página e metáfora de pedido/resposta na web. [Briefs, referências e hashes](../auditorias/diversidade-programacao-20261010.json). SVG oficial separado 72×72 em x43/y24; nomes das tecnologias tipografados separadamente, sem simular logos. Rasters 1440×810. Metáforas não substituem diagramas exatos, exemplos de código ou capturas reais. Rotas /blog/html-css-javascript-entenda-diferenca/, /blog/javascript-variaveis-funcoes/, /blog/primeiro-site-html-css/, /blog/como-a-web-funciona/ e recomendações relacionadas. Capas anteriores preservadas para a receita técnica.

Atualização dos destinos históricos da receita: sete capas substituídas em destaques/programação arquivadas, total 113 no catálogo. compose-signature-batch.py verifica entregas históricas no acervo quando ausentes em public; exige --output-dir para reconstruí-las isoladamente. Não recria uma capa histórica automaticamente no site.


## Diversidade das capas de IA — 10/10/2026

Status: integração local, publicação pendente. Quatro cenas ligadas aos artigos: criação de modalidades, direção clara de pedido, prática independente e comparação de evidências. [Briefs e hashes](../auditorias/diversidade-ia-20261010.json). SVG oficial aplicado separadamente; rasters 1440×810. Ilustrações editoriais, sem simular interfaces reais, provas de teste, funcionamento exato de modelos ou garantias. Rotas /blog/o-que-e-ia-generativa/, /blog/prompts-melhores-estudar-trabalhar/, /blog/usar-ia-estudar-sem-dependencia/, /blog/como-verificar-respostas-de-ia/ e /categoria/inteligencia-artificial/. Quatro capas antigas arquivadas; catálogo agora com 117 imagens.


## Capas de IA — referência explícita corrigida em 10/10/2026

Status: integração local, publicação pendente. A revisão do usuário mostrou que as quatro metáforas anteriores comunicavam ações, mas não identificavam IA. Substituídas por chat conceitual gerando conteúdo; contexto/objetivo/formato para um assistente; estudo ativo com dica; e resposta da IA comparada com fontes. Interfaces são ilustrativas e não reproduzem ferramenta real. SVG oficial único composto separadamente. Versões anteriores preservadas no acervo local, agora com 121 imagens. [Briefs e hashes](../auditorias/diversidade-ia-20261010.json). Rotas dos quatro artigos e /categoria/inteligencia-artificial/: 40 combinações em 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados; categoria e artigo mobile inspecionados. Backup local restaurou 179 arquivos idênticos, incluindo 121 imagens arquivadas.


### Cenas mais humanas — orientação aprovada em 10/10/2026
Manter as quatro capas de IA com referência explícita nos conteúdos atuais. Preservar as versões anteriores no acervo para reutilização pertinente; não apagar nem forçar reaproveitamento em assunto incompatível. Nas próximas capas, priorizar pessoas em situações naturais, gestos e expressões plausíveis, com a tecnologia integrada à ação. Reduzir painéis flutuantes, cenários artificiais e repetições de pessoa, roupa, ambiente e composição. Computador pode aparecer quando a tarefa realmente exigir; não é cenário obrigatório. Referência do assunto e símbolo oficial continuam obrigatórios conforme a família.


## Linux — primeira capa com direção humana, 10/10/2026

Status: integração local, publicação pendente. /blog/como-criar-pendrive-bootavel-linux/: pessoa conferindo um dispositivo USB antes da gravação, computador secundário e luz natural. Janela conceitual, sem alegação de captura ou teste real. Sem gravação em andamento. Referência Linux tipografada separadamente; símbolo oficial único 72x72 em x43/y24. [Brief e hash](../auditorias/diversidade-linux-20261010.json). Capa anterior preservada por SHA-256 no acervo, agora com 122 imagens. Demais seis artigos Linux aguardam a revisão individual.

Validação desta capa: 8 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados; raster final e artigo mobile inspecionados. Backup restaurou 183 arquivos idênticos, incluindo 122 imagens arquivadas.


## Linux — seis capas restantes com cenas humanas, 10/10/2026

Status: integração local, publicação pendente. Comandos: aula com mentora; distribuição: comparação de opções; sessão live: conferência de áudio com USB; introdução: técnico em infraestrutura; permissões: revisão colaborativa de acesso; pipe: organização de etapas. [Briefs e hashes](../auditorias/diversidade-linux-20261010.json). Pessoas, ambientes e enquadramentos variados. Linux tipografado, sem simular logo; símbolo oficial separado. Interfaces e analogias são ilustrativas, sem alegação de captura ou teste. Seis capas anteriores preservadas no acervo, agora com 128 imagens. Os sete artigos Linux têm novas capas locais. Artigos e categoria /categoria/linux-seguranca/: 72 combinações 320/390/768/1440 e claro/escuro sem problemas; check/build/QA aprovados. Montagem e categoria inspecionadas. Backup restaurou 201 arquivos idênticos, incluindo 128 imagens arquivadas.


## Segurança digital — quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Phishing: pausa para conferir mensagem; 2FA: segunda verificação em dispositivo; senhas: cuidado com recuperação do cofre; VPN: acesso remoto de trabalho em viagem. [Briefs e hashes](../auditorias/diversidade-seguranca-20261010.json). Interfaces conceituais e cenas ilustrativas, não capturas, testes de fornecedor ou garantia de proteção. SVG oficial único e rótulos compostos separadamente. NordPass/NordVPN permanecem no projeto para a Store; capas antigas phishing/2FA arquivadas por hash, total 130 imagens no acervo. Conteúdo e ofertas preservados. Quatro artigos e duas páginas da categoria Linux & Segurança: 48 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Arte VPN corrigida antes da integração: removida interface impossível na tampa do notebook. Backup local restaurou 212 arquivos idênticos, incluindo 130 imagens arquivadas.


## Renda digital — primeiro lote de quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Escolha do serviço: amostras de tarefas; primeiro cliente: conversa específica em comércio; preço do site: escopo, cronograma e cálculo; e-book: organização e revisão de páginas. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Cenas e materiais ilustrativos; não alegam cliente real, prova de receita, taxa recomendada ou garantia de venda. SVG oficial único e rótulos compostos separadamente. Quatro capas anteriores preservadas por hash, total 134 imagens no acervo. Demais conteúdos renda digital aguardam revisão individual. Quatro artigos e três páginas da categoria renda digital: 56 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Backup local restaurou 225 arquivos idênticos, incluindo 134 imagens arquivadas.


## Renda digital — segundo lote de quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Portfólio: apresentação de projetos de estudo; oferta: definição de escopo com pequeno negócio; landing page: teste de contato no celular; primeira renda: tarefa pequena de imagem para comerciante. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Gestos ativos e ambientes distintos; interfaces ilustrativas, sem alegar cliente real, pagamento ou garantia de receita. SVG oficial único aplicado separadamente. Quatro capas anteriores preservadas por SHA-256; acervo agora com 138 imagens. Oito artigos de renda digital renovados localmente, demais conteúdos aguardam revisão. Quatro artigos e três páginas da categoria renda digital: 56 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Backup local restaurou 237 arquivos idênticos, incluindo 138 imagens arquivadas.


## Renda digital — terceiro lote de duas capas humanas, 10/10/2026

Status: integração local, publicação pendente. Foco: reduzir planos a um projeto pequeno; afiliados: avaliar vantagens e limitações com transparência. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Gestos ativos e ambientes distintos; interfaces ilustrativas, sem alegar cliente real, pagamento ou garantia de receita. SVG oficial único aplicado separadamente. Duas capas anteriores preservadas por SHA-256; acervo agora com 140 imagens. Dez artigos de renda digital renovados localmente, demais conteúdos aguardam revisão. Dois artigos e três páginas da categoria renda digital: 40 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Capas finais, artigo mobile e categoria inspecionados. Backup local restaurou 243 arquivos idênticos, incluindo 140 imagens arquivadas.


## Seleção por conteúdo e reuso do acervo — orientação vigente, 10/10/2026

A direção mais humana é uma opção conforme o assunto, não uma regra para toda imagem. Selecionar fotografia, ilustração, animação, conceito técnico ou produto conforme o tema e objetivo. Consultar primeiro o acervo; manter imagens adequadas e adaptar quando necessário, evitando repetição próxima e preservando identidade e símbolo oficial. Novas gerações e substituições em série estão pausadas. Piloto local em documentar-aprendizado-tecnologia: ilustração existente de comparação de registros, sem nova geração; capa anterior preservada durante avaliação do usuário. [Origem, justificativa e hashes](../auditorias/reuso-acervo-piloto-20261010.json).


### Piloto — segunda avaliação semântica, 10/10/2026

A comparação de folhas foi rejeitada como capa de documentar-aprendizado-tecnologia: representa apenas revisão, uma seção secundária. Retomada a imagem existente de registros estruturados na tela e anotações, mais próxima de documentar contexto, comandos, erros e decisões. Objetos decorativos são uma limitação; não tornar a necessidade de variar cenário mais importante que a adequação temática. Ler o artigo integralmente, identificar sua mensagem central e avaliar a imagem antes de trocar; manter a original quando as alternativas forem menos pertinentes. Nenhuma nova geração, exclusão ou publicação.


### Reuso — piloto Git e GitHub, 10/10/2026

Após leitura integral, selecionada github-resource-v1.webp existente: referências a versões, arquivos e repositório compartilhado são pertinentes ao assunto. Computadores são elementos da tarefa, não cenário obrigatório. Imagem metafórica, não captura nem diagrama exato; não explica sozinha a diferença entre Git local e hospedagem GitHub. Originais e símbolo existente preservados, sem nova geração ou publicação. [Justificativa e limitações](../auditorias/reuso-acervo-git-20261010.json).


### Piloto Git — correção de assinatura, 10/10/2026

Reuso inicial falhou na revisão de identidade: placa branca e marca em escala grande. Nova irmã github-resource-assinatura-v2.webp remove somente o canto 300x280 e aplica SVG oficial dark 72x72 em x43/y33 para raster 1448x1086. Pixels fora do canto preservados; original mantido. Conferir adequação temática e assinatura separadamente antes de apresentar qualquer reuso como concluído.


## Seleção por conteúdo — lote local de 10/10/2026

A direção humana é uma opção conforme o assunto. Ler o conteúdo, identificar a mensagem central e consultar primeiro o acervo. Manter imagens adequadas; reutilizar somente quando a alternativa representar melhor o conteúdo. Programação pode pedir referência técnica, animação pode pedir ilustração e produtos pedem fidelidade. Diversidade não prevalece sobre pertinência. Símbolo oficial, origem, recorte e clareza precisam de conferência independente. Não considerar uma assinatura antiga aprovada só porque a imagem carrega.

Aplicado o lote de 97 decisões em artigos, Store, Recursos e Trilhas. [Tabela e lacunas](../auditorias/selecao-imagens-lote-20261010.md). 17 usos alterados com imagens existentes, sem novas cenas; dez assinaturas com placa branca permanecem como lacunas que exigem limpeza individual. Originais preservados, custo monetário zero, sem publicação ou cópia externa. Capturas reais Méliuz não recebem assinatura adicional. Reuso entre artigo, recurso e ficha do mesmo produto é intencional.

Ficha ElevenLabs: variante product-visual--editorial-wide já existente também aplicada ao raster 720x405, mantendo proporção 16:9 sem faixas na abertura. Cards 4:3 e Store 16:10 mantêm a variante de catálogo.

Catálogo Store: artes -assinatura-v2 ancoradas em left top, com especificidade da família, para impedir o corte do símbolo de ElevenLabs pelo center top anterior. Validação responsiva posterior cobre catálogo e categorias.


## Recursos — dez assinaturas corrigidas, 10/10/2026

Status: aplicado localmente, validação pendente. As dez placas antigas registradas no lote foram removidas; versões irmãs -resource-assinatura-v2.webp têm SVG oficial único, 72x72 em x43/y33. Cena preservada fora do pequeno canto, originais mantidos. Recursos normal/compact e seis categorias usam as versões corrigidas. Registro: docs/brand/resource-signatures-20261010.json. Sem publicação ou cópia externa.

### Assinaturas corrigidas e validadas — 10/10/2026

As dez pendências foram resolvidas localmente: um símbolo oficial por imagem, sem placa branca, largura de 5% e margens de 3%. Originais intactos; somente a pequena região da antiga placa foi reconstruída. Fora do canto de 362 × 326 px, os pixels são idênticos aos originais. A recuperação isolada reproduziu os dez SHA-256 finais. Nove URLs de Recursos e 72 combinações de largura/tema passaram sem falhas de carregamento, transbordamento ou corte do símbolo. Registro: `docs/auditorias/resource-signatures-validation-20261010.json`. As referências anteriores a dez pendências ficam superadas por este fechamento. Sem publicação ou cópia externa.

### Méliuz Pocket Sort — assinatura da capa corrigida

A capa composta de capturas reais também recebe a assinatura oficial no fundo, fora das telas e sem alterar evidências. Original `evidencias-capa-v1.svg` preservado; uso atualizado para `evidencias-capa-assinatura-v2.svg` em Blog e Recursos. Símbolo 72 × 72 px em x43/y32, sem placa, na composição 1440 × 1080. Correção local, sem publicação.

Méliuz: validação final passou em 32 combinações (320/390/768/1440 px, claro/escuro). Recorte em Recursos alinhado ao topo para preservar assinatura. XML SVG válido; dados das capturas embutidas idênticos ao original.

### Acervo local — revisão de assinaturas, 10/10/2026

140 originais conferidos por SHA-256 e preservados. 88 entradas receberam ou passaram a apontar para versões corrigidas: 50 aproveitam correções oficiais já aprovadas, 38 receberam o vetor oficial sobre a composição original. 42 já tinham assinatura oficial. Cinco referências de fornecedor e cinco prévias documentais ficam identificadas sem marca adicional. MX Anywhere usa a correção aprovada, evitando duplicação da assinatura inferior antiga. Catálogo local mostra versão preferida e link ao original. Nenhuma imagem foi aplicada automaticamente ao site. Evidência: `docs/auditorias/acervo-assinaturas-validation-20261010.json`.

### Assinatura aplicada nos modelos do projeto — 10/10/2026

As imagens escolhidas por conteúdo permanecem. Capas de Logitech MX Keys Mini, Fifine AM8 e SSD SanDisk recebem assinatura editorial oficial em SVG sobre o bitmap original integralmente embutido; não alegam fotografia própria nem endosso do fabricante. Originais preservados. Seletores compartilhados de VisualMedia, StoreCard, Store, Home e guias de artigo passam a proteger o canto de imagens `-assinatura-` também em SVG. Não adicionar outro símbolo a uma versão assinada. Capturas documentais, retratos, identidade institucional e anúncios do fornecedor são exceções identificadas e não devem receber assinatura indiscriminada. O acervo não deve substituir automaticamente uma capa escolhida por conteúdo.

Fechamento: 121 URLs públicas, incluindo paginação, em 320/390/768/1440 px e claro/escuro (968 combinações), sem problemas. 75 assets assinados encontrados visíveis; nenhum asset assinado esperado foi substituído silenciosamente pelo fallback. Tab com foco visível e detalhes expansíveis conferidos. Check/build/QA aprovados. Três bitmaps originais e hashes preservados; SVGs válidos, uma assinatura por composição. Evidência: `docs/auditorias/project-signatures-validation-20261010.json`. Regra aplicada localmente, sem publicação.


### Correções de pertinência e fidelidade — 10/10/2026

Status: integrado localmente e validado; publicação pendente. Quatro produtos usam fotografias de referência de fornecedor intactas, embutidas em SVG editorial: FIFINE AM8 preto, UGREEN Uno 6 em 1, Baseus FM11 preto 10.000 mAh e FC11 preto, referência da variante 10.000 mAh/22,5W. Não redesenhar portas, controles, materiais ou potências. O FC11 da ficha oferece capacidades diferentes: a foto representa uma variante, não todas. A referência visual não revalida links comerciais, preço, estoque, capacidades ou desempenho da oferta.

Símbolo oficial único na composição própria, fora da fotografia: 72x72 em x43/y24, imagem 1440x810. Nenhuma marca adicional aplicada dentro da foto; identidade do fornecedor preservada. Uso documental das fotos ainda não comprovado para publicação; manter como lacuna explícita. Sem publicação, push, nova geração ou custo monetário.

Três SVGs editoriais próprios substituem metáforas fracas por pastas digitais (organizar ambiente), exemplo correto do artigo (JavaScript) e calendário conceitual (Metricool). Calendário não é captura real nem promete comportamento atual da interface. Store e Recursos Metricool mantêm as imagens de métricas.

Fontes e sete capas anteriores preservadas em acervo local; recuperação isolada por hash aprovada. Receita: scripts/compose-critical-covers.py. [Registro de fontes e validação](../auditorias/correcoes-criteriosas-imagens-2026-10-10.json).

Validação final: sete assinaturas com geometria idêntica ao SVG oficial; sete originais intactos; 37 rotas e 296 combinações de largura/tema sem falhas de carregamento, overflow, corte da marca ou da área principal das novas capas. Check 79 arquivos sem diagnósticos; build 123 páginas e QA de links/HTML aprovados. Restauração isolada local: 26 arquivos idênticos. Pendência documental preexistente da monetização permanece separada.


Aprovação visual do usuário registrada em 10/10/2026 às 19:53 (America/Sao_Paulo): sete capas corrigidas aprovadas no resultado local. Publicação permanece pendente; autorização de uso das quatro fotografias de fornecedor ainda sem confirmação documental. Esta aprovação visual não altera essa lacuna.
