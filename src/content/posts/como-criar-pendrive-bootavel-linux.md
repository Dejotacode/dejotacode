---
title: "Como criar um pendrive bootável Linux sem apagar o disco errado"
description: "Aprenda a criar um pendrive bootável para testar Linux com segurança, identificar o dispositivo correto e evitar apagar seu disco principal por engano."
publishedAt: 2026-09-29
category: linux-seguranca
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: [linux, pendrive bootável, ubuntu, instalação, iniciantes]
---

Criar um pendrive bootável é uma das formas mais práticas de experimentar Linux antes de instalar qualquer coisa no computador.

O ponto que merece mais atenção não é o Linux em si. É **escolher o dispositivo correto** quando a ferramenta perguntar onde gravar a imagem.

Se você selecionar o pendrive, ele será apagado e preparado para iniciar o Linux. Se selecionar o disco interno por engano, pode perder arquivos importantes.

Neste guia, vamos fazer isso com calma.

## O que é um pendrive bootável?

Normalmente, um pendrive guarda arquivos como fotos, documentos e vídeos.

Um pendrive **bootável** é preparado de outra forma: ele recebe uma imagem do sistema operacional e passa a poder iniciar o computador.

Pense nele como uma chave temporária de entrada. Em vez de o computador iniciar pelo sistema instalado no disco, ele pode iniciar pelo Linux gravado no pendrive.

No Ubuntu, por exemplo, esse modo permite experimentar o sistema antes de instalar. A documentação oficial recomenda um pendrive de **8 GB ou mais** e avisa que o processo de criação apaga os dados existentes nele. [Referência: documentação do Ubuntu](https://ubuntu.com/desktop/docs/en/latest/how-to/create-a-bootable-usb-stick/)

## Antes de começar: faça três verificações

Antes de abrir qualquer programa, confira:

1. **o pendrive pode ser apagado?**
2. **você fez backup do que estava nele?**
3. **você sabe identificar o tamanho aproximado dele?**

O tamanho ajuda muito.

Se seu computador tem um SSD de 512 GB e o pendrive tem 64 GB, por exemplo, essa diferença ajuda a reconhecer qual dispositivo é qual.

Não confie apenas em nomes como “Disco 1”, “Unidade E:” ou “USB”. Confira também a capacidade.

## O que você vai precisar

Para este exemplo:

- um computador;
- um pendrive de 8 GB ou mais;
- uma imagem ISO de uma distribuição Linux;
- uma ferramenta para gravar a ISO no pendrive.

Vamos usar Ubuntu como exemplo porque ele oferece documentação clara para iniciantes.

Se ainda não escolheu uma distribuição, veja [Como escolher uma distribuição Linux](/blog/como-escolher-distribuicao-linux/).

## Baixe a ISO no computador, não no pendrive

A imagem ISO é o arquivo que contém o sistema.

Baixe a imagem para uma pasta conhecida, como `Downloads`.

Não copie a ISO diretamente para o pendrive esperando que ele se torne bootável. A criação da mídia exige uma ferramenta que grave a imagem corretamente no dispositivo.

A própria documentação do Ubuntu diferencia essas duas coisas: **copiar o arquivo não é o mesmo que criar uma mídia de instalação**.

## No Windows: use o Rufus

No Windows, a documentação atual do Ubuntu recomenda o Rufus.

Depois de instalar e abrir o programa:

1. conecte o pendrive;
2. confira o campo **Dispositivo**;
3. confirme que o tamanho corresponde ao seu pendrive;
4. em **Seleção de boot**, escolha a ISO do Ubuntu;
5. mantenha as opções padrão se você não tiver um motivo específico para alterá-las;
6. clique em **Iniciar**;
7. leia o aviso antes de confirmar.

O Rufus avisa que os dados do dispositivo selecionado serão destruídos.

Essa é a hora de parar e conferir novamente:

**o dispositivo mostrado é realmente o pendrive?**

Se houver dúvida, cancele.

É melhor conferir duas vezes do que tentar recuperar dados depois.

## No Ubuntu: use o aplicativo Discos

Se você já está usando Ubuntu, pode criar a mídia pelo aplicativo **Discos**.

O processo básico é:

1. abra **Discos**;
2. conecte o pendrive;
3. selecione o pendrive na barra lateral;
4. confira fabricante, capacidade e dispositivo;
5. abra o menu de opções;
6. escolha **Restaurar imagem de disco…**;
7. selecione a ISO;
8. confirme a gravação.

A documentação do Ubuntu destaca justamente o ponto mais importante: certifique-se de selecionar o pendrive e **não o disco que contém o sistema em execução**. [Guia oficial para testar Ubuntu](https://ubuntu.com/desktop/docs/en/26.04/tutorial/try-ubuntu-desktop/)

## Uma técnica simples para identificar o pendrive

Se você estiver inseguro sobre qual dispositivo apareceu na ferramenta:

1. feche a ferramenta;
2. desconecte o pendrive;
3. abra novamente e observe os dispositivos;
4. conecte o pendrive;
5. veja qual novo dispositivo apareceu.

Isso não substitui a conferência de capacidade e fabricante, mas ajuda a reduzir a chance de selecionar o disco errado.

## Depois da gravação

Quando a ferramenta terminar:

1. ejete o pendrive corretamente;
2. conecte-o ao computador onde deseja testar Linux;
3. reinicie a máquina;
4. abra o menu de boot;
5. escolha o dispositivo USB.

Em muitos PCs, `F12` abre o menu de boot. Também são comuns `Esc`, `F2` e `F10`, dependendo do fabricante.

Se não souber a tecla do seu computador, consulte a documentação do fabricante.

## Escolha “Testar” antes de instalar

Ao iniciar pelo pendrive, muitas distribuições oferecem a opção de testar o sistema sem instalar.

No Ubuntu atual, escolha **Try Ubuntu**.

Isso permite verificar coisas como:

- Wi-Fi;
- áudio;
- teclado;
- touchpad;
- resolução da tela;
- navegação;
- funcionamento geral da interface.

Esse teste é muito útil porque você conhece o sistema antes de mexer nas partições do computador.

## Testar não é a mesma coisa que instalar

Essa diferença é importante.

**Testar pelo pendrive:** inicia um ambiente temporário.

**Instalar:** grava o sistema no armazenamento interno e pode alterar partições.

Se seu objetivo é apenas conhecer Linux, fique no modo de teste.

Não avance para etapas de instalação ou particionamento sem entender o que será alterado e sem ter backup dos seus arquivos.

## Erros que vale evitar

### 1. Escolher o dispositivo pelo nome sem conferir o tamanho

Sempre compare capacidade, fabricante e tipo de dispositivo.

### 2. Usar um pendrive com arquivos importantes

A criação da mídia apaga o conteúdo.

Use um pendrive que possa ser formatado.

### 3. Copiar a ISO como um arquivo comum

Use Rufus, Discos ou outra ferramenta adequada para gravar a imagem.

### 4. Começar a instalação quando queria apenas testar

Leia cada tela. Se o objetivo é experimentar, escolha o modo de teste.

### 5. Instalar sem backup

Se decidir avançar para instalação depois, faça backup antes de alterar discos ou partições.

## Qual pendrive usar?

Para uma distribuição desktop moderna, prefira um pendrive com espaço suficiente para a imagem. O Ubuntu recomenda **8 GB ou mais**.

Não é necessário comprar um modelo sofisticado apenas para testar Linux. O ponto principal é ter capacidade suficiente, funcionamento confiável e poder apagar o conteúdo.

Na página de recursos do DejotaCode você encontra opções contextualizadas para esse tipo de uso. Quando houver link afiliado, essa relação é informada de forma explícita.

## Próximo passo

Depois de criar a mídia:

1. inicie o computador pelo USB;
2. escolha o modo de teste;
3. confira Wi-Fi, áudio, teclado e vídeo;
4. use o sistema por alguns minutos;
5. só depois decida se quer instalar.

Se você ainda está conhecendo Linux, continue pela [trilha gratuita Linux do Zero](/trilhas/linux-do-zero/).

E, antes de escolher qual distribuição gravar no pendrive, veja também [Como escolher uma distribuição Linux](/blog/como-escolher-distribuicao-linux/).

O objetivo não é instalar rápido.

É entender cada etapa o suficiente para saber **qual dispositivo você está alterando e por quê**.
