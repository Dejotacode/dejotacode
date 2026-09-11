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
      "Conheça o sistema, escolha uma distribuição e domine os primeiros comandos com segurança.",
    outcome:
      "Ao concluir, você entenderá como o Linux funciona e conseguirá realizar tarefas básicas pelo terminal.",
    level: "Iniciante",
    icon: "$_",
    available: true,
    lessons: [
      {
        order: 1,
        slug: "o-que-e-linux",
        title: "O que é Linux?",
        description: "Entenda o sistema e por que ele aparece tanto no mundo da tecnologia.",
        duration: 6,
      },
      {
        order: 2,
        slug: "como-escolher-distribuicao-linux",
        title: "Como escolher uma distribuição",
        description: "Compare opções sem se perder em dezenas de nomes e opiniões.",
        duration: 7,
      },
      {
        order: 3,
        slug: "comandos-linux-para-iniciantes",
        title: "Primeiros comandos no terminal",
        description: "Navegue por pastas e arquivos entendendo cada comando antes de executar.",
        duration: 9,
      },
      {
        order: 4,
        slug: "permissoes-linux-para-iniciantes",
        title: "Permissões sem mistério",
        description: "Aprenda quem pode ler, alterar ou executar um arquivo no Linux.",
        duration: 8,
      },
    ],
  },
  {
    slug: "primeiros-passos-programacao",
    number: "02",
    title: "Primeiros passos na programação",
    description: "Entenda a lógica e construa seu primeiro projeto para a web.",
    outcome: "Uma base clara para começar a desenvolver projetos próprios.",
    level: "Iniciante",
    icon: "</>",
    available: false,
    lessons: [],
  },
  {
    slug: "ia-no-dia-a-dia",
    number: "03",
    title: "IA no dia a dia",
    description: "Use inteligência artificial nos estudos e no trabalho com responsabilidade.",
    outcome: "Critérios práticos para usar IA de forma consciente.",
    level: "Iniciante",
    icon: "IA",
    available: false,
    lessons: [],
  },
  {
    slug: "seguranca-digital-essencial",
    number: "04",
    title: "Segurança digital essencial",
    description: "Proteja contas, arquivos e dispositivos com hábitos simples.",
    outcome: "Uma rotina digital mais segura e previsível.",
    level: "Iniciante",
    icon: "[]",
    available: false,
    lessons: [],
  },
];

export const availableTrails = trails.filter((trail) => trail.available);
