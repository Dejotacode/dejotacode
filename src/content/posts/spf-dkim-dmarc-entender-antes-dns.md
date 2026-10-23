---
title: "SPF, DKIM e DMARC: cuidados com o DNS do e-mail"
description: "Conheça o papel de cada mecanismo e organize os serviços que enviam mensagens pelo seu domínio antes de mudar registros."
publishedAt: 2026-10-22
category: linux-seguranca
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["phishing-como-identificar", "newsletter-brevo-double-opt-in-na-pratica", "documentar-aprendizado-tecnologia"]
tags: ["email", "dns", "dmarc"]
---

Seu domínio pode enviar mensagens por vários caminhos: caixa de e-mail, formulário do site e plataforma de campanhas. Configurar apenas um deles pode deixar os demais fora do planejamento.

Antes de copiar um registro DNS, descubra quais serviços realmente enviam mensagens em nome do negócio.

## Cada mecanismo tem uma função

| Mecanismo | Ideia principal |
|---|---|
| SPF | Publica quais servidores estão autorizados para a identidade de envio verificada |
| DKIM | Permite verificar uma assinatura de domínio na mensagem |
| DMARC | Relaciona o domínio visível no remetente aos resultados alinhados de SPF ou DKIM e publica uma política |

Para DMARC, não basta que qualquer assinatura ou identidade passe: o alinhamento com o domínio do campo From é parte da avaliação.

Esses mecanismos não tornam o conteúdo de um e-mail verdadeiro nem garantem a caixa de entrada. A leitura de contexto, remetente e destino continua importante, como explica o guia de [como identificar phishing](/blog/phishing-como-identificar/). Reputação, conteúdo e decisões do destinatário também entram na entrega.

## Faça o inventário dos envios

Liste o provedor de correio, o serviço do formulário, a ferramenta de newsletter e qualquer sistema que envie notificações.

Para cada um, anote o domínio utilizado, a configuração exigida pelo fornecedor e quem pode administrá-la. Não inclua senhas ou chaves privadas nessa lista compartilhada.

Um exemplo de registro fornecido para uso exclusivo de um provedor não deve substituir automaticamente a configuração de um domínio com vários serviços.

## Planeje a mudança, não apenas o registro

Leia os registros atuais e a documentação de cada remetente. Preserve uma referência da configuração anterior e defina como verificar os fluxos legítimos depois da alteração. Use um [registro de decisão, alteração e resultado](/blog/documentar-aprendizado-tecnologia/) para saber qual serviço foi conferido em cada etapa, sem registrar chaves privadas.

Não publique múltiplos registros SPF concorrentes para a mesma identidade tentando “somar” fornecedores. A configuração precisa ser consolidada conforme as regras do protocolo e os limites aplicáveis.

Para DKIM, confira a chave pública e o seletor informados pelo serviço. A chave privada não deve ser publicada no DNS.

## Avance com evidência

Uma política DMARC mais restritiva pode afetar mensagens legítimas mal configuradas. Analise a autenticação e os relatórios disponíveis antes de ampliar a aplicação da política.

Depois de mudanças, confira mensagens de cada fluxo necessário e os resultados de autenticação. Uma única mensagem recebida não representa todos os remetentes.

Este texto explica os conceitos; não fornece um registro universal para colar no seu domínio.

## Fontes e transparência

Consultadas em 22/10/2026:

- [Google — SPF](https://knowledge.workspace.google.com/admin/security/set-up-spf)
- [Google — DKIM](https://knowledge.workspace.google.com/admin/security/set-up-dkim)
- [Google — DMARC](https://knowledge.workspace.google.com/admin/security/set-up-dmarc)
- [RFC 7489 — DMARC, alinhamento e política](https://www.rfc-editor.org/rfc/rfc7489.html)

Pesquisa documental. Nenhum DNS, provedor ou envio real foi alterado.
