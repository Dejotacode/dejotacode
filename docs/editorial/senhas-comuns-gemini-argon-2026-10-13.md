# Senhas comuns e Gemini 4 Argon — produção local

Status: vigente. Escopo: dois novos artigos em rascunho; sem publicação.
Responsável: @control/@research/@dev/@studio.
Revisão: 2026-10-13, America/Sao_Paulo.
Origem/destino: pacote do chat normal “Texto colado(1).txt” → Chat Work.

## Identificação e autorização
- editorial-senhas-comuns-20261013: src/content/posts/senhas-mais-comuns.md.
- editorial-gemini-4-argon-20261013: src/content/posts/gemini-4-argon.md.
Usuário autorizou continuar a produção local (“pode ser”). Não autorizou publicação, push, merge, deploy ou agendamento.
Busca pelos IDs e “Argon” em docs/src/content não encontrou registro anterior. Este é o registro único desta dupla; não reabre o lote encerrado de 16 artigos.

## Acesso e fontes efetivamente consultadas
Remote Desktop Commander: máquina dejotacode online, ID bcb802fc-b047-4cca-909e-f6934f16a6c8; execução e leitura em /home/dejota/Workspace/fullstack/dejotacode.
Consultados AGENTS.md, docs/README.md, docs/estado-atual.md, docs/organizacao-documental.md, docs/padroes/frontend-master.md, docs/padroes/visual-system.md, docs/padroes/media-registry.md, docs/operacao/editorial-workflow.md, índice editorial, schema, resolver e modelo de artigo.
Conteúdo relacionado lido: gerenciador-de-senhas-para-iniciantes, minha-senha-vazou-o-que-fazer-agora, autenticacao-dois-fatores, habitos-seguranca-digital-iniciantes, agente-de-ia-vs-chatbot e ficha nordpass.
Catálogos HTML/JSON do acervo presentes e consultados; candidatos de segurança/IA/programação enumerados. Quatro rasters inspecionados visualmente.

## Decisões editoriais e fontes — verificadas em 13/10/2026
Senhas: título sem ano e sem ranking do Brasil. Relatório de 2025, com metodologia setembro/2024–setembro/2025 e 44 países. Pesquisa de quantidade realizada em abril/2026, publicada em maio; amostra 1.509 usuários NordPass, sem extrapolação para população.
- https://nordpass.com/most-common-passwords-list/
- https://nordpass.com/blog/how-many-passwords-does-average-person-have/
- https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Passwords-Tip-Sheet.pdf
- https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords
CISA: orientações corroboradas por resultados oficiais indexados; abertura direta das duas URLs retornou 403. Não registrar leitura integral dessas páginas.
Gemini: anúncio 30/09 separado de GA/API em 13/10. Contexto unificado e saída padrão separados; computer use identificado como preview. Aplicativo Pro/Ultra separado das condições da API; página de preços informa ausência no nível gratuito.
- https://blog.google/intl/pt-br/gemini-4-argon/
- https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/
- https://ai.google.dev/gemini-api/docs/models/gemini-4-argon
- https://ai.google.dev/gemini-api/docs/changelog
- https://ai.google.dev/gemini-api/docs/latest-model
- https://ai.google.dev/gemini-api/docs/pricing
Sem teste próprio de Gemini/NordPass; sem relação comercial Google confirmada. Transparência Nord Security mantida, encaminhando à ficha existente sem mudar oferta.

## Diferença em relação ao conteúdo existente
Senhas: padrões previsíveis, limites da pesquisa e credential stuffing; remete aos tutoriais existentes de recuperação, gerenciador e 2FA, sem repetir seus procedimentos completos.
Gemini: notícia explicativa específica da versão; remete ao artigo conceitual de agentes e à verificação de respostas de IA. Busca integral da coleção não encontrou menção Gemini/Argon.

## Estados independentes
| Item | Texto | Imagem | Integração | QA | Publicação |
|---|---|---|---|---|---|
| Senhas comuns | v1 redigida; revisão do usuário pendente | Proposta específica v1 integrada; aprovação pendente | draft: true, modelo existente | check/build/QA e 8 combinações responsivas aprovados | Não autorizada |
| Gemini Argon | v1 redigida; revisão do usuário pendente | Proposta específica v1 integrada; aprovação pendente | draft: true, modelo existente | check/build/QA e 8 combinações responsivas aprovados | Não autorizada |
Áudio/vídeo: não aplicável a este briefing.

## Mídia: seleção e lacunas
Nenhuma imagem nova criada ou aplicada. Preview usa fallback da categoria, sem aprovação como capa final.
Candidatos inspecionados:
- gerenciador-de-senhas-para-iniciantes-humano-assinatura-v1.webp: recuperação do cofre; não comunica padrões previsíveis.
- nordpass-sem-texto-v1-assinatura-v2.webp (preferida no acervo): cofre/credenciais, foco em gestão.
- habitos-seguranca-digital-iniciantes-capa-v1-assinatura-v2.webp: proteção genérica; não comunica escolha previsível.
- o-que-e-ia-generativa-capa-v1-assinatura-v2.webp: geração multimodal; não comunica programação/agentes do Argon.
Evitar forçar reuso apenas para preencher a capa. Revisar outras opções pertinentes e registrar decisão individual. Registro de mídia mantém pausa das novas gerações/substituições em série; não executar lote automático.
Brief futuro senhas: escolha previsível de credenciais, sem dados pessoais ou senha real; símbolo oficial separado.
Brief futuro Gemini: desenvolvimento com agente e etapas, sem logo inventado ou captura fictícia apresentada como real.

## Evidências técnicas
- Branch existente refactor/editor-remove-legacy-media-admin-20261012; mantida.
- Diff preexistente amplo, pertencente a outras tarefas; preservado. Nenhum commit neste trabalho.
- Preview já ativo 4321, HTTP 200. Não iniciado serviço ou porta nova.
- npm run check: 94 arquivos; 0 erros, avisos e hints.
- npm run build: 155 páginas, concluído.
- npm run qa: 8.441 referências internas, zero destinos quebrados; HTML zero páginas com problemas; analytics 20 verificações aprovadas.
- Os dois drafts ausentes de dist/blog e dos sitemap*.xml.
- Seis destinos internos da dupla confirmados em src/content.
Logs da rodada em /tmp/dejotacode-editorial-dupla-{check,build,qa}.log, temporários; resultados resumidos aqui.

## Preview e próxima ação
Na máquina DejotaCode:
- http://localhost:4321/blog/senhas-mais-comuns/
- http://localhost:4321/blog/gemini-4-argon/
Concluir QA responsivo, selecionar capas específicas e apresentar revisão de texto/mídia. Manter draft: true.
Antes de publicar: revisão do usuário e autorização específica; revalidar disponibilidade/preços Gemini. Ranking brasileiro não é necessário para o escopo global.
Funções @ são papéis de trabalho; aplicativos Control/Studio arquivados permanecem históricos.

## QA final de preview

16 combinações: duas rotas × 320/390/768/1440 px × claro/escuro; HTTP 200, noindex presente, zero overflow, zero falha em imagens não lazy. Temas conferidos no DOM. Imagens lazy abaixo da dobra não fazem parte dessa verificação de carregamento. Documentação: 176 Markdown, 425 referências, destinos/índices válidos.

Versões de texto v1, SHA-256:
- senhas-mais-comuns: a9bfd716297505a1a477cb5174fc81c6a4067acf85e95a94bcbbaaa0c8a4d816
- gemini-4-argon: bdd422e3e765e52192cd6210626132b246005969c556e770b8cc6ef5e7d421be

## Capas específicas — autorização de 13/10/2026
Usuário: “pode continua capas especificas correto”. Autoriza produzir e integrar propostas locais individuais para esta dupla; não autoriza publicação nem outras substituições em série.
Acervo reconsultado: 140 entradas HTML/JSON; opções de cofre, proteção genérica e geração multimodal já inspecionadas permanecem inadequadas à mensagem central. Lacuna: previsibilidade de credenciais e desenvolvimento com agente. Novas cenas via imagegen, sem logos de terceiros, capturas reais fictícias ou dados pessoais. Assinatura oficial composta separadamente. Aprovação visual permanece pendente.

## Capas v1 integradas localmente

Duas gerações individuais imagegen. Exportações WebP 1440×810 preservadas em Workspace/media-dejotacode/dupla-editorial-20261013; mestres PNG gerados na sessão Chat Work preservados. SVGs públicos embutem WebP e assinatura oficial dark única, caixa 72×72 em x43,2/y24,3. Resolver, alt e legenda existentes atualizados somente para os dois slugs.

- /assets/posts/senhas-mais-comuns-editorial-assinatura-v1.svg; SHA-256 25c0d1cb6b625933268a2504a60eeae03c45d6ec80ca0413852ab25ec2e325e2; fonte SHA-256 67f3abcab95b55bf2a1c2545c92710c66e97b5fa48376acc712f29805e077b5d.
- /assets/posts/gemini-4-argon-editorial-assinatura-v1.svg; SHA-256 db17cff8c040b1ef66853117b426d9c4e31d6a3ad1b2e323742e14489dc13304; fonte SHA-256 bda8b83984b81ede8dc9ac55e876f5001ef5cbe6e0818ed8d871d2229190298c.

Prompts finais: Senhas — cena editorial fotográfica, homem com camisa oliva refletindo diante de três linhas fictícias 123456 e uma opção mascarada; 16:9, canto superior esquerdo livre, sem marca, hacker ou cadeado gigante. Gemini — desenvolvedora de cabelo natural e blusa vinho revisando migração de código em monitor com assistente conceitual e etapas arquivo/código/teste; 16:9, canto superior esquerdo livre, sem logo Google/Gemini, robô, holograma ou captura real simulada. Nenhuma das cenas constitui evidência de uso ou teste.

Texto v1 e draft:true preservados. Aprovação visual pendente; sem publicação. Próxima ação: QA das capas e revisão do usuário.

## QA das capas concluído — 13/10/2026

Check (94 arquivos, zero diagnósticos), build (155 páginas), QA de links/HTML/analytics e documentação aprovados após integração. 16 combinações de tela/tema: as duas capas específicas resolvidas, carregadas, com alt, posição topo esquerdo e sem overflow. SVGs XML válidos, assinatura única 5% com margens 3%, inspecionada no preview mobile. Moldura aproximadamente 16:9 preserva cena e símbolo. Textos idênticos aos hashes v1; draft:true mantido. Capturas locais mobile inspecionadas. Próxima ação: revisão visual do usuário; texto e capas aguardam aprovação. Nenhuma publicação.

## Aprovação visual — 13/10/2026, 18:31:52 BRT

Usuário: “pode continua aprovado”, em resposta à entrega das duas capas específicas v1. Escopo comprovado: aprovação visual de senhas-mais-comuns-editorial-assinatura-v1.svg e gemini-4-argon-editorial-assinatura-v1.svg; hashes idênticos às versões apresentadas. Texto não recebeu aprovação separada nesta mensagem. Publicação permanece não autorizada; draft:true preservado. Capas: aprovadas e integradas; QA concluído. Próxima ação: revisão/aprovação dos textos v1 e autorização específica de publicação pelo fluxo vigente. Não regenerar capas aprovadas.

## Texto e publicação autorizados — 13/10/2026, 18:33:14 BRT
Usuário: “aprovado texto e autorizo a publicação”. Escopo: textos v1 e capas v1 desta dupla, integração/publicação pelo fluxo existente. Autoriza liberar draft e preparar branch/PR/merge/CI/CD do frontend somente para os dois artigos e registros diretamente relacionados. Não autoriza infraestrutura, API, DNS ou mudanças de outros chats. Preparação em checkout limpo a partir da main remota vigente; principal com diff preexistente preservado.

## Candidato de publicação autorizado

Textos v1 e capas v1 aprovados pelo usuário. Dupla liberada com draft:false no candidato limpo baseado em cd7cbc6de67e958385e5c4c6c4860aaa9333ad0c. Diff limitado aos dois posts, duas capas, seis entradas no resolver (mídia/alt/legenda) e registro/índice editorial. Nenhuma configuração ou alteração de outra tarefa incluída. Validação/CI/homologação em andamento.

Validação do candidato: npm ci aprovado; check 97 arquivos sem diagnósticos; build:production 158 páginas; QA links/HTML/SEO/AdSense aprovado; documentação 168 Markdown e 405 referências. Duas rotas indexáveis, canonical correto, sitemap e RSS presentes. Alertas não bloqueantes de títulos longos e nove vulnerabilidades preexistentes mantidos no escopo registrado; nenhuma alteração de dependência. Especificações e acesso Gemini revalidados em fontes oficiais antes da publicação.
