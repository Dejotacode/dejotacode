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
