---
title: "Como testar Linux sem instalar no computador"
description: "Aprenda a testar Linux pelo pendrive sem instalar no disco, verificar Wi-Fi, áudio e vídeo e voltar ao sistema atual com segurança."
publishedAt: 2026-09-30
category: linux-seguranca
type: tutorial
readingTime: 9
difficulty: iniciante
featured: false
draft: false
tags: [linux, ubuntu, live usb, pendrive bootável, iniciantes]
storeProducts:
  - "sandisk-ultra-flair-32gb"
  - "sandisk-portable-ssd-1tb"
---

Você não precisa instalar Linux para descobrir se vai gostar dele ou se o seu computador funciona bem com o sistema.

Uma das formas mais seguras de começar é usar o **modo de teste pelo pendrive**, também chamado de sessão *live*.

Pense nisso como visitar uma casa antes de decidir se vai morar nela: você entra, observa os cômodos, testa o que precisa e depois sai sem mudar sua casa atual.

Neste guia, vamos usar o Ubuntu como exemplo e fazer apenas o teste. **Não vamos instalar nem alterar partições.**

Se você ainda não preparou o pendrive, comece por [Como criar um pendrive bootável Linux sem apagar o disco errado](/blog/como-criar-pendrive-bootavel-linux/).

## O que significa testar Linux sem instalar?

Quando você inicia o computador pelo pendrive e escolhe a opção de testar, o Linux roda diretamente a partir da mídia USB.

No Ubuntu atual, a opção aparece como **Try Ubuntu**.

Segundo a documentação oficial, esse modo permite experimentar o sistema sem fazer alterações permanentes no computador. Quando terminar, basta reiniciar, remover o pendrive e iniciar normalmente pelo sistema que já estava instalado.

[Referência: documentação oficial do Ubuntu](https://ubuntu.com/desktop/docs/en/latest/tutorial/try-ubuntu-desktop/)

Isso é diferente de clicar em **Install Ubuntu**.

No modo de teste, o objetivo é observar e experimentar. Na instalação, o sistema passa a trabalhar com o armazenamento interno e pode alterar partições e arquivos do computador.

## Antes de começar

Confira quatro coisas:

1. o pendrive bootável está pronto;
2. você sabe qual é o seu sistema atual e não pretende substituí-lo agora;
3. arquivos importantes estão salvos em backup;
4. você reservou alguns minutos para testar com calma.

O backup continua sendo uma boa prática mesmo quando a intenção é apenas testar. Ele se torna especialmente importante se, depois do teste, você decidir avançar para a instalação.

## 1. Conecte o pendrive e reinicie

Com o computador desligado ou antes de reiniciar, conecte o pendrive bootável.

Em seguida, abra o **menu de boot** do computador.

Esse menu permite escolher de qual dispositivo o computador deve iniciar naquela vez.

Em muitos PCs a tecla é `F12`, mas também aparecem com frequência `Esc`, `F2` e `F10`.

A tecla muda conforme o fabricante. Se nenhuma funcionar, consulte o manual ou a página de suporte do seu modelo.

A documentação atual do Ubuntu também orienta a usar o menu de boot para selecionar o dispositivo USB quando o computador não inicia automaticamente por ele.

## 2. Escolha o pendrive, não o disco interno

No menu de boot, procure pelo dispositivo USB.

Ele pode aparecer pelo nome do fabricante do pendrive, pelo termo `USB` ou como uma entrada relacionada a `UEFI`.

Não escolha opções aleatoriamente.

Se houver dúvida, saia do menu e confira o modelo ou capacidade do pendrive antes de continuar.

Aqui você está apenas escolhendo **de onde o computador vai iniciar**. Isso ainda não instala nada.

## 3. Escolha “Try Ubuntu”

Depois que o Ubuntu iniciar pelo USB, o instalador apresenta as primeiras opções de idioma, teclado e acessibilidade.

Em uma das telas aparece a escolha entre **testar** e **instalar**.

Escolha **Try Ubuntu**.

A documentação oficial orienta essa opção justamente para visualizar e experimentar o Ubuntu sem fazer alterações permanentes no computador.

Não clique em **Install Ubuntu** se seu objetivo ainda é apenas conhecer o sistema.

## 4. O que testar primeiro

Agora você está dentro de um ambiente temporário.

Em vez de sair instalando programas ou alterando configurações, aproveite para responder perguntas simples sobre o seu hardware.

### Wi-Fi

Veja se sua rede aparece e se você consegue se conectar.

Abra o navegador e carregue algumas páginas.

Se o Wi-Fi não aparecer, anote o modelo do adaptador de rede. Essa informação ajuda bastante em uma pesquisa posterior sobre compatibilidade.

### Áudio

Reproduza um vídeo ou algum arquivo de áudio e confira:

- alto-falantes;
- saída de fone, se você usa;
- controle de volume.

### Tela

Observe:

- resolução;
- brilho;
- tamanho dos elementos;
- funcionamento de monitor externo, se for importante para você.

### Teclado e touchpad

Em notebooks, teste:

- teclado;
- touchpad;
- clique direito;
- rolagem;
- teclas de brilho e volume.

### Bluetooth

Se você depende de mouse, teclado ou fone Bluetooth, vale verificar se o dispositivo aparece e consegue conectar.

## 5. Entenda uma limitação do modo live

O modo de teste é excelente para verificar compatibilidade básica, mas ele não representa perfeitamente uma instalação final.

A documentação atual do Ubuntu alerta que a prévia usa apenas drivers de código aberto. Alguns equipamentos que dependem de drivers proprietários, como determinadas placas NVIDIA, podem se comportar de forma diferente depois da instalação e configuração dos drivers adequados.

Por isso, se algo específico não funcionar no modo live, isso não significa automaticamente que será impossível usar Linux naquele computador.

Anote o problema antes de decidir.

## 6. O que evitar durante o teste

Se o objetivo é somente experimentar Linux, evite ações que mexam no armazenamento interno.

Não faça, sem entender exatamente o que está acontecendo:

- instalação do sistema;
- formatação;
- criação ou remoção de partições;
- alteração de opções avançadas de disco;
- comandos copiados da internet que você ainda não entende.

O modo live é seguro quando você o usa como ambiente de teste. O risco aumenta quando você começa a alterar discos e partições sem saber o efeito da ação.

## 7. Seus arquivos do sistema atual continuam lá

Dependendo da configuração do computador, o Linux pode mostrar o disco interno e permitir acessar arquivos do sistema instalado.

Isso não significa que você precisa abrir ou editar esses arquivos.

Para um primeiro teste, deixe o disco interno quieto.

Concentre-se em verificar hardware, interface e experiência de uso.

## 8. Teste tarefas que realmente importam para você

Não tente avaliar o Linux apenas olhando a área de trabalho.

Faça pequenas tarefas que você faria normalmente:

- conecte ao Wi-Fi;
- navegue na web;
- abra o gerenciador de arquivos;
- conecte um fone;
- digite um texto;
- ajuste o volume;
- veja se seu monitor é reconhecido.

Se você pretende estudar programação, pode também abrir o terminal e explorar comandos básicos sem alterar arquivos importantes.

Para isso, use o guia [Comandos Linux para quem está começando](/blog/comandos-linux-para-iniciantes/).

## 9. Como sair sem instalar

Quando terminar o teste:

1. abra o menu do sistema;
2. escolha **Reiniciar**;
3. aguarde a mensagem para remover a mídia, se ela aparecer;
4. retire o pendrive;
5. pressione `Enter` quando solicitado;
6. deixe o computador iniciar normalmente.

O sistema que já estava instalado deverá voltar a iniciar como antes.

A documentação oficial do Ubuntu descreve esse mesmo fluxo para encerrar a prévia sem prosseguir para a instalação.

## E se o computador iniciar novamente pelo pendrive?

Isso pode acontecer se o USB continuar conectado ou se a ordem de boot estiver configurada para priorizá-lo.

Desligue ou reinicie, remova o pendrive e ligue novamente.

Se ainda assim o sistema não iniciar normalmente, abra o menu de boot e selecione o armazenamento interno do computador.

## Testar em máquina virtual é outra opção

Se você não quiser reiniciar o computador, também é possível testar Linux dentro de uma **máquina virtual**.

Nesse caso, o Linux roda em uma janela dentro do sistema atual.

A vantagem é a conveniência. A desvantagem é que esse teste não representa tão bem a compatibilidade real com Wi-Fi, GPU, áudio e outros componentes físicos.

Se a sua pergunta principal é “meu hardware funciona com Linux?”, o teste pelo pendrive costuma ser mais útil.

## O que observar antes de decidir instalar

Depois de alguns minutos, responda:

- o Wi-Fi funcionou?
- o áudio funcionou?
- a tela ficou correta?
- teclado e touchpad funcionaram?
- a interface fez sentido para você?
- apareceu algum problema que precisa ser pesquisado antes da instalação?

Você não precisa decidir na hora.

Pode desligar, voltar ao sistema atual e pesquisar qualquer problema com calma.

## Próximo passo

Se o teste funcionou bem, você já tem uma evidência melhor de que aquela distribuição pode funcionar no seu computador.

Ainda assim, antes de instalar:

1. faça backup dos arquivos importantes;
2. entenda o que será feito com o disco;
3. confira se há BitLocker, Intel RST ou outra configuração que possa afetar a instalação;
4. leia cada etapa do instalador antes de confirmar.

Se você ainda está escolhendo qual distribuição testar, veja [Como escolher uma distribuição Linux](/blog/como-escolher-distribuicao-linux/).

E para seguir uma sequência completa desde o começo, acompanhe a [trilha gratuita Linux do Zero](/trilhas/linux-do-zero/).

O objetivo do modo live não é convencer você a instalar Linux imediatamente.

É permitir que você **teste primeiro e decida depois, com mais informação e menos risco**.
