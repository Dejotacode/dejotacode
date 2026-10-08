export const postCategoryVisuals: Record<string, string> = {
  programacao: "/assets/resources/category-desenvolvimento.svg",
  "linux-seguranca": "/assets/resources/category-seguranca.svg",
  "inteligencia-artificial": "/assets/resources/category-digitais.svg",
  "tecnologia-pratica": "/assets/resources/category-infraestrutura.svg",
  "renda-digital": "/assets/resources/category-renda-digital.svg",
};


const postSpecificVisuals: Record<string, string> = {
  "como-verificar-respostas-de-ia": "/assets/posts/como-verificar-respostas-de-ia-capa-v1.webp",
  "usar-ia-estudar-sem-dependencia": "/assets/posts/usar-ia-estudar-sem-dependencia-capa-v1.webp",
  "prompts-melhores-estudar-trabalhar": "/assets/posts/prompts-melhores-estudar-trabalhar-capa-v1.webp",
  "o-que-e-ia-generativa": "/assets/posts/o-que-e-ia-generativa-capa-v1.webp",
  "escolher-primeiro-projeto-portfolio": "/assets/posts/escolher-primeiro-projeto-portfolio-capa-v1.webp",
  "como-a-web-funciona": "/assets/posts/como-a-web-funciona-capa-v1.webp",
  "autenticacao-dois-fatores": "/assets/posts/autenticacao-dois-fatores-capa-v1.webp",
  "habitos-seguranca-digital-iniciantes": "/assets/posts/habitos-seguranca-digital-iniciantes-capa-v1.webp",
  "phishing-como-identificar": "/assets/posts/phishing-como-identificar-capa-v1.webp",
  "elementor-para-iniciantes": "/assets/posts/elementor-para-iniciantes-v1.webp",
  "vpn-para-iniciantes": "/assets/store/nordvpn-sem-texto-v2.webp",
  "gerenciador-de-senhas-para-iniciantes": "/assets/store/nordpass-sem-texto-v1.webp",
  "comandos-linux-para-iniciantes": "/assets/posts/comandos-linux-para-iniciantes-capa-v1.webp",
  "como-criar-pendrive-bootavel-linux": "/assets/posts/como-criar-pendrive-bootavel-linux-capa-v1.webp",
  "como-escolher-distribuicao-linux": "/assets/posts/como-escolher-distribuicao-linux-capa-v1.webp",
  "como-testar-linux-sem-instalar": "/assets/posts/como-testar-linux-sem-instalar-capa-v1.webp",
  "o-que-e-linux": "/assets/posts/o-que-e-linux-capa-v1.webp",
  "permissoes-linux-para-iniciantes": "/assets/posts/permissoes-linux-para-iniciantes-capa-v1.webp",
  "pipe-redirecionamento-linux": "/assets/posts/pipe-redirecionamento-linux-capa-v1.webp",
  "git-e-github-entenda-a-diferenca": "/assets/resources/items/github.webp",
  "html-css-javascript-entenda-diferenca": "/assets/posts/html-css-javascript-entenda-diferenca-capa-v1.webp",
  "javascript-variaveis-funcoes": "/assets/posts/javascript-variaveis-funcoes-capa-v1.webp",
  "primeiro-site-html-css": "/assets/posts/primeiro-site-html-css-capa-v1.webp",
  "devtools-navegador-iniciantes": "/assets/posts/devtools-navegador-iniciantes-capa-v1.webp",
  "elevenlabs-para-iniciantes-criar-narracoes-com-ia": "/assets/resources/items/elevenlabs.webp",
  "metricool-para-iniciantes-organizar-agendar-conteudo": "/assets/resources/items/metricool.webp",
  "meliuz-jogue-e-ganhe-pocket-sort": "/assets/resources/items/meliuz-jogue-e-ganhe.webp",
  "febspot-para-iniciantes-monetizacao-indicacao": "/assets/resources/items/febspot.webp",
};

export const trailVisuals: Record<string, string> = {
  "linux-do-zero": "/assets/resources/items/linux.webp",
  "primeiros-passos-programacao": "/assets/resources/items/vscode.webp",
  "ia-no-dia-a-dia": "/assets/trails/ia-no-dia-a-dia.svg",
  "seguranca-digital-essencial": "/assets/trails/seguranca-digital-essencial.svg",
  "primeira-renda-online": "/assets/trails/primeira-renda-online.svg",
};

export function resolvePostVisual(category: string, slug?: string) {
  if (slug && postSpecificVisuals[slug]) return postSpecificVisuals[slug];
  return postCategoryVisuals[category] ?? "/assets/resources/category-aprendizado.svg";
}

export function resolveTrailVisual(slug: string) {
  return trailVisuals[slug] ?? "/assets/resources/category-aprendizado.svg";
}
