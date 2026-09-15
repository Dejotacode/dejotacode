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

export const featuredPostSlugs = [
  "habitos-seguranca-digital-iniciantes",
  "escolher-primeiro-projeto-portfolio",
] as const;

export const recentTutorialSlugs = [
  "primeiro-site-html-css",
  "javascript-variaveis-funcoes",
  "prompts-melhores-estudar-trabalhar",
] as const;
