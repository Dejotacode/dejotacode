---
title: "Sincronização não é backup: limites do Syncthing"
description: "Entenda por que sincronizar arquivos entre dispositivos não basta para recuperar versões antigas e como avaliar o versionamento no Syncthing."
publishedAt: 2026-10-22
category: tecnologia-pratica
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["habitos-seguranca-digital-iniciantes", "documentar-aprendizado-tecnologia"]
tags: ["backup", "syncthing", "arquivos"]
---

Você salva um documento no computador e ele aparece no notebook. Parece que o arquivo ficou protegido porque agora existe em dois lugares. Mas o que acontece se você apagar a pasta errada?

Essa é a diferença que importa: ter os dispositivos atualizados e conseguir voltar a um estado anterior são necessidades distintas.

## O que o Syncthing replica

Segundo a documentação do Syncthing, a sincronização propaga criação, modificação e exclusão de arquivos entre dispositivos. O aplicativo troca dados entre suas máquinas, em vez de oferecer um depósito próprio de arquivos na nuvem.

Portanto, no uso comum com sincronização nos dois sentidos, uma exclusão pode chegar ao outro computador. Estar offline adia a troca; não transforma automaticamente aquele dispositivo em arquivo permanente.

Imagine uma planilha apagada por engano no PC A. Se a alteração chegar ao PC B e nenhuma cópia anterior tiver sido preservada, encontrar a mesma pasta nos dois computadores não resolve a recuperação.

## O versionamento ajuda, mas precisa ser configurado

O Syncthing oferece estratégias para guardar versões substituídas ou apagadas por alterações recebidas de outro dispositivo. A configuração é por pasta e por dispositivo; o padrão não mantém versões antigas.

Há um limite importante: o versionamento de uma máquina não arquiva a versão anterior de uma edição feita localmente nela. Por isso, dizer apenas “ativei o histórico” deixa perguntas abertas sobre onde e quais mudanças ficam protegidas.

Confira a estratégia, a retenção e o local das versões em cada dispositivo relevante.

## Três situações para avaliar seu plano

| Situação | Pergunta que você precisa responder |
|---|---|
| Apaguei uma pasta por engano | Onde existe uma versão anterior à exclusão? |
| Editei o arquivo errado | Qual dispositivo guardou o conteúdo antigo? |
| Perdi os dois computadores | Existe uma cópia fora desses equipamentos? |

São cenários de planejamento, não resultados de testes deste artigo.

Uma cópia independente, com histórico adequado à sua necessidade, pode complementar a sincronização. Essa separação aprofunda o cuidado com arquivos apresentado em [hábitos de segurança digital](/blog/habitos-seguranca-digital-iniciantes/). O ponto é evitar que a mesma ação que estraga o original também elimine a única alternativa.

## Confira com dados fictícios

Se quiser aprender o comportamento, use uma pasta de teste separada. Crie um arquivo sem informação importante, observe a sincronização e confira como a estratégia de versões escolhida responde a uma alteração recebida.

Não faça o primeiro experimento na pasta dos seus documentos. Registre o que conseguiu recuperar e em qual dispositivo, sem concluir que um caso cobre todos os acidentes possíveis. O guia de [como documentar o aprendizado em tecnologia](/blog/documentar-aprendizado-tecnologia/) ajuda a separar configuração, ação e resultado observado.

## Qual papel dar à ferramenta

Use a sincronização para trabalhar com arquivos em mais de um lugar. Defina a recuperação como uma tarefa própria: escolher o momento, localizar a cópia e verificar o conteúdo restaurado.

Para estruturar essa segunda parte, veja [como conferir se seu backup pode ser recuperado](/blog/como-testar-recuperacao-backup/).

## Fontes e transparência

Pesquisa documental consultada em 22/10/2026:

- [Syncthing — FAQ](https://docs.syncthing.net/users/faq.html)
- [Syncthing — File Versioning](https://docs.syncthing.net/users/versioning.html)

Os exemplos são hipotéticos. Não instalamos nem testamos o Syncthing para produzir este texto. Nenhum vínculo comercial ou resultado de recuperação é alegado.
