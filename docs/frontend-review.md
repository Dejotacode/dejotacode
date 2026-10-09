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
## Limites e pendências atuais — após a nona etapa
- Aplicação técnica local do Documento Mestre concluída nas famílias públicas; aprovação visual final do usuário permanece separada.
- Capa de programação resolvida na trilha por composição vetorial sem texto; raster original preservado nos Recursos.
- Portfólio usa capturas reais de 09/10/2026; Trilhas recapturada após a troca da capa na décima primeira etapa.
- Setup: computador reconfirmado; modelos comerciais e relação dos discos ainda dependem da conferência do usuário.
- Contato/Newsletter: recebimento e gravação validados na API local com banco isolado; envio de e-mails/notificações e integração em produção não validados.
- Marca/origem/licença interna das artes não certificadas automaticamente.
- Admin fora da padronização pública. Leitor de tela real e navegadores alternativos não certificados.
- Publicação/push/deploy continuam sem autorização.

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

## Segunda etapa — cards, CTA e recortes
Cards regulares de artigos compartilham o papel de título entre Blog e categorias. Destaque mantém variante maior; comerciais, recursos e trilhas mantêm a função própria.
ConversionCTA normal consome token de título; variantes compactas preservadas. Botões respeitam redução de movimento.
Nenhuma mudança de mídia: recortes aprovados e URLs preservados. Auditoria anterior de carregamento complementa a inspeção desta etapa.
Check/build/QA passaram; 260 hashes e manifesto de 115 rotas/metadados/links/controles continuam idênticos.
Reteste de 27 representantes em 320/768, ambos temas: 108 combinações, sem problemas. Blog/categoria/Home/artigo também conferidos em 390/1440, ambos temas.
Etapa local; sem aprovação de publicação.


## Terceira etapa — formulários e estados de interação
Contato e Newsletter: tipografia dos campos alinhada ao corpo, estado de carregamento com aria-busy e cursor de progresso. O adaptador compartilhado restaura os nós originais do botão, preservando a seta e demais marcações após sucesso ou erro.
Validação no Chromium: duas páginas × 320/1440 × claro/escuro = oito combinações. Campos obrigatórios e consentimento bloquearam envio inválido; carregamento desabilitou o botão; erro 429 preservou os campos; sucesso restaurou o botão e limpou o formulário. Fonte de 16px e ausência de overflow verificadas.
Respostas de envio simuladas no navegador; nenhum POST real foi encaminhado. Entrega real pela API permanece pendente.
Check: 78 arquivos sem erros/avisos/hints. Build: 115 páginas. QA: zero links quebrados e zero problemas básicos de HTML. Preservação: 260 hashes e manifesto de SEO/links/controles das 115 rotas sem diferenças.
Busca mantém a validação da etapa anterior; não recebeu mudanças nesta etapa.
Preview: http://localhost:4321/contato/ e http://localhost:4321/newsletter/. Somente local, sem publicação.


## Quarta etapa — mídia e capturas do Portfólio
| Página/modelo | Resultado |
| --- | --- |
| Home, Blog e Trilhas | Carregamento conferido; novas capturas reais usadas pelo Portfólio |
| Store, Linux, produto e Setup | Imagens presentes e sem overflow; mídias aprovadas preservadas |
| Recursos, Sobre, e-book e Guia iniciante | Imagens presentes e sem overflow; proporções preservadas |
| Portfólio | Três capturas antigas substituídas pelo preview atual, mesmos caminhos e dimensões |

12 representantes × 320/390/768/1440 × claro/escuro = 96 combinações. Sem overflow, imagens visíveis quebradas ou atributo alt ausente. A existência do alt não certifica sua qualidade semântica. Amostra fechada do e-book não foi tratada como imagem quebrada; teste de abertura consta na primeira etapa.
Home/Blog/Trilhas capturados em 1280 × 960 no tema escuro e inspecionados visualmente. Somente três arquivos de mídia alterados; hashes/bytes atualizados no inventário. Código, conteúdo editorial, rotas, metadados e links não receberam alterações.
Pendência: texto incorporado da capa de programação cortado nas Trilhas. Não é falha de carregamento; precisa revisão específica da arte. Origem/licença e modelos exatos de Setup continuam pendentes.
Build/QA repetidos após a troca das capturas. Preview http://localhost:4321/portfolio/. Sem publicação.


## Quinta etapa — teclado e texto ampliado
Correções: largura mínima global independente da fonte; ícones do cabeçalho mantêm alvos de 44px em telas estreitas; textos podem quebrar sem alargar a área de leitura. Blog e Sobre permitem encolher links longos; resumo de categoria respeita a largura do grid; link de aula permite quebra.
Teste de ampliação: 26 representantes × claro/escuro, viewport 320px e tamanho da raiz 200% (32px): 52 combinações sem overflow após ajustes. É um teste de texto ampliado via CSS; não equivale a zoom real de todos os navegadores. Quebras adicionais de palavras são esperadas nessa combinação estreita.
Regressão: 27 representantes × 320/390/768/1440 × claro/escuro = 216 combinações; sem overflow, H1 ausente/duplicado ou divergência dos rótulos oficiais.
Teclado: oito combinações de largura/tema no cabeçalho passaram: skip link primeiro e foco no main; busca abre e recebe foco; Escape retorna ao controle; menu abre com Espaço, Tab chega à busca mobile e Escape retorna ao botão; tema alterna por teclado.
Contato, Newsletter e Busca: Tab e foco visual dos controles principais verificados em 390px. Busca já usa contorno no conjunto do campo com focus-within; preservado após conferir o estilo do ancestral. Nenhum envio real.
Inspeção visual de 320px com texto ampliado em Home, Categoria, Contato e Trilha; contorno da Busca inspecionado. Check/build/QA passaram. Alterações somente em CSS e estilos do cabeçalho; conteúdo, mídia, links e lógica comercial preservados.
Limites: leitor de tela, zoom nativo e outros navegadores não certificados. Pendências anteriores de mídia/Setup/API permanecem explícitas.
Preview: http://localhost:4321/ e http://localhost:4321/busca/. Sem publicação.


## Sexta etapa — retomada e zoom nativo (09/10/2026, manhã)
Preview 4321 reativado via astro dev --background na pasta canônica, após constatar servidor desligado. Código sem alterações pendentes na retomada; 4322 não iniciado.
Teste com Chromium completo e perfil temporário isolado; zoom aplicado pela API chrome.tabs.setZoom, sem modificar fonte/CSS para simular ampliação. Janela externa 1280px: 200% produziu innerWidth 640px/devicePixelRatio 2; 400% produziu 320px/devicePixelRatio 4. Fonte raiz permaneceu 16px. Os dois temas foram confirmados no DOM.
26 representantes × zoom 200/400% × claro/escuro = 104 combinações, sem overflow horizontal e com um main/um H1. Árvore de acessibilidade: nenhum controle exposto dos papéis button/link/textbox/searchbox/checkbox/combobox sem nome. Menu em 400% abriu com Espaço, Tab chegou ao campo mobile e Escape devolveu foco ao botão.
Todos os POST foram bloqueados no navegador de teste. Sem envio real, publicação ou alteração do navegador pessoal. QA de links/HTML passou novamente sobre o build existente.
Esta etapa não alterou layout nem conteúdo. A verificação da árvore não substitui uso com leitor de tela; outros navegadores e leitores de tela reais continuam pendentes. Pendências de arte da trilha de programação, Setup e entrega da API permanecem.
Preview: http://localhost:4321/.

## Sétima etapa — capa da trilha de programação
O corte fazia parte do raster original vscode.webp; CSS não recuperaria o conteúdo. A trilha passou a usar /assets/trails/primeiros-passos-programacao.svg, composição vetorial 16:9 derivada da ilustração de desenvolvimento existente, sem texto incorporado. Raster original e conteúdo dos Recursos preservados.
Trilhas, detalhe de programação e Busca por programacao: 3 rotas × 320/390/768/1440 × claro/escuro = 24 combinações sem overflow ou falhas de carregamento da nova capa. Capturas desktop nos dois temas inspecionadas. Check: 78 arquivos, zero erros/avisos/hints. Build: 115 páginas. QA: 6383 referências sem destinos quebrados; HTML sem problemas básicos.
Somente o resolver de mídia, novo SVG e registros foram alterados; nenhum texto editorial, rota, SEO, afiliado ou formulário alterado. Pendência visual de programação resolvida na trilha; arte original continua preservada nos Recursos. Permanecem confirmação de Setup, entrega real da API e uso com leitores de tela reais/outros navegadores. Preview http://localhost:4321/trilhas/. Sem publicação ou push.

## Oitava etapa — reconferência do Setup
Configuração local reconfirmada: i5-3470, RAM aproximadamente 16 GB, H61 V1.3, Intel integrado, CachyOS, tela Samsung e teclado/mouse Logitech. Modelos comerciais de periféricos não resolvidos. Apenas HD WDC SATA aproximadamente 640 GB detectado. Usuário confirmou que precisa conferir a relação com os discos declarados anteriormente; pendência mantida.
Evidências detalhadas em setup-do-dejota-revisao-2026-10-08.md. Nenhum conteúdo público, código ou mídia alterado. Sem novos testes de interface nesta etapa documental; não atribuir os resultados anteriores a esta conferência. Próximas pendências: entrega da API e leitor de tela real. Preview http://localhost:4321/store/setup-do-dejota/. Sem push ou publicação.

## Nona etapa — integração local de Contato e Newsletter
Frontend configurado para http://localhost:8787; API estava desligada. API separada em ../dejotacode-api foi iniciada com Wrangler --local e persistência exclusiva /tmp/dejotacode-forms-stage9, sem tocar no banco habitual nem em banco remoto. Treze migrations aplicadas apenas a esse banco de teste. Saúde confirmou environment local.
Erro reproduzido: API /api/leads recusa name vazio com status 400 e mensagem de e-mail inválido, embora o nome seja opcional na página. Adaptador agora omite nome opcional em branco; campos obrigatórios permanecem intactos. API original preservada.
Um envio inicial de Newsletter sem nome passou com 201 após correção; quatro envios adicionais via navegador (Contato/Newsletter em 320 claro e 1440 escuro) retornaram 201, restauraram conteúdo dos botões e limparam campos, sem overflow. Consulta ao banco isolado confirmou três leads e dois contatos fictícios, usando endereços example.invalid. Chamadas externas e analytics bloqueados nos testes.
Recebimento local e persistência validados; os endpoints atuais não enviam e-mail. Entrega de newsletter, notificações e integração em produção não validadas nem implementadas nesta etapa. API local permanece na porta 8787 com banco isolado temporário; não confundir com banco habitual.
Check sem erros/avisos/hints; build 115 páginas; QA de links e HTML passou. Layout adicional em 320/390/768/1440, claro/escuro: 16 combinações passaram sem overflow, tema confirmado; sem envios adicionais. Preview http://localhost:4321/contato/ e http://localhost:4321/newsletter/. Sem push ou publicação.

## Décima etapa — consolidação do encerramento técnico local
Índice, estado de retomada e pendências sincronizados após as etapas 7–9, distinguindo resultados locais de entrega por e-mail/produção. Checagem env:check:preview e env:check:production passou; são validações de configuração, sem deploy ou requisição de envio remoto.
Frontend 4321 respondeu 200; API 8787 confirmou environment local. API usa banco temporário isolado /tmp/dejotacode-forms-stage9. Código limpo antes desta etapa; somente documentos atualizados.
Orca não instalado. Firefox disponível no sistema, porém motores Firefox/WebKit do Playwright não instalados; nenhum teste com esses motores ou leitor real foi executado. Não transformar inspeção de árvore de acessibilidade em certificação com leitor de tela.
Próximo passo dentro do fechamento visual: atualizar a captura de Trilhas do Portfólio após a nova capa e revisão final do usuário. Integração de envio de e-mails requer uma etapa própria. Sem publicação.

## Décima primeira etapa — captura final de Trilhas no Portfólio
Recapturada /trilhas/ no preview 4321, tema escuro, viewport 1280 × 960; fontes e imagens decodificadas antes da captura, toolbar oculta. Exportação WebP qualidade 85 pelo ImageMagick; mesmo caminho /assets/portfolio/trilhas.webp, dimensões e proporção 4:3. Captura inspecionada visualmente com nova capa de programação. Só esse raster foi alterado; inventário atualizado.
Portfólio: oito combinações (320/390/768/1440, claro/escuro) passaram sem overflow e com imagens decodificadas. Primeiro teste sinalizou lazy loading abaixo da dobra, corrigido no procedimento ao rolar até a galeria; nenhum ajuste de código necessário. Build 115 páginas e QA de links/HTML passaram.
Pendência da captura resolvida; revisão visual final do usuário, confirmação do Setup, leitor de tela e integração de e-mails continuam separados. Sem push/publicação. Preview http://localhost:4321/portfolio/.

## Décima segunda etapa — setas de ação
Autorização do usuário: aplicar setas mais visíveis, 18px em links e 20px em botões principais, usando a família oficial. Setas direitas de navegação das páginas públicas e componentes compartilhados convertidas para CategoryIcon arrow-right; variante externa do ArticleGuideResources usa arrow-up-right. Conteúdo editorial e Admin preservados; rotas, destinos, SEO e afiliados não alterados.
Tokens compartilhados e regra CSS documentados. Botão inicial da trilha atualiza o texto em nó próprio para preservar o SVG. Teste de Começar trilha → Continuar trilha → Rever etapas confirmou ícone mantido nos três estados.
22 representantes × 320/390/768/1440 × claro/escuro = 176 combinações sem overflow; SVGs com tamanho calculado de 18/20px e aria-hidden conforme papel. Capturas Home nos dois temas inspecionadas. Check 78 arquivos sem erros/avisos/hints; build 115 páginas; QA links/HTML passou. Sem envio real, push ou publicação. Preview http://localhost:4321/.

## Revisão dos esboços — correções P1, 09/10/2026
- Guia /store/guias/como-escolher-pendrive-linux/: SSD retirado dos cartões principais de pendrive; referência preservada em seção complementar de backup, com finalidade explícita.
- Modelo /blog/[slug]/: chamada distingue trilha associada de listagem geral; não promete uma próxima etapa que o link não abre.
- Escopo local, sem publicação. Check: 78 arquivos, zero erros/avisos; build: 115 páginas; QA de links e HTML aprovado. Verificação no preview: guia, artigo sem trilha e artigo com trilha, em 320/390/768/1440px nos dois temas (24 combinações), sem overflow; destinos dos CTA e separação do SSD conferidos.

## Atendimento e ícones — revisão local 09/10/2026
- /contato/: marcador de localização em Serra e Maps; pictograma WhatsApp no número e botão; seta externa SVG.
- /servicos/: pictograma compartilhado WhatsApp nos CTA de conversa; seta para seção abaixo em SVG.
- SocialShare centraliza o pictograma já existente no CategoryIcon, preservando links e nomes acessíveis.
- Check sem erros/avisos, build 115 páginas e QA aprovado. Contato, Serviços e artigo em 320/390/768/1440px, claro/escuro: 24 combinações sem overflow e sem SVG vazio; foco inicial por teclado conferido. Captura do atendimento em 320px inspecionada. Mapa externo bloqueado no teste, sem avaliar carregamento do provedor.
- Linux e degradês continuam pendentes. Sem publicação.

## Setas restantes — 09/10/2026
E-book, Portfólio, Store, Recursos, Trilhas e paginação usam SVG compartilhado nas ações antes representadas por glifos. Check zero erros/avisos; build 115 páginas; QA aprovado. Preview de seis rotas em quatro larguras e dois temas: 48 combinações sem overflow e sem setas vazias/ocultas. Links, downloads e analytics preservados. Sem publicação; degradês e decisão de Linux pendentes.
