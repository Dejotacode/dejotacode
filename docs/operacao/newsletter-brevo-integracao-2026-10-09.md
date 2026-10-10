# Newsletter Brevo — integração e histórico

Status: integração publicada conforme registro final de 09/10/2026. Responsável técnico: @dev. Revisão documental: @control, 09/10/2026. Escopo: integração, validação e publicação da newsletter.

## Resumo vigente

API e frontend publicados após autorização; teste isolado de confirmação e descadastro concluído. A seção final registra versões, migração exclusiva 0014 e limites. Configuração versionada desativada permanece como padrão seguro; a configuração privada efetiva publicada é distinta. Edições futuras exigem autorização própria, sem campanha automática. Detalhes adicionais e primeira edição em draft no registro NEWSLETTER_BREVO_REVIEW_2026-10-09.md da worktree API newsletter. Este resumo usa evidências documentais existentes, sem nova verificação de produção.

## Histórico — preparação local antes da publicação

Os parágrafos desta seção descrevem a etapa inicial, sem publicação ou e-mails reais naquela etapa. Pendências de ativação aqui foram superadas pelo registro final abaixo.

Domínio autenticado e remetente DejotaCode configurado. Chave privada validada HTTP 200. API em worktree isolado /home/dejota/Workspace/fullstack/dejotacode-api-newsletter; flag false. Lista Brevo ID 3 criada sem importar contatos; template DOI ID 1 válido e inativo.

Formulário /newsletter/: orientação de confirmação por e-mail; nome opcional; consentimento para conteúdos DejotaCode. Variante ?resource=guia-iniciante-tecnologia não redireciona imediatamente após POST e não promete envio de PDF; após confirmação nativa Brevo, retorno ao Guia público. Analytics newsletter-principal preservado e aceito como alias pela API. Nenhum ajuste de CSS, estrutura de layout, rota, mídia ou links comerciais.

Validação: check sem erros, avisos ou hints; build 115 páginas; QA 6382 referências sem destinos quebrados, 470 imagens, 259 controles sem problemas básicos. Testes API: 14 cenários com SQLite e Brevo simulada. Estados UI simulados em 320/390/768/1440px, claro/escuro, ambas variantes; evidência final NEWSLETTER_UI_CHECK_2026-10-09.json no worktree API. Nenhum POST a serviço real nos testes.

Faltam ativação do modelo, acesso da Cloudflare à Brevo com política de IP compatível, migração e segredo no Worker, revisão/publicação conjunta e teste real autorizado de confirmação/descadastro. Histórico de leads não importado. Contatos bloqueados não reativados. Descadastro das futuras campanhas permanece nativo Brevo, ainda sem teste real.


## Newsletter publicada — 09/10/2026, após autorização às 18:13 BRT

Teste isolado concluído: confirmação DOI, entrega e descadastro nativo verificados. Publicação explicitamente autorizada, sem novos envios de teste. API versão f19338f7-aa51-41de-bee6-3288c21be126, base f2c92ab; contato ativo e bindings preservados. Backup D1 privado anterior à migração, SHA256 e tamanho em NEWSLETTER_PRODUCTION_DEPLOY_2026-10-09.json. Aplicada e registrada somente 0014_newsletter_requests.sql; 0012/0013 não aplicadas. BREVO_API_KEY armazenada como segredo, lista 3/template DOI ativo 1, NEWSLETTER_ENABLED=true. Configuração efetiva privada: .local/newsletter-production.json. prepare-newsletter-release.py continua gerando newsletter false como padrão seguro; não substitui a configuração efetiva publicada.

Verificação pública da API: health 200; consentimento ausente rejeitado 400; pedido do contato já bloqueado retornou 201 genérico e ledger suppressed. Isso verificou Worker→Brevo sem envio e sem reativação; registro local de consentimento é histórico de solicitação, não inscrição ativa. Contato de teste permanece suprimido. Não houve importação de leads antigos nem campanhas novas. Lista 4 permanece somente teste.

Frontend publicado por PR #268, merge 652e864d949668bc417edfd7dc2b0b47a6ba722f; workflow 37992473939 concluiu check, build, QA, deploy e smoke. Release isolada baseada em main preservou checkout Hotmart e excluiu mudanças locais pendentes de outras frentes. Formulário orienta confirmação e variante Guia retorna após confirmação nativa, sem envio automático de PDF. Produção: https://dejotacode.com.br/newsletter/.

Edições futuras continuam manuais e precisam de autorização própria; nenhuma automação de campanha semanal ou boas-vindas foi criada. Nenhum segredo, backup SQL, contato ou link individual de descadastro versionado.
