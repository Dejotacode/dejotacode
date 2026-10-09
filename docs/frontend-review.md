# Revisão de padronização por página
Revisão: 09/10/2026. Responsável: @dev/@control.
Escopo: aplicação local do [Documento Mestre](frontend-master.md).
Preview: http://localhost:4321/. Sem publicação.

## Etapas
1. Documento consolidado, fontes/tokens/ícones/marca conferidos; índice e instruções atualizados.
2. Componentes organizados em layout/ui/content; papéis de rótulo, abertura e títulos de seção migrados.
3. Validação por modelo e rota concluída para a base compartilhada. Aprovação visual do usuário e refinamentos de mídia permanecem separados.

A estrutura/composição aprovada foi preservada. CSS específico continua responsável por grids, margens, ordem e exceções documentadas.
A classificação de modelo não significa que todos os layouts são iguais.
Nenhuma alteração de conteúdos, rotas, SEO, afiliados ou funcionalidades foi autorizada como parte da padronização.

## Modelos reais
- src/pages/404.astro
- src/pages/blog/[page].astro
- src/pages/blog/[slug].astro
- src/pages/blog/index.astro
- src/pages/busca/index.astro
- src/pages/categoria/[category].astro
- src/pages/categoria/[category]/[page].astro
- src/pages/contato/index.astro
- src/pages/guia/iniciante-em-tecnologia/index.astro
- src/pages/index.astro
- src/pages/newsletter/index.astro
- src/pages/parcerias/index.astro
- src/pages/politica-de-privacidade/index.astro
- src/pages/portfolio/index.astro
- src/pages/produtos/linux-do-zero/index.astro
- src/pages/recursos/[category].astro
- src/pages/recursos/index.astro
- src/pages/servicos/index.astro
- src/pages/sobre/index.astro
- src/pages/store/[slug].astro
- src/pages/store/como-avaliamos.astro
- src/pages/store/criadores/index.astro
- src/pages/store/ferramentas-digitais/index.astro
- src/pages/store/guias/[slug].astro
- src/pages/store/index.astro
- src/pages/store/linux/index.astro
- src/pages/store/pagina/[page].astro
- src/pages/store/programacao/index.astro
- src/pages/store/setup-do-dejota.astro
- src/pages/store/setup/index.astro
- src/pages/trilhas/[slug].astro
- src/pages/trilhas/index.astro
## Rotas públicas
Cada rota dinâmica tem uma linha própria. A evidência de 320/768 aplica-se aos representantes do modelo, não a todas as rotas.
| Rota | Modelo | Situação | Evidência | Pendência |
| --- | --- | --- | --- | --- |
| / | src/pages/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /404.html | src/pages/404.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /blog/ | src/pages/blog/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/2/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/3/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/4/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/5/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/6/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/7/ | src/pages/blog/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/afiliados-para-iniciantes-como-recomendar-sem-perder-credibilidade/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/autenticacao-dois-fatores/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/bilibili-para-iniciantes-monetizacao-brasil/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/comandos-linux-para-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-a-web-funciona/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-conseguir-primeira-renda-online/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-conseguir-primeiro-cliente-sem-anuncios/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-criar-pendrive-bootavel-linux/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-escolher-distribuicao-linux/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-estudar-tecnologia-sem-se-perder/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-montar-oferta-simples-pequenos-negocios/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-testar-linux-sem-instalar/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/como-verificar-respostas-de-ia/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/devtools-navegador-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/documentar-aprendizado-tecnologia/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/elementor-para-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/elevenlabs-para-iniciantes-criar-narracoes-com-ia/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/erros-iniciantes-desistem-renda-digital/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/escolher-primeiro-projeto-portfolio/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/febspot-para-iniciantes-monetizacao-indicacao/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/freelancer-para-iniciantes-como-escolher-um-servico/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/gerenciador-de-senhas-para-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/git-e-github-entenda-a-diferenca/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/habitos-seguranca-digital-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/html-css-javascript-entenda-diferenca/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/javascript-variaveis-funcoes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/landing-page-para-pequenos-negocios-o-que-entregar/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/meliuz-jogue-e-ganhe-pocket-sort/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/metricool-para-iniciantes-organizar-agendar-conteudo/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/o-que-e-ia-generativa/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/o-que-e-linux/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/organizar-ambiente-estudos-tecnologia/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/permissoes-linux-para-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/phishing-como-identificar/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/pipe-redirecionamento-linux/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/portfolio-para-freelancer-sem-clientes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/primeiro-site-html-css/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/produto-digital-como-transformar-conhecimento-em-ebook/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/prompts-melhores-estudar-trabalhar/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/quanto-cobrar-primeiro-site/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/usar-ia-estudar-sem-dependencia/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /blog/vpn-para-iniciantes/ | src/pages/blog/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Revisão de origem/identidade de mídia |
| /busca/ | src/pages/busca/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/inteligencia-artificial/ | src/pages/categoria/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/linux-seguranca/ | src/pages/categoria/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/linux-seguranca/2/ | src/pages/categoria/[category]/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/programacao/ | src/pages/categoria/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/programacao/2/ | src/pages/categoria/[category]/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/renda-digital/ | src/pages/categoria/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/renda-digital/2/ | src/pages/categoria/[category]/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/renda-digital/3/ | src/pages/categoria/[category]/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /categoria/tecnologia-pratica/ | src/pages/categoria/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /contato/ | src/pages/contato/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Integração real separada |
| /guia/iniciante-em-tecnologia/ | src/pages/guia/iniciante-em-tecnologia/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /newsletter/ | src/pages/newsletter/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Integração real separada |
| /parcerias/ | src/pages/parcerias/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /politica-de-privacidade/ | src/pages/politica-de-privacidade/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /portfolio/ | src/pages/portfolio/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Atualizar capturas |
| /produtos/linux-do-zero/ | src/pages/produtos/linux-do-zero/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/ | src/pages/recursos/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/aprendizado/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/desenvolvimento/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/digitais/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/infraestrutura/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/renda-digital/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /recursos/seguranca/ | src/pages/recursos/[category].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /servicos/ | src/pages/servicos/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /sobre/ | src/pages/sobre/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/ | src/pages/store/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/baseus-fc11-power-bank/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/baseus-fm11-10000mah/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/como-avaliamos/ | src/pages/store/como-avaliamos.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/criadores/ | src/pages/store/criadores/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/elementor-site-builder/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/elevenlabs/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/ferramentas-digitais/ | src/pages/store/ferramentas-digitais/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/fifine-am8-usb-xlr/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/gshield-hub-usb-c-6-em-1/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/guias/como-escolher-pendrive-linux/ | src/pages/store/guias/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/hospedagem-primeiro-site/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/leadlovers-hotmart/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/linux/ | src/pages/store/linux/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/logitech-mx-anywhere-3s/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/logitech-mx-keys-mini/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/logitech-pebble-2-m350s/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/metricool/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/nordpass/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/nordvpn/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/pagina/2/ | src/pages/store/pagina/[page].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/programacao-iniciante-avancado-hotmart/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/programacao/ | src/pages/store/programacao/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/sandisk-portable-ssd-1tb/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/sandisk-ultra-flair-32gb/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/seguranca-digital-essencial-hotmart/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/setup-do-dejota/ | src/pages/store/setup-do-dejota.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Confirmar modelos/discos |
| /store/setup/ | src/pages/store/setup/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /store/ugreen-hub-usb-c-6-em-1/ | src/pages/store/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/ | src/pages/trilhas/index.astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/ia-no-dia-a-dia/ | src/pages/trilhas/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/linux-do-zero/ | src/pages/trilhas/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/primeira-renda-online/ | src/pages/trilhas/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/primeiros-passos-programacao/ | src/pages/trilhas/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
| /trilhas/seguranca-digital-essencial/ | src/pages/trilhas/[slug].astro | Validada tecnicamente nesta etapa | 390/1440, claro/escuro; herda modelo | Aprovação visual final do usuário |
## Limites e pendências
- Todos os assets aprovados preservados; inventário em media-inventory.json. Origem/licença e conteúdo interno das artes não são certificados automaticamente.
- Padronização de marca nas próximas artes segue Documento Mestre; não regenerar automaticamente imagens aprovadas.
- Conteúdo Setup e capturas Portfólio continuam pendentes.
- Contato/Newsletter: entregas reais e API não exercitadas.
- Admin preservado funcionalmente, fora da padronização pública.
- Acessibilidade completa, zoom amplo e navegadores alternativos exigem etapa específica.


## Evidências desta aplicação
- Check: 78 arquivos, zero erros, avisos ou hints. Build: 115 páginas. QA: zero links internos quebrados e zero problemas básicos de HTML.
- Varredura: 112 rotas × 390/1440 × claro/escuro = 448 combinações; 444 respostas 200 e quatro 404 esperadas. Sem overflow, âncoras inválidas, H1 ausente/duplicado ou erros JavaScript.
- Reteste de 27 representantes × 320/768 × ambos temas = 108 combinações; sem overflow e rótulos visíveis com fonte/peso/tamanho oficiais.
- Total: 556 combinações. Mudanças finais de seletores foram retestadas nos modelos afetados, além do build/QA finais.
- Alertas de imagem eram exclusivamente o img sem src do modal fechado do e-book. Amostra carregou ao abrir; Escape fechou.
- Busca, Escape, menu mobile, alternância e persistência do tema passaram. Busca manteve consulta, equivalência de acentos, vazio e limpeza.
- Conteúdo/mídia: 260 arquivos com hashes idênticos antes/depois. 189 arquivos de assets inventariados.
- Manifesto de preservação: todas as 115 rotas, títulos/metas, links/canonical, atributos comerciais/analytics e controles comparados entre builds; nenhuma diferença.
- Capturas de desktop e mobile, claro/escuro, inspecionadas. Capturas longas podem exibir sobreposição de cabeçalho fixo durante screenshot; a leitura normal usa viewport e scroll.
- Componentes movidos mantêm implementação: 11 renomeações com imports atualizados. Scoped CSS muda de identificador gerado, não de finalidade.
- Ajuste de mídia desta etapa: fallback de VisualMedia usa símbolo oficial do tema; nenhum raster foi substituído.

## Continuidade
A base e suas regras estão aplicadas. A próxima etapa visual pode tratar títulos de cards, CTAs e recortes por família, somente quando houver divergência real e respeitando as variantes existentes. Não marcar auditoria completa de origem/licença ou aprovação geral do usuário por inferência.
