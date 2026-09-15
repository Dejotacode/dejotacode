---
title: "Como criar seu primeiro site com HTML e CSS"
description: "Monte uma página simples do zero, organize os arquivos e entenda o que cada parte faz antes de adicionar ferramentas extras."
publishedAt: 2026-09-15
category: programacao
type: tutorial
readingTime: 10
difficulty: iniciante
featured: false
draft: false
tags: [html, css, projeto, frontend]
---

Seu primeiro site não precisa ser grande. O objetivo é sair da teoria com uma página pequena que você entende por inteiro.

## Crie a pasta do projeto

Comece com uma pasta chamada `meu-primeiro-site` e dois arquivos:

```text
meu-primeiro-site/
├── index.html
└── style.css
```

## Escreva o HTML

No `index.html`, use uma estrutura mínima:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Meu primeiro site</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <h1>Olá, web!</h1>
      <p>Esta é minha primeira página.</p>
      <a href="https://developer.mozilla.org/">Continuar estudando</a>
    </main>
  </body>
</html>
```

Abra o arquivo no navegador e confirme que o conteúdo aparece.

## Adicione o CSS

No `style.css`:

```css
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  line-height: 1.6;
}

main {
  width: min(720px, 90%);
  margin: 4rem auto;
}
```

Recarregue a página. Agora você consegue observar claramente a separação entre estrutura e apresentação.

## Faça uma melhoria por vez

Em vez de copiar um layout inteiro, escolha pequenas mudanças:

1. adicione uma lista com três coisas que você está aprendendo;
2. crie uma segunda seção;
3. ajuste espaçamento e tamanho do título;
4. teste a página em uma janela estreita;
5. coloque o projeto sob controle de versão com Git.

## O que você deve conseguir explicar

Ao terminar, responda:

- por que existe um `index.html`;
- como o CSS é conectado ao HTML;
- o que muda quando você altera uma regra CSS;
- quais partes são conteúdo e quais são apresentação.

Se essas respostas estiverem claras, o projeto cumpriu seu papel. O próximo passo é aprender os [fundamentos de JavaScript](/blog/javascript-variaveis-funcoes/) e registrar sua evolução com [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/).