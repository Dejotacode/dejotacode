---
title: "JavaScript para iniciantes: variáveis, condições e funções"
description: "Aprenda os blocos básicos de JavaScript com exemplos pequenos e entenda como transformar valores em comportamento."
publishedAt: 2026-09-15
category: programacao
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: [javascript, programacao, variaveis, funcoes]
---

Depois de HTML e CSS, JavaScript permite adicionar lógica à página. O melhor começo é aprender poucos blocos e combiná-los.

## Variáveis guardam valores

Use `const` quando a referência não precisa ser reatribuída e `let` quando ela pode mudar:

```js
const nome = "Dejota";
let pontos = 0;
```

Escolha nomes que expliquem o papel do valor. `totalPedidos` comunica mais do que `x`.

## Condições tomam decisões

Uma condição executa caminhos diferentes de acordo com um valor:

```js
const idade = 18;

if (idade >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso restrito");
}
```

A ideia importante não é decorar a sintaxe, mas formular a pergunta lógica que o programa precisa responder.

## Funções agrupam comportamento

Funções ajudam a dar nome a uma tarefa e reutilizá-la:

```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Dejota"));
```

Uma função costuma ficar mais fácil de testar e entender quando tem uma responsabilidade clara.

## Pratique no console

Abra as ferramentas de desenvolvimento do navegador e use o console para experimentar valores pequenos. Teste mudanças de tipo, comparações, arrays e funções antes de tentar construir uma interface inteira.

## Um exercício simples

Crie uma função `calcularProgresso(concluidas, total)` que devolva a porcentagem de tarefas concluídas. Depois trate o caso em que `total` seja zero.

Esse exercício força você a combinar parâmetros, cálculo, condição e retorno sem depender de framework.

## O próximo passo

Quando os fundamentos estiverem confortáveis, conecte JavaScript ao DOM: selecione um elemento, responda a um evento e altere um estado visível da página.

Se você ainda não criou uma página própria, volte ao tutorial do [primeiro site com HTML e CSS](/blog/primeiro-site-html-css/). Quando tiver algo funcionando, organize o histórico com [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/).