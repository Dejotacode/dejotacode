---
title: "Permissões no Linux sem mistério"
description: "Entenda permissões no Linux: leitura, escrita e execução, quem pode acessar cada arquivo e como praticar com segurança."
publishedAt: 2026-09-08
updatedAt: 2026-09-25
category: linux-seguranca
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: [linux, permissões, segurança]
---

As permissões ajudam o Linux a decidir **quem pode ler, alterar ou executar** arquivos e diretórios.

Para quem está começando, o mais importante não é decorar números ou comandos. Primeiro, aprenda a **ler o que o sistema está mostrando**.

Se você ainda está se acostumando com o terminal, vale passar antes pelo tutorial de [comandos Linux para quem está começando](/blog/comandos-linux-para-iniciantes/).

## Por que existem permissões?

Imagine um armário compartilhado. Algumas pessoas podem apenas olhar o conteúdo, outras podem acrescentar ou retirar itens, e algumas talvez nem tenham acesso.

No Linux, arquivos e diretórios seguem uma lógica parecida. As permissões ajudam a evitar que qualquer usuário ou programa altere tudo sem controle.

Esse modelo é uma das bases da segurança do sistema.

## As três permissões principais

Você verá três letras com frequência:

- `r` — **read**, ou leitura;
- `w` — **write**, ou escrita;
- `x` — **execute**, ou execução.

Em um arquivo, leitura normalmente significa poder ver seu conteúdo. Escrita significa poder modificá-lo. Execução indica que o sistema pode tratá-lo como algo executável, quando isso faz sentido.

Em diretórios, essas permissões têm efeitos um pouco diferentes. Por exemplo, a permissão de execução em um diretório está relacionada à possibilidade de acessá-lo e percorrer seu caminho.

Você não precisa memorizar todas essas diferenças agora. O objetivo inicial é reconhecer que `r`, `w` e `x` representam tipos distintos de acesso.

## Veja as permissões com ls -l

Dentro de uma pasta de teste, execute:

```bash
ls -l
```

Uma linha pode aparecer assim:

```text
-rw-r--r-- 1 ana ana 1200 set 25 10:00 notas.txt
```

A parte que nos interessa primeiro é:

```text
-rw-r--r--
```

O primeiro caractere ajuda a indicar o tipo do item. Um hífen costuma representar um arquivo comum, enquanto `d` normalmente identifica um diretório.

Depois vêm grupos de permissões.

## Proprietário, grupo e outros

Depois do primeiro caractere, as permissões aparecem em três conjuntos.

No exemplo:

```text
rw- r-- r--
```

Você pode ler assim:

- primeiro grupo: permissões do **proprietário**;
- segundo grupo: permissões do **grupo**;
- terceiro grupo: permissões dos **outros usuários**.

No nosso exemplo, o proprietário pode ler e escrever no arquivo. O grupo e os demais usuários podem apenas lê-lo.

O hífen indica que aquela permissão específica não está concedida.

## Faça um teste sem alterar nada

Você pode praticar apenas observando.

Entre na pasta de prática criada no tutorial anterior e execute:

```bash
ls -l
```

Escolha um arquivo e tente identificar:

1. quem é o proprietário;
2. qual é o grupo;
3. quais permissões aparecem para cada conjunto.

Essa prática é útil porque você aprende a interpretar o estado atual antes de pensar em mudanças.

## E o chmod?

O comando `chmod` é usado para alterar permissões.

Você verá muitos exemplos usando números como:

```bash
chmod 644 arquivo.txt
```

ou:

```bash
chmod 755 script.sh
```

Esses números representam combinações de leitura, escrita e execução.

Eles são muito usados no Linux, mas não precisam ser o seu primeiro passo. Antes de alterar permissões, confirme o que cada combinação significa e por que aquela mudança é necessária.

## Por que evitar chmod 777 sem entender

Você também pode encontrar tutoriais sugerindo:

```bash
chmod 777 arquivo
```

Isso concede um conjunto muito amplo de permissões.

Às vezes esse tipo de alteração parece "resolver" rapidamente um erro de acesso, mas pode criar um problema maior ao liberar escrita ou execução para usuários que não precisavam dessas permissões.

Em vez de usar permissões máximas como solução genérica, procure descobrir:

- qual usuário precisa acessar o arquivo;
- qual ação precisa ser permitida;
- quem é o proprietário atual;
- qual grupo está associado ao item.

A melhor permissão não é a maior. É a **menor permissão necessária para a tarefa funcionar corretamente**.

## Use sudo com cuidado

`sudo` permite executar determinados comandos com privilégios elevados quando seu usuário possui autorização para isso.

Isso é útil para tarefas administrativas, mas aumenta o impacto de um erro.

Antes de executar um comando com `sudo`:

- leia a linha inteira;
- confirme os caminhos envolvidos;
- entenda o que o comando altera;
- evite copiar comandos de fontes desconhecidas;
- mantenha backup de dados importantes antes de mudanças de sistema.

Usar privilégios elevados não torna um comando automaticamente correto.

## Um exercício seguro

Crie um arquivo vazio dentro da sua pasta de prática:

```bash
touch teste-permissoes.txt
```

Depois observe suas permissões:

```bash
ls -l teste-permissoes.txt
```

Neste momento, apenas leia a saída. Identifique proprietário, grupo e os três conjuntos de permissões.

Esse pequeno exercício já ensina uma habilidade importante: **observar antes de modificar**.

## Próximo passo

Agora que você consegue reconhecer permissões, pode avançar para outros conceitos de terminal e segurança com mais contexto.

Continue pela [trilha gratuita Linux do Zero](/trilhas/linux-do-zero/) para seguir uma sequência organizada.

Também vale conhecer [5 hábitos de segurança digital para começar hoje](/blog/habitos-seguranca-digital-iniciantes/), porque segurança no Linux não depende apenas de comandos: ela também depende das decisões que você toma ao usar o sistema.
