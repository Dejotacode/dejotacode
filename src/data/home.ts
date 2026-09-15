export const topics = [
  { symbol: "</>", title: "Programação", description: "Desenvolvimento sem complicação", href: "/categoria/programacao/" },
  { symbol: "⌁", title: "Linux & Segurança", description: "Sistemas, privacidade e proteção", href: "/categoria/linux-seguranca/" },
  { symbol: "IA", title: "Inteligência Artificial", description: "Uso prático e responsável", href: "/categoria/inteligencia-artificial/" },
  { symbol: "▥", title: "Tecnologia prática", description: "Soluções para o dia a dia", href: "/categoria/tecnologia-pratica/" },
] as const;

export const tracks = [
  { number: "01", level: "Iniciante", symbol: "$ _", title: "Linux do zero", description: "Conheça o sistema, instale com segurança e domine os primeiros comandos.", href: "/trilhas/linux-do-zero/", featured: true },
  { number: "02", level: "Iniciante", symbol: "</>", title: "Primeiros passos na programação", description: "Entenda a lógica e construa seu primeiro projeto para a web.", href: "/trilhas/primeiros-passos-programacao/", featured: false },
  { number: "03", level: "Prática", symbol: "IA", title: "IA no dia a dia", description: "Use inteligência artificial para estudar e trabalhar com responsabilidade.", href: "/trilhas/ia-no-dia-a-dia/", featured: false },
] as const;

export const featuredContents = [
  { symbol: "$ _", category: "Linux & Segurança", title: "5 hábitos de segurança digital para começar hoje", description: "Ações simples para proteger suas contas e navegar com mais tranquilidade, sem precisar dominar termos técnicos.", date: "9 set 2026", readingTime: "7 min de leitura", href: "/blog/habitos-seguranca-digital-iniciantes/" },
  { symbol: "</>", category: "Programação", title: "Como escolher seu primeiro projeto de portfólio", description: "Um método direto para transformar uma ideia pequena em um projeto concluído e fácil de apresentar.", date: "5 set 2026", readingTime: "6 min de leitura", href: "/blog/escolher-primeiro-projeto-portfolio/" },
] as const;

export const recentTutorials = [
  { number: "01", category: "Programação", title: "Como criar seu primeiro site com HTML e CSS", description: "Monte uma página simples do zero, organize os arquivos e entenda o que cada parte faz.", time: "10 min", href: "/blog/primeiro-site-html-css/" },
  { number: "02", category: "Programação", title: "JavaScript para iniciantes: variáveis, condições e funções", description: "Aprenda os blocos básicos de JavaScript com exemplos pequenos e transforme valores em comportamento.", time: "10 min", href: "/blog/javascript-variaveis-funcoes/" },
  { number: "03", category: "Inteligência Artificial", title: "Como escrever prompts melhores para estudar e trabalhar", description: "Use contexto, objetivo, restrições e formato de saída para pedir respostas mais úteis.", time: "9 min", href: "/blog/prompts-melhores-estudar-trabalhar/" },
] as const;
