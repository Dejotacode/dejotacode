---
title: "Como escolher seu primeiro projeto de portfólio"
description: "Um método direto para transformar uma ideia pequena em um projeto concluído e fácil de apresentar."
publishedAt: 2026-09-05
updatedAt: 2026-10-22
category: programacao
type: artigo
readingTime: 6
difficulty: iniciante
featured: false
draft: false
tags: [portfólio, carreira, projetos]
---

O melhor primeiro projeto não é o mais complexo. É aquele que você consegue terminar, explicar e melhorar.

## Comece por um problema conhecido

Observe tarefas repetitivas do seu dia. Uma lista de estudos, um catálogo pessoal ou um controle simples de gastos já oferecem decisões reais de projeto.

## Reduza o tamanho da primeira versão

Escreva as três funções indispensáveis. Todo o restante pode ficar para uma segunda versão. Esse limite ajuda você a chegar ao resultado final.

## Registre as suas decisões

No README, explique o problema, a solução escolhida, como executar o projeto e o que você aprendeu. Essa explicação mostra mais do que uma lista de tecnologias. Se você ainda está começando com versionamento, veja também a diferença entre [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/).


## Compare as ideias antes de escolher

Uma ideia pode parecer pequena e ainda depender de conhecimentos que você não estudou. Antes de começar, responda a três perguntas: quem vai usar, qual tarefa será resolvida e como você vai perceber que a primeira versão ficou pronta?

Compare estas possibilidades:

- **Página pessoal:** apresentar seu nome, um projeto e uma forma de contato. Boa opção para praticar HTML e CSS.
- **Catálogo de referências:** mostrar materiais de estudo e permitir filtrar por assunto. Acrescenta uma interação pequena com JavaScript.
- **Sistema de agendamentos:** controlar usuários, horários e conflitos. Exige decisões de dados e regras que podem ampliar demais uma primeira versão.

Não existe obrigação de começar pela ideia com mais funções. Escolha uma cuja primeira entrega você consiga descrever em uma frase. Se não souber por onde executar uma função essencial, reduza essa função ou pratique o conceito em um exercício separado.

## Exemplo: um catálogo pessoal de referências

O exemplo a seguir é **didático**: uma proposta para você adaptar, não um projeto executado ou um resultado de cliente da DejotaCode.

**Problema:** materiais de estudo ficam espalhados em várias abas, e você não encontra rapidamente uma referência de HTML, CSS ou JavaScript.

**Usuário da primeira versão:** você mesmo. Começar por uso pessoal permite observar o problema sem inventar necessidades de uma empresa.

**Três funções da versão inicial:**

1. Exibir referências com título, assunto e link.
2. Filtrar a lista por HTML, CSS ou JavaScript.
3. Abrir a referência escolhida no endereço correto.

Deixe login, banco de dados, pagamentos, painel administrativo e sugestões automáticas fora desta versão. Você pode manter os dados em uma lista no próprio projeto. Isso reduz dependências e deixa o exercício concentrado em estrutura, apresentação e uma interação.

### Transforme a ideia em tarefas pequenas

Comece com seis referências selecionadas por você. Prefira materiais que realmente pretende consultar; não é necessário preencher uma lista enorme para a página parecer completa.

Organize a execução nesta ordem:

1. Escreva os títulos, assuntos e destinos em uma lista de planejamento.
2. Monte a estrutura da página com um título principal e uma lista de referências.
3. Aplique CSS para tornar o conteúdo legível no celular e no computador.
4. Faça o filtro funcionar com JavaScript.
5. Mostre uma mensagem quando o filtro não encontrar referências.
6. Revise links e navegação por teclado.
7. Registre como abrir o projeto e quais funções ficaram para depois.

Se a estrutura HTML ainda exigir ajuda constante, termine a lista estática antes de acrescentar o filtro. Uma primeira entrega menor continua válida. Para praticar a base, use o tutorial do [primeiro site com HTML e CSS](/blog/primeiro-site-html-css/).

### Defina o que significa “pronto”

Uma lista de tarefas diz o que fazer. Os critérios de conclusão dizem o que conferir depois:

- Todas as referências têm título e destino identificáveis.
- O filtro mostra somente os assuntos escolhidos e permite voltar à lista completa.
- Um resultado vazio apresenta uma explicação em vez de uma área em branco.
- Os links abrem as referências esperadas.
- Você consegue usar os controles pelo teclado e perceber onde está o foco.
- A página continua legível em tela estreita.
- Outra pessoa consegue abrir o projeto seguindo o README.

Esses critérios são mais úteis do que “ficou bonito” porque permitem encontrar pendências específicas. Se o filtro não funciona, você sabe qual tarefa revisar sem redesenhar a página inteira.

## Um README preenchido como ponto de partida

Adapte este modelo à implementação que você realmente entregar. Não marque como concluído o que ainda não funciona.

```text
# Catálogo pessoal de referências

Objetivo
Reunir materiais de HTML, CSS e JavaScript em uma página filtrável.

Escopo da primeira versão
- Lista de referências com título, assunto e link.
- Filtro por assunto.
- Mensagem quando não houver resultado.

Como abrir
Este exemplo considera arquivos estáticos sem etapa de instalação.
Baixe a pasta e abra index.html no navegador.
Se sua implementação exigir um servidor, substitua esta instrução
pelo comando que você verificou no seu ambiente.

Decisões
Os dados ficam em uma lista local para evitar um backend nesta versão.

Limitações
Não permite editar referências pela interface e não sincroniza dados.

Verificação
Preencher após conferir filtros, links, teclado e tela estreita.

Aprendizado
Descrever uma dificuldade real e como ela foi investigada.
```

O README não precisa parecer documentação de um produto comercial. Ele precisa corresponder ao que existe. Se você seguiu um tutorial, dê o crédito e explique qual parte adaptou por conta própria.

## Apresente uma decisão, não apenas uma captura

Ao colocar o projeto no portfólio, explique a sequência **problema → escolha → resultado observado → limitação**. Por exemplo: manter a lista local reduziu o trabalho de infraestrutura, mas deixou a edição dependente de alterar o código.

Inclua uma captura do seu próprio projeto quando ele estiver pronto e descreva uma melhoria futura. Evite dizer que uma demonstração foi usada por clientes ou gerou resultados profissionais se isso não aconteceu.

Se ainda não tem clientes e quer decidir o que apresentar, veja [o que mostrar em um portfólio freelancer sem clientes](/blog/portfolio-para-freelancer-sem-clientes/). Aqui, o foco é escolher e terminar o projeto; naquele guia, é organizar sua apresentação.

## Publique e peça uma revisão

Uma versão pequena no ar é mais útil do que uma ideia grande inacabada. Compartilhe com alguém e transforme o retorno recebido em uma melhoria concreta.

Se ainda estiver montando sua base, siga a trilha [Primeiros passos na programação](/trilhas/primeiros-passos-programacao/) antes de ampliar o projeto. Para ver um exemplo de projeto apresentado com problema, decisões, arquitetura e aprendizados, consulte também o [case DejotaCode no portfólio](/portfolio/).
