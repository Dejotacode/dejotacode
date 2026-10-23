---
title: "Newsletter com Brevo: double opt-in na prática"
description: "Entenda o double opt-in a partir de uma implementação real com Brevo, consentimento, confirmação por e-mail, descadastro e validação antes da publicação."
publishedAt: 2026-10-20
category: programacao
type: artigo
readingTime: 4
difficulty: intermediario
featured: false
draft: false
relatedPosts: ["formulario-acessivel-rotulos-erros", "spf-dkim-dmarc-entender-antes-dns"]
tags: [brevo, newsletter, double opt-in, email, privacidade]
---

Colocar um campo de e-mail em uma página é a parte fácil de uma newsletter. O trabalho mais importante começa quando precisamos decidir quando uma pessoa realmente deve ser considerada inscrita, como registrar consentimento e como tratar confirmação e descadastro.

Na DejotaCode, implementamos uma newsletter usando Brevo com confirmação por double opt-in. A integração foi preparada e testada antes de ser publicada em 9 de outubro de 2026.

## O que é double opt-in

No double opt-in, preencher o formulário não conclui sozinho a inscrição. O endereço recebe uma mensagem de confirmação e a pessoa precisa confirmar a intenção de participar da lista.

A documentação da Brevo descreve esse processo como uma forma de validar o endereço e confirmar o consentimento antes da inclusão efetiva. A API também possui um fluxo específico para criação de contato por double opt-in.

## Por que não tratamos o formulário como inscrição concluída

No nosso fluxo, o frontend informa que haverá confirmação por e-mail. O pedido inicial e a inscrição ativa são estados diferentes. Essa diferença precisa aparecer também nas mensagens da interface: o guia sobre [rótulos e mensagens de erro em formulários acessíveis](/blog/formulario-acessivel-rotulos-erros/) complementa essa revisão.

Essa separação evita uma interpretação perigosa: receber um POST com um endereço não significa automaticamente que aquele endereço está autorizado a receber campanhas.

## Testamos antes de liberar

Antes da publicação, a integração passou por testes com Brevo simulada e diferentes estados de interface. A etapa preparatória não enviou mensagens reais.

Depois da autorização para publicação, foi feito um teste isolado do fluxo real de confirmação, entrega e descadastro. Somente então a integração foi considerada publicada.

Essa ordem é útil para qualquer integração externa: simular primeiro, validar os estados da aplicação e limitar o teste real ao que precisa ser comprovado.

## Um contato bloqueado não deve ser reativado silenciosamente

Outro comportamento que tratamos foi o de contatos já suprimidos. Um novo pedido pode receber uma resposta genérica da aplicação sem que isso signifique reativar automaticamente aquele contato.

O objetivo é evitar que uma interação no formulário desfaça silenciosamente uma decisão anterior de descadastro ou bloqueio.

## Segredos não pertencem ao frontend

A chave da API da Brevo foi mantida como segredo da infraestrutura. Ela não é uma variável pública do site e não deve aparecer em JavaScript entregue ao navegador.

Esse princípio vale para qualquer serviço de e-mail: o formulário público conversa com uma camada controlada no backend; credenciais privadas ficam fora do código enviado ao visitante. Se uma credencial for exposta em um repositório, o [guia de resposta a chave de API publicada](/blog/chave-api-publicada-github-o-que-fazer/) organiza as primeiras medidas, começando pela revogação.

## O que a documentação atual da Brevo oferece

A Brevo mantém um endpoint próprio para criação de contatos via DOI, com e-mail, lista, URL de redirecionamento e template de confirmação. A plataforma também documenta atributos relacionados a consentimento e double opt-in.

Isso não elimina a responsabilidade da aplicação de definir seus próprios estados, mensagens, tratamento de erros e política de dados.

Também separe consentimento de autenticação do remetente: [SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-entender-antes-dns/) tratam de outro aspecto do envio de e-mail. Configurá-los não confirma a inscrição de uma pessoa nem garante entrega na caixa de entrada.

## O aprendizado principal

Uma newsletter não é apenas um formulário mais uma API. É um fluxo de consentimento.

Antes de automatizar campanhas, vale conseguir responder claramente: quem pediu inscrição, quem confirmou, quem cancelou, o que acontece com um contato bloqueado e onde as credenciais estão armazenadas.

Na DejotaCode, campanhas futuras continuam sendo uma decisão separada da infraestrutura de inscrição. Ter a integração funcionando não autoriza disparos automáticos.

## Fontes e escopo

Este conteúdo parte da implementação documentada da newsletter DejotaCode e não expõe chaves, contatos, backups ou identificadores privados.

Referências oficiais consultadas em 20/10/2026; documentação de DOI e endpoint reconferida em 23/10/2026:

- [Brevo: double opt-in](https://help.brevo.com/hc/en-us/articles/208733449-Double-opt-in-DOI-What-it-is-and-how-to-track-user-sign-ups)
- [Brevo API: criar contato via DOI](https://developers.brevo.com/reference/create-doi-contact)
- [Brevo: formulário de assinatura](https://help.brevo.com/hc/pt/articles/208771869-Criar-um-formul%C3%A1rio-de-assinatura-na-Brevo)
