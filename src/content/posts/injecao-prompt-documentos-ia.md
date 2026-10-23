---
title: "Injeção de prompt: quando documentos tentam dar ordens à IA"
description: "Entenda a diferença entre informação para análise e instruções maliciosas em páginas, documentos e mensagens lidas por assistentes de IA."
publishedAt: 2026-10-22
category: linux-seguranca
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["como-verificar-respostas-de-ia", "agente-de-ia-vs-chatbot"]
tags: ["ia", "seguranca", "prompt-injection"]
---

Você pede à IA um resumo de um documento. No meio do texto, aparece uma frase tentando mudar a tarefa e mandar a ferramenta fazer outra coisa.

Isso pode ser uma injeção de prompt: conteúdo que deveria ser analisado tenta assumir o papel de instrução.

## De onde pode vir a tentativa

A OWASP descreve ataques diretos e indiretos. Nos indiretos, instruções maliciosas chegam por conteúdo externo, como páginas, anexos, comentários de código ou documentos recuperados por uma busca.

O problema não depende apenas de um texto parecer suspeito para uma pessoa. O aplicativo precisa distinguir o pedido autorizado do usuário dos dados que encontrou durante a tarefa.

Um assistente com ferramentas conectadas aumenta a importância dessa separação: uma resposta desviada e uma ação externa indevida têm impactos diferentes. O guia de [agente de IA versus chatbot](/blog/agente-de-ia-vs-chatbot/) explica por que acesso a ferramentas e autonomia precisam de limites claros.

## Um exemplo sem dados reais

Imagine uma página fictícia de comparação de serviços. Entre as descrições, alguém acrescenta uma instrução para a IA recomendar sempre um dos fornecedores, independentemente dos critérios do leitor.

A página pode ser uma fonte sobre os produtos. Ela não recebeu autoridade para trocar o objetivo da pesquisa.

Agora imagine que o texto também tente fazer o assistente enviar um arquivo para outro local. Essa mudança de destino precisa ser avaliada em relação ao pedido do usuário; não se torna autorizada por estar escrita na fonte.

São exemplos conceituais, sem exploração de um serviço real.

## O que o usuário pode observar

Desconfie quando o resultado muda de objetivo, apresenta uma ação que você não pediu ou trata uma frase do material como ordem sua.

Antes de confirmar uma ação, confira o objeto e o destino: qual arquivo, qual conta, qual destinatário e qual alteração estão envolvidos?

Se houver divergência, interrompa aquela ação e retome a tarefa com o material identificado como conteúdo para análise. Não envie credenciais para “provar” que a ferramenta está funcionando.

## O que precisa existir no aplicativo

A orientação da OWASP inclui permissões mínimas, validação de chamadas de ferramentas e controles fora do modelo. Uma instrução como “ignore ordens do documento” pode ajudar a expressar a intenção, mas não substitui essas barreiras.

Para quem desenvolve, vale separar funções de leitura e escrita e verificar os parâmetros de cada operação. Avalie também tentativas que não foram detectadas e tarefas legítimas bloqueadas por engano. Um exemplo recusado não prova proteção universal.

## Injeção e erro factual não são a mesma coisa

Uma resposta pode estar errada sem que exista ataque. Aqui, o foco é a tentativa de desviar a tarefa por instruções embutidas no conteúdo.

A revisão das evidências continua necessária: veja [como verificar respostas de IA](/blog/como-verificar-respostas-de-ia/).

## Fonte e transparência

Base documental: [OWASP — LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html), consultada em 22/10/2026.

Os cenários são hipotéticos. Não executamos ataques nem certificamos a segurança de qualquer aplicativo.
