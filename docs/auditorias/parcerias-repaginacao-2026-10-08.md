# Parcerias — repaginação local

Implementada no candidato release/blog-editorial-20261008, sem push ou publicação.

## Resultado
Abertura compacta alinhada à esquerda, ilustração decorativa com ícones oficiais, faixa de princípios, cinco temas reais, três formatos com contato contextual, critérios junto à independência editorial, limites, orientações para proposta, FAQ e chamada final. Preservados os textos substantivos dos critérios, limites e transparência, incluindo “Pagamento não compra opinião positiva”. Nenhum número de alcance ou parceiro fictício foi acrescentado.

Estilos em src/styles/partnerships.css restritos à página. Em contato/index.astro, assunto=parceria continua selecionando Parceria; formato usa lista permitida e preenche somente a mensagem vazia, sem enviar formulário.

## Validação
- npm run check: zero erros, avisos ou hints.
- npm run build: 115 páginas.
- npm run qa: sem links quebrados e sem problemas de HTML.
- 360, 390, 768 e 1440 px em claro/escuro: sem overflow, FAQ expansível e foco visível.
- Três formatos conferidos no formulário; nenhuma mensagem enviada.
- Capturas desktop escuro e celular claro inspecionadas.

Preview: http://localhost:4322/parcerias/
Pendente: revisão visual do usuário; auditoria em outros navegadores. Publicação não autorizada.

## Segunda revisão — fidelidade ao esboço
A primeira implementação foi rejeitada pelo usuário por distância visual. Refeita a composição: removida a importação de institutional.css somente nesta página, eliminando margens e estilos herdados. Retirados os três cards adicionais da audiência. Faixa de princípios com ícones e descrição; cinco temas em blocos retangulares; formatos com ícones ao lado e botões contornados; critérios em painel junto ao editorial; limites compactos; quatro informações com ícones; FAQ em linhas com bordas; CTA horizontal. Hero com janelas decorativas sobrepostas feitas em HTML/CSS, usando ícones oficiais. Cabeçalho e rodapé globais preservados.

Check, build e QA novamente passaram. Oito combinações de largura/tema sem overflow; FAQ e foco verificados. Capturas novas conferidas em desktop claro/escuro e celular escuro. Conteúdo substantivo e critérios preservados. Continua aguardando revisão visual do usuário, sem publicação.

## Aprovação visual
Usuário aprovou a segunda versão local. Publicação conjunta continua pendente e não autorizada.
