> HISTÓRICO — revisão de organização em 09/10/2026: a worktree dejotacode-blog-release foi encerrada com aprovação, após preservação validada. Caminhos, previews e próximos passos abaixo descrevem a etapa original. Para continuar, usar /home/dejota/Workspace/fullstack/dejotacode, preview 4321, e consultar [índice vigente](../README.md) e [consolidação](../operacao/consolidacao-local-2026-10-09.md). Não executar instruções antigas de retomada.

# Blog — repaginação editorial equilibrada

Data: 08/10/2026
Estado: implementado e validado localmente; sem push ou publicação.

## Escopo
Refinamento do arquivo do Blog e da marca compartilhada. Conteúdos, cinco categorias, URLs, ordenação, SEO, paginação e links comerciais foram preservados. Ajustes de layout e imagem dos cards estão limitados às páginas de arquivo do Blog. O componente compartilhado `PostCard` mantém metadados e aparência padrão nas páginas de categoria e artigos.

## Alterações
- `src/styles/blog.css`: reproduz o eyebrow da Home para “Aprenda no seu ritmo”; sobrescrita de maior especificidade restrita ao hero do Blog mantém a descrição alinhada ao título no desktop; rótulos de categoria/tipo, faixa de metadados/CTA, bloco Recursos úteis e enquadramento topo/esquerda para imagens dos cards do Blog.
- `src/components/PostCard.astro`: suporte opt-in a ícones de metadados, além da chamada de leitura dentro da mesma faixa. O padrão permanece desativado fora dos arquivos do Blog.
- `src/components/CategoryIcon.astro` e `src/data/categoryIcons.ts`: inclusão dos ícones vetoriais de calendário e relógio no catálogo oficial. Os SVGs são decorativos (`aria-hidden="true"`); data e duração continuam como texto.
- `src/pages/blog/index.astro` e `src/pages/blog/[page].astro`: habilitação dos ícones nos cards dos arquivos e substituição do encerramento por Recursos úteis com links para Recursos e Trilhas.
- `src/components/Brand.astro`: “Code” recebe `--color-accent-strong`, token com valores apropriados aos temas escuro e claro.
- `docs/auditorias/blog-repaginacao-2026-10-08.md`: registro desta implementação e validação.

A alteração local preexistente em `src/components/visual/VisualMedia.astro` foi preservada sem edição. Ela continua compartilhada; o novo enquadramento no arquivo do Blog é aplicado separadamente em `blog.css`.

## Validação
- `npm run check`: passou; 76 arquivos, 0 erros, 0 avisos e 0 hints.
- `npm run build`: passou; 115 páginas estáticas geradas.
- `npm run qa`: passou; 115 HTMLs, 6.251 referências internas sem destinos quebrados, 403 imagens e 259 controles verificados, zero problemas de HTML.
- Rotas `/blog/`, `/blog/2/`, `/categoria/programacao/` e `/blog/elementor-para-iniciantes/`: HTTP 200.
- Responsividade do Blog: 360, 390, 768 e 1440 px sem overflow horizontal. Descrição e título compartilham a margem; chamada de leitura permanece na faixa dos metadados em desktop e quebra naturalmente em larguras menores.
- Teclado: “Ler conteúdo” recebeu foco com contorno visível de 3 px.
- Contraste do turquesa da marca sobre o fundo: 13,15:1 no tema escuro e 4,97:1 no tema claro.
- Categorias e artigo Elementor conferidos visualmente; os cards mantêm a apresentação padrão e não recebem ícones de metadados. Os dois cards relacionados no artigo também permanecem sem esses ícones.
- O recorte original estava escondendo parte do símbolo nos primeiros cards da grade. Após alinhar as imagens ao topo/esquerda dentro de `.blog-page`, o símbolo ficou visível nas seis capas verificadas, sem editar o CSS compartilhado de mídia.
- Capturas do preview: Blog em desktop nos temas claro e escuro; versão móvel a 390 px no tema claro; grade com as seis capas enquadradas.

## Preview local
http://localhost:4321/blog/

## Pendências e observações
- QA visual manual feito no preview local, sem auditoria exaustiva de todos os artigos, dispositivos ou navegadores.
- Durante a inspeção, chamadas de analytics para `localhost:8787` falharam porque esse serviço não estava ativo; a falha não impediu a navegação nem o render das páginas.
- `git diff --check` global apontou uma linha em branco final preexistente em `docs/editorial/dejotastore-catalog-v1.md`, arquivo fora do escopo. As alterações desta tarefa foram verificadas separadamente.
- Nenhum push ou deploy em produção foi realizado. As demais alterações preexistentes do worktree foram preservadas.

## Ajuste pontual — 08/10/2026, 17:21
Alinhamento vertical dos rótulos do Blog corrigido com `align-items: center` em `.blog-page .post-card__eyebrow`, após captura enviada pelo usuário. CSS restrito ao Blog; diff sem problemas e preview HTTP 200. Revisão visual final nos dois temas pendente; sem push ou deploy.

## Pacote local para publicação

Visual aprovado pelo usuário. Candidato isolado em `release/blog-editorial-20261008`, baseado em `official/main` (`9fb07bf`). Inclui somente Blog, marca global, ícones necessários e este registro; preserva outras alterações locais no projeto original.

Validação independente do candidato: Astro check sem erros, avisos ou hints; build de 115 páginas; QA com 6251 referências internas, zero links quebrados, 403 imagens e zero problemas de HTML. Auditoria visual exaustiva em mais navegadores permanece fora desta validação.

Sem push ou publicação. Próximo passo: autorização específica para publicar o candidato.

## Refinamento local de páginas de artigo — 08/10/2026

Estado: implementado no worktree `dejotacode-blog-release`, branch `release/blog-editorial-20261008`, sobre o candidato `0f8d8ef`. Sem commit, push, merge ou publicação.

### Alterações
- `src/pages/blog/[slug].astro`: usa o ícone oficial da categoria e ícones decorativos de calendário/relógio; filtra H2 para o sumário e não exibe sumário vazio; mantém sumário desktop e oferece `details/summary` acessível em tablet/celular; prioriza a próxima ação contextual antes do compartilhamento.
- `src/styles/article.css`: reduz e amplia a área útil do título; mantém texto e capa em duas colunas no desktop e empilha informações antes da capa em telas menores; estabiliza a capa em 4:3 com enquadramento no topo/esquerda; refina leitura, sumário e encerramento sem alterar recomendações ou lógica comercial.
- `PostCard.astro` e `VisualMedia.astro` foram preservados; os estilos de capa são exclusivos dos artigos.
- Conteúdo, rotas, SEO, dados estruturados, links comerciais, tags, disclosures, recursos e cards relacionados foram preservados.

### Validação
- No worktree indicado: `npm run check` — passou, 76 arquivos, zero erros, avisos ou hints.
- No worktree indicado: `npm run build` — passou, 115 páginas geradas.
- No worktree indicado: `npm run qa` — passou; 115 HTMLs, 6.251 referências internas, zero destinos quebrados, 403 imagens e zero problemas de HTML/acessibilidade básica.
- `git diff --check` — passou.
- Artigos conferidos no preview: Elementor (8 H2), Metricool (bloco de produto e link `/store/metricool/`, conteúdo de afiliado/disclosure preservados) e Comandos Linux (10 H2, recursos, CTA para a próxima etapa da trilha, e-book e dois artigos relacionados).
- Em 360, 390, 768 e 1440 px: sem overflow horizontal; informações precedem a capa em telas até 1100 px; desktop mantém texto/capa lado a lado e sumário sticky; tablet/celular usam disclosure.
- Teclado: disclosure do sumário abre com Espaço e mostra foco visível de 3 px; link do sumário atualiza o fragmento para a seção correspondente.
- Capas reais verificadas visualmente em desktop e celular: símbolo DejotaCode permanece visível no Elementor e em Comandos Linux.
- Blog e categoria Programação conferidos sem regressão aparente: o Blog continua com três colunas e metadados com ícones; os cards da categoria permanecem sem ícones adicionais. Cards relacionados do artigo Linux continuam presentes.
- Contraste medido para o texto turquesa da categoria e da marca: 4,97:1 no tema claro e 13,15:1 no escuro.
- Capturas do hero foram conferidas nos dois temas e em desktop/celular durante a revisão; não foram exportadas como arquivos do repositório.

### Preview e pendências
- Preview local estático: http://localhost:4322/blog/elementor-para-iniciantes/ (também conferir `/blog/metricool-para-iniciantes-organizar-agendar-conteudo/` e `/blog/comandos-linux-para-iniciantes/`).
- Chamadas externas de analytics registraram CORS no console em `localhost`; isso não bloqueou o render nem as verificações locais, mas o serviço externo não foi validado.
- A validação visual cobre os artigos representativos e quatro larguras no navegador integrado; não substitui testes em navegadores/dispositivos físicos diferentes.
- Alterações seguem locais e não commitadas. Sem push, merge ou publicação.


## Ajustes após capturas anotadas — 08/10/2026

Aplicados localmente: breadcrumbs com menor espaço vertical; avatar oficial circular e autoria junto aos metadados; sumário alinhado à margem esquerda do container; produtos em card horizontal com ícone oficial, selo e disclosure preservados; CTA horizontal responsivo e compartilhamento enxuto. Tokens de identidade preservados, sem adotar o verde do esboço.

Astro check: zero erros, avisos e hints. Build: 115 páginas. QA: zero links quebrados e zero problemas HTML, 445 imagens. Diff check aprovado. Revisão visual final pelo usuário pendente; sem push ou publicação.


## Grid do encerramento — capturas 04 a 08

Sumário limitado ao bloco de leitura; assuntos imediatamente após o texto. Encerramento separado em container completo: produtos com título, descrição e disclosure dentro do painel, CTA compacto e compartilhamento alinhados ao grid. Metadados da autoria mais espaçados; ícones opt-in nos relacionados somente nesta página. Cores oficiais mantidas. Astro check sem erros/avisos/hints; build 115 páginas; QA e diff check aprovados. Revisão visual final pendente; sem publicação.


## Padrão comum dos artigos — 08/10/2026

Corpo, fontes, assuntos e recursos/produtos vinculados permanecem na coluna de leitura; divisória lateral acompanha todo o conjunto. Cards têm espaçamento interno ampliado. Bloco explicativo repetido removido; disclosure comercial preservado. Continuidade de trilha aparece abaixo somente quando há vínculo cadastrado; e-book contextual e relacionados preservados. Regra implementada no template comum, sem editar artigos individuais. Revisão visual pendente; sem publicação.


## Cards unificados e continuidade fixa

ArticleGuideResources reúne produtos e recursos em cards com imagem à esquerda, descrição e seta para conteúdo; elimina duplicação por destino Store. Disclosure, status editorial e informações do recurso preservados. Continue aprendendo fixo em todos os artigos, com texto aprovado e link à trilha vinculada ou /trilhas/. Borda acompanha os recursos. Build: 115 páginas; QA aprovado, 480 imagens. Exemplos de revisão: Comandos Linux e Elementor. Sem publicação; revisão visual pendente.


## Conferência ampla — 08/10/2026, 20:19

Astro check: 77 arquivos, zero erros, avisos e hints. Build: 115 páginas. QA: 6208 referências internas, zero destinos quebrados, 480 imagens, 259 controles, zero problemas HTML. Auditoria adicional dos 42 artigos: um H1 por página, IDs únicos, fragmentos existentes, destinos de cards não duplicados, imagens com alt/dimensões, CTA de trilha único em todos. Arquivo Blog: sete páginas e 42 artigos encontrados. Total: 35 cards de guia.

Limitações: conferência atual de código/HTML, sem nova inspeção visual em navegador; screenshots anteriores cobrem etapas anteriores. CSS ainda contém sobrescritas acumuladas de ajustes e deve ser consolidado sem mudar o resultado aprovado. StoreProductsInArticle não é mais utilizado no template; as alterações locais desse componente ficaram fora do fluxo atual e devem ser retiradas do pacote final após conferir o diff. Integração real de analytics e testes em dispositivos/navegadores continuam pendentes. Sem push ou publicação.


## Organização final local

CSS reduzido de 661 para 591 linhas: removidas 25 declarações já sobrescritas por regras posteriores idênticas e estilos de blocos sem uso no template. Alterações experimentais de StoreProductsInArticle retiradas do candidato; componente original preservado. Check sem erros/avisos/hints, build 115 páginas, QA aprovado. Revisão visual final do estado consolidado pendente. Sem publicação.
