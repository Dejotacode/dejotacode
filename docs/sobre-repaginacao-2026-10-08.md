# Sobre — implementação local

Esboço aprovado para implementação por Dejota em 2026-10-08. Visual do resultado aprovado por Dejota em 2026-10-08. Sem push ou publicação.

## Composição
Abertura em duas colunas com propósito, apresentação em primeira pessoa, assinatura e foto original. História compacta em dois parágrafos e painel complementar. Propósito e princípios consolidados em três cards. Método preservado com cinco etapas em faixa compacta. Quatro destinos com ícones oficiais. Transparência em card e encerramento com Trilhas e Blog.

Foto original dejota-author.webp preservada sem edição; enquadramento via CSS, com dimensões intrínsecas reais 900 x 1197. Ícones oficiais existentes, cores e fontes por tokens. Cabeçalho/rodapé reais preservados. SEO da página preservado. Estilos novos restritos a about-page em about.css; retirada a importação de institutional.css apenas nesta página, sem alterar o arquivo compartilhado.

Textos revisados usando somente a biografia já existente. Não foram criados marcos, cargos, credenciais, equipe ou métricas. Recomendações pesquisadas diferenciadas de uso e testes, evitando a afirmação ilustrativa do mockup de que todo produto indicado é usado. Link de critérios atualizado para /store/como-avaliamos/, página que explica níveis de evidência e relações comerciais; destino HTTP 200.

## Verificação
npm run check: 77 arquivos, zero erros, avisos e hints.
npm run build: 115 páginas.
npm run qa: nenhum link interno quebrado; 115 HTML, 480 imagens, 259 controles, zero problemas.
git diff --check passou.
Chromium: 360, 390, 768 e 1440 px, nos temas claro e escuro, sem overflow ou imagens ausentes. Foco por teclado dos cards visível e links de destino HTTP 200.
Inspeção visual das capturas desktop claro/escuro e celular realizada. Conteúdo principal desktop passou de 5673 para 2192 px; abertura de 902 para 555 px. Em 360 px conteúdo principal passou de 8494 para 4183 px; a abertura agora inclui também apresentação e foto antes separadas.

Preview: http://localhost:4322/sobre/
Capturas: /tmp/about-final-dark.png, /tmp/about-final-light.png, /tmp/about-final-mobile-dark.png, /tmp/about-final-mobile-light.png.

## Escopo e pendências
Arquivos: src/pages/sobre/index.astro e novo src/styles/about.css. Demais alterações preexistentes preservadas. Visual aprovado por Dejota; auditoria em mais navegadores fica para consolidação. Padronização global de pastas e documentação permanece no trabalho próprio, sem reestruturação nesta etapa.

## Revisão do resultado
Comparação visual desktop claro/escuro e celular com esboço concluída. Composição e sequência preservadas; diferenças intencionais: foto original, catálogo de ícones existente, textos com distinção de pesquisa/uso/testes e cabeçalho/rodapé reais. Margens e alturas de cards conferidas no preview; um H1. Contraste adicional dos textos da abertura e destaque conferido nos dois temas. Sem novas alterações de interface nesta revisão; aprovação visual pelo usuário registrada em 2026-10-08.

## Aprovação
Dejota aprovou o visual e escolheu manter local em 2026-10-08. Sem autorização de publicação ou push.
