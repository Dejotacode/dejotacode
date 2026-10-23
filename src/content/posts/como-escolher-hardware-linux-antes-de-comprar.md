---
title: "Como escolher hardware para Linux antes de comprar"
description: "Um checklist para conferir modelo exato, compatibilidade, certificação e tarefas reais antes de comprar computador ou periférico para Linux."
publishedAt: 2026-10-22
category: linux-seguranca
type: artigo
readingTime: 5
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["como-testar-linux-sem-instalar", "como-escolher-distribuicao-linux"]
tags: [linux, hardware, compatibilidade, compra, tecnologia]
---

Um anúncio com processador rápido e muita memória não responde à pergunta mais importante para quem usa Linux: **o equipamento atende às minhas tarefas no sistema que pretendo usar?**

Antes de comprar computador ou periférico, organize a pesquisa pelo modelo exato, pelas funções necessárias e pelas evidências disponíveis. Este guia apresenta um método de avaliação, sem recomendar modelos ou alegar testes próprios.

## Primeiro, escreva o que precisa funcionar

Uma compra começa pelas tarefas. Faça uma lista curta:

- conectar à rede sem fio;
- participar de chamadas com câmera e microfone;
- usar monitor externo na resolução desejada;
- conectar seus dispositivos USB;
- executar os programas de trabalho;
- suspender e retomar o computador conforme sua rotina.

Para docks e monitores, separe [conector USB-C e capacidades de carga, dados e vídeo](/blog/usb-c-carga-dados-video-diferencas/). Para chamadas, confira também a [mudança de áudio ao ativar o microfone Bluetooth](/blog/audio-bluetooth-muda-ligar-microfone/). Esses guias ajudam a formular o teste, sem substituir a verificação do modelo no Linux.

Para cada item indispensável, procure comprovação específica. Não transforme uma característica secundária do anúncio em prioridade só porque ela aparece em destaque.

## Peça a identificação completa

Antes de pesquisar compatibilidade, registre:

| Compra | Informação a solicitar |
| --- | --- |
| Notebook ou desktop | Modelo completo, código da configuração e componentes relevantes |
| Adaptador de rede | Modelo, revisão e identificação do chipset quando disponível |
| Monitor ou dock | Modelo, conexões e modos de uso pretendidos |
| Impressora ou scanner | Modelo completo e documentação para o sistema |
| Áudio ou webcam | Modelo e funções necessárias nos aplicativos usados |

Use esses dados ao consultar o fabricante ou procurar relatos. Se o vendedor não informa a configuração, trate a informação como pendente em vez de completar por suposição.

## Consulte certificações, quando existirem

A Canonical mantém um [catálogo de hardware certificado para Ubuntu](https://ubuntu.com/certified). O programa inclui testes de áreas como áudio, rede, Bluetooth, USB e gerenciamento de energia.

Use o registro para conferir equipamento, configuração e versão documentados. Ele é uma evidência para a avaliação, não uma autorização para generalizar o resultado a qualquer produto da marca.

Também não interprete a ausência no catálogo como prova automática de incompatibilidade. Nessa situação, busque outras evidências e mantenha explícito o que ainda não foi verificado.

Se pretende usar outra distribuição, procure a documentação correspondente. Uma informação sobre Ubuntu não deve virar garantia para toda configuração Linux.

## Avalie a qualidade dos relatos

Um comentário como “funcionou aqui” pode ajudar, mas deixa perguntas abertas. Dê preferência a registros que informem:

- modelo e configuração;
- distribuição e versão;
- função efetivamente testada;
- ajustes necessários;
- limitações encontradas;
- data da verificação.

Por exemplo, “conectou ao Wi-Fi” responde a uma necessidade diferente de “retomou a conexão depois de suspender”. Defina qual situação importa para sua rotina.

Não escolha apenas pelo número de comentários positivos. Procure os detalhes que permitem comparar o relato ao seu caso.

## Se puder experimentar, use uma lista de verificação

A documentação oficial do Ubuntu apresenta o modo de experimentação como forma de conferir o hardware antes da instalação.

Há um limite importante: a prévia usa drivers de código aberto. A própria documentação informa que drivers proprietários, como os necessários para determinados equipamentos NVIDIA, não estão disponíveis nesse ambiente.

Portanto, um resultado na sessão de teste precisa ser interpretado nesse contexto. Não é uma conclusão sobre todas as possibilidades da instalação definitiva.

O passo a passo já está em [Como testar Linux sem instalar](/blog/como-testar-linux-sem-instalar/). Aqui, o objetivo é usar o teste como evidência de compra, sem repetir o tutorial.

## Não confunda compatibilidade com desempenho

Conseguir iniciar o sistema não demonstra que ele atende ao trabalho pretendido.

Se você precisa editar vídeo, desenvolver software ou usar muitas aplicações, procure testes que descrevam essa carga. Registre também o que você considera aceitável: tempo de resposta, capacidade de armazenamento ou fluidez em determinada tarefa.

Não há neste guia benchmark, quantidade universal de memória ou marca considerada sempre melhor. A escolha depende do uso e do orçamento real.

## Organize a decisão em três estados

Antes de fechar o pedido, classifique cada requisito:

| Estado | Como usar |
| --- | --- |
| Confirmado | Há documentação ou teste que corresponde ao seu caso |
| Pendente | Falta identificar componente, versão ou comportamento |
| Não atende | Existe uma limitação incompatível com sua necessidade |

Se um requisito essencial continua pendente, tente esclarecer com o fabricante ou vendedor. Confira também as condições de devolução e atendimento da oferta específica.

Essa tabela ajuda a distinguir uma compra documentada de uma aposta baseada no anúncio.

## Onde entra a escolha da distribuição?

Se ainda não definiu o sistema, leia [Como escolher uma distribuição Linux](/blog/como-escolher-distribuicao-linux/).

Os assuntos se complementam: aquele artigo ajuda a escolher o sistema; este organiza a conferência do equipamento antes da compra.

## Transparência da DejotaCode

Este é um guia de pesquisa documental. Não certificamos equipamentos, não testamos os modelos de um catálogo e não garantimos compatibilidade universal.

Nenhum produto ou link afiliado foi incluído. Uma eventual indicação comercial precisa passar pela mesma verificação de modelo, evidências e condições da oferta.

## Fontes

Consultadas em 22/10/2026:

- [Canonical — hardware certificado para Ubuntu](https://ubuntu.com/certified).
- [Ubuntu — experimentar o Desktop e limites dos drivers da prévia](https://ubuntu.com/desktop/docs/en/latest/tutorial/try-ubuntu-desktop/).
