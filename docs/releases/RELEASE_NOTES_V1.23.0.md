# DejotaCode v1.23.0 — DejotaStore

## Destaques

- lança a **DejotaStore** em `/store/` como camada editorial de recomendações do DejotaCode;
- adiciona categorias Linux, Setup, Programação, Criadores e Ferramentas digitais;
- adiciona páginas de produto, guia de compra, metodologia e Setup do Dejota;
- conecta artigos do Blog a recomendações contextuais sem transformar os conteúdos em vitrines;
- publica catálogo inicial com produtos pesquisados e uma oferta Hotmart com link afiliado validado;
- mantém checkout e compra fora do DejotaCode;
- integra a Store ao Header, Footer e sitemap.

## Transparência editorial

- diferencia `Uso no DejotaCode`, `Testado pelo Dejota` e `Pesquisado pelo DejotaCode`;
- não publica preço permanente no MVP;
- não publica link comercial sem validação;
- mantém disclosure de afiliados próximo das ofertas;
- Git/Markdown continua sendo a fonte canônica do conteúdo público.

## Analytics

- mede Home, categoria, produto, guia e Setup;
- preserva origem interna Blog → Store durante a sessão;
- mede Store → Blog e cliques de parceiro;
- combina provedor, produto, origem interna e aquisição UTM no clique afiliado quando disponíveis;
- compatível com DejotaCode API v1.13.0.

## Validação

- `astro check`: 0 erros, 0 warnings e 0 hints;
- build estático: 91 páginas;
- CI da feature e da `main`: aprovado;
- Cloudflare Pages deployment de produção: `21c88e41-a23d-4fdc-a989-8ef2146407a9`;
- rotas críticas `/store/`, `/store/linux/`, produto Hotmart e guia Linux: HTTP 200;
- sitemap contém as rotas da Store;
- QA visual em desktop e mobile aprovado;
- D1 de produção confirmou `page_view` e `store_view` em `/store/`.
