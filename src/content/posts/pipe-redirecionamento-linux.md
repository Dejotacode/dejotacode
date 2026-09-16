---
title: "Pipe e redirecionamento no Linux: entenda |, > e >>"
description: "Aprenda como conectar comandos e redirecionar saídas no terminal Linux com exemplos simples e seguros."
publishedAt: 2026-09-16
category: linux-seguranca
type: tutorial
readingTime: 9
difficulty: iniciante
featured: false
draft: false
tags: ["linux", "terminal", "pipe", "redirecionamento"]
---

Quando você começa a usar o terminal, é comum executar um comando por vez. Depois, descobre que pode conectar comandos e direcionar resultados sem precisar copiar e colar tudo manualmente.

Antes de continuar, vale conhecer os [comandos Linux básicos](/blog/comandos-linux-para-iniciantes/). Neste tutorial, vamos usar exemplos que apenas leem ou criam arquivos de teste.

## O que é um pipe no Linux?

O caractere `|` é chamado de **pipe**. Ele pega a saída de um comando e entrega essa saída como entrada para outro comando.

Um exemplo simples:

```bash
ls | sort
```

O `ls` lista os itens do diretório. Em vez de mostrar o resultado diretamente, o pipe envia a lista para `sort`, que organiza as linhas.

Você pode ler essa sequência assim:

**liste os arquivos → envie a lista → ordene o resultado.**

## Pipe não significa "executar automaticamente"

O pipe não transforma um texto copiado de um site em um comando executado no seu computador. Ele funciona **dentro do terminal**, conectando processos que você decidiu executar.

Por isso, o botão **Copiar comando** do DejotaCode apenas coloca o comando na área de transferência. Você ainda pode revisar o conteúdo antes de colar e pressionar Enter no terminal.

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

## Combine pipe e redirecionamento

Você também pode combinar as duas ideias. Por exemplo:

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

## Use um diretório de prática

Para experimentar sem misturar arquivos pessoais, crie um diretório separado:

```bash
mkdir pratica-pipe
cd pratica-pipe
```

Faça os exemplos dentro dele e, quando terminar, verifique onde está antes de remover qualquer coisa:

```bash
pwd
ls -la
```

Evite transformar comandos de remoção em hábito de copiar e executar sem conferir o caminho atual.

## Próximo passo

Quando pipe e redirecionamento começarem a fazer sentido, o terminal deixa de parecer uma coleção de comandos isolados e passa a funcionar como pequenas peças que você combina.

Continue praticando com [comandos Linux para iniciantes](/blog/comandos-linux-para-iniciantes/) e entenda também [permissões no Linux](/blog/permissoes-linux-para-iniciantes/) antes de trabalhar com arquivos importantes.
