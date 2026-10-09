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
