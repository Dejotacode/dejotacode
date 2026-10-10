# Pendências para uma rodada conjunta — 09/10/2026

Situação: revisão, sem correções ou publicação nesta rodada. Responsável: @control/@dev. Código local e release efetivamente publicada conferidos. Não reabrir correções visuais já aprovadas por simples repetição.

| Prioridade | Área | Evidência | Trabalho para a rodada conjunta |
| --- | --- | --- | --- |
| P1 | Newsletter: entrega | /api/leads apenas valida consentimento e insere no D1. A página promete conteúdo na caixa de entrada; variante guia redireciona para guia no site, sem e-mail. | Decidir e preparar serviço/fluxo de envio, confirmação ou mensagem de boas-vindas, entrega do guia e estados de interface coerentes com o comportamento real. Não reutilizar transporte interno de contato como se já fosse serviço de campanhas. |
| P1 | Newsletter: cancelamento | Página informa cancelamento quando quiser e link em cada mensagem; não foram encontrados endpoint/estado de descadastro no código da API publicada. Política permite solicitação de interrupção/exclusão, o que não equivale ao fluxo automático. | Implementar cancelamento e supressão no serviço escolhido antes de campanhas; conferir cópia da página e política frente ao fluxo real. |
| P2 | Newsletter: inscrições repetidas | Rota executa INSERT a cada envio; schema de leads não tem unicidade de e-mail. | Definir comportamento para e-mail já inscrito por recurso, preservando consentimento e histórico; evitar destinatários duplicados em campanhas. |
| P2 | Setup | KA-6051 já registrado por autorização em commit 5cb006f; domínio publicado ainda usa descrição genérica. | Incluir somente atualização do modelo no próximo pacote. Marca e especificações não inferidas. |
| P2, decisão | Termos de Uso | Sem página/rota atual e sem link quebrado no rodapé. | Decidir se criar e qual escopo/texto; ausência da página não foi classificada como obrigação jurídica por esta revisão. |
| P2, validação | Acessibilidade | Home, Newsletter, Contato e Setup públicos: pt-BR, um main/h1, alt presente, IDs ARIA resolvidos, primeiro Tab no link Ir para o conteúdo. Árvore acessível capturada. | Completar teste real com leitor de tela; amostra semântica não comprova leitura/announcements nem conformidade integral. |
| P2, validação | Outros navegadores | Chromium coberto nas revisões anteriores. Firefox nativo disponível, mas sem execução de homologação nesta rodada; Playwright só tem Chromium instalado. | Testar Firefox e avaliar cobertura Safari/WebKit conforme ambiente; registrar limitações sem certificar navegadores não executados. |
| Frente independente | Ottocast | Arquivo local não versionado, draft: true, catalogStage: avaliacao, oferta Awin preenchida. | Confirmar fechamento com a outra frente antes de incluir; não alterar nem publicar por esta lista. |

## Já concluído
Frontend publicado por PR #266, commit b047f12, CI/deploy/smoke aprovados. Notificação de contato publicada e comprovada por um teste completo recebido no Gmail. Imagens, ícones, setas, degradês e Setup revisados. Sem novo defeito semântico na amostra de quatro páginas.

## Sequência proposta
1. Resolver decisões de newsletter/Termos e reunir o conteúdo da outra frente se for incluído.
2. Preparar todas as correções autorizadas em conjunto, preservando dados e alterações paralelas.
3. Validar funcionamento, acessibilidade e navegadores; apresentar um único pacote de revisão.
4. Publicar mediante aprovação específica desse pacote.

Evidência semântica: pendencias-acessibilidade-amostra-2026-10-09.json. Nenhuma inscrição, contato, e-mail, alteração de banco ou correção de site realizada nesta auditoria.

## Proposta de newsletter — pesquisa oficial em 09/10/2026
Recomendação técnica para o início: Brevo Free como candidato; decisão ainda não aplicada. Limite 300 envios/dia, inclui identificação Sent with Brevo; ao crescer acima dessa capacidade, reavaliar custo/limite. MailerLite Free é alternativa: página atual informa 250 assinantes, 2.500 e-mails/mês e três automações. Não usar os limites antigos de 500/1.000 assinantes como atuais.
O binding Cloudflare de contato em produção permanece restrito ao destinatário interno verificado. Essa configuração não entrega campanhas a assinantes públicos nem implementa gestão de lista; mantê-la para contatos internos.
Fluxo proposto: inscrição no formulário nativo → registro do consentimento → lista de confirmação → clique do assinante → ativo → mensagem com acesso ao guia/boas-vindas → campanhas revisadas → cancelamento/supressão. Não reativar contato cancelado silenciosamente por nova chamada de upsert. Duplicidade por endereço normalizado e recurso deve ter política explícita; histórico existente não será apagado. Falha de integração não pode ser anunciada como assinatura ativa; separar recebimento de confirmação. Evitar chave do serviço no frontend.
Antes de implementar: confirmar serviço/conta disponível, remetente e autenticação do domínio, listas/templates e integração via API com confirmação; escopo de mudanças privadas/DNS revisado concretamente. Nenhum novo cadastro, login, credencial, DNS, importação de contatos ou envio realizado nesta pesquisa. Campanhas reais precisam de autorização própria.
Fontes oficiais:
- https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan
- https://developers.brevo.com/reference/create-contact
- https://help.brevo.com/hc/en-us/articles/27353832123026-Set-up-a-double-opt-in-process-for-a-sign-up-form-created-outside-of-Brevo
- https://help.brevo.com/hc/en-us/articles/209553645-Insert-a-custom-unsubscribe-link-in-your-emails
- https://www.mailerlite.com/pricing
- https://developers.cloudflare.com/email-service/configuration/email-routing-addresses/
