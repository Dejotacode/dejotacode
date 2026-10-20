---
title: "Passkey: o que é, como funciona e quando usar no lugar da senha"
description: "Entenda o que é uma passkey, como ela usa criptografia de chave pública, por que resiste melhor a phishing e o que conferir antes de trocar senhas por esse método."
publishedAt: 2026-10-20
updatedAt: 2026-10-20
category: linux-seguranca
type: tutorial
readingTime: 8
difficulty: iniciante
featured: false
draft: false
tags: [seguranca, passkey, senhas, autenticacao, phishing, privacidade]
storeProducts:
  - "nordpass"
---

Passkeys estão aparecendo cada vez mais como opção de login em sites e aplicativos. Em vez de digitar uma senha, você confirma o acesso usando o bloqueio do seu dispositivo — como biometria, PIN ou outro método configurado localmente.

A ideia parece simples, mas vale entender o que muda por trás do login. Uma passkey **não é apenas uma senha salva** e também não é simplesmente um código de autenticação em dois fatores.

Este guia explica como o mecanismo funciona, por que ele é resistente a phishing e quais cuidados ainda continuam importantes. O conteúdo foi pesquisado em documentação oficial; o DejotaCode não realizou um teste comparativo próprio dos provedores citados.

## Resposta rápida: o que é uma passkey?

Uma passkey é uma credencial de autenticação baseada nos padrões FIDO. Quando você cria uma passkey para um serviço, o dispositivo gera um par criptográfico: uma chave pública e uma chave privada.

A chave pública fica registrada no serviço. A chave privada permanece sob controle do dispositivo ou do provedor que gerencia suas passkeys.

No login, o serviço envia um desafio criptográfico. Seu dispositivo assina esse desafio com a chave privada depois que você confirma sua identidade localmente, por exemplo com impressão digital, reconhecimento facial ou PIN.

O site verifica a resposta usando a chave pública que já possui. A chave privada não precisa ser enviada ao servidor.

## Por que isso é diferente de uma senha?

Uma senha é um segredo que você conhece e transmite ao serviço durante a autenticação. Mesmo quando é protegida por HTTPS e armazenada corretamente pelo servidor, ela ainda pode ser digitada em um site falso, reutilizada em outro serviço ou exposta por algum incidente.

Com passkeys, o serviço não precisa guardar um segredo equivalente à sua senha. Ele guarda a chave pública, que não permite reconstruir a chave privada necessária para concluir o login.

Outra diferença importante é que cada passkey fica associada ao site ou aplicativo para o qual foi criada. Essa vinculação ajuda a impedir que uma credencial criada para um domínio seja usada por uma página falsa em outro domínio.

## Por que passkeys são resistentes a phishing?

Em um ataque de phishing tradicional, uma página falsa tenta convencer você a digitar sua senha ou um código temporário.

Com uma passkey, o navegador e o sistema operacional participam da verificação do serviço. A credencial é vinculada à identidade do site ou aplicativo registrado. Se você estiver em um domínio diferente, o sistema não deve oferecer aquela passkey como credencial válida para o impostor.

Isso reduz a dependência de uma decisão manual do tipo "este endereço parece verdadeiro?".

A resistência a phishing, porém, não significa que toda a conta se torna automaticamente invulnerável. Se o serviço mantiver uma alternativa fraca de login ou recuperação, como senha reutilizada ou recuperação vulnerável a engenharia social, um atacante pode tentar contornar a passkey por esse outro caminho.

## A biometria vai para o site?

Não. Usar impressão digital ou reconhecimento facial para liberar uma passkey não significa enviar seus dados biométricos ao site.

A biometria é usada pelo dispositivo para autorizar o uso da credencial. Segundo a documentação do Google e da FIDO Alliance, o material biométrico permanece no dispositivo e não é entregue ao serviço no processo de autenticação.

Isso também ajuda a explicar por que uma passkey não deve ser confundida com "uma impressão digital cadastrada no site".

## PIN também pode ser usado

Passkeys não dependem obrigatoriamente de biometria.

Conforme o dispositivo e o provedor, você pode liberar a credencial com:

- PIN do dispositivo;
- impressão digital;
- reconhecimento facial;
- padrão de desbloqueio;
- chave de segurança física compatível.

O ponto principal é que o método local confirma que você pode usar a chave privada armazenada ou protegida naquele ambiente.

## Passkey é autenticação em dois fatores?

Na prática, uma passkey pode combinar dois elementos: você possui o dispositivo ou acesso ao provedor que guarda a credencial, e precisa desbloqueá-la usando algo que sabe ou algo que é, como PIN ou biometria.

Por isso, plataformas como a Microsoft classificam passkeys como uma forma de autenticação multifator.

Ainda assim, é melhor pensar nela como **um método de autenticação moderno que pode substituir a senha**, e não apenas como mais um código colocado depois da senha.

## Passkey sincronizada ou presa a um dispositivo?

Nem toda passkey é administrada do mesmo jeito.

### Passkeys sincronizadas

Podem ser disponibilizadas em vários dispositivos por um provedor de credenciais. Sistemas operacionais e gerenciadores de senhas podem oferecer essa sincronização.

Isso facilita trocar de celular ou usar a mesma credencial em mais de um equipamento, desde que você mantenha acesso seguro à conta usada pelo provedor.

### Passkeys vinculadas a um dispositivo

Outras credenciais ficam presas a um dispositivo específico ou a uma chave de segurança física.

Essa abordagem pode ser desejável em contextos com exigências maiores de controle, mas muda a forma como você precisa planejar redundância e recuperação.

## O que acontece se eu perder o celular?

Essa é uma das perguntas mais importantes antes de depender de passkeys.

Se a passkey estiver sincronizada por um provedor, você pode conseguir recuperá-la ao entrar de forma segura em outro dispositivo compatível. Se estiver vinculada apenas ao dispositivo perdido, será necessário usar outra passkey previamente cadastrada, uma chave física ou o procedimento de recuperação oferecido pelo serviço.

Por isso, antes de remover senhas ou outros métodos, confira:

- onde a passkey está armazenada;
- se existe sincronização;
- como o provedor protege a recuperação da conta;
- se o serviço permite cadastrar mais de uma passkey;
- quais alternativas permanecem disponíveis em caso de perda de dispositivo.

Não espere perder o aparelho para descobrir como a recuperação funciona.

## Posso usar uma passkey do celular para entrar no computador?

Em muitos cenários, sim.

Os padrões e plataformas modernas permitem autenticação entre dispositivos. Por exemplo, uma passkey disponível no telefone pode ser usada para autorizar um login em um computador próximo, mesmo quando a credencial não está armazenada diretamente naquele computador.

A implementação depende do sistema, navegador, provedor e serviço. Se o recurso for importante para sua rotina, teste esse fluxo antes de remover métodos alternativos de acesso.

## Passkeys já estão sendo usadas em escala?

Sim, e a adoção avançou bastante.

No **Passkey Index 2026**, publicado pela FIDO Alliance em 15 de outubro de 2026 com dados de grandes serviços participantes, 36% dos logins bem-sucedidos avaliados usaram passkeys, contra 26% no índice de 2025.

O mesmo levantamento informou taxa de sucesso de 93% nos logins com passkey, contra 78% em fluxos tradicionais de MFA, além de uma economia média de 27 segundos por login.

Esses números descrevem os participantes e a metodologia do índice; não significam que todo site ou usuário terá exatamente o mesmo resultado.

## Quando faz sentido criar uma passkey?

Uma passkey costuma fazer sentido quando o serviço oferece suporte oficial e você entende como vai recuperar o acesso.

Priorize contas importantes, especialmente quando o serviço permite manter mais de uma passkey ou oferece um processo de recuperação claro.

Ela pode ser particularmente útil para reduzir:

- reutilização de senhas;
- digitação de credenciais em páginas falsas;
- dependência de códigos temporários por SMS;
- risco de credential stuffing com senhas vazadas.

Se você ainda usa a mesma senha em vários lugares, veja também [o que fazer quando uma senha vaza](/blog/minha-senha-vazou-o-que-fazer-agora/).

## Quando ainda vale ter cautela

Não ative uma passkey sem entender onde ela ficará guardada e o que acontece se você perder acesso ao dispositivo ou à conta do provedor.

Também vale atenção quando:

- o serviço oferece passkey, mas mantém recuperação fraca;
- você depende de apenas um dispositivo;
- não há alternativa de recuperação que você compreenda;
- o ambiente de trabalho possui regras específicas para credenciais e dispositivos;
- você pretende remover a senha antes de testar o acesso em outro dispositivo.

Uma autenticação forte pode ser enfraquecida por um fluxo de recuperação mal protegido.

## Gerenciadores de senhas também podem guardar passkeys

Além dos gerenciadores integrados a sistemas operacionais e navegadores, alguns gerenciadores de senhas de terceiros oferecem armazenamento e sincronização de passkeys.

O NordPass, por exemplo, documenta suporte a armazenamento e uso de passkeys. Isso pode ser conveniente para quem já centraliza credenciais em um gerenciador compatível, mas a escolha deve considerar recuperação, dispositivos suportados, exportação, bloqueio do cofre e condições do plano.

Se você está começando nesse tipo de ferramenta, veja nosso guia sobre [como escolher um gerenciador de senhas](/blog/gerenciador-de-senhas-para-iniciantes/).

Você também pode consultar a [ficha da NordPass na DejotaStore](/store/nordpass/) para conferir contexto, recursos e limitações pesquisadas.

**Transparência comercial:** a ficha da NordPass contém um link afiliado. Se você contratar por um link elegível, o DejotaCode poderá receber uma comissão, sem custo adicional para você. Isso não altera os critérios deste guia, e não há teste comparativo próprio registrado para este artigo.

## Passkey substitui todas as senhas imediatamente?

Ainda não.

A disponibilidade depende de cada serviço. Algumas contas permitem login totalmente sem senha; outras oferecem passkey ao lado da senha; outras ainda não implementaram o recurso.

Na prática, você provavelmente vai conviver com os dois modelos durante algum tempo.

Também é importante lembrar que remover a senha de uma conta, quando permitido, é uma decisão diferente de simplesmente adicionar uma passkey. Confira primeiro o fluxo de recuperação e os dispositivos cadastrados.

## Checklist antes de usar passkeys

- Confirmei que o serviço oferece suporte oficial.
- Sei onde minha passkey será armazenada.
- Entendi se ela é sincronizada ou vinculada a um dispositivo.
- Sei como recuperar a conta se perder meu aparelho.
- Conferi se posso cadastrar mais de uma passkey.
- Testei o login antes de remover outro método.
- Protejo a conta do provedor que sincroniza minhas passkeys.
- Não trato passkey como solução para qualquer outro problema de segurança da conta.

## Em resumo

Uma passkey substitui o segredo compartilhado de uma senha por autenticação baseada em criptografia de chave pública.

A chave privada permanece sob controle do dispositivo ou provedor; o serviço recebe e armazena a chave pública. Como a credencial é vinculada ao site ou aplicativo correto, ela oferece resistência muito maior a phishing do que senhas e códigos temporários digitáveis.

O ganho de segurança, porém, depende também de recuperação, dispositivos cadastrados e métodos alternativos que continuam ativos na conta.

Comece por uma conta que ofereça suporte oficial, entenda o fluxo de recuperação e teste o acesso em mais de um cenário antes de depender exclusivamente da passkey.

## Fontes oficiais

Consultadas e revisadas em 18/10/2026. Implementações, recursos e procedimentos podem mudar.

- [FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys-2/)
- [FIDO Alliance: especificações de autenticação FIDO](https://fidoalliance.org/specifications/)
- [FIDO Alliance: Passkey Index 2026](https://fidoalliance.org/passkey-index-2026/)
- [Google for Developers: Passkeys](https://developers.google.com/identity/passkeys)
- [Microsoft Support: Passkeys FAQ](https://support.microsoft.com/en-us/accounts-billing/security-passkeys-frequently-asked-questions-faq)
- [NordPass: Passkeys FAQ](https://support.nordpass.com/hc/en-us/articles/12984678202641-Passkeys-FAQs)
