# Estado atual — consolidação local DejotaCode
Data: 09/10/2026
Pasta canônica para continuar: /home/dejota/Workspace/fullstack/dejotacode
Branch local: local/consolidacao-editorial-20261009
Preview: http://localhost:4321/
Publicação: NÃO autorizada; nenhum push/deploy faz parte desta etapa.

## Recuperação
As duas versões completas antes da integração foram registradas em branches de backup:
- backup/principal-20261009-0233 — ae92014579623fd6689fcce34bbc1deb96637cd1
- backup/editorial-20261009-0233 — 3e622b49b6494d513daeb8fcf80aacc5facf1ef2

Snapshots incluem alterações tracked e arquivos novos não ignorados. Arquivos ignorados de ambiente e dependências permaneceram nos respectivos diretórios; não fazem parte dos commits. A pasta editorial anterior permanece preservada para referência.

## Integração
Merge local das duas snapshots. Dez conflitos resolvidos por comparação:
- Layouts, componentes e ícones: versão editorial já auditada.
- editorialVisuals: versão principal, com o mesmo mapeamento; diferença era ordenação.
- Documentação do Blog: versão editorial contém todo o registro principal e as etapas adicionais.
- Catálogo Store, imagens/repaginação de Recursos e Wondershare: registros mais completos do principal, incluindo publicações anteriores.
- Configuração de extensões VS Code e documento exclusivo da Home preservados.

Verificação de hashes: todos os arquivos src/public da versão editorial foram preservados integralmente, exceto a ordenação equivalente em editorialVisuals. Nenhum arquivo src/public do principal foi removido. Conteúdos, imagens e links afiliados coincidentes foram preservados.

Documentos anteriores que citam 4322, a pasta release ou trabalho não commitado são históricos. Este arquivo define a pasta e o preview atuais.

## Estado sincronizado após a revisão final
Todas as famílias públicas foram estruturadas. Privacidade, 404, rodapé, metodologia e guia da Store foram refinados após a consolidação.
Revisão final: 112 rotas públicas, 448 combinações de tela/tema. Resultado e limites em revisao-final-publica-2026-10-09.md.
Nenhuma publicação realizada.

## Documento Mestre aplicado localmente
Referência vigente: docs/padroes/frontend-master.md; índice: docs/README.md.
Inventário, papéis compartilhados, organização de componentes e instruções aplicados. Andamento por rota em docs/frontend-review.md.
Check/build/QA e 556 combinações de página/tela/tema concluídos; conteúdo, mídia, rotas, SEO, links e controles preservados por comparação.

## Próximas etapas — estado vigente após as etapas 7–10
1. Revisão visual final do usuário no preview 4321; base, cards, CTA, formulários, teclado/texto ampliado e zoom já tratados.
2. Captura de Trilhas do Portfólio atualizada após a troca da capa na etapa 11; Home/Blog preservadas.
3. Usuário conferir modelos/periféricos e relação dos discos do Setup; hardware principal reconfirmado.
4. Planejar entrega de e-mails/notificações em etapa própria. Recebimento e persistência dos formulários passaram na API local com dados fictícios; produção não testada.
5. Testes com leitor de tela real e navegadores alternativos permanecem pendentes.
6. Publicação exige autorização específica; nenhum push/deploy.

## Validação na pasta principal
- Astro check: 78 arquivos, zero erros, avisos e hints.
- Build: 115 páginas.
- QA: zero links internos quebrados; 471 imagens e 259 controles, zero problemas básicos de HTML.
- 356 arquivos de src/public comparados com a versão editorial auditada: hashes idênticos, exceto editorialVisuals, cuja única diferença é a ordem de linhas com conteúdo equivalente.
- Servidor anterior da pasta release encerrado pelo gerenciamento do Astro; novo servidor em background na pasta principal, porta 4321. Porta 4322 permanece desativada.
- A versão original não commitada do principal foi preservada adicionalmente em stash: recuperacao principal antes da consolidacao 20261009. Não aplicar esse stash sobre a consolidação sem comparar, pois duplicaria mudanças antigas.
- Commit de integração: 9352332. Diretório temporário de merge removido após registrar o resultado; backups Git e pasta release preservados.


## Continuidade — etapas 3 e 4
Formulários padronizados e estados testados com respostas simuladas. Capturas reais de Home, Blog e Trilhas no Portfólio atualizadas. Evidências e pendências em ../auditorias/frontend-review.md e media-registry.md. Integrações reais e publicação continuam fora desta validação local.

## Estado de serviços após a nona etapa
Frontend canônico na porta 4321. API em ../dejotacode-api ativa na porta 8787 em modo local, com persistência de teste /tmp/dejotacode-forms-stage9; esse acervo é temporário e distinto do banco habitual. Contém somente dados fictícios produzidos pelos testes desta etapa. Não usar como evidência de entrega por e-mail ou funcionamento em produção.
Referência atual de progresso e limites: frontend-review.md. Se serviços estiverem desligados numa retomada, conferir processos antes de iniciá-los; não iniciar 4322.

## Retomada após revisão dos esboços — 12:12 BRT
P1, ícones de atendimento, setas, degradês, atalhos do Contato e notebook de Serviços ajustados localmente. Notebook aprovado pelo usuário. Situação atual e pendências individuais em ../auditorias/frontend-review.md, seção “Situação consolidada dos esboços”. Próxima frente recomendada: revisão editorial da trilha Linux, preservando progresso salvo; inventário de Setup aguarda confirmação. Não criar Termos de Uso nem substituir artes em lote por inferência. Nenhum push/deploy autorizado.


## Rodada única de fechamento dos esboços — 09/10/2026
Trilha Linux reordenada: modo live opcional na posição 3, antes do terminal, preservando slugs e progresso essencial. Oito combinações de largura/tema passaram, incluindo progresso previamente salvo de dois artigos (40%). Check zero erros/avisos/hints, build 115 páginas, QA de links/HTML passou.
Triagem visual de 21 rasters Store e 43 editoriais, com caminhos individuais e diferenças de assinatura registradas em revisao-esbocos-fechamento-2026-10-09.md. Rasters preservados: aplicação do padrão visual requer tratamento individual após revisão conjunta. Setup reconfirmado com WDC de classe 640 GB, relação com discos declarados ainda pendente. Termos permanece pendência de conteúdo, sem link inexistente. Esta atualização prevalece sobre a pendência antiga de sequência Linux. Sem push/deploy.


## Lote de assinaturas preparado — 09/10/2026
61 rasters únicos nos mapas Store/editorial: 49 artes próprias com assinatura tratadas; 12 imagens sem assinatura mantidas fora do lote. Quatro atlas de recortes limpos com imagegen; somente regiões mascaradas reincorporadas aos originais, depois composição determinística do SVG oficial. Originais preservados por SHA-256; pixels fora do canto 20% × 25% idênticos em 49/49 comparações; dimensões preservadas. A limpeza gera fundo local aproximado dentro da máscara, portanto exige revisão visual individual na galeria.
49 versões irmãs -assinatura-v2.webp, em WebP lossless (38,6 MiB no total) para comparação; otimização para entrega deve ocorrer após aprovação visual. Nenhum resolver ou página pública foi alterado para usar estas versões. Não confundir preparação com migração concluída.
Galeria conjunta: http://localhost:4323/, servidor restrito a 127.0.0.1; frontend canônico continua 4321. Fonte da galeria: docs/brand/preview-assinaturas.html, com assets servidos pelo diretório temporário /tmp/dejota-assinaturas-preview. Não integra o build do site.
Registro: docs/brand/signature-batch-20261009.json. Recortes preparados persistidos em docs/brand/signature-batch-sources; receita em scripts/compose-signature-batch.py, sem sobrescrever originais ou versões divergentes.
Validação: check 78 arquivos, zero erros/avisos/hints; build 115 páginas; QA de links e HTML passou. Galeria em 320/390/768/1440 e claro/escuro: oito combinações, 98 imagens carregadas, sem overflow; capturas desktop/mobile inspecionadas. Assinatura regular conferida na imagem de pendrive e montagem das 49 versões. Sem publicação, push ou deploy. Ottocast preexistente preservado fora do commit.
Próximo passo: revisão conjunta do lote, ajustes pontuais se necessários e integração local das versões aprovadas.


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


## Aprovação e fechamento atual do Setup — 09/10/2026
Dejota aprovou o visual final às 14:03 BRT. Armazenamento reconciliado e ilustração ampliada concluídos localmente; somente modelos comerciais da TV, teclado, mouse e hub permanecem pendentes nessa página. Estado atual da revisão dos esboços consolidado em ../auditorias/revisao-esbocos-fechamento-2026-10-09.md; entradas anteriores são histórico. Próxima etapa: revisão visual conjunta do conjunto no preview 4321. Integrações externas e publicação permanecem etapas separadas. Esta rodada altera somente documentação; validações anteriores continuam identificadas como evidência das respectivas alterações.


## Tela e periféricos confirmados — 09/10/2026
Dejota informou teclado Logitech K270 e mouse Logitech M150. Foto da tela de informações da TV confirma Samsung UN43T5300AGXZD, usada como monitor de 43 polegadas conforme declaração anterior. Apenas o modelo foi transcrito; números de série e identificadores do dispositivo excluídos. Modelos do teclado/mouse registrados como declaração do usuário, sem inferir especificações adicionais. No inventário de equipamentos, somente o modelo do hub USB continua pendente. Página atualizada localmente; sem publicação.


## Revisão do conjunto — 09/10/2026
Home, Store, Blog, Trilhas, Contato, Serviços, Portfólio, Setup, Recursos e Sobre: 320/390/768/1440 px nos dois temas, 80 combinações. HTTP 200, um main/h1 principal por página, imagens locais carregadas e nenhum overflow horizontal. Aberturas de Home/Store/Contato/Serviços no desktop escuro inspecionadas em montagem: nenhum novo ajuste identificado na amostra. Evidência em revisao-conjunto-validacao-2026-10-09.json. Esta rodada não cobre todos os recortes de todas as páginas, contraste completo, envio real de formulários, leitor de tela ou navegadores alternativos. Nenhuma interface alterada; não exige repetir build/QA aprovados na alteração anterior. Hub USB permanece pendente de modelo; conteúdo de Termos e integrações reais seguem separados. Sem publicação.


## Encerramento desta rodada de revisão — 09/10/2026
Revisão de layout das dez páginas principais (80 combinações) e navegação principal (9 verificações) concluídas, sem novos defeitos identificados nos cenários testados. Correções visuais autorizadas, assinaturas, capturas e Setup concluídos localmente. Preview 4321 disponível para revisão do usuário. Pendências: modelo do hub USB, decisão de conteúdo de Termos, entrega real de e-mails/notificações, leitor de tela e navegadores alternativos. Não iniciar implementação dessas frentes por simples repetição desta revisão; definir a próxima frente pelo objetivo do usuário. Sem push/deploy/publicação.


## Auditoria da entrega dos formulários — 09/10/2026
Código local da API conferido: contatos/leads são persistidos e consultáveis na rota administrativa protegida; não há envio por e-mail nas rotas atuais. Diagnóstico e sequência em formularios-entrega-revisao-2026-10-09.md. Integração depende de escolha do serviço, remetente e destinatário; nenhum secret lido, nenhum envio real ou publicação. Apenas documentação alterada.


## Integração local preparada — 09/10/2026
API agora possui adaptador Cloudflare e chamada em segundo plano após persistência do contato. Desativada por padrão; binding/remetente/destino/flag não ativados. Sete cenários de rota com transporte/banco simulados aprovados; TypeScript check passou. Falha de envio não altera resposta de recebimento nem remove o contato; log genérico sem dados pessoais. Sem fila persistente/reenvio automático nesta etapa. Aceitação de envio não comprova entrega final. Newsletter preservada. Próxima etapa é conferir configuração real da conta e preparar ativação/teste de destinatário definido, com autorização de envio específica. Nenhum e-mail enviado, DNS alterado ou deploy feito. Detalhes e teste no README/scripts da API.


## Transporte de e-mail testado — 09/10/2026
Um e-mail de teste autorizado foi enviado via REST Cloudflare; serviço confirmou entrega a um destinatário, sem fila ou bounce. Detalhes em formularios-entrega-revisao-2026-10-09.md. Notificações da rota permanecem desativadas; implantação/ativação não autorizadas. Próximo passo: usuário confirmar recebimento e validar binding em ambiente controlado antes de publicação.


## Binding pronto para revisão — 09/10/2026
Configuração local da API declara CONTACT_EMAIL e remetente limitado ao domínio nos três ambientes, com flag false explícita em todos; destinatário pessoal ainda não configurado nem versionado. Check, sete cenários simulados e bundle Wrangler dry-run aprovados. Nenhum envio adicional ou deploy. Antes de ativar, configurar destinatário privado e restringir binding ao destino concreto; validar fluxo real da rota em ambiente controlado. Revisão visual e teste de transporte concluídos; ativação pública exige autorização de publicação própria.


## Fluxo local completo validado — 09/10/2026
Destinatário conhecido preparado em arquivo privado ignorado da API, permissão 0600 e flag false; não é carregado automaticamente pelo Worker. Teste isolado em 8788, banco temporário novo, binding remote=false e destinatário fictício: POST direto e envio pela tela mobile de Contato passaram. Dois contatos fictícios persistidos; retorno 201 e notificações simuladas observadas. Servidor isolado encerrado; frontend 4321/API habitual preservados. Nenhum e-mail real adicional ou publicação. Resta ativação/configuração concreta do destino restrito em ambiente escolhido e validação pós-implantação; produção desativada.


## Estado consolidado — 09/10/2026, 15:05 BRT
Correções visuais, setas, ícones, degradês, 49 assinaturas e Setup concluídos localmente; frontend canônico permanece em http://localhost:4321/, sem publicação desta rodada. TV/teclado/mouse confirmados; somente modelo do hub USB pendente no inventário. Revisão técnica de dez páginas em 80 combinações e navegação em nove cenários já concluídas; evidências anteriores continuam válidas, sem repetir testes por alteração apenas documental.
Notificação de contato da API ativada/publicada mediante autorização específica. Release isolada em /home/dejota/Workspace/fullstack/dejotacode-api-contact-release, base 97f9271 e apenas commits de contato; versão Cloudflare 7fab067d-98d9-44c6-9716-122bf8523e02. Alterações editoriais/auth/platform do branch de desenvolvimento não incluídas; migrations não aplicadas. Remetente do domínio e destinatário verificado restrito no binding privado.
Teste público autorizado: um único envio fictício pelo formulário mobile, HTTP 201, sucesso na interface, exatamente um registro no D1 e notificação recebida na INBOX às 15:00 BRT; SPF/DKIM/DMARC pass e Reply-To correto. Registro operacional: ../dejotacode-api/CONTACT_NOTIFICATION_DEPLOY_2026-10-09.json. Entrega de contato concluída; newsletter continua com comportamento anterior. Sem fila persistente ou reenvio automático.
Pendências atuais: revisão visual final conjunta e publicação específica do frontend; modelo do hub USB; decisão de conteúdo de Termos; leitor de tela/navegadores alternativos; definição própria de eventual entrega da newsletter. Arquivo Ottocast preexistente preservado fora dos commits desta rodada. Entradas anteriores que descrevem contato desativado são histórico e não prevalecem sobre este estado.


## Hub do Setup — 09/10/2026, 15:14 BRT
Foto enviada por Dejota e autorização para descrição genérica: Hub USB multifuncional 6 em 1. Marca e modelo não identificados; nenhum fabricante, velocidade, áudio ou outra especificação inferida da aparência. Informação pública atualizada localmente, sem vínculo comercial ou publicação do frontend. Identificação exata permanece opcional e pendente de etiqueta/link de compra.


## Pacote de frontend pronto — 09/10/2026, 15:19 BRT
Worktree limpa ../dejotacode-frontend-release, branch release/frontend-review-20261009, fonte f414dd2000f9c253741ed83e304f30143fb8a433. npm ci, check, build:production com API https://api.dejotacode.com.br e QA aprovados: 115 páginas, 6.382 referências internas sem destinos quebrados, HTML básico sem problemas. Ottocast não versionado preservado no principal e ausente deste pacote. Hashes do dist em frontend-publication-package-2026-10-09.json. Remote official/main atualizado por fetch, continua 9fb07bf e é ancestral da fonte; nenhuma alteração em admin/platform/workflow neste diff. Próximo passo autorizado separadamente: enviar branch, PR/CI/revisão, integrar na main pelo fluxo oficial de Cloudflare Pages e homologar domínio. CI remoto ainda não executado; não publicado. Preview local permanece 4321.


## Frontend publicado e homologado — 09/10/2026, 15:26 BRT
Publicação explicitamente autorizada às 15:20 BRT. Branch release/frontend-review-20261009 enviada; PR #266 aprovado tecnicamente por CI e integrado por squash na main: b047f1264068e8af718036e69285368e2202b12d. Árvore desse commit idêntica à fonte validada f414dd2. Workflow 37972867585 concluiu qualidade, deploy Cloudflare Pages e dez verificações de smoke com sucesso. Deployment 60c83e7b-0258-44fa-9a23-6acc2753d362, URL https://60c83e7b.dejota-code.pages.dev; domínio https://dejotacode.com.br atualizado.
Homologação complementar no domínio oficial: dez páginas principais × 390/1440 × claro/escuro = 40 combinações; HTTP 200, h1 principal único, imagens carregadas, sem overflow e texto do hub confirmado. Evidências em frontend-publication-result-2026-10-09.json. Deployment anterior para referência de rollback: d3424451-1dd9-431c-a71a-cfb8fbbe9308 (9fb07bf).
Ottocast preexistente preservado fora da publicação. Nenhuma alteração de API, D1, DNS ou secrets nesta publicação do frontend; notificação de contato já implantada/testada separadamente. Hub usa descrição genérica autorizada; marca/modelo não identificados. Termos, newsletter, leitor de tela e navegadores alternativos continuam frentes separadas. Entradas anteriores sobre ausência de autorização/publicação são histórico. Registros pós-deploy salvos localmente; o PR publicado permanece o pacote aprovado, sem novo push documental.


## Modelo do hub confirmado — 09/10/2026, 15:38 BRT
Dejota informou modelo KA-6051 do hub USB 6 em 1. Setup atualizado localmente, sem inferir marca, velocidades ou recursos adicionais. Identificação de modelo deixa de ser pendência. A publicação anterior permanece com descrição genérica; esta atualização não foi publicada.


## Auditoria de pendências para rodada única — 09/10/2026
Lista vigente em ../auditorias/pendencias-rodada-unica-2026-10-09.md: newsletter precisa de entrega/cancelamento e decisão sobre inscrições repetidas; KA-6051 local aguarda publicação conjunta; Termos depende de escopo; leitor de tela e outros navegadores precisam de validação; Ottocast permanece separado. Amostra semântica pública de quatro páginas passou, sem substituir leitor de tela. Nenhuma correção nem publicação aplicada nesta rodada.

## Organização do Workspace — 09/10/2026, após aprovação

As worktrees dejotacode-blog-release e dejotacode-frontend-release foram encerradas pelo Git. Branches, snapshot editorial e todas as referências foram preservadas; status do principal não alterado. Menções anteriores às pastas preservadas ou prontas para retomada são históricas.

Preservação: /home/dejota/Workspace/fullstack/backups/worktrees-preservacao-20261009. Bundle, TARs, patches e manifesto; hashes e restauração Git temporária verificados. Cópia na mesma máquina, sem preservação externa confirmada. Não recuperar sobre o principal por inferência.

Acervo anteriormente em clientes agora está em /home/dejota/Workspace/arquivo/dejotacode/prototipos-iniciais, incluindo Git e pacotes, com manifesto de integridade. [Mapa operacional do Workspace](../../../../arquivo/dejotacode/prototipos-encerrados/dejotacode-control-20261010/docs/WORKSPACE_MAP.md). Site permanece nesta pasta canônica e preview 4321. Esta organização não integra código nem publica.


## Ottocast — entrega de produção concluída em 10/10/2026
Usuário autorizou toda a execução até produção às 03:18 BRT. PR #270 integrado, commit cc1d3ba635d5bd3b712387a5e6d5f36e6f580e86; workflow 38030741660 aprovado, deployment https://a0ca317c.dejota-code.pages.dev. Artigo e ficha publicados juntos; 16 combinações responsivas, canonicals, vínculo recíproco e mídia pública homologados. Registros anteriores de Ottocast em rascunho são históricos. Release isolada dejotacode-ottocast-release, oito arquivos; outras frentes locais preservadas. Sem novo deploy de API/migrations ou backup externo. [Resultado](../auditorias/ottocast-publication-result-2026-10-10.json).


## Publicação integral concluída — 10/10/2026

Status: publicado e homologado. Usuário autorizou a entrega integral às 19:54 BRT. PR #275 integrado na main, commit 7d531d8e2142f894476ee6db68c91c6ed0fe71e4; workflow 38093497180 aprovado. Deploy https://568b4647.dejota-code.pages.dev e domínio https://dejotacode.com.br atualizados. Configuração pública da API e GA4 preservada. Não houve alteração de Worker, D1, DNS ou secrets.

Publicados seleção e reuso das imagens por conteúdo, símbolos oficiais, correções de recorte, quatro capas físicas e três editoriais, correções de parceiros e documentação pendente. Build 123 páginas e QA/documentação aprovados; dez smoke checks passaram. Conferência do domínio: 119 páginas com title/canonical corretos, 90 imagens locais idênticas por SHA-256, 121 URLs e 968 combinações de largura/tema sem problemas. 76 assets assinados visíveis; símbolo protegido. Originais e backups locais preservados.

As menções anteriores a publicação pendente descrevem etapas históricas. Permanecem duas lacunas: autorização documental das fotos de fornecedor e nove alertas existentes das ferramentas de build. Não foram resolvidas nem certificadas pela publicação. Resultado e evidências em docs/auditorias/publicacao-integral-{result,integridade,validation}-2026-10-10.json. Registros posteriores de homologação guardados localmente, sem segundo deploy apenas documental.
