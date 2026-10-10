# Revisão de padronização por página
Revisão: 09/10/2026. Responsável: @dev/@control.
Escopo: aplicação local do [Documento Mestre](../padroes/frontend-master.md).
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

## Degradês Home e Store — 09/10/2026
Transição ampliada e mídia próxima do texto, com avanço sob a coluna de leitura no desktop e transição vertical no celular. Assets, texto e destinos preservados. Check sem erros/avisos, build 115 páginas e QA aprovado. Preview em 320/390/768/1440px e claro/escuro: 16 combinações sem overflow; capturas de Home/Store em desktop e celular inspecionadas em ambos os temas representativos. Revisão visual do usuário pendente. Sem publicação.

## Contato e decisão de Linux — 09/10/2026
Atalhos Serviços/Parcerias movidos para atendimento conforme esboço, sem duplicação. Check zero erros/avisos, build 115 páginas, QA aprovado; oito combinações em 320/390/768/1440px e ambos temas sem overflow; destinos no atendimento conferidos, captura mobile inspecionada.
Linux: terminal corresponde ao ../padroes/icon-system.md vigente e ao registro categoryIcons.ts. O ponto da auditoria é alternativa visual, não defeito de padronização; mantido o símbolo atual.
Pendências restantes exigem revisão própria: inventário de Setup, organização editorial da trilha, Termos de Uso e assinatura incorporada nas artes. Sem publicação.

## Correção de contraste WhatsApp — 09/10/2026
Símbolo de canal nos botões passa a herdar a cor do texto, evitando ciano sobre ciano. Todos os CTA wa.me de Serviços agora têm o símbolo, inclusive diagnóstico, landing page e manutenção. Check/build/QA aprovados; 16 combinações de Contato/Serviços em quatro larguras e dois temas sem overflow, com símbolo presente e cor computada igual ao texto do botão. Sem publicação.

## Case de Serviços — reprodução do notebook do esboço, 09/10/2026
Moldura e base em CSS, com captura atual da Home; imagens aprovadas da Home não substituídas. Check zero erros/avisos; build 115 páginas; QA aprovado. Oito combinações em 320/390/768/1440 nos dois temas sem overflow e captura carregada; screenshots desktop escuro e mobile claro inspecionadas. Revisão visual do usuário pendente; sem publicação.

## Refinamento do notebook — 09/10/2026
Acabamento metálico vertical da base, borda suavizada, câmera discreta e sombra de apoio; captura e links preservados. Check/build/QA aprovados; oito combinações de largura/tema sem overflow, screenshot desktop inspecionada. Sem publicação.

## Situação consolidada dos esboços — 09/10/2026, 12:12 BRT
Esta tabela prevalece sobre as pendências históricas registradas nas etapas anteriores.

| Item | Situação atual | Próximo passo |
| --- | --- | --- |
| SSD no guia de pendrive | Corrigido: referência complementar de backup | Sem ajuste técnico pendente |
| CTA de trilhas em artigos | Corrigido: promessa corresponde ao destino | Sem ajuste técnico pendente |
| WhatsApp | Símbolo compartilhado e contraste corrigidos em todos os botões de atendimento | Revisão visual final |
| Localização e Maps | Marcador semântico e seta SVG aplicados | Carregamento externo do mapa não certificado pelos testes bloqueados |
| Setas públicas | SVG compartilhado, 18px/20px conforme papel | Sem ajuste técnico identificado nesta etapa |
| Home e Store | Degradês integrados aplicados e validados | Revisão visual final do usuário |
| Atalhos comerciais do Contato | Movidos para o atendimento | Revisão visual final |
| Notebook do case de Serviços | Reproduzido e refinado; usuário respondeu “show” em 09/10/2026 | Aprovado visualmente pelo usuário |
| Linux | Terminal mantido por coerência com a regra vigente | Alternativa visual futura, não defeito |
| Sequência da trilha Linux | Diferença editorial em relação ao esboço | Revisar pedagogia e artigos antes de reordenar; preservar progresso existente |
| Termos de Uso | Presente em esboços antigos, ausente no site | Definir necessidade e conteúdo; não criar link sem página |
| Setup | Divergência entre discos declarados e leitura local | Aguardar conferência do usuário |
| Assinatura nas artes | Revisão individual ainda pendente | Comparar rasters com marca oficial; não substituir todas as imagens automaticamente |

Limites: aprovação do notebook não representa autorização de publicação nem aprovação automática de todas as páginas. Check/build/QA e verificações responsivas referem-se às etapas descritas acima; esta consolidação apenas atualiza documentação. Entrega de e-mail e testes com leitor de tela permanecem frentes próprias.


## Rodada única de fechamento dos esboços — 09/10/2026
Trilha Linux reordenada: modo live opcional na posição 3, antes do terminal, preservando slugs e progresso essencial. Oito combinações de largura/tema passaram, incluindo progresso previamente salvo de dois artigos (40%). Check zero erros/avisos/hints, build 115 páginas, QA de links/HTML passou.
Triagem visual de 21 rasters Store e 43 editoriais, com caminhos individuais e diferenças de assinatura registradas em revisao-esbocos-fechamento-2026-10-09.md. Rasters preservados: aplicação do padrão visual requer tratamento individual após revisão conjunta. Setup reconfirmado com WDC de classe 640 GB, relação com discos declarados ainda pendente. Termos permanece pendência de conteúdo, sem link inexistente. Esta atualização prevalece sobre a pendência antiga de sequência Linux. Sem push/deploy.


## Padrão de assinatura aprovado — 09/10/2026
Usuário aprovou símbolo oficial único, sem placa, no topo esquerdo, largura de 5% e margens de 3%; variantes conforme o fundo. Regra registrada no Documento Mestre e registro de mídia, com dois modelos SVG transparentes copiados da geometria oficial. XML validado. Nenhum raster ou código de página alterado; não atribuir a esta etapa os testes responsivos anteriores. Migração individual do acervo permanece pendente, com lista por caminho na revisão dos esboços. Sem publicação.


## Lote de assinaturas preparado — 09/10/2026
61 rasters únicos nos mapas Store/editorial: 49 artes próprias com assinatura tratadas; 12 imagens sem assinatura mantidas fora do lote. Quatro atlas de recortes limpos com imagegen; somente regiões mascaradas reincorporadas aos originais, depois composição determinística do SVG oficial. Originais preservados por SHA-256; pixels fora do canto 20% × 25% idênticos em 49/49 comparações; dimensões preservadas. A limpeza gera fundo local aproximado dentro da máscara, portanto exige revisão visual individual na galeria.
49 versões irmãs -assinatura-v2.webp, em WebP lossless (38,6 MiB no total) para comparação; otimização para entrega deve ocorrer após aprovação visual. Nenhum resolver ou página pública foi alterado para usar estas versões. Não confundir preparação com migração concluída.
Galeria conjunta: http://localhost:4323/, servidor restrito a 127.0.0.1; frontend canônico continua 4321. Fonte da galeria: docs/brand/preview-assinaturas.html, com assets servidos pelo diretório temporário /tmp/dejota-assinaturas-preview. Não integra o build do site.
Registro: docs/brand/signature-batch-20261009.json. Recortes preparados persistidos em docs/brand/signature-batch-sources; receita em scripts/compose-signature-batch.py, sem sobrescrever originais ou versões divergentes.
Validação: check 78 arquivos, zero erros/avisos/hints; build 115 páginas; QA de links e HTML passou. Galeria em 320/390/768/1440 e claro/escuro: oito combinações, 98 imagens carregadas, sem overflow; capturas desktop/mobile inspecionadas. Assinatura regular conferida na imagem de pendrive e montagem das 49 versões. Sem publicação, push ou deploy. Ottocast preexistente preservado fora do commit.
Próximo passo: revisão conjunta do lote, ajustes pontuais se necessários e integração local das versões aprovadas.

Integração pendente: VisualMedia atualmente ancora no topo esquerdo por seletor img[src$="-capa-v1.webp"]. Os novos nomes terminam em -assinatura-v2.webp e não recebem essa regra; ao integrar, explicitar ancoragem para preservar a assinatura nos recortes 16:9/16:10. Não considerar testes da galeria como validação das novas imagens nos cards do site.


## Assinaturas aprovadas e integradas localmente — 09/10/2026
Esta seção atualiza o estado do lote preparado. Usuário aprovou visualmente as versões e autorizou integração local. 49 imagens mapeadas migradas nos resolvers Store/editorial, Home e recomendações de artigos. Hotmart Extensões continua mapeada, sem uso nas páginas atuais; 48 das 49 imagens aparecem em 81 rotas do build. Imagens excluídas do lote preservadas, sem alteração de conteúdo, afiliados, rotas ou controles.
WebP qualidade 90: lote de 38,63 para 6,16 MiB, redução de 84,1%. Mestres lossless preservados em docs/brand/signature-masters; originais públicos anteriores intactos por SHA-256. A prova anterior de pixels idênticos fora do canto refere-se aos mestres lossless; exportações finais usam compressão com perdas. Receita de composição e inventário sincronizados com as exportações.
Recortes ancorados no topo esquerdo para as novas assinaturas em VisualMedia, StoreCard, hero Home e recomendações de artigos. Degradê da Home preservado; ele atenua decorativamente o símbolo na borda da mídia, sem alterar o raster ou duplicar a marca.
Validação final: check 78 arquivos sem erros/avisos/hints, build 115 páginas, QA de links/HTML aprovado. 81 rotas × 320/390/768/1440 × claro/escuro = 648 combinações, 2.088 instâncias das novas imagens carregadas; zero overflow e caixas de assinatura integralmente dentro dos recortes. Capturas Store desktop, artigo mobile e Home desktop inspecionadas. Teste intermediário interrompido por recarga do preview durante edição; rodada final estável passou e substitui o resultado intermediário. Sem acessos externos, envios reais ou publicação.
Evidência resumida: docs/brand/signature-integration-validation.json. Galeria http://localhost:4323/ agora exibe exportações finais; preview do site http://localhost:4321/. Não iniciar 4322. Publicação continua sem autorização; arquivo preexistente Ottocast não incluído nesta alteração.


## Capturas sincronizadas após assinaturas — 09/10/2026
Portfólio: Home, Blog e Trilhas recapturadas do preview 4321, 1280 × 960, escuro; notebook Serviços: Home 1440 × 900, escuro. Mantidos os caminhos estáveis, proporções, moldura CSS e links. Fontes/imagens aguardadas, toolbar oculta por regra persistente durante captura; WebP qualidade 85. Nenhuma assinatura adicionada às capturas reais. Inventário atualizado.
Check 78 arquivos sem erros/avisos/hints; build 115 páginas; QA de links/HTML aprovado. Portfólio e Serviços em 320/390/768/1440 e claro/escuro: 16 combinações sem overflow, com capturas carregadas. Blog e tela do notebook inspecionados visualmente. Apenas quatro rasters de captura e registros alterados; nada publicado. Frontend continua 4321.
Padrão de assinaturas e atualização das capturas concluídos localmente. Setup e Termos continuam pendências de confirmação/conteúdo conforme revisão dos esboços; esta atualização não os resolve por inferência.


## Armazenamento confirmado — 09/10/2026
Dejota confirmou que o disco anteriormente informado como 500 GB é o Western Digital WD6400BPVT de 640 GB detectado localmente. Foto confirma SSD Rapidin SATA de 128 GB e Samsung HM160HI de 160 GB em case USB. Finalidades mantidas conforme declaração do usuário; a foto não certifica conexão atual nem disco de inicialização. Página /store/setup-do-dejota/ atualizada, sem números de série. Pendências de modelos da TV, teclado, mouse e hub permanecem. Sem publicação.
Validação desta alteração: check sem erros/avisos; build de 115 páginas; QA de links/HTML aprovado. Setup conferido em 320/390/768/1440 px nos dois temas (8 combinações), sem overflow, com conteúdo confirmado e foco inicial por teclado.


## Ilustração do Setup — aproximação do esboço, 09/10/2026
SetupIllustration.astro substitui a moldura CSS simples por SVG decorativo responsivo: monitor com editor, gabinete, teclado, mouse, planta e porta-lápis. Traços usam currentColor e tokens dos temas; brilho discreto usa color-glow. É ilustração editorial, não fotografia nem representação exata do hardware. Conteúdo e rotas preservados.
Validação: check/build/QA aprovados; 8 combinações de largura e tema sem overflow; captura desktop escura inspecionada. Ajuste local, sem publicação.

Setup: ilustração ampliada e deslocada 7rem à esquerda no desktop, com fade e texto em camada superior. Check/build/QA aprovados e 8 combinações responsivas/temas sem overflow; captura desktop inspecionada. Sem publicação.


## Aprovação e fechamento atual do Setup — 09/10/2026
Dejota aprovou o visual final às 14:03 BRT. Armazenamento reconciliado e ilustração ampliada concluídos localmente; somente modelos comerciais da TV, teclado, mouse e hub permanecem pendentes nessa página. Estado atual da revisão dos esboços consolidado em revisao-esbocos-fechamento-2026-10-09.md; entradas anteriores são histórico. Próxima etapa: revisão visual conjunta do conjunto no preview 4321. Integrações externas e publicação permanecem etapas separadas. Esta rodada altera somente documentação; validações anteriores continuam identificadas como evidência das respectivas alterações.


## Tela e periféricos confirmados — 09/10/2026
Dejota informou teclado Logitech K270 e mouse Logitech M150. Foto da tela de informações da TV confirma Samsung UN43T5300AGXZD, usada como monitor de 43 polegadas conforme declaração anterior. Apenas o modelo foi transcrito; números de série e identificadores do dispositivo excluídos. Modelos do teclado/mouse registrados como declaração do usuário, sem inferir especificações adicionais. No inventário de equipamentos, somente o modelo do hub USB continua pendente. Página atualizada localmente; sem publicação.
Validação dos modelos: check/build/QA aprovados; 8 combinações de largura/tema exibem K270, M150 e UN43T5300AGXZD sem overflow.


## Revisão do conjunto — 09/10/2026
Home, Store, Blog, Trilhas, Contato, Serviços, Portfólio, Setup, Recursos e Sobre: 320/390/768/1440 px nos dois temas, 80 combinações. HTTP 200, um main/h1 principal por página, imagens locais carregadas e nenhum overflow horizontal. Aberturas de Home/Store/Contato/Serviços no desktop escuro inspecionadas em montagem: nenhum novo ajuste identificado na amostra. Evidência em revisao-conjunto-validacao-2026-10-09.json. Esta rodada não cobre todos os recortes de todas as páginas, contraste completo, envio real de formulários, leitor de tela ou navegadores alternativos. Nenhuma interface alterada; não exige repetir build/QA aprovados na alteração anterior. Hub USB permanece pendente de modelo; conteúdo de Termos e integrações reais seguem separados. Sem publicação.


## Navegação principal — fechamento funcional, 09/10/2026
Nove verificações no Chromium local: troca de tema e persistência após recarga em 390/1440 px; menu mobile abre e fecha com Escape; busca desktop abre com foco no campo, Escape fecha e devolve foco ao botão; envio de consulta linux navega para /busca/?q=linux e apresenta conteúdo relacionado. Solicitações externas bloqueadas, sem formulários de contato/newsletter enviados. Nenhum defeito encontrado nos cenários testados. Não equivale a teste completo por leitor de tela ou outros navegadores. Nenhuma interface alterada; validações de build/QA da última alteração permanecem como evidências anteriores.


## Auditoria da entrega dos formulários — 09/10/2026
Código local da API conferido: contatos/leads são persistidos e consultáveis na rota administrativa protegida; não há envio por e-mail nas rotas atuais. Diagnóstico e sequência em formularios-entrega-revisao-2026-10-09.md. Integração depende de escolha do serviço, remetente e destinatário; nenhum secret lido, nenhum envio real ou publicação. Apenas documentação alterada.


## Estado consolidado — 09/10/2026, 15:05 BRT
Correções visuais, setas, ícones, degradês, 49 assinaturas e Setup concluídos localmente; frontend canônico permanece em http://localhost:4321/, sem publicação desta rodada. TV/teclado/mouse confirmados; somente modelo do hub USB pendente no inventário. Revisão técnica de dez páginas em 80 combinações e navegação em nove cenários já concluídas; evidências anteriores continuam válidas, sem repetir testes por alteração apenas documental.
Notificação de contato da API ativada/publicada mediante autorização específica. Release isolada em /home/dejota/Workspace/fullstack/dejotacode-api-contact-release, base 97f9271 e apenas commits de contato; versão Cloudflare 7fab067d-98d9-44c6-9716-122bf8523e02. Alterações editoriais/auth/platform do branch de desenvolvimento não incluídas; migrations não aplicadas. Remetente do domínio e destinatário verificado restrito no binding privado.
Teste público autorizado: um único envio fictício pelo formulário mobile, HTTP 201, sucesso na interface, exatamente um registro no D1 e notificação recebida na INBOX às 15:00 BRT; SPF/DKIM/DMARC pass e Reply-To correto. Registro operacional: ../dejotacode-api/CONTACT_NOTIFICATION_DEPLOY_2026-10-09.json. Entrega de contato concluída; newsletter continua com comportamento anterior. Sem fila persistente ou reenvio automático.
Pendências atuais: revisão visual final conjunta e publicação específica do frontend; modelo do hub USB; decisão de conteúdo de Termos; leitor de tela/navegadores alternativos; definição própria de eventual entrega da newsletter. Arquivo Ottocast preexistente preservado fora dos commits desta rodada. Entradas anteriores que descrevem contato desativado são histórico e não prevalecem sobre este estado.


## Hub do Setup — 09/10/2026, 15:14 BRT
Foto enviada por Dejota e autorização para descrição genérica: Hub USB multifuncional 6 em 1. Marca e modelo não identificados; nenhum fabricante, velocidade, áudio ou outra especificação inferida da aparência. Informação pública atualizada localmente, sem vínculo comercial ou publicação do frontend. Identificação exata permanece opcional e pendente de etiqueta/link de compra.

Validação do texto do hub: check/build/QA aprovados, 115 páginas, zero links internos quebrados e zero problemas básicos de HTML. Setup em 320/390/768/1440 nos temas claro/escuro: oito combinações com texto atualizado e sem overflow. Primeira tentativa durante recarga do preview interrompida; rodada estável posterior passou.


## Frontend publicado e homologado — 09/10/2026, 15:26 BRT
Publicação explicitamente autorizada às 15:20 BRT. Branch release/frontend-review-20261009 enviada; PR #266 aprovado tecnicamente por CI e integrado por squash na main: b047f1264068e8af718036e69285368e2202b12d. Árvore desse commit idêntica à fonte validada f414dd2. Workflow 37972867585 concluiu qualidade, deploy Cloudflare Pages e dez verificações de smoke com sucesso. Deployment 60c83e7b-0258-44fa-9a23-6acc2753d362, URL https://60c83e7b.dejota-code.pages.dev; domínio https://dejotacode.com.br atualizado.
Homologação complementar no domínio oficial: dez páginas principais × 390/1440 × claro/escuro = 40 combinações; HTTP 200, h1 principal único, imagens carregadas, sem overflow e texto do hub confirmado. Evidências em frontend-publication-result-2026-10-09.json. Deployment anterior para referência de rollback: d3424451-1dd9-431c-a71a-cfb8fbbe9308 (9fb07bf).
Ottocast preexistente preservado fora da publicação. Nenhuma alteração de API, D1, DNS ou secrets nesta publicação do frontend; notificação de contato já implantada/testada separadamente. Hub usa descrição genérica autorizada; marca/modelo não identificados. Termos, newsletter, leitor de tela e navegadores alternativos continuam frentes separadas. Entradas anteriores sobre ausência de autorização/publicação são histórico. Registros pós-deploy salvos localmente; o PR publicado permanece o pacote aprovado, sem novo push documental.


## Modelo do hub confirmado — 09/10/2026, 15:38 BRT
Dejota informou modelo KA-6051 do hub USB 6 em 1. Setup atualizado localmente, sem inferir marca, velocidades ou recursos adicionais. Identificação de modelo deixa de ser pendência. A publicação anterior permanece com descrição genérica; esta atualização não foi publicada.


## Newsletter — integração Brevo local, 09/10/2026

Newsletter (rota `/newsletter/`): texto e variante Guia orientam confirmação por e-mail; redirect imediato removido; consentimento e analytics preservados. Registro: [Integração newsletter](../operacao/newsletter-brevo-integracao-2026-10-09.md). Revisão local, sem publicação/envio real.


## Newsletter publicada — 09/10/2026, após autorização às 18:13 BRT

Teste isolado concluído: confirmação DOI, entrega e descadastro nativo verificados. Publicação explicitamente autorizada, sem novos envios de teste. API versão f19338f7-aa51-41de-bee6-3288c21be126, base f2c92ab; contato ativo e bindings preservados. Backup D1 privado anterior à migração, SHA256 e tamanho em NEWSLETTER_PRODUCTION_DEPLOY_2026-10-09.json. Aplicada e registrada somente 0014_newsletter_requests.sql; 0012/0013 não aplicadas. BREVO_API_KEY armazenada como segredo, lista 3/template DOI ativo 1, NEWSLETTER_ENABLED=true. Configuração efetiva privada: .local/newsletter-production.json. prepare-newsletter-release.py continua gerando newsletter false como padrão seguro; não substitui a configuração efetiva publicada.

Verificação pública da API: health 200; consentimento ausente rejeitado 400; pedido do contato já bloqueado retornou 201 genérico e ledger suppressed. Isso verificou Worker→Brevo sem envio e sem reativação; registro local de consentimento é histórico de solicitação, não inscrição ativa. Contato de teste permanece suprimido. Não houve importação de leads antigos nem campanhas novas. Lista 4 permanece somente teste.

Frontend publicado por PR #268, merge 652e864d949668bc417edfd7dc2b0b47a6ba722f; workflow 37992473939 concluiu check, build, QA, deploy e smoke. Release isolada baseada em main preservou checkout Hotmart e excluiu mudanças locais pendentes de outras frentes. Formulário orienta confirmação e variante Guia retorna após confirmação nativa, sem envio automático de PDF. Produção: https://dejotacode.com.br/newsletter/.

Edições futuras continuam manuais e precisam de autorização própria; nenhuma automação de campanha semanal ou boas-vindas foi criada. Nenhum segredo, backup SQL, contato ou link individual de descadastro versionado.

Conferência pública final: 16 combinações (320/390/768/1440 × claro/escuro × newsletter/Guia), HTTP 200, formulário habilitado com API de produção, h1 único e sem overflow. Nenhum POST do formulário nessa conferência. Evidência: NEWSLETTER_PRODUCTION_UI_2026-10-09.json.


## Ottocast publicado — 10/10/2026
Artigo /blog/ottocast-mini-cube-3-0-o-que-saber-antes-de-comprar/ e ficha /store/ottocast-mini-cube-3-0/ liberados juntos, Pesquisado, catálogo geral. Usuário autorizou execução até produção. PR #270, commit cc1d3ba, workflow 38030741660, deployment a0ca317c.dejota-code.pages.dev. Check/build/QA/CI e smoke 10 verificações aprovados. Duas rotas × quatro larguras × dois temas: 16 combinações sem overflow e imagens carregadas; captures do produto desktop e mobile inspecionadas. Canonicals, vínculos e hash da mídia pública conferidos. QA intermediário foi ajustado para aguardar imagens lazy fora da viewport; rodada final passou. Sem alterações de API, D1, R2, DNS ou secrets. Outras alterações editoriais locais não incluídas. Limites e [evidência](ottocast-publication-result-2026-10-10.json).


## Artigo MX Anywhere 3S — preparação local de 10/10/2026
Ficha pública existente; artigo local preexistente ainda HTTP 404 em produção. Resolver editorial passou a usar a mesma mídia já utilizada na ficha (/assets/store/logitech-mx-anywhere-3s.webp), sem alterar raster ou links comerciais. Conteúdo mantém Pesquisado, vínculo recíproco e transparência de afiliação. Especificações principais reconferidas na página oficial Logitech; fontes registradas no artigo preservadas. Check zero diagnósticos, build local 121 páginas, QA aprovado; 320/390/768/1440px nos dois temas sem overflow e mídia carregada, captura mobile inspecionada. Três arquivos separados em release/mx-anywhere-article-20261010; build de produção em validação. Esta preparação não publica e não altera imagens existentes. Ottocast continua concluído; autorização específica daquela publicação não reutilizada para novos produtos.


## MX Anywhere 3S — correção da assinatura — 10/10/2026
A preparação anterior conferiu layout, mas não o símbolo. Esse resultado não certificava identidade visual. Marca antiga no caderno removida via imagegen, somente região local reincorporada; diferença fora da máscara zero antes de enquadramento/exportação. Original preservado. Novo asset 1440 × 810 com SVG oficial dark único, 72 × 72 em x43/y24. Resolver editorial, Store e destaque principal agora usam -assinatura-v2.webp. Catálogo e destaque ancorados left top. Conferência obrigatória de identidade acrescentada ao registro de mídia e referenciada no Documento Mestre.
32 combinações de artigo/ficha/catálogo/destaque × quatro larguras × dois temas: mídia carregada, sem overflow e alinhamento correto. Capturas de artigo mobile e Store desktop inspecionadas. Degradê existente do destaque atenua a assinatura; comportamento aprovado preservado, sem marca duplicada. Check/build:production/QA aprovados (121 páginas locais). [Evidência](../brand/mx-anywhere-signature-validation-20261010.json). Sem publicação.


## MX Anywhere 3S publicado e homologado — 10/10/2026
Registro final supera estados históricos de preparação acima. PR #271, merge e8cf6f45, workflow 38032519089 aprovado, deployment a03d1162.dejota-code.pages.dev. Smoke: 10 verificações aprovadas. Quatro páginas públicas × quatro larguras × dois temas: 32 combinações sem overflow, imagens carregadas e alinhamento left top. Artigo mobile e destaque Store desktop inspecionados; símbolo oficial único presente. Hash da mídia pública idêntico à release. Canonicals, vínculos recíprocos e ofertas preservadas conferidos. Original preservado, demais alterações locais fora do pacote. [Evidência final](../brand/mx-anywhere-signature-validation-20261010.json).


## Setup KA-6051 — pacote local validado — 10/10/2026
Pendência reconfirmada na rota pública /store/setup-do-dejota/: modelo ausente. Correção local existente isolada em um arquivo sobre main e8cf6f4; branch release/setup-ka6051-20261010, commit a790b867926f2f7ea1d6485d97e28f7bf6e32265. Check zero diagnósticos, build 119 páginas, HTML QA sem problemas. Oito combinações de largura/tema sem overflow, modelo presente e imagens carregadas; captura mobile inspecionada. Símbolo oficial existente preservado; nenhuma mídia nova. Marca e especificações não inferidas. Sem push/PR/deploy. [Evidência](setup-ka6051-validation-20261010.json).


## Setup KA-6051 publicado — 10/10/2026
Registro final supera preparação acima. PR #272, merge 24a5b581, workflow 38033357389 e deployment aab95e4c.dejota-code.pages.dev aprovados. Dez smoke checks; rota pública com modelo presente e oito combinações de largura/tema sem overflow e imagens carregadas. Captura mobile inspecionada, símbolo oficial existente preservado. [Evidência final](setup-ka6051-validation-20261010.json). Nenhuma marca ou especificação adicional inferida.


## Firefox — homologação pública de 10/10/2026
Firefox 157.0.1 nativo, perfil headless isolado, WebDriver BiDi, sem usar sessão pessoal. Nove rotas públicas (Home, Newsletter, Contato, Setup, Store e artigos/fichas MX e Ottocast) × quatro larguras × dois temas: 72 combinações, zero overflow, h1/main únicos e imagens carregadas. Primeiro Tab e Enter no link de salto moveram foco para conteudo nas quatro páginas Home/Newsletter/Contato/Setup. Capturas de Store desktop escuro e MX mobile claro inspecionadas; símbolo oficial e degradê aprovado preservados. Sem envio de formulário ou publicação. Lacunas: leitor de tela, Safari/WebKit e demais fluxos interativos não cobertos. [Evidência](firefox-validation-20261010.json), [Store](firefox-store-1440-dark-20261010.png), [MX](firefox-mx-390-light-20261010.png).

## Leitor de tela — preparação e bloqueio técnico — 10/10/2026
Status: registro; execução assistiva pendente. Responsável: @control/@dev.
Diagnóstico somente leitura: Orca, speech-dispatcher e espeak-ng ausentes; at-spi2-core 2.62.0.1-1 presente. Pacotes disponíveis no repositório extra. sudo não interativo exige autenticação do usuário; nenhuma instalação ou alteração de configuração realizada.
Roteiro para Firefox com Orca, em perfil separado e sem envios reais:

| Área | Ação | Evidência exigida |
| --- | --- | --- |
| Home | Navegar por títulos e regiões; Tab e Enter no link de salto | Leitura ordenada, nomes claros e foco no conteúdo |
| Cabeçalho | Abrir busca/menu com teclado e fechar com Escape | Estado expandido anunciado e foco devolvido |
| Tema | Acionar alternador | Nome e estado correspondem ao tema atual |
| Newsletter | Percorrer nome, e-mail, consentimento e botão | Rótulos, obrigatoriedade e instruções anunciados |
| Contato | Percorrer assunto, mensagem e consentimento | Rótulos e textos de ajuda anunciados |
| Erros | Usar formulário vazio/inválido, sem envio válido | Erro anunciado e campo identificado |
| Store/artigo | Percorrer imagem, títulos, classificação e links | Texto alternativo e destino compreensíveis; decoração não repetida |

Newsletter e Contato têm rótulos e regiões aria-live no código; isso não comprova anúncio pelo leitor. Não fazer POST válido, inscrição, contato ou disparo de e-mail. Estados de sucesso/falha de rede devem ser ensaiados localmente com resposta simulada, sem certificar entrega real.
Conclusão futura precisa registrar navegador, versão Orca, voz/idioma, sequência executada, anúncios observados e defeitos. Até lá, status LEITOR_DE_TELA_NAO_VALIDADO. Safari/WebKit permanece pendente.


## Orca instalado — validação assistiva parcial — 10/10/2026
Registro supera ausência de pacotes acima: Orca 51.0-2, speech-dispatcher 0.12.1-3 e espeak-ng 1.52.0-1 instalados. Firefox gráfico e Orca reais em perfil/configuração/barramento isolados. Falha inicial de autoativação AT-SPI contornada somente no processo de teste, sem configuração permanente. Log Orca comprova anúncios em português de títulos de Home/Newsletter/Contato/Setup, regiões, contagens e link de salto. Áudio não ouvido pelo assistente. Automação de foco de campos não produziu evidência suficiente de anúncio; não classificar como defeito do site nem aprovação desses campos. Busca/menu/tema, rótulos/erros/aria-live e leitura completa permanecem pendentes de ensaio assistido na sessão gráfica. Nenhum envio, cadastro ou publicação. [Evidência parcial](orca-validation-20261010.json). Próximo passo: execução assistida com Orca/Firefox dos campos e estados; Safari/WebKit continua lacuna.


## Cobertura de imagens de todo o conteúdo local — 10/10/2026
Auditoria de 98 itens: 47 artigos (44 capas específicas, 3 genéricas), 23 produtos (22 específicas, 1 genérica), 22 recursos e 5 trilhas com imagem específica, 1 guia Store cujo modelo não tem capa própria. Build atual: 121 páginas/504 imagens, sem referência de img quebrada e sem asset resolvido ausente. Mídia de artigo/produto presente no HTML quando rota incluída no build.
Capas específicas pendentes: artigos Hub Data e Programação do Iniciante ao Avançado (não rascunhos locais); artigo Jornada Python e produto Jornada Python (rascunhos). Todos recebem imagem de categoria existente. Guia Como escolher pendrive Linux não tem capa própria por estrutura do modelo; usa imagens de produtos relacionados. Não classificar ausência de capa prevista como arquivo quebrado.
Esta conferência verifica cobertura e existência local, não publicação, carregamento em todos os navegadores, fidelidade visual ou assinatura oficial de cada raster. Nome de arquivo não comprova símbolo. Sem alteração de conteúdo, mapas ou mídia. [Inventário completo](cobertura-imagens-20261010.json).


## Quatro lacunas de capas preenchidas localmente — 10/10/2026
Três artes editoriais próprias geradas via imagegen e assinadas por composição determinística do SVG oficial dark: Hub Data, e-book programação e Jornada Python. 1440x810, símbolo único 72x72 em x43/y24. Mestres PNG preservados; WebP qualidade 90, originais mantidos. Jornada Python compartilhada no artigo/produto, flags preservadas. Imagens finais inspecionadas individualmente. Build 121 páginas e HTML QA 504 imagens/271 controles sem problemas. Hub Data e artigo programação em 16 combinações de largura/tema sem overflow e mídia carregada; Jornada Python sem rota por rascunho, sem afirmar homologação de página. Inventário atualizado. Auditoria de cobertura refeita: 97 itens com mídia específica, guia Store mantém modelo sem capa própria. Sem publicação. [Cobertura atualizada](cobertura-imagens-20261010.json).


## Trilhas — padronização das cinco capas — 10/10/2026
Registro local, responsável @studio/@dev. Conferência pública encontrou 1 cena fotográfica e 4 SVGs; havia cobertura, mas não unidade visual. Cinco artes ilustrativas próprias geradas em família fotográfica azul/grafite/ciano; símbolo oficial dark aplicado separadamente, único, caixa 5%, margens 3%. Novos assets versionados, originais anteriores preservados. Resolver comum atualiza catálogo e cinco detalhes, sem alterar conteúdo, etapas, links ou ícones.
Validação: check 79 arquivos sem diagnósticos; build 119 páginas; QA 6.623 referências, 489 imagens e 267 controles, sem problema. [Evidência responsiva](trilhas-capas-validation-20261010.json): 6 rotas × 4 larguras × 2 temas, 48 combinações sem overflow e imagens carregadas. Capturas desktop/mobile inspecionadas: assinatura inteira e assuntos visíveis na moldura 16:9. Sem publicação. Revisão visual do usuário pendente. Outros ajustes editoriais preservados. Diferença no total de páginas em relação à etapa anterior corresponde ao estado editorial atual do workspace; conteúdo não alterado nesta entrega.


## Trilhas — publicação homologada — 10/10/2026
Usuário autorizou publicação às 12:07 BRT após apresentação do pacote. PR [273](https://github.com/Dejotacode/dejotacode/pull/273), HEAD 3f3c9217b540c82aec40091c2cda19fa6376d259, CI 38062380350 aprovado e merge com HEAD conferido. Commit publicado a715a31c7f52e0cf8471237d88019c7ae218f2a2, workflow oficial 38062444534 aprovado, deployment https://ffbb2a29.dejota-code.pages.dev. Dez smoke checks aprovados.
Catálogo e cinco detalhes públicos em quatro larguras/dois temas: 48 combinações, sem overflow ou imagens ausentes. Capturas públicas desktop/mobile inspecionadas: símbolo oficial único inteiro e assuntos visíveis. Cinco assets HTTP 200 e SHA-256 idênticos à release. [Resultado da publicação](trilhas-publication-result-20261010.json) e [validação pública](trilhas-publication-validation-20261010.json). Originais e demais conteúdos locais preservados. Registros pós-deploy locais; sem novo push documental. Estados anteriores de publicação pendente são históricos. Nenhuma compra, mensagem, alteração API/dados ou cópia externa de backup.


## Capas Hub Data/programação/Python — revisão local concluída — 10/10/2026
Estado atual conferido: três artigos draft true; produto Jornada Python draft true/catalogStage avaliacao. Flags do principal preservadas. Preview isolado 4324 usa cópias liberadas somente para teste; página qa-capas existe apenas nessa cópia. Nenhuma publicação ou mudança de oferta.
Corrigido reconhecimento de assinatura v1 em VisualMedia, StoreCard e catálogo. Recorte real 4:3 cortava notebook Jornada Python; contain/center agora mostra quadro integral, com faixas da superfície existente. 16:10 e 16:9 mantêm cover/left top. Símbolo oficial único, arquivos originais e novos rasters preservados.
[Evidência responsiva](capas-rascunhos-validation-20261010.json): três artigos, ficha Python, categoria programação e componentes isolados, quatro larguras e dois temas; 48 combinações sem overflow ou mídia ausente, geometria da assinatura dentro de todos os recortes. Capturas desktop/mobile inspecionadas. Primeira rodada iniciou antes da sincronização dos novos conteúdos: 40 verificações sem mídia em rotas ausentes. Reinício apenas do preview isolado e rodada final estável superam essa tentativa; não representa defeito público. Check 79 arquivos sem diagnósticos; build:production principal 119 páginas; QA 6.623 referências, 489 imagens e 267 controles sem problemas. Conteúdos em rascunho não entram nesse build.
Próximo passo: aprovação editorial dos conteúdos pela frente responsável antes de pacote de publicação; imagens tecnicamente prontas. Preview http://localhost:4324/qa-capas/, frontend canônico continua 4321. Sem push/deploy.


## Hub Data/programação/Jornada Python — revisão editorial — 10/10/2026
Três artigos e ficha Jornada Python revisados; rascunhos e catalogStage avaliacao preservados no principal. Conteúdo preexistente do produto programação e alterações de outras frentes não incluídos nesta entrega.
Hub Data: removidas afirmações divergentes de pagamentos semanais, prazo de 72 horas e valor residencial de R$30; referências oficiais https://ai.hub.xyz/facts e https://ai.hub.xyz/data-use consultadas em 10/10/2026 (última verificação declarada pela fonte: 12/09/2026). Valores aplicáveis remetidos ao aplicativo, distinção entre gravação e hora aprovada mantida. Cadastro/aplicativo/tarefas tratados como registro inicial, não como comprovação atual. Conta, envio, aprovação e pagamento não acessados nem comprovados nesta revisão.
Ebook: escopo confrontado com página do produtor e ficha pública Hotmart; referências adicionadas. Jornada Python: ementa oficial confrontada e referenciada no artigo e ficha. Status Pesquisado mantido; nenhuma leitura integral ou conclusão de curso alegada. Registro comercial de 09/10 permanece separado: atribuição de comissão e situação atual da afiliação não revalidadas.
Cópias sincronizadas no preview isolado 4324, liberadas apenas para teste. Check: 80 arquivos, zero diagnósticos. Build:preview: 124 páginas, incluindo rascunhos e qa-capas exclusivos do preview. QA: 6.902 referências internas sem destino quebrado; 517 imagens e 277 controles, zero páginas com problemas. Documentação: 158 Markdown/311 referências válidas. Símbolo e recortes homologados na etapa anterior preservados, sem mudança visual nesta revisão.
Próximo passo: revisão editorial final do pacote e decisão explícita de publicação. Hub permanece relato preliminar enquanto não houver ciclo real comprovado. Sem push, deploy, compra, mensagens, API/dados ou cópia externa.


## Pacote editorial candidato — 10/10/2026
Status: preparado localmente; publicação pendente de autorização explícita. Base official/main 0277555 (inclui Analytics da outra frente). Branch local/candidato-editorial-20261010; worktree /home/dejota/Workspace/fullstack/dejotacode-editorial-candidato. Escopo funcional: três artigos, ficha Jornada Python, três capas assinadas, dois resolvers, três ajustes de recorte e somente vínculo relatedPosts do ebook existente. Sem qa-capas, alterações de outras frentes ou configuração de ambiente. Principal permanece com rascunhos; apenas candidato usa draft false e Jornada catalogo-geral para validar resultado de publicação.
Hub é relato preliminar, não teste concluído; lacuna de tarefa/envio/aprovação/pagamento mantida. Programação/Jornada classificados Pesquisado, sem promessa de resultado. Fontes e transparência comercial presentes. Símbolo oficial único e recortes preservados conforme validação de 48 combinações anterior.
Check candidato: 79 arquivos sem diagnósticos. Build:production 123 páginas; QA 6.859 referências internas, 515 imagens, 275 controles sem problemas. Ambiente de produção restaurado da base atual para preservar Analytics, seguido de rebuild/QA final. Não houve push/deploy. A etapa seguinte é autorizar explicitamente publicação deste pacote, então PR/CI/workflow oficial e verificação pública.


## Pacote editorial — publicação homologada — 10/10/2026
Autorização do usuário às 12:53 BRT em resposta ao pedido concreto de publicação. PR 274 (https://github.com/Dejotacode/dejotacode/pull/274), HEAD 2cba50adcc11858b73f20b8fd34636d974d30624; CI 38065453759 aprovado e merge com HEAD conferido. Commit publicado f10aaa2eb0d410ffd8bfe4764fa09ce1e6d685fc; workflow oficial 38065511478 aprovado, deployment https://deae47b1.dejota-code.pages.dev, dez smoke checks aprovados. Analytics da base 0277555 preservado.
Três artigos e ficha Python publicados. Hub explicitamente preliminar; tarefa/envio/aprovação/pagamento continuam pendentes de comprovação. Ebook/Jornada Pesquisado, sem alegar leitura integral ou conclusão. Cinco rotas públicas × quatro larguras × dois temas: 40 combinações sem overflow, mídia ausente ou H1 incorreto. Assinatura dentro de todos os recortes; capturas mobile/desktop inspecionadas. Três assets HTTP 200 e SHA-256 idênticos à release. [Resultado](editorial-publication-result-20261010.json) e [validação pública](editorial-publication-validation-20261010.json).
Flags do principal conciliadas com publicação (artigos/ficha draft false, Python catalogo-geral). Conteúdo preexistente do ebook e demais alterações de outras frentes preservados. Registros de etapas anteriores em rascunho ou publicação pendente são históricos. Fechamento local, sem novo push documental. Nenhuma compra, mensagem, alteração API/dados ou cópia externa de backup.


## Diversidade de capas — oito imagens atuais — 10/10/2026
Usuário autorizou substituir capas atuais, não apenas definir padrão futuro. Oito cenas novas geradas e integradas localmente, três artigos/ficha Python/cinco trilhas. Símbolo oficial composto separadamente; Python/Tux de fontes verificadas. Originais preservados por SHA-256; outros conteúdos/flags/ofertas e alterações preexistentes preservados. [Direções e proveniência](diversidade-capas-20261010.json). Regras em frontend-master/media-registry, crédito Linux em visual-system. Validação de páginas em execução; sem publicação nesta etapa.

Validação final: check 79 arquivos sem diagnósticos; build:production 123 páginas; QA 6.859 referências internas, 515 imagens e 275 controles sem problemas. [Onze rotas em quatro larguras/dois temas](diversidade-capas-validation-20261010.json): 88 combinações sem overflow ou mídia ausente, um H1 principal, símbolo dentro dos recortes e crédito Tux presente no Linux. Montagem de oito capas e páginas Trilhas/Python desktop inspecionadas. Oito originais reconferidos por hash. Publicação pendente de autorização específica; preview 4321.


## Ficha Store — moldura editorial sem faixas (10/10/2026)

Status: correção local, publicação pendente. A abertura de /store/jornada-python-hotmart/ usa a variante product-visual--editorial-wide para capas -diversidade-assinatura-v1.webp: moldura 16:9 igual ao raster 1440×810, mantendo contain e imagem integral. Elimina as faixas da antiga moldura 16:10 sem cortar Python ou o símbolo DejotaCode. Cards e demais fotos de produtos mantêm suas variantes.

Validação: [8 combinações de largura e tema](store-hero-faixas-validation-20261010.json), zero faixas geométricas, overflow ou cortes do símbolo; captura desktop inspecionada. Check, build de produção, QA e documentação do candidato aprovados.


## Diversidade dos destaques Home/Blog — 10/10/2026

Status: integrado localmente, publicação pendente. Três ilustrações distintas substituem mesas genéricas: escolher pequeno projeto (modelos 3D), hábitos de segurança (cena cotidiana ilustrativa) e estudo com objetivo (percurso arquitetônico). [Briefs e hashes](../auditorias/diversidade-destaques-20261010.json). Capas 1440×810, SVG oficial dark único 72×72 em x43/y24, composto separadamente. Hero Home reconhece também assinatura-v1 e mantém ancoragem left top, máscara e demais variantes. Rotas: /, /blog/, /blog/escolher-primeiro-projeto-portfolio/, /blog/habitos-seguranca-digital-iniciantes/, /blog/como-estudar-tecnologia-sem-se-perder/. Ilustrações não são capturas nem evidências de teste. Capas anteriores preservadas.

Validação dos destaques: [40 combinações, zero problemas](diversidade-destaques-validation-20261010.json). Capturas da Home desktop/mobile e Blog desktop inspecionadas; máscara original da Home preservada. Check/build/QA aprovados; nenhuma publicação.


## Diversidade das capas de programação — 10/10/2026

Status: integração local, publicação pendente. Quatro ilustrações distintas: camadas HTML/CSS/JavaScript, transformação de valores, montagem artesanal de primeira página e metáfora de pedido/resposta na web. [Briefs, referências e hashes](../auditorias/diversidade-programacao-20261010.json). SVG oficial separado 72×72 em x43/y24; nomes das tecnologias tipografados separadamente, sem simular logos. Rasters 1440×810. Metáforas não substituem diagramas exatos, exemplos de código ou capturas reais. Rotas /blog/html-css-javascript-entenda-diferenca/, /blog/javascript-variaveis-funcoes/, /blog/primeiro-site-html-css/, /blog/como-a-web-funciona/ e recomendações relacionadas. Capas anteriores preservadas para a receita técnica.

Validação: [32 combinações sem problemas](diversidade-programacao-validation-20261010.json), artes finais e capturas inspecionadas; nenhuma publicação.


## Diversidade das capas de IA — 10/10/2026

Status: integração local, publicação pendente. Quatro cenas ligadas aos artigos: criação de modalidades, direção clara de pedido, prática independente e comparação de evidências. [Briefs e hashes](../auditorias/diversidade-ia-20261010.json). SVG oficial aplicado separadamente; rasters 1440×810. Ilustrações editoriais, sem simular interfaces reais, provas de teste, funcionamento exato de modelos ou garantias. Rotas /blog/o-que-e-ia-generativa/, /blog/prompts-melhores-estudar-trabalhar/, /blog/usar-ia-estudar-sem-dependencia/, /blog/como-verificar-respostas-de-ia/ e /categoria/inteligencia-artificial/. Quatro capas antigas arquivadas; catálogo agora com 117 imagens.

Validação: [40 combinações sem problemas](diversidade-ia-validation-20261010.json), artes finais e categoria inspecionadas; nenhuma publicação.


## Capas de IA — referência explícita corrigida em 10/10/2026

Status: integração local, publicação pendente. A revisão do usuário mostrou que as quatro metáforas anteriores comunicavam ações, mas não identificavam IA. Substituídas por chat conceitual gerando conteúdo; contexto/objetivo/formato para um assistente; estudo ativo com dica; e resposta da IA comparada com fontes. Interfaces são ilustrativas e não reproduzem ferramenta real. SVG oficial único composto separadamente. Versões anteriores preservadas no acervo local, agora com 121 imagens. [Briefs e hashes](../auditorias/diversidade-ia-20261010.json). Rotas dos quatro artigos e /categoria/inteligencia-artificial/: 40 combinações em 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados; categoria e artigo mobile inspecionados. Backup local restaurou 179 arquivos idênticos, incluindo 121 imagens arquivadas.


## Próximo lote Linux — direção humana, 10/10/2026

Status: preparação local. Sete artigos conferidos pelo conteúdo: comandos, pendrive bootável, escolha de distribuição, teste live, introdução ao Linux, permissões e pipe/redirecionamento. Começar pela ação concreta de identificar o pendrive correto; não mostrar formatação em andamento nem alegar teste real. Pessoas/gestos naturais, tecnologia pertinente e símbolo oficial separado. Preservar todas as capas substituídas.


## Linux — primeira capa com direção humana, 10/10/2026

Status: integração local, publicação pendente. /blog/como-criar-pendrive-bootavel-linux/: pessoa conferindo um dispositivo USB antes da gravação, computador secundário e luz natural. Janela conceitual, sem alegação de captura ou teste real. Sem gravação em andamento. Referência Linux tipografada separadamente; símbolo oficial único 72x72 em x43/y24. [Brief e hash](../auditorias/diversidade-linux-20261010.json). Capa anterior preservada por SHA-256 no acervo, agora com 122 imagens. Demais seis artigos Linux aguardam a revisão individual.

Validação desta capa: 8 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados; raster final e artigo mobile inspecionados. Backup restaurou 183 arquivos idênticos, incluindo 122 imagens arquivadas.


## Linux — seis capas restantes com cenas humanas, 10/10/2026

Status: integração local, publicação pendente. Comandos: aula com mentora; distribuição: comparação de opções; sessão live: conferência de áudio com USB; introdução: técnico em infraestrutura; permissões: revisão colaborativa de acesso; pipe: organização de etapas. [Briefs e hashes](../auditorias/diversidade-linux-20261010.json). Pessoas, ambientes e enquadramentos variados. Linux tipografado, sem simular logo; símbolo oficial separado. Interfaces e analogias são ilustrativas, sem alegação de captura ou teste. Seis capas anteriores preservadas no acervo, agora com 128 imagens. Os sete artigos Linux têm novas capas locais. Artigos e categoria /categoria/linux-seguranca/: 72 combinações 320/390/768/1440 e claro/escuro sem problemas; check/build/QA aprovados. Montagem e categoria inspecionadas. Backup restaurou 201 arquivos idênticos, incluindo 128 imagens arquivadas.


## Segurança digital — quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Phishing: pausa para conferir mensagem; 2FA: segunda verificação em dispositivo; senhas: cuidado com recuperação do cofre; VPN: acesso remoto de trabalho em viagem. [Briefs e hashes](../auditorias/diversidade-seguranca-20261010.json). Interfaces conceituais e cenas ilustrativas, não capturas, testes de fornecedor ou garantia de proteção. SVG oficial único e rótulos compostos separadamente. NordPass/NordVPN permanecem no projeto para a Store; capas antigas phishing/2FA arquivadas por hash, total 130 imagens no acervo. Conteúdo e ofertas preservados. Quatro artigos e duas páginas da categoria Linux & Segurança: 48 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Arte VPN corrigida antes da integração: removida interface impossível na tampa do notebook. Backup local restaurou 212 arquivos idênticos, incluindo 130 imagens arquivadas.


## Renda digital — primeiro lote de quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Escolha do serviço: amostras de tarefas; primeiro cliente: conversa específica em comércio; preço do site: escopo, cronograma e cálculo; e-book: organização e revisão de páginas. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Cenas e materiais ilustrativos; não alegam cliente real, prova de receita, taxa recomendada ou garantia de venda. SVG oficial único e rótulos compostos separadamente. Quatro capas anteriores preservadas por hash, total 134 imagens no acervo. Demais conteúdos renda digital aguardam revisão individual. Quatro artigos e três páginas da categoria renda digital: 56 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Backup local restaurou 225 arquivos idênticos, incluindo 134 imagens arquivadas.


## Renda digital — segundo lote de quatro capas humanas, 10/10/2026

Status: integração local, publicação pendente. Portfólio: apresentação de projetos de estudo; oferta: definição de escopo com pequeno negócio; landing page: teste de contato no celular; primeira renda: tarefa pequena de imagem para comerciante. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Gestos ativos e ambientes distintos; interfaces ilustrativas, sem alegar cliente real, pagamento ou garantia de receita. SVG oficial único aplicado separadamente. Quatro capas anteriores preservadas por SHA-256; acervo agora com 138 imagens. Oito artigos de renda digital renovados localmente, demais conteúdos aguardam revisão. Quatro artigos e três páginas da categoria renda digital: 56 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Montagem, artigo mobile e categoria inspecionados. Backup local restaurou 237 arquivos idênticos, incluindo 138 imagens arquivadas.


## Renda digital — terceiro lote de duas capas humanas, 10/10/2026

Status: integração local, publicação pendente. Foco: reduzir planos a um projeto pequeno; afiliados: avaliar vantagens e limitações com transparência. [Briefs e hashes](../auditorias/diversidade-renda-20261010.json). Gestos ativos e ambientes distintos; interfaces ilustrativas, sem alegar cliente real, pagamento ou garantia de receita. SVG oficial único aplicado separadamente. Duas capas anteriores preservadas por SHA-256; acervo agora com 140 imagens. Dez artigos de renda digital renovados localmente, demais conteúdos aguardam revisão. Dois artigos e três páginas da categoria renda digital: 40 combinações 320/390/768/1440, claro/escuro, sem problemas. Check/build/QA aprovados. Capas finais, artigo mobile e categoria inspecionados. Backup local restaurou 243 arquivos idênticos, incluindo 140 imagens arquivadas.


## Lote de seleção por conteúdo — 10/10/2026

Status: aplicado localmente; validação pendente. Famílias: VisualMedia editorial/card, ResourceCard normal/compact, StoreCard/ficha e trilhas. Rotas: quatro artigos ElevenLabs/Metricool/Méliuz/Febspot, duas fichas ElevenLabs/eBook, catálogos /blog/, /recursos/, /store/, /trilhas/ e categorias de Recursos. Sem novos modelos de interface. A composição de capturas Méliuz é SVG 4:3, documentos inteiros centrados em área também segura para 16:9. As páginas de evidência mantêm valores e explicações em HTML. [Decisões e lacunas](selecao-imagens-lote-20261010.md).

Ficha ElevenLabs: variante product-visual--editorial-wide já existente também aplicada ao raster 720x405, mantendo proporção 16:9 sem faixas na abertura. Cards 4:3 e Store 16:10 mantêm a variante de catálogo.

Catálogo Store: artes -assinatura-v2 ancoradas em left top, com especificidade da família, para impedir o corte do símbolo de ElevenLabs pelo center top anterior. Validação responsiva posterior cobre catálogo e categorias.

Fechamento do lote: 752 combinações em 94 rotas, zero falhas técnicas finais; recorte do símbolo ElevenLabs corrigido. Check/build/QA aprovados; recuperação isolada idêntica. Dez assinaturas de Recursos permanecem registradas para limpeza individual. [Resultado](selecao-imagens-lote-validation-20261010.json).


## Recursos — dez assinaturas corrigidas, 10/10/2026

Status: aplicado localmente, validação pendente. As dez placas antigas registradas no lote foram removidas; versões irmãs -resource-assinatura-v2.webp têm SVG oficial único, 72x72 em x43/y33. Cena preservada fora do pequeno canto, originais mantidos. Recursos normal/compact e seis categorias usam as versões corrigidas. Registro: docs/brand/resource-signatures-20261010.json. Sem publicação ou cópia externa.

### Assinaturas corrigidas e validadas — 10/10/2026

As dez pendências foram resolvidas localmente: um símbolo oficial por imagem, sem placa branca, largura de 5% e margens de 3%. Originais intactos; somente a pequena região da antiga placa foi reconstruída. Fora do canto de 362 × 326 px, os pixels são idênticos aos originais. A recuperação isolada reproduziu os dez SHA-256 finais. Nove URLs de Recursos e 72 combinações de largura/tema passaram sem falhas de carregamento, transbordamento ou corte do símbolo. Registro: `docs/auditorias/resource-signatures-validation-20261010.json`. As referências anteriores a dez pendências ficam superadas por este fechamento. Sem publicação ou cópia externa.

### Méliuz Pocket Sort — assinatura da capa corrigida

A capa composta de capturas reais também recebe a assinatura oficial no fundo, fora das telas e sem alterar evidências. Original `evidencias-capa-v1.svg` preservado; uso atualizado para `evidencias-capa-assinatura-v2.svg` em Blog e Recursos. Símbolo 72 × 72 px em x43/y32, sem placa, na composição 1440 × 1080. Correção local, sem publicação.

Méliuz: validação final passou em 32 combinações (320/390/768/1440 px, claro/escuro). Recorte em Recursos alinhado ao topo para preservar assinatura. XML SVG válido; dados das capturas embutidas idênticos ao original.

### Acervo local — revisão de assinaturas, 10/10/2026

140 originais conferidos por SHA-256 e preservados. 88 entradas receberam ou passaram a apontar para versões corrigidas: 50 aproveitam correções oficiais já aprovadas, 38 receberam o vetor oficial sobre a composição original. 42 já tinham assinatura oficial. Cinco referências de fornecedor e cinco prévias documentais ficam identificadas sem marca adicional. MX Anywhere usa a correção aprovada, evitando duplicação da assinatura inferior antiga. Catálogo local mostra versão preferida e link ao original. Nenhuma imagem foi aplicada automaticamente ao site. Evidência: `docs/auditorias/acervo-assinaturas-validation-20261010.json`.

### Assinatura aplicada nos modelos do projeto — 10/10/2026

As imagens escolhidas por conteúdo permanecem. Capas de Logitech MX Keys Mini, Fifine AM8 e SSD SanDisk recebem assinatura editorial oficial em SVG sobre o bitmap original integralmente embutido; não alegam fotografia própria nem endosso do fabricante. Originais preservados. Seletores compartilhados de VisualMedia, StoreCard, Store, Home e guias de artigo passam a proteger o canto de imagens `-assinatura-` também em SVG. Não adicionar outro símbolo a uma versão assinada. Capturas documentais, retratos, identidade institucional e anúncios do fornecedor são exceções identificadas e não devem receber assinatura indiscriminada. O acervo não deve substituir automaticamente uma capa escolhida por conteúdo.

Fechamento: 121 URLs públicas, incluindo paginação, em 320/390/768/1440 px e claro/escuro (968 combinações), sem problemas. 75 assets assinados encontrados visíveis; nenhum asset assinado esperado foi substituído silenciosamente pelo fallback. Tab com foco visível e detalhes expansíveis conferidos. Check/build/QA aprovados. Três bitmaps originais e hashes preservados; SVGs válidos, uma assinatura por composição. Evidência: `docs/auditorias/project-signatures-validation-20261010.json`. Regra aplicada localmente, sem publicação.


### Correções criteriosas de capas — 10/10/2026

Status: validado localmente, publicação pendente. Responsável: @control/@dev. Escopo: /store/fifine-am8-usb-xlr/, /store/ugreen-hub-usb-c-6-em-1/, /store/baseus-fm11-10000mah/, /store/baseus-fc11-power-bank/, /blog/organizar-ambiente-estudos-tecnologia/, /blog/javascript-variaveis-funcoes/, /blog/metricool-para-iniciantes-organizar-agendar-conteudo/ e reutilizações em catálogo, busca, categorias e relacionados.

Quatro fotografias de fornecedor preservadas dentro de composições próprias; três SVGs técnicos/editoriais precisos. Símbolo oficial único fora das fotografias. Modelo FC11 identificado como referência da variante 10.000 mAh. Ajuste restrito dos relacionados evita alongar/cortar as novas capas pela altura do texto. Originais e links comerciais preservados.

Check 79 arquivos sem erros/avisos/hints, build 123 páginas, links/HTML aprovados. 37 rotas em 320/390/768/1440 e claro/escuro: 296 combinações, zero problemas. Sete composições completas e três páginas representativas inspecionadas visualmente. Recuperação isolada de 26 arquivos por hash aprovada. Fonte: [registro de correções](correcoes-criteriosas-imagens-2026-10-10.json). Direitos de uso das fotos ainda sem confirmação documental antes de publicar; não são fotos de teste próprio. Sem geração, custo monetário, cópia externa ou publicação.
