---
title: "Comandos Linux para quem está começando"
description: "Aprenda comandos Linux básicos para navegar por pastas, listar arquivos e praticar no terminal com segurança."
publishedAt: 2026-09-09
updatedAt: 2026-09-25
category: linux-seguranca
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: ["linux", "terminal", "comandos"]
---

O terminal fica muito mais simples quando você pratica poucos comandos por vez e entende o que cada resposta significa.

Se você acabou de chegar ao Linux, não precisa decorar dezenas de comandos. Comece aprendendo a responder três perguntas: **onde estou, o que existe aqui e como entro em outra pasta?**

Antes de continuar, vale conhecer [o que é Linux e como ele funciona](/blog/o-que-e-linux/) para entender melhor o papel do terminal no sistema.

## Antes de digitar: entenda o terminal

O terminal é uma forma de conversar com o sistema usando texto. Você escreve uma instrução, pressiona `Enter` e observa a resposta.

O mais importante no começo não é velocidade. É criar o hábito de ler o comando antes de executá-lo e conferir em qual pasta você está trabalhando.

Para esta prática, vamos usar comandos que ajudam a navegar pelo sistema sem precisar alterar arquivos importantes.

## Descubra onde você está com pwd

O comando `pwd` mostra o caminho do diretório atual:

```bash
pwd
```

Um resultado possível seria:

```text
/home/ana
```

No seu computador, o nome do usuário e o caminho podem ser diferentes.

Pense no `pwd` como perguntar ao Linux: **"qual é o endereço da pasta em que estou agora?"**

Sempre que você se perder no terminal, esse é um bom comando para usar.

## Liste os arquivos com ls

Use `ls` para visualizar o conteúdo do diretório atual:

```bash
ls
```

Você verá os arquivos e diretórios existentes naquele local.

Para mostrar também itens ocultos e informações adicionais, use:

```bash
ls -la
```

No Linux, muitos arquivos de configuração começam com um ponto, como `.config`. Por isso eles normalmente não aparecem em uma listagem simples com `ls`.

No começo, você não precisa entender todas as colunas de `ls -la`. Observe apenas que o comando oferece mais detalhes sobre cada item.

## Entre em um diretório com cd

O comando `cd` significa mudar de diretório.

Para entrar em uma pasta chamada `Documentos`, por exemplo:

```bash
cd Documentos
```

Depois, use:

```bash
pwd
```

Assim você confirma que realmente entrou na pasta esperada.

Para voltar um nível na estrutura de diretórios:

```bash
cd ..
```

Os dois pontos (`..`) representam o diretório imediatamente acima do atual.

Uma boa rotina para iniciantes é:

```bash
pwd
ls
cd nome-da-pasta
pwd
```

Essa sequência reduz a chance de você se perder enquanto aprende.

## Crie um espaço seguro para praticar

Em vez de testar comandos em pastas importantes, crie um diretório dedicado aos exercícios:

```bash
mkdir pratica-linux
```

Entre nele:

```bash
cd pratica-linux
```

E confirme sua localização:

```bash
pwd
```

Agora você tem um espaço separado para experimentar comandos simples.

O comando `mkdir` cria um novo diretório. Neste exemplo, ele cria apenas a pasta `pratica-linux` dentro do local onde você estava.

## Veja o conteúdo de um arquivo com cat

Se houver um arquivo de texto na sua pasta de prática, você pode visualizar seu conteúdo com:

```bash
cat arquivo.txt
```

O comando envia o conteúdo do arquivo para o terminal.

Use-o primeiro com arquivos pequenos. Arquivos grandes podem gerar muitas linhas de saída de uma vez.

## Limpe a tela sem apagar seus arquivos

Depois de alguns comandos, a tela pode ficar cheia. Para limpá-la visualmente, use:

```bash
clear
```

Esse comando não apaga seus arquivos nem desfaz comandos anteriores. Ele apenas limpa a área visível do terminal.

## Uma sequência prática de cinco minutos

Você pode treinar os comandos deste tutorial nesta ordem:

```bash
pwd
ls
mkdir pratica-linux
cd pratica-linux
pwd
```

Depois volte ao diretório anterior:

```bash
cd ..
```

E confirme novamente:

```bash
pwd
```

Repita a sequência devagar e observe a resposta depois de cada comando. O objetivo é entender o caminho que você percorreu, não decorar tudo de uma vez.

## Comandos que exigem mais atenção

Quando estiver pesquisando na internet, você encontrará comandos como `rm`, `sudo` e combinações maiores copiadas de fóruns.

Eles podem ser legítimos, mas também podem remover arquivos ou fazer alterações importantes no sistema dependendo de como forem usados.

Antes de executar algo que você ainda não entende:

- confira em qual diretório está com `pwd`;
- leia o comando inteiro;
- procure entender quais arquivos ele alcança;
- não use privilégios administrativos apenas porque uma instrução manda fazer isso.

Aprender terminal também significa aprender a parar antes de confirmar uma ação que você ainda não compreendeu.

## Próximo passo: permissões no Linux

Depois que navegação por diretórios estiver confortável, o próximo conceito importante é entender por que alguns arquivos podem ser lidos ou alterados e outros não.

Continue em [Permissões no Linux sem mistério](/blog/permissoes-linux-para-iniciantes/).

Se você prefere aprender em uma sequência organizada desde o começo, acompanhe também a [trilha gratuita Linux do Zero](/trilhas/linux-do-zero/).

![Terminal Linux com comandos básicos para iniciantes](https://api.dejotacode.com.br/api/media/public/posts/comandos-linux-para-iniciantes/2026/09/d68be448-0cb3-4e50-ae3d-6ef0658c1f0f.png)
