export interface TrailLesson {
  order: number;
  slug: string;
  title: string;
  description: string;
  duration: number;
  optional?: boolean;
}

export interface Trail {
  slug: string;
  number: string;
  title: string;
  description: string;
  outcome: string;
  level: "Iniciante" | "Intermediário";
  icon: string;
  available: boolean;
  lessons: TrailLesson[];
}

export const trails: Trail[] = [
  {
    slug: "linux-do-zero",
    number: "01",
    title: "Linux do zero",
    description:
      "Conheça o sistema, escolha uma distribuição e avance do terminal básico até permissões, pipe e redirecionamento com segurança.",
    outcome:
      "Ao concluir, você entenderá como o Linux funciona, navegará pelo terminal, reconhecerá permissões e saberá combinar comandos e redirecionar resultados com mais segurança.",
    level: "Iniciante",
    icon: "$_",
    available: true,
    lessons: [
      {
        order: 1,
        slug: "o-que-e-linux",
        title: "O que é Linux?",
        description: "Entenda o sistema e por que ele aparece tanto no mundo da tecnologia.",
        duration: 11,
      },
      {
        order: 2,
        slug: "como-escolher-distribuicao-linux",
        title: "Como escolher uma distribuição",
        description: "Compare opções usando hardware, suporte e suas tarefas reais como critérios.",
        duration: 9,
      },
      {
        order: 3,
        slug: "comandos-linux-para-iniciantes",
        title: "Primeiros comandos no terminal",
        description: "Navegue por pastas e arquivos entendendo cada comando antes de executar.",
        duration: 12,
      },
      {
        order: 4,
        slug: "permissoes-linux-para-iniciantes",
        title: "Permissões sem mistério",
        description: "Aprenda quem pode ler, alterar ou executar um arquivo no Linux.",
        duration: 12,
      },
      {
        order: 5,
        slug: "pipe-redirecionamento-linux",
        title: "Pipe e redirecionamento",
        description: "Combine comandos e direcione resultados com |, > e >> de forma segura.",
        duration: 10,
      },
    ],
  },
  {
    slug: "primeiros-passos-programacao",
    number: "02",
    title: "Primeiros passos na programação",
    description: "Entenda como a web funciona, construa uma página com HTML e CSS, pratique JavaScript e registre a evolução com Git e GitHub.",
    outcome: "Ao concluir, você terá uma página própria, fundamentos de JavaScript e um fluxo básico de versionamento para continuar praticando com mais autonomia.",
    level: "Iniciante",
    icon: "</>",
    available: true,
    lessons: [
      {
        order: 1,
        slug: "como-a-web-funciona",
        title: "Como a web funciona",
        description: "Entenda navegador, servidor, DNS, HTTP e os arquivos que formam uma página.",
        duration: 9,
      },
      {
        order: 2,
        slug: "html-css-javascript-entenda-diferenca",
        title: "HTML, CSS e JavaScript",
        description: "Veja o papel de cada tecnologia antes de começar a escrever código.",
        duration: 9,
      },
      {
        order: 3,
        slug: "primeiro-site-html-css",
        title: "Seu primeiro site",
        description: "Monte uma página pequena com HTML e CSS e entenda cada arquivo.",
        duration: 12,
      },
      {
        order: 4,
        slug: "javascript-variaveis-funcoes",
        title: "Fundamentos de JavaScript",
        description: "Pratique variáveis, condições e funções sem depender de frameworks.",
        duration: 12,
      },
      {
        order: 5,
        slug: "git-e-github-entenda-a-diferenca",
        title: "Git e GitHub",
        description: "Registre a evolução do projeto e entenda o fluxo básico de versionamento.",
        duration: 11,
      },
    ],
  },
  {
    slug: "ia-no-dia-a-dia",
    number: "03",
    title: "IA no dia a dia",
    description: "Use inteligência artificial nos estudos e no trabalho com responsabilidade.",
    outcome: "Critérios práticos para pedir, revisar e verificar respostas de IA.",
    level: "Iniciante",
    icon: "IA",
    available: true,
    lessons: [
      {
        order: 1,
        slug: "o-que-e-ia-generativa",
        title: "O que é IA generativa",
        description: "Entenda possibilidades, limitações e por que uma resposta precisa de contexto e revisão.",
        duration: 8,
      },
      {
        order: 2,
        slug: "prompts-melhores-estudar-trabalhar",
        title: "Prompts melhores",
        description: "Use objetivo, contexto, restrições e formato para fazer pedidos mais claros.",
        duration: 9,
      },
      {
        order: 3,
        slug: "como-verificar-respostas-de-ia",
        title: "Verifique antes de confiar",
        description: "Cheque fatos, fontes, código e suposições antes de usar uma resposta importante.",
        duration: 8,
      },
    ],
  },
  {
    slug: "seguranca-digital-essencial",
    number: "04",
    title: "Segurança digital essencial",
    description: "Aprenda hábitos práticos para proteger contas, mensagens, arquivos e dispositivos no dia a dia, mesmo começando do zero.",
    outcome: "Uma rotina digital mais segura e previsível para contas e mensagens.",
    level: "Iniciante",
    icon: "[]",
    available: true,
    lessons: [
      {
        order: 1,
        slug: "habitos-seguranca-digital-iniciantes",
        title: "Hábitos de segurança digital",
        description: "Construa uma base de proteção com pequenas ações repetíveis.",
        duration: 7,
      },
      {
        order: 2,
        slug: "autenticacao-dois-fatores",
        title: "Autenticação em dois fatores",
        description: "Adicione uma segunda barreira às contas mais importantes.",
        duration: 7,
      },
      {
        order: 3,
        slug: "phishing-como-identificar",
        title: "Como identificar phishing",
        description: "Reconheça urgência, links e remetentes suspeitos antes de agir.",
        duration: 8,
      },
    ],
  },
];

export const availableTrails = trails.filter((trail) => trail.available);
