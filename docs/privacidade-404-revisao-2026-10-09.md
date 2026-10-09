# Privacidade e 404 — revisão local
Pasta: /home/dejota/Workspace/fullstack/dejotacode
Preview: http://localhost:4321/
Sem publicação.

Privacidade: abertura alinhada à esquerda, escala compacta de títulos e espaços, leitura em 1rem, sumário lateral desktop. Em tablet/celular, sumário acessível com details/summary e os mesmos 13 destinos. Article completo comparado byte a byte com a versão anterior: texto, IDs, data da política e link de contato preservados.

404: título e abertura compactados; links anteriores preservados; painel de busca nativo GET para /busca/?q=..., sem dependência de JavaScript. Robots noindex/follow e canonical desativado preservados. Estilos em auxiliary.css com seletores exclusivos destas páginas.

Validação: Astro check sem erros/avisos/hints; build 115 páginas; QA HTML/links sem problemas, 471 imagens e 260 controles. Chromium: duas páginas em 320/390/768/1440 px, claro/escuro (16 combinações); sem overflow, um H1, âncoras válidas, temas corretos, Privacidade 200 e rota inexistente 404. Sumário abre por teclado e link navega para a seção Dados; busca da 404 encaminha linux à Busca. Capturas desktop escuro e mobile claro inspecionadas. Nenhuma alteração de conteúdo jurídico nem auditoria jurídica nesta etapa.

Próximo passo: revisão visual do usuário e regressão/consolidação de cabeçalho e rodapé. Setup e entrega real de formulários continuam pendentes conforme consolidação.

## Política no padrão dos artigos — ajuste solicitado
Política agora importa article.css e reutiliza article-page, article-hero, breadcrumbs, article-category, article-meta, article-layout, article-aside e article-content. Título, descrição, metadados, coluna de leitura, tipografia e sumário desktop/mobile usam a base real dos artigos. Ícones oficiais de privacidade e calendário. Números decorativos das seções ocultos visualmente. privacy.css contém apenas exceções da página; regras antigas de Privacidade removidas de auxiliary.css, que continua exclusivo da 404. Corpo completo das 13 seções preservado byte a byte; data, links e SEO preservados.

Check sem erros/avisos/hints; build 115 páginas; QA sem links quebrados/problemas básicos de HTML. Reteste de Privacidade e 404 em quatro larguras e dois temas: 16 combinações sem falhas. Sumário por teclado, âncoras e busca da 404 funcionando. Captura desktop escuro inspecionada. Sem publicação.

## 404 — esboço aprovado aplicado
Usuário aprovou aplicação do esboço pesquisado. Mensagem em bloco único, 404 discreto com ícone vetorial decorativo, título Página não encontrada., explicação curta e ações Voltar para o início / Explorar o Blog. Painel lateral e formulário duplicado removidos; Buscar conteúdo aponta para /busca/. Marca, cabeçalho e rodapé reais preservados; não foi adotado o logotipo ilustrativo da imagem gerada. Página mantém status HTTP 404, noindex/follow e canonical desativado.

Check: zero erros/avisos/hints. Build 115 páginas; QA sem links quebrados ou problemas básicos de HTML. Oito combinações de 320/390/768/1440 px e claro/escuro: sem falhas, título único, destinos corretos, foco visível de 3 px e link de busca funcional. Captura desktop escuro inspecionada (foco de teclado aparece no link Buscar conteúdo). Sem publicação.
