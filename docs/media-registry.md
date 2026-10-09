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
