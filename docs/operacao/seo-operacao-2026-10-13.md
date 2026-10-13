# SEO — estado operacional

Status: vigente. Revisão: 13/10/2026.

## Objetivo

Manter o DejotaCode tecnicamente pronto para rastreamento e indexação, com mudanças de conteúdo guiadas por Search Console e GA4 em vez de alterações em massa.

## Estado configurado

- domínio canônico: `https://dejotacode.com.br`;
- sitemap gerado por Astro e publicado em `/sitemap-index.xml`;
- `robots.txt` público apontando para o sitemap;
- canonicals absolutos gerados pelo `BaseLayout`;
- metadata base: title, description, robots, Open Graph e Twitter Card;
- Home com dados estruturados `Organization` e `WebSite`;
- artigos com dados estruturados `Article` e `BreadcrumbList`;
- Store temporariamente sob `noindex, follow` e fora do sitemap durante recuperação editorial;
- admin e páginas operacionais não devem disputar indexação;
- Search Console e GA4 possuem coletor local em `/home/dejota/Workspace/tools/dejotacode-analytics`;
- baseline SEO oficial agendada para 16/10/2026 e comparação para 23/10/2026.

## Guardrails de CI

O comando `npm run qa:seo` roda após o build e bloqueia regressões críticas de SEO. Ele verifica:

- title, meta description e meta robots;
- canonical HTTPS no domínio oficial e sem query/hash;
- Open Graph e Twitter Card em páginas indexáveis;
- coerência entre `og:url` e canonical;
- páginas `noindex` fora do sitemap;
- páginas indexáveis presentes no sitemap;
- Store permanecendo `noindex` enquanto a recuperação editorial estiver ativa;
- admin permanecendo `noindex`;
- schema `Article` + `BreadcrumbList` nos artigos;
- schema `Organization` + `WebSite` na Home;
- canonicals duplicados.

Títulos ou descriptions com tamanho atípico e duplicidades editoriais geram aviso, não bloqueio automático. A decisão editorial continua humana.

## Critério de trabalho

1. Não reescrever conteúdo em lote sem sinal de busca.
2. Priorizar consultas e páginas com impressões e posições próximas da primeira página.
3. Melhorar intenção, título, descrição e links internos apenas quando houver justificativa.
4. Manter Store fora do índice até aprovação explícita página por página conforme `store-editorial-indexacao-2026-10-13.md`.
5. Usar a baseline semanal para decidir a próxima ação.

## Limite desta configuração

SEO técnico pode ser validado pelo projeto, mas rastreamento, recrawl, indexação e ranking dependem do Google e podem levar dias. Nenhum deploy deve ser tratado como garantia de posição ou tráfego.
