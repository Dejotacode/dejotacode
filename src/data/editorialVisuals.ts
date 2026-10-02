export const postCategoryVisuals: Record<string, string> = {
  programacao: "/assets/resources/category-desenvolvimento.svg",
  "linux-seguranca": "/assets/resources/category-seguranca.svg",
  "inteligencia-artificial": "/assets/resources/category-digitais.svg",
  "tecnologia-pratica": "/assets/resources/category-infraestrutura.svg",
  "renda-digital": "/assets/resources/category-renda-digital.svg",
};


const postSpecificVisuals: Record<string, string> = {
  "comandos-linux-para-iniciantes": "/assets/resources/items/linux.webp",
  "como-criar-pendrive-bootavel-linux": "/assets/resources/items/linux.webp",
  "como-escolher-distribuicao-linux": "/assets/resources/items/linux.webp",
  "como-testar-linux-sem-instalar": "/assets/resources/items/linux.webp",
  "o-que-e-linux": "/assets/resources/items/linux.webp",
  "permissoes-linux-para-iniciantes": "/assets/resources/items/linux.webp",
  "pipe-redirecionamento-linux": "/assets/resources/items/linux.webp",
  "git-e-github-entenda-a-diferenca": "/assets/resources/items/github.webp",
  "html-css-javascript-entenda-diferenca": "/assets/resources/items/vscode.webp",
  "javascript-variaveis-funcoes": "/assets/resources/items/vscode.webp",
  "primeiro-site-html-css": "/assets/resources/items/vscode.webp",
  "devtools-navegador-iniciantes": "/assets/resources/items/vscode.webp",
  "elevenlabs-para-iniciantes-criar-narracoes-com-ia": "/assets/resources/items/elevenlabs.webp",
  "metricool-para-iniciantes-organizar-agendar-conteudo": "/assets/resources/items/metricool.webp",
  "meliuz-jogue-e-ganhe-pocket-sort": "/assets/resources/items/meliuz-jogue-e-ganhe.webp",
  "febspot-para-iniciantes-monetizacao-indicacao": "/assets/resources/items/febspot.webp",
};

export const trailVisuals: Record<string, string> = {
  "linux-do-zero": "/assets/resources/items/linux.webp",
  "primeiros-passos-programacao": "/assets/resources/items/vscode.webp",
  "ia-no-dia-a-dia": "/assets/resources/category-digitais.svg",
  "seguranca-digital-essencial": "/assets/resources/category-seguranca.svg",
  "primeira-renda-online": "/assets/resources/category-renda-digital.svg",
};

export function resolvePostVisual(category: string, slug?: string) {
  if (slug && postSpecificVisuals[slug]) return postSpecificVisuals[slug];
  return postCategoryVisuals[category] ?? "/assets/resources/category-aprendizado.svg";
}

export function resolveTrailVisual(slug: string) {
  return trailVisuals[slug] ?? "/assets/resources/category-aprendizado.svg";
}
