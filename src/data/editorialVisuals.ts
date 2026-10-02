export const postCategoryVisuals: Record<string, string> = {
  programacao: "/assets/resources/category-desenvolvimento.svg",
  "linux-seguranca": "/assets/resources/category-seguranca.svg",
  "inteligencia-artificial": "/assets/resources/category-digitais.svg",
  "tecnologia-pratica": "/assets/resources/category-infraestrutura.svg",
  "renda-digital": "/assets/resources/category-renda-digital.svg",
};

export const trailVisuals: Record<string, string> = {
  "linux-do-zero": "/assets/resources/items/linux.webp",
  "primeiros-passos-programacao": "/assets/resources/category-desenvolvimento.svg",
  "ia-no-dia-a-dia": "/assets/resources/category-digitais.svg",
  "seguranca-digital-essencial": "/assets/resources/category-seguranca.svg",
  "primeira-renda-online": "/assets/resources/category-renda-digital.svg",
};

export function resolvePostVisual(category: string) {
  return postCategoryVisuals[category] ?? "/assets/resources/category-aprendizado.svg";
}

export function resolveTrailVisual(slug: string) {
  return trailVisuals[slug] ?? "/assets/resources/category-aprendizado.svg";
}
