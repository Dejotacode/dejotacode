# Sistema visual vigente
Situação: vigente; aplicação local em validação. Revisão: 09/10/2026.
Responsável: @dev. Escopo: frontend público.
Regras: [Documento Mestre](frontend-master.md). Valores executáveis: src/styles/tokens.css.
O histórico anterior foi preservado em [histórico visual](history/visual-system-before-master-2026-10-09.md); suas regras substituídas não são instruções vigentes.

## Tokens oficiais
Esta tabela foi extraída do código na consolidação. Alterar o código e atualizar a tabela na mesma mudança.
| Tema/uso | Token | Valor |
| --- | --- | --- |
| Escuro e medidas | --font-heading | "Plus Jakarta Sans Variable", "Plus Jakarta Sans", Inter, system-ui, sans-serif |
| Escuro e medidas | --font-body | "Inter Variable", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif |
| Escuro e medidas | --font-code | "JetBrains Mono Variable", "JetBrains Mono", "SFMono-Regular", Consolas, monospace |
| Escuro e medidas | --color-bg | #0a0d12 |
| Escuro e medidas | --color-surface | #121721 |
| Escuro e medidas | --color-surface-soft | #0e131b |
| Escuro e medidas | --color-footer | #080b10 |
| Escuro e medidas | --color-border | #1e2633 |
| Escuro e medidas | --color-border-strong | #405069 |
| Escuro e medidas | --color-text | #f7f8fa |
| Escuro e medidas | --color-text-muted | #aab6ca |
| Escuro e medidas | --color-text-subtle | #8491a6 |
| Escuro e medidas | --color-accent | #00e5ff |
| Escuro e medidas | --color-accent-hover | #3aecff |
| Escuro e medidas | --color-accent-strong | #28e9ff |
| Escuro e medidas | --color-accent-contrast | #031014 |
| Escuro e medidas | --color-focus | #66efff |
| Escuro e medidas | --color-error | #ef6b73 |
| Escuro e medidas | --color-glow | rgb(0 229 255 / 10%) |
| Escuro e medidas | --color-shadow | rgb(0 0 0 / 28%) |
| Escuro e medidas | --brand-symbol | url("/assets/brand/dejotacode-symbol-dark.svg") |
| Escuro e medidas | --grid-line | rgb(68 88 111 / 25%) |
| Escuro e medidas | --grid-pattern | linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) |
| Escuro e medidas | --type-eyebrow | 600 .73rem/1.5 var(--font-code) |
| Escuro e medidas | --tracking-eyebrow | .1em |
| Escuro e medidas | --size-title-page | clamp(2rem, 4vw, 3.3rem) |
| Escuro e medidas | --size-title-media | clamp(2rem, 3.8vw, 3.5rem) |
| Escuro e medidas | --size-title-reading | clamp(1.8rem, 3vw, 2.8rem) |
| Escuro e medidas | --size-title-section | clamp(1.5rem, 2.5vw, 2rem) |
| Escuro e medidas | --leading-title | 1.15 |
| Escuro e medidas | --leading-section | 1.25 |
| Escuro e medidas | --tracking-title | -.035em |
| Escuro e medidas | --tracking-section | -.025em |
| Escuro e medidas | --size-card-title | clamp(1.1rem, 1.6vw, 1.35rem) |
| Escuro e medidas | --size-card-title-featured | clamp(1.45rem, 2.4vw, 2.15rem) |
| Escuro e medidas | --size-card-title-trail | 1.35rem |
| Escuro e medidas | --size-meta | .82rem |
| Escuro e medidas | --space-control | 2.75rem |
| Escuro e medidas | --space-brand-protection | .5rem |
| Escuro e medidas | --container | 73.75rem |
| Escuro e medidas | --space-page | clamp(1rem, 4vw, 2rem) |
| Escuro e medidas | --radius-sm | 0.5rem |
| Escuro e medidas | --radius-md | 0.75rem |
| Escuro e medidas | --radius-lg | 1rem |
| Escuro e medidas | --shadow-card | 0 20px 60px var(--color-shadow) |
| Escuro e medidas | --transition-fast | 180ms ease |
| Claro | --color-bg | #f7f9fc |
| Claro | --color-surface | #ffffff |
| Claro | --color-surface-soft | #f1f5f9 |
| Claro | --color-footer | #eef3f8 |
| Claro | --color-border | #d7e0ea |
| Claro | --color-border-strong | #8190a5 |
| Claro | --color-text | #111827 |
| Claro | --color-text-muted | #4a5870 |
| Claro | --color-text-subtle | #607086 |
| Claro | --color-accent | #00cbe5 |
| Claro | --color-accent-hover | #00bad3 |
| Claro | --color-accent-strong | #00778a |
| Claro | --color-accent-contrast | #031014 |
| Claro | --color-focus | #006f80 |
| Claro | --color-error | #b4232f |
| Claro | --color-glow | rgb(0 172 195 / 10%) |
| Claro | --color-shadow | rgb(15 23 42 / 12%) |
| Claro | --brand-symbol | url("/assets/brand/dejotacode-symbol-light.svg") |
| Claro | --grid-line | rgb(65 83 105 / 13%) |
## Componentes e variantes
| Função | Implementação | Variante |
| --- | --- | --- |
| Marca e navegação | components/layout/Brand, Header, Footer | Marca normal/compacta; navegação desktop/mobile |
| Ícone oficial | components/ui/CategoryIcon | Registro categoryIcons; símbolo social é exceção de marca |
| Paginação | components/ui/Pagination | Estado atual via aria-current |
| Card editorial | components/content/PostCard | Regular/destaque; composição Blog e descoberta |
| Card de trilha | components/content/TrailCard | Orientação de aprendizagem, não oferta |
| CTA editorial | components/content/ConversionCTA | Normal/compacto |
| Recomendação | components/resources/ResourceCard | Utilitário, limitações preservadas |
| Produto | components/store/StoreCard | Editorial opt-in, oferta e ficha preservadas |
| Mídia | components/visual/VisualMedia | wide/card/square; recorte por família |
| Rótulo | .eyebrow em global.css | Papel comum; margens/display podem variar |
| Botão | .button/.button-primary em global.css | Primário, secundário, ações especializadas |
Não fundir cards de finalidades diferentes. CSS específico pode definir layout e variantes justificadas, sem recriar valores de identidade.

CTA normal usa --size-title-cta = clamp(1.6rem,3vw,2.4rem). Cards regulares de Blog/categorias usam --size-card-title; destaque usa --size-card-title-featured. Recortes existentes permanecem por família.

## Setas de ação — padrão aprovado em 09/10/2026
Usar CategoryIcon arrow-right, traço oficial 1.8/currentColor, classe action-arrow: --size-action-arrow 18px em links/cards e --size-action-arrow-primary 20px em .button-primary. Decorativas com aria-hidden; nome do destino permanece no texto. Variante arrow-up-right preserva indicação externa quando já usada em recomendações. Não converter setas que fazem parte de texto editorial ou fluxos de dados. Botões com rótulo dinâmico preservam o SVG e atualizam somente o nó do texto.

## Hero com imagem integrada — revisão local 09/10/2026
Home e Store usam grid sem intervalo e mídia com avanço de 5rem sob a coluna de texto; texto em camada superior. Máscara horizontal tem fade até 42% e termina suavemente na borda oposta. No celular, avanço vertical de 1–1,5rem e máscara vertical até 35%. Home respeita superfície do painel; Store respeita fundo da página. Não mudar as imagens para criar o efeito; títulos e ações permanecem HTML. Aplicação restrita aos dois heroes, sem alterar cards do catálogo.

## Contato — destinos comerciais compactos
contact-destinations--attendance reutiliza os cartões de Serviços/Parcerias em uma coluna dentro do atendimento, abaixo do WhatsApp e antes do mapa; padding .8rem, ícones 24px, título 1rem e descrição .85rem. URLs e descrições preservados.
