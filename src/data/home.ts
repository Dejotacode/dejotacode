export const topics = [
  { symbol: "</>", title: "Programação", description: "Desenvolvimento sem complicação", href: "/categoria/programacao/" },
  { symbol: "⌁", title: "Linux & Segurança", description: "Sistemas, privacidade e proteção", href: "/categoria/linux-seguranca/" },
  { symbol: "IA", title: "Inteligência Artificial", description: "Uso prático e responsável", href: "/categoria/tech-tendencias/" },
  { symbol: "▥", title: "Tecnologia prática", description: "Soluções para o dia a dia", href: "/blog/" },
] as const;

export const tracks = [
  { number: "01", level: "Iniciante", symbol: "$ _", title: "Linux do zero", description: "Conheça o sistema, instale com segurança e domine os primeiros comandos.", href: "/trilhas/linux-do-zero/", featured: true },
  { number: "02", level: "Iniciante", symbol: "</>", title: "Primeiros passos na programação", description: "Entenda a lógica e construa seu primeiro projeto para a web.", href: "/trilhas/primeiros-passos-programacao/", featured: false },
  { number: "03", level: "Prática", symbol: "IA", title: "IA no dia a dia", description: "Use inteligência artificial para estudar e trabalhar com responsabilidade.", href: "/trilhas/ia-no-dia-a-dia/", featured: false },
] as const;

export const featuredContents = [
  { symbol: "$ _", category: "Linux & Segurança", title: "7 hábitos de segurança digital para iniciantes", description: "Ações simples para proteger suas contas, arquivos e dispositivos no dia a dia.", date: "9 set 2026", readingTime: "8 min de leitura", href: "/blog/habitos-seguranca-digital-iniciantes/" },
  { symbol: "</>", category: "Programação", title: "Como escolher seu primeiro projeto de portfólio", description: "Um roteiro simples para transformar estudo em uma experiência prática.", date: "9 set 2026", readingTime: "7 min de leitura", href: "/blog/escolher-primeiro-projeto-portfolio/" },
] as const;

export const recentTutorials = [
  { number: "01", category: "Cloudflare", title: "Como publicar um projeto Astro no Cloudflare Pages", description: "Prepare o build e publique seu site estático passo a passo.", time: "10 min", href: "/tutorial/publicar-astro-cloudflare-pages/" },
  { number: "02", category: "Banco de dados", title: "Como criar e migrar um banco Cloudflare D1", description: "Crie o banco, organize migrações e valide o ambiente.", time: "8 min", href: "/tutorial/criar-migrar-banco-cloudflare-d1/" },
  { number: "03", category: "Git & GitHub", title: "Git e GitHub: entenda a diferença", description: "Veja para que serve cada ferramenta antes do primeiro projeto.", time: "6 min", href: "/blog/git-e-github-entenda-a-diferenca/" },
] as const;
