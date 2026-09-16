# Changelog

Todas as mudanças relevantes do DejotaCode serão registradas neste arquivo.

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
