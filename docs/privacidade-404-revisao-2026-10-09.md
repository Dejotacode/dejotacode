# Privacidade e 404 — revisão local
Pasta: /home/dejota/Workspace/fullstack/dejotacode
Preview: http://localhost:4321/
Sem publicação.

Privacidade: abertura alinhada à esquerda, escala compacta de títulos e espaços, leitura em 1rem, sumário lateral desktop. Em tablet/celular, sumário acessível com details/summary e os mesmos 13 destinos. Article completo comparado byte a byte com a versão anterior: texto, IDs, data da política e link de contato preservados.

404: título e abertura compactados; links anteriores preservados; painel de busca nativo GET para /busca/?q=..., sem dependência de JavaScript. Robots noindex/follow e canonical desativado preservados. Estilos em auxiliary.css com seletores exclusivos destas páginas.

Validação: Astro check sem erros/avisos/hints; build 115 páginas; QA HTML/links sem problemas, 471 imagens e 260 controles. Chromium: duas páginas em 320/390/768/1440 px, claro/escuro (16 combinações); sem overflow, um H1, âncoras válidas, temas corretos, Privacidade 200 e rota inexistente 404. Sumário abre por teclado e link navega para a seção Dados; busca da 404 encaminha linux à Busca. Capturas desktop escuro e mobile claro inspecionadas. Nenhuma alteração de conteúdo jurídico nem auditoria jurídica nesta etapa.

Próximo passo: revisão visual do usuário e regressão/consolidação de cabeçalho e rodapé. Setup e entrega real de formulários continuam pendentes conforme consolidação.
