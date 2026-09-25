---
title: "JavaScript para iniciantes: variáveis, condições e funções"
description: "Aprenda variáveis, condições e funções em JavaScript com exemplos pequenos, prática no console e um exercício simples para juntar os conceitos."
publishedAt: 2026-09-15
updatedAt: 2026-09-25
category: programacao
type: tutorial
readingTime: 12
difficulty: iniciante
featured: false
draft: false
tags: [javascript, programacao, variaveis, funcoes]
---

Depois de HTML e CSS, JavaScript permite adicionar lógica à página.

O melhor começo não é tentar construir uma aplicação inteira. É aprender poucos blocos e entender como eles se combinam.

Se você ainda não criou uma página própria, volte ao tutorial [Como criar seu primeiro site com HTML e CSS](/blog/primeiro-site-html-css/).

## Onde praticar

Você pode começar usando o console das ferramentas de desenvolvimento do navegador.

Abra o DevTools, procure a aba **Console** e digite:

```js
2 + 2
```

O navegador deve mostrar:

```text
4
```

Isso já é JavaScript sendo executado.

## Variáveis guardam valores

Use `const` quando a referência não precisa ser reatribuída:

```js
const nome = "Dejota";
```

Use `let` quando o valor precisa mudar:

```js
let pontos = 0;
pontos = pontos + 1;
```

Escolha nomes que expliquem o papel do valor.

`totalPedidos` comunica mais do que `x`.

## Tipos de valores

JavaScript trabalha com diferentes tipos de dados.

Exemplos:

```js
const nome = "Ana";
const idade = 25;
const ativo = true;
```

Aqui temos:

- texto;
- número;
- valor booleano.

Você não precisa decorar todos os tipos agora. Comece reconhecendo que valores diferentes podem representar coisas diferentes no programa.

## Operadores permitem comparar

Você pode comparar valores:

```js
const idade = 18;

console.log(idade >= 18);
```

O resultado será `true`.

Comparações são importantes porque ajudam o programa a tomar decisões.

## Condições escolhem caminhos

Uma condição executa caminhos diferentes de acordo com um valor:

```js
const idade = 18;

if (idade >= 18) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso restrito");
}
```

A ideia principal não é decorar chaves e parênteses.

É formular a pergunta lógica:

**“Se esta condição for verdadeira, o que deve acontecer?”**

## Funções agrupam comportamento

Funções ajudam a dar nome a uma tarefa e reutilizá-la:

```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Dejota"));
```

A função recebe um valor chamado `nome` e devolve uma mensagem.

Uma função costuma ficar mais fácil de entender quando possui uma responsabilidade clara.

## Parâmetros e retorno

Veja outro exemplo:

```js
function somar(a, b) {
  return a + b;
}

const resultado = somar(4, 6);

console.log(resultado);
```

`a` e `b` são parâmetros.

`return` devolve o resultado para quem chamou a função.

## Junte os conceitos

Agora podemos combinar variável, condição e função:

```js
function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }

  return "Menor de idade";
}

const resultado = verificarMaioridade(20);

console.log(resultado);
```

Você já tem uma pequena lógica completa:

1. recebe um valor;
2. compara;
3. decide;
4. devolve uma resposta.

## Um exercício simples

Crie uma função:

```js
calcularProgresso(concluidas, total)
```

Ela deve devolver a porcentagem de tarefas concluídas.

Uma primeira versão:

```js
function calcularProgresso(concluidas, total) {
  return (concluidas / total) * 100;
}
```

Agora existe um problema: o que acontece se `total` for zero?

Podemos tratar esse caso:

```js
function calcularProgresso(concluidas, total) {
  if (total === 0) {
    return 0;
  }

  return (concluidas / total) * 100;
}
```

Esse exercício junta parâmetros, cálculo, condição e retorno.

## Erros fazem parte da prática

Se o console mostrar um erro, leia a mensagem antes de apagar tudo.

Pergunte:

- qual linha foi indicada?
- existe um nome digitado errado?
- faltou fechar algum parêntese?
- a variável existe naquele ponto?

Aprender programação também significa aprender a investigar erros pequenos.

## Evite frameworks cedo demais

Você pode construir projetos modernos com frameworks, mas eles não substituem fundamentos.

Se variáveis, condições, funções e eventos ainda parecem confusos, vale continuar praticando JavaScript puro por algum tempo.

Isso torna ferramentas maiores muito mais fáceis de entender depois.

## Próximo passo

Quando esses fundamentos estiverem confortáveis, comece a conectar JavaScript ao DOM: selecione um elemento, responda a um clique e altere algo visível na página.

E registre a evolução do projeto com [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/).

A sequência completa continua na [trilha Primeiros passos na programação](/trilhas/primeiros-passos-programacao/).
