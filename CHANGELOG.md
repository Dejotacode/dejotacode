# Changelog

Todas as mudanças relevantes do DejotaCode serão registradas neste arquivo.

## [1.15.0] - 2026-09-16

### Adicionado

- Relatório read-only de segurança de mídia no Admin Editor.
- Cruzamento de referências no Markdown canônico, capas `coverKey` do CMS/D1, metadados de mídia e disponibilidade pública no R2.
- Classificação conservadora em `Em uso`, `Possivelmente órfã` e `Requer revisão`.
- Resumo visual com totais e verificação de disponibilidade no R2.

### Segurança e escopo

- Nenhuma ação de exclusão foi adicionada.
- `Possivelmente órfã` exige revisão humana antes de qualquer ação futura.
- Falhas ou inconsistências de verificação caem em `Requer revisão`, nunca em órfã automática.
- Nenhuma migration, mudança de API, CTA, funil ou taxonomia de analytics.

### Validação em produção

- 23 imagens analisadas.
- 22 classificadas como em uso.
- 0 classificadas como possivelmente órfãs.
- 1 classificada como requer revisão.
- 23 de 23 objetos confirmados como acessíveis no R2.
- Smoke de produção: 10/10 verificações aprovadas.

## [1.14.0] - 2026-09-16

### Adicionado

- Detecção de imagens referenciadas no Markdown canônico carregado pelo Admin.
- Filtro de uso na biblioteca: `Todas`, `Em uso` e `Não referenciadas`.
- Selos por imagem: `Usada neste post`, `Em uso no conteúdo canônico` e `Não referenciada no Markdown canônico`.

### Segurança e escopo

- Nenhuma ação de exclusão foi adicionada.
- O estado `Em uso` considera apenas referências presentes no Markdown canônico do Git.
- O selo `Usada neste post` também acompanha a edição local atual, sem tratá-la como publicada.
- Nenhuma migration, mudança de API, CTA, funil ou analytics.

### Qualidade e produção

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Teste manual confirmou 1 imagem canônica detectada entre 23 mídias da biblioteca.

## [1.13.0] - 2026-09-16

### Melhorias no Admin

- Biblioteca de imagens agora pode ser recolhida/expandida no Editor.
- Busca textual por alt e caminho do objeto no R2, com normalização de acentos.
- Filtro por contexto: todas as imagens, imagens enviadas para o post atual e biblioteca geral.
- Contador mostra quantas imagens estão visíveis em relação ao total disponível.
- Filtro do post atual reage à troca/edição do slug sem nova consulta à API.

### Segurança e escopo

- A biblioteca continua somente leitura; nenhuma exclusão ou mutation adicional foi adicionada.
- Nenhuma alteração de API, migration, CTA, funil ou taxonomia de analytics.
- Git/Markdown permanece como fonte canônica do conteúdo público.

### Qualidade e produção

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Teste manual em produção confirmou recolhimento/expansão, busca por `git` e filtro `Biblioteca geral`.

## [1.12.0] - 2026-09-16

### Adicionado

- Biblioteca editorial de imagens no Admin Editor, reutilizando mídias já existentes no Cloudflare R2.
- Miniaturas com texto alternativo, tamanho e data de envio.
- Ações `Inserir` e `Copiar URL` para imagens existentes.
- Atualização manual da biblioteca e recarregamento automático após novos uploads.

### Segurança e escopo

- Biblioteca somente leitura; nenhuma exclusão de mídia foi adicionada.
- Reutilização de imagem não cria cópia adicional no R2.
- Nenhuma migration, mudança de API, CTA, funil ou taxonomia de analytics.

### Qualidade e produção

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Teste manual em produção confirmou 23 imagens carregadas e inserção de mídia existente no Markdown/preview.

## [1.11.0] - 2026-09-16

### Operação e recuperação

- Documentação e runbooks reconciliados com o Admin Editorial da v1.10.0 e API v1.6.0.
- Backup D1 manual seguro documentado, com dry-run, SHA-256, manifesto local e retenção conservadora.
- Inventário R2 read-only documentado com validação HTTP por `HEAD` e limitação sobre objetos órfãos explicitada.
- Estratégia de proteção R2 definida antes de qualquer exclusão em massa.

### Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Nenhuma alteração de CTA, funil, campanhas ou taxonomia de analytics.

## [1.10.0] - 2026-09-16

### Adicionado

- Admin Editorial com criação, edição, preview e exportação de Markdown.
- Integração segura com GitHub para branch editorial, commit e Pull Request.
- Publicação assistida com leitura de PR, conflito, CI e squash merge.
- Upload de imagens editoriais no Cloudflare R2 com inserção automática no Markdown.
- Deploy de produção do Cloudflare Pages automatizado a partir da `main`.

### Segurança e operação

- Merge restrito à base `main` e a branches `content/admin-*`.
- `expectedHeadSha` obrigatório e validado antes do merge.
- CI obrigatório antes da publicação.
- Atualização automática do status do CI a cada 5 segundos por até 3 minutos.
- Mensagens de erro de publicação preservadas para diagnóstico.
- Botão de merge ocultado após o PR ser mesclado.

### Conteúdo

- Novos conteúdos sobre phishing, pipe/redirecionamento Linux, documentação do aprendizado, estudo com IA e DevTools.
- Imagem editorial R2 publicada no conteúdo de comandos Linux.

### Qualidade e produção

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Fluxo real Admin → PR → CI → merge → Pages validado com o PR #80.
- API compatível em produção no commit `9789fba`, com versionamento independente do frontend.

## [1.7.2] - 2026-09-16

### Corrigido

- Contraste do CTA de próximo passo nos artigos em temas claro e escuro.
- Legibilidade dos blocos de código no tema claro.
- Validade HTML da homepage e CSS do layout administrativo.

### Adicionado

- Botões `Copiar código` e `Copiar comando` nos blocos fenced dos artigos.
- Comandos Linux apresentados em blocos `bash` copiáveis.
- Atualização dinâmica de `theme-color` conforme o tema ativo.

### Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build: 41 páginas estáticas.
- QA: 1.682 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Validator.nu: 41/41 páginas, 0 erros HTML.
- Responsividade verificada em 1440, 768 e 390 px sem overflow horizontal nos artigos e Admin.

## [1.7.1] - 2026-09-16

### Adicionado

- Tutorial "Como organizar seu ambiente de estudos em tecnologia", publicado na categoria Tecnologia prática.
- Evidência consolidada de aceitação de produção e release notes da entrega pronta para revisão.

### Qualidade e produção

- Versão do projeto atualizada para `1.7.1`.
- Build de produção validado com 41 páginas estáticas.
- QA verificou 1.682 referências internas, com 0 destinos quebrados.
- QA estrutural validou 41 HTML, com 0 páginas com problemas.
- 40 rotas HTML homologadas no domínio oficial com HTTP 200, title e H1.
- Novo conteúdo confirmado no sitemap e no RSS.
- API health confirmada em produção com HTTP 200.
- Deploy do conteúdo homologado no Cloudflare Pages.
- Nenhuma migration D1, alteração de Worker, DNS, R2 ou secrets de produção.

## [1.7.0] - 2026-09-16

### Adicionado

- Baseline técnico de crescimento para orientar decisões da v1.7.0.
- Inventário de indexação e arquitetura editorial das páginas públicas.
- Mapa editorial das quatro trilhas e dos 17 conteúdos publicados.
- `CollectionPage` e `ItemList` em JSON-LD na página de trilhas.
- `BreadcrumbList` em JSON-LD nas páginas de categoria.

### Alterado

- Title e description de `/trilhas/` refinados para Linux, programação, inteligência artificial e segurança digital.
- Titles das categorias refinados para intenção de aprendizado de iniciantes.
- Sitemap ajustado para excluir `/busca/`, o Guia do Iniciante pós-conversão e toda a árvore `/admin/`.
- Linking editorial do artigo sobre primeiro projeto de portfólio reforçado para a trilha de programação e o case DejotaCode.
- Versão do projeto atualizada para `1.7.0`.

### Qualidade e produção

- PR #32 integrado à `main` no commit `8fe8ebea5b8f2f2ff55565029842aa62256b80a4`.
- CI pós-merge #83 concluído com sucesso.
- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção validado com 40 páginas estáticas.
- QA verificou 1.631 referências internas, com 0 destinos quebrados.
- QA estrutural validou 40 HTML, com 0 páginas com problemas.
- Deploy homologado no Cloudflare Pages e no domínio oficial `dejotacode.com.br`.
- Nenhuma migration D1, alteração de Worker, DNS ou secrets de produção.

## [1.6.0] - 2026-09-16

### Adicionado

- Área administrativa dedicada no frontend atual, separada do layout público.
- Tela de autenticação em `/admin/`.
- Dashboard autenticado de métricas em `/admin/metricas/`.
- Cards com totais agregados do funil de crescimento.
- Indicadores derivados de conversão, páginas mais lidas e campanhas.
- Suporte aos temas claro e escuro e layout responsivo.

### Alterado

- Painel administrativo passou a consumir a API existente sem reintroduzir a árvore legada `site/`.
- Área administrativa usa `AdminLayout` próprio para não contaminar o `page_view` público.
- Páginas administrativas configuradas com `noindex, nofollow`.
- Versão do projeto atualizada para `1.6.0`.

### Qualidade e segurança

- PR #29 integrado à `main` no commit `4202408ff0c06a6e4e24649459db9b15c9d44419`.
- CI do head final #60 e CI pós-merge #61 concluídos com sucesso.
- Login, sessão, métricas, logout e bloqueio sem sessão homologados localmente.
- CORS com credenciais e proteção CSRF validados no ambiente local.
- Temas claro e escuro homologados.
- Responsividade validada em mobile 375 px e tablet 768 px.
- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build estático validado com 40 páginas.
- Nenhuma migration, alteração de API, D1, DNS ou secrets de produção.

## [1.5.0] - 2026-09-15

### Adicionado

- Instrumentação first-party para `form_start`, `guide_access`, `trail_start`, `trail_lesson_click` e `trail_complete`.
- Medição agregada do funil de crescimento, complementando `page_view`, `cta_click`, `lead_submit` e `contact_submit`.
- Medição do acesso ao PDF do Guia do Iniciante.
- Medição agregada de início, avanço e conclusão das trilhas.
- Suporte da API aos nove eventos de analytics da taxonomia v1.5.0.
- Agregação por campanha no resumo autenticado da API de métricas.

### Alterado

- Envio de analytics do frontend centralizado em `src/scripts/analytics.ts`.
- `form_start` limitado aos formulários do funil de leads.
- Deduplicação de eventos de trilha movida para `sessionStorage`, sem marcador persistente de analytics.
- Progresso detalhado das trilhas mantido apenas no navegador.
- Mensagem de privacidade das trilhas atualizada para refletir a coleta agregada.
- Documentação de arquitetura atualizada com taxonomia de eventos e modelo de privacidade da v1.5.0.

### Qualidade e produção

- CI do frontend aprovado antes do merge e CI pós-merge #55 concluído com sucesso.
- Build de produção validado com 38 páginas estáticas.
- QA verificou 1583 referências internas, com 0 destinos quebrados.
- QA estrutural validou 38 HTML e 88 controles de formulário, com 0 páginas com problemas.
- API homologada em produção: healthcheck HTTP 200, cinco novos eventos HTTP 201 e evento inválido HTTP 400.
- Persistência dos eventos confirmada no D1 production e registros sintéticos de QA removidos após o teste.
- Frontend publicado no Cloudflare Pages e marcadores da v1.5.0 confirmados no domínio oficial.
- Nenhuma migration, alteração de DNS ou alteração de secrets foi necessária para esta versão.

## [1.4.0] - 2026-09-15

### Adicionado

- Validação automática de links internos após o build, cobrindo destinos gerados no `dist`.
- Validação estrutural e de acessibilidade básica do HTML gerado, incluindo `main`, `h1`, IDs duplicados, texto alternativo de imagens e nomes acessíveis em controles de formulário.
- Comando `npm run qa` para executar as verificações de links e qualidade estrutural localmente e no CI.
- Busca integrada entre conteúdos editoriais e trilhas de aprendizagem.
- Exposição da trilha Segurança Digital Essencial na homepage.

### Alterado

- Links das trilhas e assuntos da homepage passaram a apontar para rotas específicas em vez de destinos genéricos.
- Cards de destaque e tutoriais recentes da homepage foram alinhados aos conteúdos realmente publicados.
- Metadados editoriais da homepage passaram a ser derivados da content collection, reduzindo duplicação de título, descrição, categoria, data, tempo de leitura e dificuldade.
- Dados das trilhas exibidas na homepage passaram a ser derivados de `src/data/trails.ts`, mantendo apenas a curadoria por slug.
- Grade de trilhas da homepage ajustada para 4 colunas no desktop, 2 colunas no tablet e 1 coluna no mobile.
- Busca passou a considerar título, descrição, objetivo e etapas das trilhas, separando resultados de conteúdos e trilhas.
- CTA ao final dos artigos de trilhas agora conduz diretamente à próxima etapa quando disponível; na última lição, retorna para a visão geral/progresso da trilha.
- Navegação responsiva recebeu ajustes de foco e comportamento de `Escape`.
- Interface passou a respeitar `prefers-reduced-motion` para rolagem e transições globais de tema.

### Qualidade

- CI ampliado com `npm run qa` após o build de produção.
- Build estático validado com 38 páginas.
- Revisão visual automatizada temporária em 48 combinações: 8 páginas representativas × desktop/tablet/mobile × temas claro/escuro.
- Todos os 48 cenários visuais passaram após a exclusão correta de honeypots deliberadamente ocultos da checagem geométrica.
- QA visual verificou HTTP 200, `main`, `h1`, tema aplicado, overflow horizontal, navegação responsiva e erros de runtime/console.
- Nenhuma mudança de backend, API, D1, R2, DNS ou Cloudflare incluída nesta versão.

## [1.3.0] - 2026-09-15

### Adicionado

- Pipeline de CI no GitHub Actions com `npm ci`, `npm run check` e `npm run build:production`.
- Documentação técnica e operacional em `README.md`, `docs/architecture.md` e `docs/operations.md`.
- Analytics first-party para `page_view` e `cta_click` no frontend.
- 10 novos conteúdos editoriais para iniciantes.
- Novas trilhas de Programação, IA no dia a dia e Segurança Digital Essencial, além da trilha Linux do Zero já existente.
- Case completo do DejotaCode na página de portfólio.
- CTA contextual reutilizável nos artigos.

### Alterado

- Base editorial ampliada de 7 para 17 conteúdos.
- Página de portfólio enriquecida com problema, decisões, arquitetura, entregas, processo e aprendizados.
- Sitemap atualizado para incluir categorias que passaram a ter conteúdo.
- Open Graph dos artigos ganhou fallback seguro para imagem existente quando não há imagem específica.
- Compressão HTML habilitada no build do Astro.

### Qualidade

- CI validado na `main` após os blocos do P0 e P1.
- Build estático atual validado com 38 páginas.
- Revisão visual automatizada em 28 combinações de rota, viewport e tema.
- Sem overflow horizontal, falhas estruturais de `h1`/`main` ou erros de página nas rotas auditadas.
- Nenhuma alteração de backend, API, D1 ou Cloudflare incluída nesta versão.

## [1.2.0] - 2026-09-15

- Conversão, guia do iniciante, SEO técnico, Open Graph e dados estruturados.
- Release publicada em: https://github.com/Dejotacode/dejotacode/releases/tag/v1.2.0

## [1.1.0] - 2026-09-14

- Rebuild público em Astro 7, identidade visual, navegação, blog, trilhas, páginas institucionais e preparação de produção.
- Release publicada em: https://github.com/Dejotacode/dejotacode/releases/tag/v1.1.0

## [1.0.0] - 2026-09-09

- Primeira versão estável do DejotaCode com site público, API, painel administrativo, D1, R2 e infraestrutura Cloudflare.
- Release publicada em: https://github.com/Dejotacode/dejotacode/releases/tag/v1.0.0
