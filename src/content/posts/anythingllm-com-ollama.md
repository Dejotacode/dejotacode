---
title: "AnythingLLM com Ollama: como organizar um assistente de IA local"
description: "Veja como AnythingLLM e Ollama podem trabalhar juntos para criar um workspace local de IA com modelo separado por finalidade."
publishedAt: 2026-10-13
updatedAt: 2026-10-13
category: inteligencia-artificial
type: tutorial
readingTime: 4
difficulty: iniciante
featured: false
draft: false
tags: [anythingllm, ollama, ia local, produtividade]
---

Ollama executa o modelo. AnythingLLM fornece uma interface de trabalho que pode organizar conversas, workspaces e fontes de contexto.

A combinação permite manter um modelo local dedicado a uma função, como programação, sem transformar esse modelo no padrão de todas as tarefas.

## Fluxo básico

1. Instale e teste o Ollama.
2. Confirme que o modelo responde localmente.
3. Configure o Ollama como provedor no AnythingLLM.
4. Crie um workspace específico.
5. Defina instruções para o tipo de tarefa.
6. Teste com prompts pequenos antes de adicionar documentos.

## Configuração no AnythingLLM Desktop

Com o servidor Ollama funcionando na mesma máquina, escolha Ollama como provedor e informe `http://127.0.0.1:11434`. Selecione um modelo já baixado e salve a configuração. Crie o workspace e confira qual modelo ele usa; os nomes dos menus podem mudar entre versões.

Esse endereço vale para o Desktop no mesmo computador. Em Docker, `127.0.0.1` aponta para o contêiner, e a conexão com o host exige a configuração documentada para seu ambiente.

### Passo a passo para o Desktop no mesmo computador

Antes de abrir o workspace, confirme que o Ollama está ativo e que `ollama ls` lista o modelo pretendido. Faça uma chamada com `ollama run NOME_DO_MODELO` para separar problemas do servidor de problemas da interface.

1. Abra as configurações do AnythingLLM Desktop e encontre a seleção do provedor de linguagem.
2. Escolha Ollama e informe `http://127.0.0.1:11434` quando estiver usando as configurações locais padrão.
3. Selecione o identificador exato do modelo disponível e salve.
4. Crie um workspace com nome que indique sua finalidade, como “Programação — estudo”.
5. Confira a configuração de linguagem desse workspace. Se houver sobrescrita por workspace, selecione o modelo desejado; caso contrário, confira o padrão global que ele herda.
6. Acrescente uma instrução pequena, como “Responda em português; quando solicitado apenas código, entregue apenas código”.

Os nomes e a posição dos controles podem variar por versão. O ponto de conferência é o provedor, o endereço e o modelo efetivamente selecionados, não a reprodução de uma captura específica.

## Valide a integração antes de indexar arquivos

Envie uma pergunta curta e confira se a resposta veio do modelo selecionado. Depois teste uma instrução simples, como pedir apenas uma função de soma. Esse teste verifica conexão e comportamento básico, sem medir qualidade geral.

Se quiser conversar com documentos mantendo o fluxo local, confira também o provedor de embeddings, que transforma trechos em representações usadas na busca. Usar Ollama para a resposta não garante que a indexação também esteja local.

### Teste pequeno e resultado esperado

Envie “Escreva uma função JavaScript que some dois números. Responda apenas com o código”. Você espera uma resposta do modelo selecionado no formato solicitado; confira o código antes de usá-lo. Uma resposta fora do formato pode ser limitação do modelo ou das instruções, sem necessariamente indicar falha de conexão.

Para testar documentos, use primeiro um arquivo fictício curto com uma informação única. Confira o provedor de embeddings e conclua a etapa de disponibilizar o documento ao workspace. Depois pergunte sobre aquela informação e examine as referências apresentadas, quando disponíveis. Responder uma pergunta genérica não prova que o documento foi recuperado.

| Problema | Primeira conferência |
|---|---|
| Não conecta ao Ollama | Servidor ativo, endereço e ambiente Desktop/Docker |
| Modelo não aparece | Modelo baixado, nome exato e conexão com o servidor correto |
| Conversa funciona, documentos falham | Provedor de embeddings e preparação dos documentos |
| Resposta ignora contexto | Documento associado ao workspace e pergunta específica |
| Execução fica muito lenta | Modelo, contexto e memória disponível |

Não desative firewall ou exponha o servidor à rede como solução automática. Para uso local na mesma máquina, investigue primeiro endereço, processo e configuração.

## Por que separar workspaces

Um workspace de programação pode ter instruções diferentes de um workspace de pesquisa. Isso reduz mistura de contexto e facilita comparar modelos.

## Atenção a documentos privados

Antes de indexar arquivos, entenda onde o AnythingLLM armazena vetores, histórico e configurações. Uma solução local ainda precisa de política de backup e controle de acesso.

## Escopo deste tutorial

Este roteiro foi conferido na documentação oficial para orientar a configuração. As etapas e os resultados esperados servem para você validar sua instalação; não representam benchmark ou comprovação de execução no ambiente do DejotaCode.

Se precisar separar assistente de conversa e automação com ferramentas, leia [agente de IA versus chatbot](/blog/agente-de-ia-vs-chatbot/). Para organizar as fontes que usa no workspace, veja [Raindrop.io para desenvolvedores](/blog/raindrop-io-para-desenvolvedores/).

## Conteúdo relacionado

Leia também [IA local com Ollama](/blog/ia-local-com-ollama/).


## Referências desta revisão

Documentação consultada em 13/10/2026; recursos e condições podem mudar.

- [AnythingLLM: provedor Ollama](https://docs.anythingllm.com/setup/llm-configuration/local/ollama)
- [AnythingLLM: conexão Desktop e Docker](https://docs.anythingllm.com/ollama-connection-troubleshooting)
- [AnythingLLM: modelos de embeddings](https://docs.anythingllm.com/features/embedding-models)
- [AnythingLLM: uso de documentos](https://docs.anythingllm.com/chatting-with-documents/introduction)
