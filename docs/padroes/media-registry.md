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
