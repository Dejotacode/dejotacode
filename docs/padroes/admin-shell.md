# Admin shell — identidade DejotaCode

Situação: vigente após validação e publicação desta mudança.
Revisão: 12/10/2026.
Escopo: estrutura visual compartilhada das rotas `/admin/*`.
Referências: [Documento Mestre](frontend-master.md), [Sistema visual](visual-system.md) e valores executáveis em `src/styles/tokens.css`.

## Objetivo

O Admin usa a mesma identidade da DejotaCode sem copiar a composição das páginas públicas. Ele continua sendo uma ferramenta de trabalho: simples, legível e orientada à tarefa.

## Regras

- Reutilizar os tokens oficiais de cor, tipografia, espaçamento, borda, raio, foco, transição, grid e glow; não criar uma paleta paralela para o Admin.
- Usar o componente oficial `components/layout/Brand.astro`. No shell administrativo, a marca completa aparece quando houver espaço; telas pequenas podem reduzir a apresentação para preservar os controles.
- Ciano é sinal de marca, foco, seleção e ação. Não usar como preenchimento decorativo indiscriminado.
- O grid técnico e o glow podem aparecer de forma discreta na topbar ou em superfícies de abertura, sem competir com o conteúdo.
- Navegação global mantém quatro destinos: Dashboard, Conteúdo, Mídia e Métricas. Estado ativo precisa ser evidente por cor e forma, sem depender apenas da cor.
- Rótulos técnicos curtos reutilizam `--type-eyebrow` e `--tracking-eyebrow`; títulos e texto continuam usando as famílias oficiais do sistema visual.
- Temas claro e escuro preservam a mesma estrutura. Apenas tokens de cor e o arquivo de marca adequado ao tema mudam.
- A topbar não deve concentrar ações de página. Ações específicas permanecem no conteúdo da rota correspondente.
- O Admin não ganha ícones improvisados. Qualquer iconografia futura deve seguir `icon-system.md` e os componentes oficiais existentes.

## Implementação compartilhada

- `src/layouts/AdminLayout.astro`: topbar, marca, tema e montagem da navegação.
- `src/components/admin/AdminNav.astro`: navegação global e estado ativo.
- `src/components/admin/MediaFlowNav.astro`: navegação contextual da área de Mídia.
- `src/styles/admin-metrics.css` e estilos específicos: composição das páginas, sem redefinir tokens de identidade.

## Direção visual aprovada

A topbar usa superfície oficial, grid técnico discreto e glow baixo. A marca completa reforça a identidade no desktop. O rótulo `Admin` identifica o contexto privado sem criar um novo logotipo. A navegação usa superfícies neutras e reserva o ciano para o destino ativo e para foco/hover relevante.

A prioridade continua sendo simplicidade operacional: identidade reconhecível, pouca ornamentação e nenhuma perda de clareza.

## Conteúdo interno das páginas

A mesma identidade se estende ao conteúdo das rotas administrativas sem transformar todas as páginas na mesma composição.

- `admin-kicker` usa o papel tipográfico oficial de eyebrow em fonte mono, ciano e tracking compartilhado.
- `h1` e títulos de seção usam a família heading e as escalas/taxas de leitura definidas nos tokens oficiais.
- Introduções, notas e estados secundários usam `--color-text-muted`; ciano não substitui hierarquia textual.
- Cards operacionais usam superfície e borda neutras. Glow é reservado para aberturas ou destaques discretos, não para cada card.
- Cards clicáveis precisam ter estado hover e foco perceptível, com movimento mínimo e borda reforçada; foco usa `--color-focus`.
- Dashboard prioriza pendências e próxima ação. Quantidades relevantes podem usar ciano, mas o card inteiro não vira um bloco de destaque.
- Seções de Mídia e Métricas reutilizam o mesmo padrão de superfície/título/nota; controles específicos podem manter CSS local quando a função exigir.
- Ações primárias continuam usando `.button-primary`; ações secundárias preservam `.button`.

Objetivo dessa camada: fazer Dashboard, Conteúdo, Mídia e Métricas parecerem partes do mesmo produto, sem eliminar as diferenças funcionais entre elas.
