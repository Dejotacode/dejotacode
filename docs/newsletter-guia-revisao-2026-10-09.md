# Newsletter e Guia iniciante — refinamento local

Pasta: /home/dejota/Workspace/fullstack/dejotacode-blog-release. Preview: http://localhost:4322/. Usuário pediu a etapa explicitamente, sem publicação.

## Resultado

Newsletter: abertura, formulário e benefícios compactados; ícones oficiais nos benefícios. Campos, validação, consentimento, honeypot, endpoint, adapter, recurso/redirect e textos substantivos preservados. Guia: imagem genérica substituída por painel com ícone oficial, leitura online e link ao PDF existente no topo. Navegação para sete seções, mantendo conteúdo, plano, checklist e CTA de trilhas. Download original no final preservado; listener de analytics aplicado aos dois links. CSS novo acquisition.css com escopo de Newsletter/Guia; componentes e estilos compartilhados anteriores preservados.

Arquivos: src/pages/newsletter/index.astro, src/pages/guia/iniciante-em-tecnologia/index.astro, src/styles/acquisition.css.

## Validação

Check sem erros/avisos/hints; build de 115 páginas; QA 6377 referências sem links quebrados, 471 imagens, zero problemas básicos de HTML. Conferência de três apresentações (Newsletter, inscrição para Guia, Guia online) em 320/390/1440 px, claro/escuro: 18 combinações sem overflow, um H1 e âncoras válidas. Capturas desktop de Newsletter e Guia inspecionadas.

Formulário: vazio inválido; e-mail sem consentimento inválido; e-mail com consentimento válido. Recurso guia e redirect preservados; e-mail recebido da sessionStorage preenche o campo. Parâmetro legado de interesse no e-book redireciona à página de venda. PDF HTTP 200, assinatura %PDF-. Nenhuma inscrição enviada; POST bloqueado durante os testes. Envio local continua em preparação por ausência de API configurada neste preview; não foi validada entrega real de e-mail ou analytics.

## Próxima etapa

Revisão visual do usuário. Depois: Privacidade e 404, preservando texto da política, seguidas de regressão do cabeçalho/rodapé e consolidação das pendências por página. Publicação não autorizada.
