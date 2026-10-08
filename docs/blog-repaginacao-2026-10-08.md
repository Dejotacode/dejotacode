# Blog — repaginação editorial equilibrada

Data: 08/10/2026
Estado: implementado localmente; revisão visual pendente.

## Escopo aprovado
Reutilizar a arquitetura existente, imagens oficiais, categorias e dados reais. Abertura compacta, destaque com chamada de leitura, seis recentes, paginação existente e acesso discreto às trilhas. Execução exclusivamente local; produção aguarda aprovação posterior.

## Implementação
CSS em src/styles/blog.css limitado a .blog-page. Artigos e categorias mantêm os estilos anteriores. PostCard recebe showReadLink opcional, ativado somente no destaque do Blog. Categorias das páginas seguintes recebem os ícones oficiais. Conteúdo, ordenação, URLs, SEO e links comerciais preservados.

## Validação
Astro check: zero erros e avisos. Build: 115 páginas. QA: 6.243 referências internas, sem links quebrados; 403 imagens e 259 controles, sem problemas no verificador HTML. Paginação: 42 publicações únicas em sete páginas; arquivos das imagens presentes. HTTP 200 no preview: Blog, página 2, categoria Programação e artigo Elementor.

## Preview
http://localhost:4321/blog/
http://localhost:4321/blog/2/

## Pendências
Revisão visual do preview em desktop e celular, temas claro e escuro, antes da publicação. Nenhum push ou deploy realizado. Alterações preexistentes do worktree preservadas.
