# Auditoria local de páginas — 09/10/2026
Projeto: /home/dejota/Workspace/fullstack/dejotacode-blog-release
Preview: http://localhost:4321/
Escopo: conferência; nenhuma alteração de interface, conteúdo, dados ou publicação.

## Resultado técnico
- Astro check: 78 arquivos, zero erros, avisos ou hints.
- Build: 115 páginas.
- QA: 6377 referências internas, zero destinos quebrados; 471 imagens e 259 controles de formulário, zero problemas básicos de HTML.
- Navegador Chromium: 115 rotas x 390/1440 px x claro/escuro = 460 combinações. 456 respostas 200 e quatro 404 esperadas. Sem overflow horizontal, H1 duplicado ou âncoras internas inválidas.
- Alertas do teste isolado esclarecidos: imagem externa no artigo Comandos Linux (bloqueada pelo teste) respondeu HTTP 200 e carregou no reteste; localStorage no iframe bloqueado de Contato foi causado pela instrumentação, não reproduzido no reteste normal; imagem sem src do modal fechado do e-book é intencional.
- Capturas das páginas principais comparadas com as referências recuperadas. Capturas feitas imediatamente após mudar tema podem mostrar cores intermediárias de transições; reteste com estabilização confirmou fundos dos dois temas.
- Busca: linux retorna 13 itens; estado vazio funciona; acentos equivalentes; URL e recarga preservam consulta; limpar retorna 47 itens.
- Cabeçalho: busca expande; Escape fecha; tema alterna; menu mobile expande.
- E-book: modal de amostra abre com imagem existente.
- Newsletter/Guia: conferência adicional em 320/390/1440 px, claro/escuro. Nenhum envio real de formulário realizado.

## Conferência por área
| Área | Resultado |
| --- | --- |
| Home | Sequência editorial, hero com degradê, trilhas, conteúdos, guia, e-book e encerramento preservados. Capa real difere intencionalmente da capa conceitual do esboço. |
| Blog, artigos e categorias | Estrutura editorial preservada. Elementor usa o template comum; imagens reais e recursos existentes substituem conteúdo ilustrativo do esboço. |
| Trilhas e trilha Linux | Cards, etapas, progresso local e destaque independente do e-book preservados; conteúdo real determina quantidade e alturas. |
| Store, categorias, fichas e guias | Catálogo e degradê mantidos. Cards, categorias e fichas seguem a composição editorial; ofertas externas não foram verificadas como estoque ou checkout. |
| Serviços | Planos, processo, perguntas e chamada de contato mantidos. |
| Parcerias | Composição e critérios de colaboração preservados. |
| Contato | Formulário, WhatsApp e mini mapa mantidos; envio real do formulário não validado. |
| Setup do Dejota | Estrutura aprovada preservada. Modelos comerciais e divergência do armazenamento ainda exigem confirmação. |
| Portfólio | Case e capturas reais preservados. Capturas internas precisarão ser atualizadas após estabilizar todas as páginas. |
| Sobre | Foto real, história, método e transparência preservados. |
| Recursos e categorias | Estrutura editorial e cards compactos preservados. |
| Busca | Consulta, acentos, vazio e persistência funcionando. |
| Newsletter e Guia iniciante | Refinamento local mantido; PDF e fluxo de aquisição sujeitos à validação funcional registrada. Envio real depende da API configurada. |
| Privacidade | Texto e estrutura preservados; página extensa. Próxima revisão deve ajustar somente apresentação sem reescrever a política inadvertidamente. Não realizada auditoria jurídica. |
| 404 | Funcional, mas abertura e título ainda maiores que o padrão editorial compacto recente. Próximo ajuste visual recomendado. |
| Admin | Rotas incluídas na varredura de renderização; autenticação, sessão e operações administrativas não testadas. |

## Pendências antes da consolidação
1. Revisar visualmente Privacidade e 404.
2. Confirmar equipamentos e armazenamento de Setup.
3. Validar API e entrega real de Contato/Newsletter em etapa própria.
4. Atualizar capturas do Portfólio quando a interface estiver estabilizada.
5. Aplicar posteriormente o Documento Mestre de padronização, conforme decisão do usuário, após finalizar as estruturas.
6. Revisão final do usuário e testes adicionais em outros navegadores. Auditoria não equivale a aprovação visual geral, teste completo de acessibilidade, performance ou autorização de publicação.

Somente o servidor 4321 foi utilizado. Nenhum push ou deploy.
