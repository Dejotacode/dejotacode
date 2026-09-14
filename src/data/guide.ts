export interface GuideCard {
  number: string;
  title: string;
  description: string;
}

export interface GuideWeek {
  label: string;
  title: string;
  description: string;
}

export const guide = {
  meta: {
    title: "Guia do Iniciante em Tecnologia | DejotaCode",
    description:
      "Um caminho simples para sair do zero, organizar seus estudos e começar a construir projetos de verdade.",
    robots: "noindex, follow",
  },

  hero: {
    eyebrow: "GUIA DO INICIANTE EM TECNOLOGIA",
    title: "Um caminho simples para sair do zero sem se perder.",
    description:
      "Este guia foi criado para quem está começando em tecnologia e precisa de clareza para escolher o que aprender, organizar uma rotina possível e colocar o conhecimento em prática.",
  },

  beforeStart: {
    eyebrow: "ANTES DE COMEÇAR",
    title: "Você não precisa aprender tudo de uma vez.",
    description:
      "O objetivo deste material é ajudar você a encontrar um próximo passo claro, sem promessas fáceis e sem excesso de ferramentas.",
    cards: [
      {
        number: "01",
        title: "Defina seu primeiro objetivo",
        description:
          "Antes de escolher cursos ou tecnologias, decida o que você quer conseguir fazer nos próximos meses.",
      },
      {
        number: "02",
        title: "Escolha um caminho inicial",
        description:
          "Programação, Linux, segurança, inteligência artificial ou uso prático de tecnologia podem ser portas de entrada diferentes.",
      },
      {
        number: "03",
        title: "Monte uma rotina possível",
        description:
          "Consistência vale mais que intensidade. Uma rotina pequena que você consegue manter é melhor que um plano impossível de seguir.",
      },
    ] satisfies GuideCard[],
  },

  expandedStart: {
    introduction: [
      "Começar em tecnologia pode parecer confuso porque existem muitas áreas, ferramentas, cursos e opiniões diferentes. Quando tudo parece importante ao mesmo tempo, é fácil estudar bastante sem sentir que está avançando.",
      "Este guia não foi criado para escolher sua carreira por você. A proposta é ajudar a organizar o começo: definir um objetivo possível, escolher um caminho inicial, criar uma rotina que caiba na vida real e transformar estudo em prática.",
      "Você também não precisa decidir agora o que fará pelos próximos dez anos. Seu primeiro caminho serve para gerar experiência. Depois de praticar, fica muito mais fácil perceber o que desperta interesse, o que faz sentido para seus objetivos e o que você prefere deixar para depois.",
    ],

    objective: {
      title: "Comece definindo algo que você quer conseguir fazer",
      paragraphs: [
        "Antes de escolher linguagem, sistema operacional ou curso, pense em uma capacidade concreta que gostaria de desenvolver. Um objetivo simples dá contexto para o estudo e ajuda a filtrar conteúdos que ainda não são prioridade.",
        "Por exemplo: criar uma página simples, aprender a usar Linux no dia a dia, entender como proteger melhor suas contas ou automatizar uma tarefa repetitiva. Todos são objetivos válidos para quem está começando.",
        "Evite objetivos muito amplos, como aprender programação inteira ou dominar tecnologia. Eles não indicam quando você avançou. Prefira algo que possa ser praticado, observado e revisado depois de algumas semanas.",
      ],
      questions: [
        "O que eu gostaria de conseguir fazer daqui a 30 dias?",
        "Que tipo de problema eu gostaria de saber resolver?",
        "Qual assunto desperta curiosidade suficiente para eu praticar por algumas semanas?",
      ],
    },

    path: {
      title: "Escolha uma porta de entrada, não o caminho perfeito",
      paragraphs: [
        "Não existe uma única ordem correta para entrar em tecnologia. Programação, Linux, segurança digital, inteligência artificial e ferramentas práticas podem funcionar como portas de entrada diferentes.",
        "Se você gosta de criar coisas visíveis, programação para web pode ser um bom começo. Se gosta de entender como o computador funciona, Linux pode oferecer uma base interessante. Se sua preocupação é proteção e privacidade, segurança digital pode gerar resultados úteis desde o primeiro dia.",
        "A escolha inicial não precisa ser definitiva. O mais importante é evitar trocar de direção sempre que aparecer uma ferramenta nova ou um vídeo prometendo um caminho melhor.",
      ],
      options: [
        {
          title: "Programação",
          description:
            "Boa escolha para quem quer construir páginas, aplicações, automações ou entender como softwares são criados.",
        },
        {
          title: "Linux",
          description:
            "Ajuda a entender sistemas, terminal, arquivos, permissões e ferramentas muito usadas em desenvolvimento e infraestrutura.",
        },
        {
          title: "Segurança digital",
          description:
            "Permite começar com hábitos práticos de proteção enquanto você aprende conceitos de contas, dispositivos, redes e privacidade.",
        },
        {
          title: "Inteligência artificial",
          description:
            "Pode ser uma porta de entrada para produtividade, pesquisa e automação, desde que você aprenda a verificar respostas e compreender o que está fazendo.",
        },
      ],
    },

    routine: {
      title: "Monte uma rotina pequena o bastante para continuar",
      paragraphs: [
        "Uma rotina sustentável costuma funcionar melhor do que sessões longas feitas apenas quando sobra motivação. Para quem está começando, a consistência ajuda a manter conceitos recentes na memória e reduz a sensação de estar recomeçando toda vez.",
        "Você não precisa estudar várias horas por dia. Trinta minutos bem utilizados podem ser suficientes para ler um conceito, testar um exemplo e registrar uma dúvida. Em dias com mais tempo, você pode continuar; em dias corridos, mantém o mínimo.",
        "Separe estudo passivo de prática. Assistir a uma aula ou ler um artigo pode apresentar uma ideia, mas é quando você executa um comando, modifica um exemplo ou tenta explicar o conceito que percebe o que realmente entendeu.",
      ],
      example: [
        "10 minutos para revisar o que estudou anteriormente.",
        "15 minutos para aprender ou testar um conceito novo.",
        "15 minutos para praticar sem apenas copiar o exemplo.",
        "5 minutos para registrar o que funcionou, o que ficou confuso e qual será o próximo passo.",
      ],
    },
  },

  fundamentals: {
    eyebrow: "O QUE APRENDER PRIMEIRO",
    title: "Construa fundamentos antes de acumular ferramentas.",
    description:
      "Aprenda a pesquisar, entender lógica básica, usar o terminal, organizar seus projetos com Git e GitHub e ler documentação. Use inteligência artificial como apoio para estudar, revisar e experimentar — não como substituto do seu aprendizado.",
  },

  firstProject: {
    eyebrow: "PRIMEIRO PROJETO",
    title: "Aprender fazendo muda tudo.",
    description:
      "Escolha algo pequeno, termine, publique e documente o que aprendeu. Seu primeiro projeto não precisa impressionar ninguém. Ele precisa ensinar você a concluir.",
  },

  commonMistakes: {
    eyebrow: "ERROS COMUNS",
    title: "Evite complicar o começo.",
    cards: [
      {
        number: "01",
        title: "Trocar de caminho toda semana",
        description:
          "Dê tempo suficiente para um assunto fazer sentido antes de abandonar e começar outro.",
      },
      {
        number: "02",
        title: "Copiar sem entender",
        description:
          "Exemplos ajudam, mas tente explicar com suas próprias palavras o que cada parte faz.",
      },
      {
        number: "03",
        title: "Esperar estar pronto",
        description:
          "Você aprende muito mais quando começa a construir antes de se sentir completamente preparado.",
      },
    ] satisfies GuideCard[],
  },

  expandedCore: {
    fundamentals: {
      title: "Construa uma base que continue útil quando as ferramentas mudarem",
      paragraphs: [
        "Ferramentas mudam rápido. Os fundamentos permanecem úteis por muito mais tempo. No começo, vale priorizar habilidades que aparecem em diferentes áreas da tecnologia: pesquisar bem, testar hipóteses, organizar arquivos, usar o terminal, controlar versões e consultar documentação.",
        "Você não precisa dominar cada uma delas antes de criar projetos. O objetivo é desenvolver familiaridade suficiente para não depender de um tutorial para cada pequeno passo.",
        "Quando surgir algo que você ainda não sabe fazer, tente identificar exatamente qual parte está faltando. Transformar uma dificuldade genérica em uma pergunta específica é uma das habilidades mais importantes para aprender tecnologia.",
      ],

      topics: [
        {
          title: "Aprenda a pesquisar melhor",
          paragraphs: [
            "Uma boa pesquisa começa descrevendo o problema com clareza. Em vez de procurar apenas por algo não funciona, inclua a ferramenta usada, o comportamento esperado e o erro que apareceu.",
            "Compare mais de uma fonte quando a orientação puder afetar segurança, arquivos, contas ou configurações importantes. Fóruns e vídeos ajudam, mas documentação oficial costuma ser a melhor referência para confirmar detalhes.",
          ],
        },
        {
          title: "Use o terminal sem transformar comandos em magia",
          paragraphs: [
            "O terminal aparece em programação, Linux, servidores, Git e várias ferramentas de desenvolvimento. Você não precisa memorizar dezenas de comandos. Comece entendendo onde está, quais arquivos existem e o que um comando fará antes de executá-lo.",
            "Quando copiar um comando, leia cada parte. Descubra o que são opções, caminhos e argumentos. Esse hábito reduz erros e ajuda você a adaptar exemplos em vez de apenas repetir instruções.",
          ],
        },
        {
          title: "Entenda Git e GitHub como ferramentas diferentes",
          paragraphs: [
            "Git registra versões de um projeto. GitHub é uma plataforma onde repositórios Git podem ser hospedados, compartilhados e revisados. Entender essa diferença evita muita confusão no começo.",
            "Para seu primeiro projeto, já é suficiente aprender um fluxo pequeno: verificar alterações, adicionar arquivos, criar um commit e enviar o repositório para o GitHub. O restante pode ser aprendido conforme surgir necessidade.",
          ],
        },
        {
          title: "Leia documentação procurando uma resposta concreta",
          paragraphs: [
            "Documentação pode parecer difícil quando você tenta ler tudo do início ao fim. Em vez disso, entre com uma pergunta: como instalar, como configurar, quais argumentos existem ou como reproduzir um exemplo.",
            "Leia o exemplo mais simples, teste em um ambiente seguro e depois altere alguma parte. A documentação começa a fazer mais sentido quando está conectada a uma tarefa real.",
          ],
        },
      ],
    },

    firstProject: {
      title: "Seu primeiro projeto precisa ser pequeno o bastante para terminar",
      paragraphs: [
        "O primeiro projeto não precisa provar que você já sabe muito. Ele serve para conectar várias habilidades pequenas em uma entrega concreta: planejar, pesquisar, testar, corrigir, finalizar e explicar o que foi feito.",
        "Escolha algo que possa ser concluído em poucos dias ou algumas semanas. Quanto maior o projeto, mais fácil acumular decisões, erros e recursos que ainda não fazem sentido para quem está começando.",
        "Terminar um projeto simples ensina mais sobre processo do que manter cinco projetos ambiciosos pela metade.",
      ],

      ideas: [
        {
          title: "Página pessoal simples",
          description:
            "Uma página com apresentação, links e informações sobre o que você está estudando. Boa para praticar estrutura, estilo e publicação.",
        },
        {
          title: "Guia de comandos que você usa",
          description:
            "Um pequeno documento ou site com comandos Linux ou Git que você realmente testou e explicou com suas próprias palavras.",
        },
        {
          title: "Automação de uma tarefa repetitiva",
          description:
            "Um script simples que renomeia arquivos, organiza dados ou reduz uma tarefa manual que você já executa.",
        },
        {
          title: "Checklist de segurança pessoal",
          description:
            "Um material que documenta práticas como autenticação em duas etapas, senhas únicas, atualizações e cópias de segurança.",
        },
      ],

      finishChecklist: [
        "Consigo explicar em uma frase o que o projeto faz.",
        "O projeto resolve um problema pequeno e específico.",
        "Consegui executar ou abrir o projeto do começo ao fim.",
        "Removi partes que não eram necessárias para a primeira versão.",
        "Escrevi instruções básicas para outra pessoa entender como usar ou testar.",
        "Registrei pelo menos três coisas que aprendi durante o processo.",
      ],
    },

    mistakes: {
      title: "Erros comuns parecem produtivos porque mantêm você ocupado",
      introduction:
        "Nem todo tempo gasto estudando produz o mesmo tipo de aprendizado. Alguns hábitos dão sensação de movimento, mas dificultam a construção de autonomia. Reconhecê-los cedo ajuda a corrigir a rota.",

      items: [
        {
          title: "Trocar de tecnologia antes de praticar o suficiente",
          description:
            "Toda ferramenta parece limitada quando você ainda não conhece seus fundamentos. Dê algumas semanas de prática antes de concluir que precisa abandonar o caminho e começar outro.",
        },
        {
          title: "Consumir conteúdo sem produzir nada",
          description:
            "Cursos, vídeos e artigos ajudam a descobrir conceitos, mas reserve parte do tempo para escrever, executar comandos, alterar exemplos e criar algo sem acompanhar o instrutor passo a passo.",
        },
        {
          title: "Copiar código ou comandos sem investigar",
          description:
            "Copiar pode fazer parte do aprendizado, desde que depois você identifique o que cada trecho faz. Modifique valores, remova partes e observe o que muda.",
        },
        {
          title: "Comparar seu começo com projetos maduros",
          description:
            "Projetos públicos costumam mostrar o resultado de meses ou anos de experiência. Use-os como referência, não como medida para julgar seu primeiro mês de estudo.",
        },
        {
          title: "Esperar confiança para começar",
          description:
            "Confiança geralmente aparece depois de repetir tarefas e resolver problemas pequenos. Comece com algo controlado, aceite consultar referências e aumente a dificuldade aos poucos.",
        },
      ],
    },
  },

  aiForLearning: {
    eyebrow: "IA COMO APOIO",
    title: "Use inteligência artificial para aprender, não para pular o aprendizado.",
    description:
      "A inteligência artificial pode ajudar você a entender conceitos, revisar textos, encontrar erros e criar exercícios. O mais importante é continuar pensando, testando e verificando o que recebe.",
    principles: [
      {
        number: "01",
        title: "Peça explicações, não apenas respostas",
        description:
          "Em vez de pedir somente a solução pronta, peça que a ferramenta explique cada etapa e mostre por que aquela solução funciona.",
      },
      {
        number: "02",
        title: "Teste o que a IA sugerir",
        description:
          "Código, comandos e orientações podem conter erros. Execute com cuidado, consulte documentação e compare o resultado com outras fontes.",
      },
      {
        number: "03",
        title: "Tente antes de pedir ajuda",
        description:
          "Faça uma primeira tentativa sozinho. Depois use a IA para comparar abordagens, identificar dúvidas e entender onde você pode melhorar.",
      },
    ] satisfies GuideCard[],
  },

  checklist: {
    eyebrow: "CHECKLIST DO INICIANTE",
    title: "Antes de procurar a próxima ferramenta, confira sua base.",
    description:
      "Você não precisa dominar todos os itens para continuar. Use esta lista para enxergar o que já consegue fazer e escolher o próximo ponto de prática.",
    items: [
      "Tenho um objetivo simples para os próximos 30 dias.",
      "Escolhi uma área principal para estudar primeiro.",
      "Tenho uma rotina de estudo que realmente consigo manter.",
      "Consigo pesquisar uma dúvida usando palavras-chave claras.",
      "Sei criar e organizar arquivos e pastas do meu projeto.",
      "Já tive contato com terminal ou linha de comando.",
      "Entendo para que servem Git e GitHub, mesmo que ainda esteja praticando.",
      "Consigo ler uma documentação e localizar um exemplo básico.",
      "Já comecei ou concluí um projeto pequeno.",
      "Consigo explicar com minhas palavras algo que aprendi.",
      "Uso inteligência artificial como apoio e verifico as respostas importantes.",
      "Registro o que aprendi e qual será meu próximo passo.",
    ],
  },

  expandedFinal: {
    ai: {
      title: "Use IA para acelerar entendimento, não para terceirizar decisões",
      paragraphs: [
        "A inteligência artificial pode ser uma excelente ferramenta de estudo quando você a usa para explicar conceitos, comparar abordagens, revisar uma tentativa e criar exercícios. Ela se torna menos útil quando substitui completamente o esforço de pensar, testar e verificar.",
        "Uma resposta bem escrita pode estar errada. Por isso, trate a IA como uma assistente de estudo, não como uma fonte infalível. Sempre que a orientação envolver comandos, código, segurança, dados ou configurações importantes, confira em documentação oficial ou outra fonte confiável.",
        "Outro cuidado é evitar pedir a solução inteira antes de tentar. Quando você faz uma primeira tentativa, mesmo incompleta, consegue formular perguntas melhores e aproveitar muito mais a resposta recebida.",
      ],

      prompts: [
        {
          situation: "Entender um conceito",
          prompt:
            "Explique este conceito para um iniciante. Use um exemplo simples e depois me faça três perguntas para verificar se eu entendi.",
        },
        {
          situation: "Revisar uma tentativa",
          prompt:
            "Analise minha tentativa sem reescrever tudo. Mostre o que está correto, onde está o erro e dê uma pista para eu corrigir sozinho.",
        },
        {
          situation: "Estudar documentação",
          prompt:
            "Resuma este trecho de documentação, explique os termos importantes e mostre um exemplo mínimo de uso.",
        },
        {
          situation: "Criar prática",
          prompt:
            "Crie cinco exercícios progressivos sobre este assunto. Não mostre as respostas até eu tentar.",
        },
      ],

      verification: [
        "Consigo explicar a resposta com minhas próprias palavras?",
        "Testei o exemplo em um ambiente seguro?",
        "A documentação oficial confirma o comportamento importante?",
        "Se a resposta estiver errada, eu tenho como identificar o problema?",
      ],
    },

    plan30Days: {
      title: "Um plano de 30 dias para criar ritmo e terminar algo",
      introduction:
        "O objetivo deste plano não é transformar você em especialista em um mês. É criar uma sequência simples de estudo, prática e entrega para que você termine os 30 dias com mais clareza e pelo menos um resultado concreto.",

      weeks: [
        {
          label: "SEMANA 1",
          title: "Escolher e preparar",
          goal:
            "Definir um objetivo pequeno, escolher uma área principal e preparar o ambiente mínimo para estudar.",
          actions: [
            "Escreva em uma frase o que deseja conseguir fazer até o fim do mês.",
            "Escolha uma única trilha ou assunto principal.",
            "Separe uma pasta ou repositório para registrar exercícios e anotações.",
            "Faça pelo menos duas sessões curtas de prática.",
            "Anote as dúvidas que aparecem com mais frequência.",
          ],
          result:
            "Ao fim da semana, você deve saber qual é seu foco e conseguir explicar por que escolheu esse caminho.",
        },
        {
          label: "SEMANA 2",
          title: "Repetir fundamentos",
          goal:
            "Praticar os conceitos básicos várias vezes até que as tarefas mais simples deixem de parecer completamente novas.",
          actions: [
            "Repita exemplos sem apenas copiar.",
            "Modifique valores, nomes ou parâmetros para observar o que muda.",
            "Pesquise pelo menos uma dúvida usando documentação.",
            "Explique um conceito em voz alta ou por escrito.",
            "Faça um pequeno exercício sem consultar a solução imediatamente.",
          ],
          result:
            "Ao fim da semana, você deve reconhecer padrões e depender um pouco menos de instruções passo a passo.",
        },
        {
          label: "SEMANA 3",
          title: "Construir um projeto pequeno",
          goal:
            "Usar o que aprendeu em algo que tenha começo, meio e fim.",
          actions: [
            "Escolha uma das ideias de projeto do guia ou outra de tamanho semelhante.",
            "Defina o que faz parte da primeira versão e o que ficará para depois.",
            "Trabalhe em blocos pequenos e registre cada avanço.",
            "Use Git para salvar versões importantes, se fizer sentido para o projeto.",
            "Peça ajuda apenas depois de identificar claramente onde travou.",
          ],
          result:
            "Ao fim da semana, você deve ter uma versão funcional ou muito próxima de ser concluída.",
        },
        {
          label: "SEMANA 4",
          title: "Finalizar, publicar e revisar",
          goal:
            "Concluir a primeira versão, documentar o processo e decidir o próximo passo com base no que você realmente viveu.",
          actions: [
            "Remova recursos que impedem o projeto de terminar.",
            "Teste o fluxo principal do começo ao fim.",
            "Escreva instruções simples sobre o que o projeto faz.",
            "Publique ou compartilhe o resultado quando isso for seguro e fizer sentido.",
            "Registre três coisas que aprendeu e três pontos que deseja aprofundar.",
          ],
          result:
            "Ao fim dos 30 dias, você deve ter uma entrega concreta e uma visão melhor sobre o que estudar em seguida.",
        },
      ],

      reviewQuestions: [
        "O que ficou mais fácil depois de quatro semanas?",
        "Em quais tarefas eu ainda dependo muito de instruções?",
        "Qual assunto apareceu várias vezes durante a prática?",
        "O que eu faria diferente se começasse o projeto novamente?",
        "Qual é o próximo projeto pequeno que faz sentido construir?",
      ],
    },

    finalChecklist: {
      title: "Checklist para encerrar seu primeiro ciclo de estudo",
      groups: [
        {
          title: "Direção",
          items: [
            "Tenho um objetivo claro para o próximo ciclo.",
            "Escolhi uma área principal em vez de tentar aprender tudo ao mesmo tempo.",
            "Consigo identificar o que é prioridade e o que pode esperar.",
          ],
        },
        {
          title: "Prática",
          items: [
            "Tenho uma rotina possível de manter.",
            "Pratico além de assistir ou ler conteúdo.",
            "Consigo transformar uma dúvida ampla em uma pergunta específica.",
          ],
        },
        {
          title: "Ferramentas",
          items: [
            "Entendo o básico de arquivos, pastas e terminal.",
            "Sei a diferença entre Git e GitHub.",
            "Consigo consultar documentação quando preciso confirmar algo.",
          ],
        },
        {
          title: "Projeto",
          items: [
            "Comecei ou concluí um projeto pequeno.",
            "Consigo explicar o que ele faz.",
            "Registrei o que aprendi durante o processo.",
          ],
        },
        {
          title: "IA",
          items: [
            "Uso IA como apoio, não como substituto do raciocínio.",
            "Verifico respostas importantes antes de confiar nelas.",
            "Tento resolver parte do problema antes de pedir a solução completa.",
          ],
        },
      ],
    },

    closing: {
      title: "Você não precisa acelerar. Precisa continuar.",
      paragraphs: [
        "Tecnologia é um campo grande demais para ser aprendido de uma vez. A vantagem de aceitar isso é que você deixa de medir progresso pela quantidade de assuntos que conhece e passa a observar o que consegue fazer hoje que não conseguia fazer algumas semanas atrás.",
        "Seu próximo passo não precisa ser maior. Ele precisa ser claro. Escolha uma trilha, continue praticando e transforme cada novo conceito em alguma experiência concreta.",
        "O DejotaCode foi criado para acompanhar esse processo com conteúdos diretos, projetos reais e caminhos pensados para quem ainda está construindo a base.",
      ],
    },
  },

  plan: {
    eyebrow: "PLANO DE 30 DIAS",
    title: "Um mês para sair do zero e criar movimento.",
    weeks: [
      {
        label: "SEMANA 1",
        title: "Fundamentos",
        description:
          "Defina seu objetivo, escolha uma trilha e conheça as ferramentas básicas.",
      },
      {
        label: "SEMANA 2",
        title: "Prática",
        description:
          "Faça exercícios pequenos e repita os conceitos até começar a reconhecer padrões.",
      },
      {
        label: "SEMANA 3",
        title: "Projeto",
        description:
          "Escolha um projeto simples e transforme o aprendizado em algo concreto.",
      },
      {
        label: "SEMANA 4",
        title: "Publicar e revisar",
        description:
          "Termine, documente, publique e anote o que deseja aprender em seguida.",
      },
    ] satisfies GuideWeek[],
  },

  nextStep: {
    title: "Seu próximo passo",
    description:
      "Você não precisa aprender tudo. Precisa apenas saber qual é o próximo passo.",
    cta: {
      label: "Começar minha primeira trilha",
      href: "/trilhas/",
    },
  },
} as const;
