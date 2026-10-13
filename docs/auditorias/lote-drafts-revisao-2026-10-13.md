# Lote de 16 drafts — revisão local

Status: publicação autorizada pelo usuário; pacote em validação para PR e CI/CD. Responsável: @control/@dev/@studio. Revisão: 2026-10-13.

Durante a revisão, todos os arquivos permaneceram com draft: true, sem push, deploy ou publicação. A autorização específica de 13/10, registrada ao final, libera este lote; a aprovação histórica de 10/10 não foi usada como autorização. Fonte principal: arquivos Markdown atuais. Acervo de 140 registros consultado; versão final com quatro reusos e doze ilustrações editoriais raster com símbolo oficial composto em SVG. Todas as capas foram aprovadas pelo usuário nas rodadas de revisão. Natureza ilustrativa em legenda HTML fora do recorte; alt por assunto.

Check: 93 arquivos, zero erros/avisos/hints. Build de produção: 132 páginas; os 16 drafts ausentes. QA de links, HTML e analytics estático aprovado. Navegador: 128 combinações, 320/390/768/1440 px, claro/escuro, nenhum overflow ou imagem quebrada, capas corretas, drafts noindex/nofollow. QA de analytics verifica código, não comprova envio/recebimento real. A primeira rodada acelerada classificou imagens lazy ainda não solicitadas como falhas; a rodada final tornou todas eager e aguardou decode, substituindo aquele diagnóstico.

Preview: apenas no servidor de desenvolvimento em http://localhost:4321/blog/{slug}/, identificado como rascunho. Sem mudança da listagem pública ou exclusão de drafts no build.

Evidências: [decisões e hashes](lote-drafts-midias-20261013.json), [QA do navegador](lote-drafts-browser-20261013.json), [montagem visual](../brand/lote-drafts-20261013-capas.jpg).

Alterações pontuais: linguagem de pesquisa na avaliação ElevenLabs por falta de evidência reproduzível de uso nesta revisão; referência oficial acessível para agentes; link do artigo publicado de senhas ao novo draft adiado para evitar 404. Outras alterações preexistentes de conteúdo, produtos e analytics preservadas.

## Estado por conteúdo

| Conteúdo | Texto | Imagem | Integração | QA | Pendência | Pronto para publicação |
|---|---|---|---|---|---|---|
| minha-senha-vazou-o-que-fazer-agora | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| elevenlabs-vale-a-pena | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| iprovpn-o-que-avaliar-antes-de-contratar | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | Confirmar afiliação antes de configurar links comerciais iProVPN; artigo atual não afirma aprovação. | Autorizado — em validação |
| scanner-3d-o-que-e-e-para-que-serve | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| como-escolher-um-scanner-3d | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| supabase-para-iniciantes | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| ia-local-com-ollama | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| anythingllm-com-ollama | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| agente-de-ia-vs-chatbot | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| banco-de-dados-em-producao-cuidados | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| posthog-vs-ga4 | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| search-console-dados-atrasados | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| html-sitemap-ainda-vale-a-pena | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| cicd-na-pratica | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| como-instalar-e-validar-google-tag | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |
| raindrop-io-para-desenvolvedores | TEXTO_REVISADO | IMAGEM_APROVADA | MÍDIA_INTEGRADA | QA_APROVADO | CI/deploy e homologação pública. | Autorizado — em validação |

## Liberação futura

Não alterar draft nem publicar sem aprovação explícita do usuário. Revalidar condições comerciais e preparar a referência do artigo de senhas somente quando o destino for liberado junto. Revalidar links entre drafts se a publicação for parcial. Inspeção visual pelo usuário e eventual revisão das propostas precedem o pedido de publicação.

## Revisão individual escolhida pelo usuário

Apresentar um conteúdo por vez, com texto e capa. Somente após aprovação explícita, registrar APROVADO PARA A FILA DE PRODUÇÃO e apresentar o próximo. Aprovação da fila não altera draft nem autoriza publicação. Item atual: minha-senha-vazou-o-que-fazer-agora. Fila inicialmente vazia; o aceite do formato de revisão não aprova o primeiro artigo.

## Primeiro item — capa editorial v2

Após questionamento do usuário, a capa de senha vazada foi reavaliada à luz do acervo. Nova cena ilustrativa com alerta de credencial exposta e revisão de várias contas substitui o diagrama. Original gerado e diagrama preservados; símbolo oficial composto separadamente, natureza sintética declarada. Check/build/QA aprovados, oito combinações de largura/tema sem falhas. [Evidência atual do primeiro item](senha-vazada-capa-v2-browser-20261013.json). O QA de 128 combinações anterior permanece registro das demais capas e da versão inicial; para este item prevalece a revisão v2. Fila ainda vazia: aguardando aprovação de texto e nova capa.

## Rodada de três — autorizada em 13/10/2026

Usuário aprovou a nova capa do item 1 e pediu trabalhar três conteúdos por rodada. Capa de senha vazada: IMAGEM_APROVADA; não inferir aprovação separada do texto a partir da aprovação da imagem. Próxima rodada: ElevenLabs vale a pena, iProVPN e introdução ao scanner 3D. Permanecem drafts, sem autorização de publicação.

## Rodada 2–4 — preparada para aprovação

ElevenLabs: reuso da arte existente de narração, sem duplicar o tutorial. iProVPN: nova cena de avaliação antes da contratação; busca de prova comercial sem resultado, portanto afirmações explícitas de afiliação aprovada foram retiradas por enquanto. Scanner 3D: nova cena de objeto físico, nuvem de pontos e malha, sem equipamento comercial inventado; e-mail de boas-vindas Awin/SHINING 3D de 12/10/2026 confirma ingresso no programa, sem provar teste do hardware. Não foram enviados e-mails.

Check/build/QA aprovados, 24 combinações de largura/tema sem falhas. [Evidência atual da rodada](rodada3-editorial-browser-20261013.json). Somente a capa do primeiro item está aprovada. Os três itens desta rodada aguardam aprovação explícita do usuário; todos continuam em draft. Arte, natureza, fontes, justificativas e prompts nos registros de cada item.

## Rodada 5–9 — aplicação concluída

Quatro propostas novas aprovadas pelo usuário durante a preparação e aplicadas com símbolo oficial. Escolha de scanner: diferentes tamanhos/materiais; paquímetro mede objeto, sem certificar exatidão de scanner. Supabase: metáfora 3D de módulos e acesso, não arquitetura exata. Ollama: computador e modelo/conversa local conceitual, sem representar hardware real do autor; enquadramento adaptado da fonte 4:3 à capa 16:9 preservando computador e tela. Agente/chatbot: pergunta/resposta versus ferramentas sob supervisão, sem automação real. AnythingLLM reutiliza a cena de conversa com contexto do acervo; raster idêntico por SHA-256 e símbolo original mantido, sem assinatura dupla; reuso apresentado individualmente aguarda aprovação.

Os textos atuais foram lidos integralmente e preservados nesta rodada. Suas distinções e limitações continuam: escolha versus introdução a scanner; backend e permissões; execução local versus interface/workspace; conversa versus ações com ferramentas. Fontes técnicas revisadas anteriormente em 13/10 permanecem referenciadas; não foram executados novos testes de inferência ou validação da integração.

[QA atual de 40 combinações](rodada5-editorial-browser-20261013.json), check/build/QA aprovados, 16 drafts mantidos. Fontes e propostas anteriores preservadas. A próxima rodada prevista abrange banco de produção, PostHog/GA4, Search Console, HTML sitemap e CI/CD; ainda não marcar suas capas iniciais como aprovadas. Pedidos repetidos do usuário foram tratados como um único pedido de grupos de cinco.

## Sete restantes — revisão visual preparada

Itens 10–16 receberam cinco imagens novas para lacunas específicas, mantendo dois reusos pertinentes (CI/CD e Raindrop). Textos lidos completos e preservados, sem nova alegação de testes, métricas, receitas ou integração real. Rótulo Search Console dividido em duas linhas após inspeção para não encostar na ampulheta, com revalidação das oito combinações.

[QA dos sete restantes](restantes-editorial-browser-20261013.json), 56 combinações sem falhas. Check/build/QA aprovados; 16 drafts permanecem ausentes das rotas de produção. [Consolidação das versões atuais](lote-drafts-final-browser-20261013.json): 16 artigos × oito combinações, 128 no total, obtidos das rodadas específicas com verificação de capas contra o mapa atual. Não confundir esse resultado com testes de analytics, inferência ou medição real.

A aprovação da capa 8 foi registrada e o item entrou na fila. Os itens 10–16 continuam aguardando aprovação do usuário. O primeiro item tem capa aprovada; o registro inicial ainda não tratou uma aprovação separada do texto como concedida. Nenhuma publicação, push ou deploy.

## Aprovação final da rodada 10–16 — 13/10/2026

Após apresentação dos sete previews individuais, o usuário respondeu “aprovado”. Aprovação registrada para os conteúdos e capas 10–16, adicionados à fila de produção. A fila contém 15 conteúdos (2–16). O item 1 mantém capa aprovada e pendência registrada de aprovação do texto. Este registro atualiza o estado das rodadas anteriores, preservadas como histórico. Todos os 16 continuam com draft: true; nenhum push, deploy ou publicação autorizado ou executado.

## Lote completo aprovado para a fila — 13/10/2026

O usuário aprovou explicitamente o texto do primeiro conteúdo após o preview e resumo. A capa já estava aprovada. A fila agora contém todos os 16 conteúdos, com texto e capa aprovados. Este estado substitui as pendências de aprovação editorial registradas no histórico anterior. Todos permanecem com draft: true; aprovação editorial não autoriza push, deploy ou publicação. A confirmação de afiliação iProVPN continua necessária somente antes de configurar novos links comerciais; o artigo atual não afirma afiliação aprovada.

## Publicação autorizada — 13/10/2026

Após aprovação dos 16 textos e capas, o usuário respondeu “autorizado” à etapa de publicação. Pacote integrado em worktree isolada baseada na main atual para preservar alterações concorrentes. Os 16 frontmatters passam a draft: false; legendas da natureza das imagens continuam visíveis também nos artigos publicados. Validações e PR antecedem merge e deploy pelo workflow vigente. Registros anteriores de draft e ausência de autorização representam etapas históricas.
