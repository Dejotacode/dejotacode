import type { OfficialIconId } from "./categoryIcons";

export const topics = [
  { iconId: "code" satisfies OfficialIconId, title: "Programação", description: "Desenvolvimento sem complicação", href: "/categoria/programacao/" },
  { iconId: "terminal" satisfies OfficialIconId, title: "Linux & Segurança", description: "Sistemas, privacidade e proteção", href: "/categoria/linux-seguranca/" },
  { iconId: "ai-nodes" satisfies OfficialIconId, title: "Inteligência Artificial", description: "Uso prático e responsável", href: "/categoria/inteligencia-artificial/" },
  { iconId: "grid" satisfies OfficialIconId, title: "Tecnologia prática", description: "Soluções para o dia a dia", href: "/categoria/tecnologia-pratica/" },
] as const;

export const homeTrailSlugs = [
  "linux-do-zero",
  "primeiros-passos-programacao",
  "ia-no-dia-a-dia",
  "seguranca-digital-essencial",
] as const;

export const featuredHomeTrailSlug = "linux-do-zero";

export const featuredPostSlugs = [
  "habitos-seguranca-digital-iniciantes",
  "escolher-primeiro-projeto-portfolio",
] as const;

export const recentTutorialSlugs = [
  "primeiro-site-html-css",
  "javascript-variaveis-funcoes",
  "prompts-melhores-estudar-trabalhar",
] as const;
