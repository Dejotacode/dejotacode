---
title: "Imagens no site: desempenho, recorte e acessibilidade"
description: "Confira dimensões, compressão e carregamento das imagens antes de trocar qualidade visual por uma nota de desempenho."
publishedAt: 2026-10-22
category: programacao
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["devtools-navegador-iniciantes", "primeiro-site-html-css"]
tags: ["imagens", "desempenho", "web"]
---

Uma imagem pode parecer pequena na página e ainda transferir um arquivo muito maior do que o necessário. Também pode carregar rápido depois de uma compressão que tornou o assunto ilegível.

A otimização precisa considerar o arquivo, o espaço ocupado e o papel da imagem no conteúdo.

## Confira o tamanho entregue

Anote as dimensões do original, o tamanho em bytes e a largura em que a imagem aparece. Faça isso para a capa e para imagens internas, não apenas para o primeiro arquivo encontrado.

A documentação web.dev descreve imagens responsivas e o uso de srcset e sizes para informar opções de arquivo e seu uso ao navegador.

Ter versões diferentes exige que a página as declare corretamente. Essa declaração faz parte do HTML da imagem; o guia de [primeiro site com HTML e CSS](/blog/primeiro-site-html-css/) ajuda a distinguir conteúdo da página e apresentação visual. Criar três arquivos sem integrá-los não muda o que o visitante baixa.

## Compare a qualidade no uso real

Experimente dimensões e compressão adequadas ao conteúdo. Fotos, diagramas e capturas com texto podem precisar de escolhas distintas.

Confira detalhes importantes e recortes em telas diferentes. Se a imagem mostra um produto, não corte a característica que o texto explica. Se contém uma assinatura, preserve sua visibilidade sem esconder o assunto.

Um formato moderno pode ajudar, mas a extensão do arquivo não demonstra sozinha que o resultado ficou leve ou legível.

## Carregue primeiro o que é necessário primeiro

O carregamento adiado pode ser útil para imagens fora da área inicial. A orientação web.dev é evitar lazy loading na imagem principal que precisa aparecer cedo, especialmente quando ela é o elemento de LCP.

Declarar width e height ajuda o navegador a reservar a proporção da imagem. Confira também o espaço ocupado durante o carregamento para reduzir deslocamentos inesperados.

Não aplique prioridade alta a todas as imagens: a decisão deve refletir o conteúdo que precisa aparecer primeiro.

## Meça depois da alteração

Compare a mesma página em condições semelhantes. Observe os arquivos efetivamente solicitados e o tamanho transferido, além do comportamento visual.

Uma nota isolada de laboratório não representa todos os dispositivos e conexões. Registre o que mudou, qual cenário foi usado e o que continua sem verificação.

O [DevTools do navegador](/blog/devtools-navegador-iniciantes/) pode ajudar a observar solicitações e elementos. Este artigo não apresenta uma medição executada no site.

## Preserve o significado

Texto alternativo e legenda têm funções de comunicação. A árvore de decisão da W3C WAI orienta descrever a contribuição das imagens informativas e usar `alt=` quando uma imagem for puramente decorativa. Em gráficos complexos, disponibilize a informação também no texto da página.

O contexto determina a escolha: não escreva o mesmo texto genérico em todas as imagens nem repita palavras-chave sem relação com o que elas comunicam. Não remova uma explicação necessária apenas para simplificar o layout.

A entrega está melhor quando o navegador recebe uma opção adequada e o leitor continua entendendo a imagem.

## Fontes e transparência

Consultadas em 22/10/2026:

- [web.dev — Key performance issues](https://web.dev/learn/images/performance-issues)
- [web.dev — Descriptive syntaxes](https://web.dev/learn/images/descriptive)
- [web.dev — Browser-level image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading)
- [W3C WAI — Árvore de decisão para o atributo alt](https://www.w3.org/WAI/tutorials/images/decision-tree/)

Pesquisa documental, sem promessa de nota, ganho percentual ou alteração das imagens publicadas.
