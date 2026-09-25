---
title: "Como criar seu primeiro site com HTML e CSS"
description: "Crie seu primeiro site com HTML e CSS, organize os arquivos, abra a página no navegador e faça pequenas melhorias entendendo cada etapa."
publishedAt: 2026-09-15
updatedAt: 2026-09-25
category: programacao
type: tutorial
readingTime: 12
difficulty: iniciante
featured: false
draft: false
tags: [html, css, projeto, frontend]
---

Seu primeiro site não precisa ser grande. O objetivo é sair da teoria com uma página pequena que você entende por inteiro.

Se HTML e CSS ainda parecem a mesma coisa, leia primeiro [HTML, CSS e JavaScript: entenda a diferença](/blog/html-css-javascript-entenda-diferenca/).

## Crie a pasta do projeto

Comece com uma pasta chamada `meu-primeiro-site`.

Dentro dela, crie dois arquivos:

```text
meu-primeiro-site/
├── index.html
└── style.css
```

O arquivo `index.html` será a página. O `style.css` guardará as regras visuais.

## Escreva o HTML

No `index.html`, use esta estrutura:

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

Salve o arquivo.

## Abra no navegador

Agora abra o `index.html` no navegador.

Você deve enxergar:

- o título “Olá, web!”;
- o parágrafo;
- o link.

Nesse momento, a página ainda terá aparência simples. Isso é esperado.

O primeiro objetivo é provar que o HTML está sendo interpretado corretamente.

## Entenda as partes principais

Alguns elementos merecem atenção:

- `<!doctype html>` indica um documento HTML moderno;
- `<html lang="pt-BR">` informa o idioma;
- `<head>` guarda metadados;
- `<body>` contém o conteúdo visível;
- `<main>` identifica o conteúdo principal;
- `<h1>` é o título principal.

Você não precisa decorar cada detalhe agora. Apenas comece a reconhecer a estrutura.

## Conecte o CSS

Esta linha do HTML:

```html
<link rel="stylesheet" href="style.css" />
```

diz ao navegador para carregar o arquivo `style.css`.

Se o nome ou caminho estiver errado, o HTML ainda aparece, mas os estilos não serão aplicados.

## Adicione o CSS

No `style.css`, escreva:

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

h1 {
  margin-bottom: 1rem;
}
```

Salve e recarregue a página.

Agora você consegue observar claramente a separação entre estrutura e apresentação.

## Faça uma alteração e observe

Mude temporariamente:

```css
main {
  width: min(560px, 90%);
  margin: 4rem auto;
}
```

Recarregue a página e veja a diferença.

Depois teste outro valor.

Esse processo de **alterar → salvar → recarregar → observar** é uma das formas mais simples de aprender frontend.

## Adicione uma nova seção

No HTML, abaixo do primeiro parágrafo, acrescente:

```html
<section>
  <h2>O que estou aprendendo</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>
```

Agora sua página já possui uma pequena hierarquia de conteúdo.

## Teste em uma janela estreita

Reduza a largura do navegador.

Como usamos:

```css
width: min(720px, 90%);
```

o conteúdo consegue se adaptar a janelas menores.

Isso já introduz uma ideia importante de responsividade: a página precisa funcionar em diferentes larguras.

## Erros comuns no começo

Se algo não funcionar, confira:

- o arquivo foi salvo?
- o nome está exatamente como `style.css`?
- o `href` do `<link>` está correto?
- alguma tag foi aberta e não fechada?
- você está editando o mesmo arquivo que abriu no navegador?

Essas verificações simples resolvem muitos problemas iniciais.

## Faça uma melhoria por vez

Depois que a base funcionar:

1. adicione uma segunda seção;
2. crie uma lista;
3. ajuste espaçamentos;
4. altere o tamanho do título;
5. experimente um link interno;
6. teste novamente em tela estreita.

Evite copiar um layout inteiro sem entender. Pequenas mudanças ajudam a perceber causa e efeito.

## O que você deve conseguir explicar

Ao terminar, responda:

- por que existe um `index.html`;
- como o CSS é conectado ao HTML;
- o que muda quando você altera uma regra CSS;
- quais partes são conteúdo;
- quais partes são apresentação.

Se essas respostas estiverem claras, o projeto cumpriu seu papel.

## Próximo passo

Agora adicione lógica aprendendo [JavaScript para iniciantes: variáveis, condições e funções](/blog/javascript-variaveis-funcoes/).

Depois, registre a evolução desse projeto com [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/).

A sequência completa está na [trilha Primeiros passos na programação](/trilhas/primeiros-passos-programacao/).
