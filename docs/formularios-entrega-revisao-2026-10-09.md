# Entrega dos formulários — revisão de implementação
Data: 09/10/2026. Escopo: código local do frontend e ../dejotacode-api. Sem publicação ou envio real.

## Resultado
/api/contact valida entrada e consentimento, grava contact_messages e métrica diária; /api/leads valida entrada e consentimento e grava leads. Não há chamada de serviço de envio nessas rotas. Bindings em src/types.ts não incluem provedor de e-mail. /api/audience é protegido por autenticação e perfil administrador e disponibiliza registros. A confirmação de recebimento do formulário significa persistência, não entrega por e-mail. Nenhuma credencial foi lida e nenhum registro pessoal foi consultado.

## Sequência proposta
1. Definir provedor de envio, remetente do domínio e endereço destinatário das notificações de contato.
2. Implementar notificação de contato separada da gravação: falha de envio não deve perder a mensagem recebida. Registrar estado e tentativas; evitar envio duplicado.
3. Definir o fluxo da newsletter: inscrição, eventual confirmação, cancelamento e comunicações consentidas; não confundir aviso interno de contato com campanhas.
4. Testar localmente com transporte simulado, incluindo falha, repetição e recuperação.
5. Com destinatário e envio explicitamente autorizados, testar entrega real controlada e verificar recebimento. Configurações externas e publicação são etapas próprias.

## Limites
Esta leitura não certifica o estado remoto da produção. Não foi escolhido provedor nem criado cadastro, DNS, secret ou envio. A escolha do serviço e o endereço de destino são informações necessárias para implementar a integração concreta.
