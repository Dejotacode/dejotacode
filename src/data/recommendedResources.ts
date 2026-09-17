export type CommercialRelationship = "none" | "affiliate";

export type RecommendedResource = {
  id: string;
  name: string;
  category: "desenvolvimento" | "infraestrutura" | "aprendizado";
  description: string;
  bestFor: string;
  limitation: string;
  href: string;
  cta: string;
  priceLabel: string;
  relationship: CommercialRelationship;
  lastReviewed: string;
};

export const recommendedResources: RecommendedResource[] = [
  { id: "astro", name: "Astro", category: "desenvolvimento", description: "Framework usado para construir páginas rápidas e orientadas a conteúdo.", bestFor: "Sites, blogs e documentação com foco em desempenho.", limitation: "Exige conhecimentos básicos de HTML, CSS e JavaScript.", href: "https://docs.astro.build/", cta: "Abrir documentação oficial", priceLabel: "Gratuito e open source", relationship: "none", lastReviewed: "17/09/2026" },
  { id: "vscode", name: "Visual Studio Code", category: "desenvolvimento", description: "Editor usado para escrever, organizar e revisar os arquivos do projeto.", bestFor: "Quem está começando a programar e deseja um editor extensível.", limitation: "Extensões demais podem deixar o ambiente confuso e pesado.", href: "https://code.visualstudio.com/docs", cta: "Abrir documentação oficial", priceLabel: "Gratuito", relationship: "none", lastReviewed: "17/09/2026" },
  { id: "git", name: "Git", category: "desenvolvimento", description: "Ferramenta que registra a evolução do código e permite retornar a pontos seguros.", bestFor: "Projetos que precisam de histórico e experimentação controlada.", limitation: "Os comandos iniciais exigem prática para se tornarem naturais.", href: "https://git-scm.com/doc", cta: "Abrir documentação oficial", priceLabel: "Gratuito e open source", relationship: "none", lastReviewed: "17/09/2026" },
  { id: "github", name: "GitHub", category: "infraestrutura", description: "Serviço usado para hospedar repositórios e colaborar em projetos.", bestFor: "Portfólio técnico, colaboração e automação de qualidade.", limitation: "Recursos avançados e privados podem depender do plano escolhido.", href: "https://docs.github.com/", cta: "Abrir documentação oficial", priceLabel: "Plano gratuito disponível", relationship: "none", lastReviewed: "17/09/2026" },
  { id: "cloudflare", name: "Cloudflare", category: "infraestrutura", description: "Plataforma de infraestrutura usada para publicação e serviços de borda.", bestFor: "Projetos web que precisam começar pequenos e crescer com controle.", limitation: "Os limites e produtos exigem leitura cuidadosa antes de publicar.", href: "https://developers.cloudflare.com/", cta: "Abrir documentação oficial", priceLabel: "Plano gratuito disponível", relationship: "none", lastReviewed: "17/09/2026" },
  { id: "linux", name: "Linux Foundation", category: "aprendizado", description: "Referência para conhecer o ecossistema Linux e continuar os estudos.", bestFor: "Iniciantes que desejam entender Linux além de comandos isolados.", limitation: "Parte do conteúdo e de alguns cursos está disponível apenas em inglês.", href: "https://www.linuxfoundation.org/", cta: "Abrir site oficial", priceLabel: "Conteúdo gratuito e opções pagas", relationship: "none", lastReviewed: "17/09/2026" },
];

const resourcesById = new Map(recommendedResources.map((resource) => [resource.id, resource]));

export const articleResourceIds: Record<string, string[]> = {
  "primeiro-site-html-css": ["vscode", "github"],
  "devtools-navegador-iniciantes": ["vscode", "astro"],
  "comandos-linux-para-iniciantes": ["linux", "git"],
};

export const getArticleResources = (slug: string) =>
  (articleResourceIds[slug] ?? [])
    .map((id) => resourcesById.get(id))
    .filter((resource): resource is RecommendedResource => Boolean(resource));
