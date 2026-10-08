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
- `docs/blog-repaginacao-2026-10-08.md`: registro desta implementação e validação.

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
- `git diff --check` global apontou uma linha em branco final preexistente em `docs/dejotastore-catalog-v1.md`, arquivo fora do escopo. As alterações desta tarefa foram verificadas separadamente.
- Nenhum push ou deploy em produção foi realizado. As demais alterações preexistentes do worktree foram preservadas.

## Ajuste pontual — 08/10/2026, 17:21
Alinhamento vertical dos rótulos do Blog corrigido com `align-items: center` em `.blog-page .post-card__eyebrow`, após captura enviada pelo usuário. CSS restrito ao Blog; diff sem problemas e preview HTTP 200. Revisão visual final nos dois temas pendente; sem push ou deploy.

## Pacote local para publicação

Visual aprovado pelo usuário. Candidato isolado em `release/blog-editorial-20261008`, baseado em `official/main` (`9fb07bf`). Inclui somente Blog, marca global, ícones necessários e este registro; preserva outras alterações locais no projeto original.

Validação independente do candidato: Astro check sem erros, avisos ou hints; build de 115 páginas; QA com 6251 referências internas, zero links quebrados, 403 imagens e zero problemas de HTML. Auditoria visual exaustiva em mais navegadores permanece fora desta validação.

Sem push ou publicação. Próximo passo: autorização específica para publicar o candidato.
