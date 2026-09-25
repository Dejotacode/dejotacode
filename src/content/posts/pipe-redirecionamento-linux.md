---
title: "Pipe e redirecionamento no Linux: entenda |, > e >>"
description: "Aprenda pipe e redirecionamento no Linux com exemplos simples de |, > e >>, entendendo quando cada operador é usado e quais cuidados tomar."
publishedAt: 2026-09-16
updatedAt: 2026-09-25
category: linux-seguranca
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: ["linux", "terminal", "pipe", "redirecionamento"]
---

Quando você começa a usar o terminal, é comum executar um comando por vez. Depois, descobre que pode conectar comandos e direcionar resultados sem precisar copiar e colar tudo manualmente.

Antes de continuar, vale conhecer os [comandos Linux básicos](/blog/comandos-linux-para-iniciantes/) e entender [permissões no Linux](/blog/permissoes-linux-para-iniciantes/). Neste tutorial, vamos usar exemplos simples e arquivos de teste.

## O que é um pipe no Linux?

O caractere `|` é chamado de **pipe**. Ele pega a saída de um comando e entrega essa saída como entrada para outro comando.

Um exemplo simples:

```bash
ls | sort
```

O `ls` lista os itens do diretório. Em vez de mostrar o resultado diretamente, o pipe envia a lista para `sort`, que organiza as linhas.

Você pode ler essa sequência assim:

**liste os arquivos → envie a lista → ordene o resultado.**

Esse é um dos conceitos mais úteis do terminal: cada comando pode fazer uma tarefa pequena e você combina essas tarefas quando precisa de algo maior.

## Pipe não significa "executar automaticamente"

O pipe não transforma um texto copiado de um site em um comando executado no seu computador. Ele funciona **dentro do terminal**, conectando processos que você decidiu executar.

Por isso, o botão **Copiar comando** do DejotaCode apenas coloca o comando na área de transferência. Você ainda pode revisar o conteúdo antes de colar e pressionar `Enter` no terminal.

Essa etapa de revisão é importante, principalmente quando o comando veio da internet.

## Filtre resultados com grep

Imagine que você queira localizar apenas itens que contenham a palavra `log`:

```bash
ls -la | grep log
```

Primeiro, `ls -la` produz a listagem detalhada. Depois, `grep log` mantém apenas as linhas que contêm `log`.

Outro exemplo usando texto simples:

```bash
printf "linux\nastros\nterminal\n" | grep linux
```

O segundo comando recebe o texto produzido pelo primeiro e mostra somente a linha correspondente.

## Conecte mais de dois comandos

Você também pode usar mais de um pipe na mesma linha.

Por exemplo:

```bash
ls -la | grep ".md" | sort
```

A leitura da esquerda para a direita fica:

1. liste os itens;
2. mantenha as linhas que contêm `.md`;
3. ordene o resultado.

Não é necessário começar com cadeias longas. Para aprender, dois comandos já são suficientes. Acrescente uma etapa por vez e confira o resultado.

## O que significa >

O operador `>` não é um pipe. Ele é um **redirecionamento de saída**.

Este comando cria um arquivo de teste:

```bash
printf "Meu primeiro arquivo\n" > exemplo.txt
```

Se `exemplo.txt` já existir, o conteúdo anterior será substituído. Esse detalhe é importante: `>` pode sobrescrever arquivos.

Confira o resultado com:

```bash
cat exemplo.txt
```

Antes de usar `>` com um arquivo importante, confirme o nome e o caminho.

## O que significa >>

O operador `>>` acrescenta conteúdo ao final de um arquivo sem apagar o que já estava lá.

```bash
printf "Segunda linha\n" >> exemplo.txt
```

Agora confira novamente:

```bash
cat exemplo.txt
```

A diferença principal é:

- `>` cria ou substitui o conteúdo do arquivo;
- `>>` acrescenta conteúdo ao final.

Uma forma simples de lembrar é pensar que o segundo símbolo em `>>` representa a ideia de **continuar acrescentando**.

## Combine pipe e redirecionamento

Você também pode combinar as duas ideias:

```bash
ls -la | grep ".md" > arquivos-markdown.txt
```

A sequência é:

1. `ls -la` lista os itens;
2. `grep ".md"` filtra linhas contendo `.md`;
3. `>` grava o resultado em `arquivos-markdown.txt`.

Depois, leia o arquivo:

```bash
cat arquivos-markdown.txt
```

Aqui existe uma diferença importante: o pipe conecta **comandos**, enquanto o redirecionamento envia a saída para um **arquivo**.

## Faça um teste seguro

Crie um diretório separado:

```bash
mkdir pratica-pipe
cd pratica-pipe
```

Crie um arquivo de exemplo:

```bash
printf "linux\nterminal\nseguranca\n" > palavras.txt
```

Agora filtre apenas a palavra `linux` e salve o resultado:

```bash
cat palavras.txt | grep linux > resultado.txt
```

Confira:

```bash
cat resultado.txt
```

Esse exercício permite observar pipe e redirecionamento sem trabalhar com arquivos pessoais.

## Confira antes de sobrescrever

Quando um comando usa `>`, pergunte:

- esse arquivo já existe?
- eu posso substituir o conteúdo atual?
- estou no diretório correto?
- o nome do arquivo está certo?

Use:

```bash
pwd
ls -la
```

antes de gravar em um arquivo quando houver dúvida.

Esse pequeno hábito evita muitos erros.

## Próximo passo

Agora você já conhece a ideia de combinar comandos e direcionar resultados. Isso abre caminho para usar o terminal de forma mais prática sem transformar tudo em comandos longos e difíceis de entender.

Se quiser revisar a base, volte para [Comandos Linux para quem está começando](/blog/comandos-linux-para-iniciantes/) e [Permissões no Linux sem mistério](/blog/permissoes-linux-para-iniciantes/).

Para seguir a sequência completa, acompanhe a [trilha gratuita Linux do Zero](/trilhas/linux-do-zero/). Depois dela, o [e-book Linux do Zero](/produtos/linux-do-zero/) reúne o conteúdo em uma jornada mais completa, incluindo instalação, terminal, permissões e solução de problemas.
