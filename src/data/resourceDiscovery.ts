import type { RecommendedResource } from "./recommendedResources";
export const resourceNeeds = [
  { id: "video", label: "Editar vídeos" },
  { id: "site", label: "Criar um site" },
  { id: "pdf", label: "Trabalhar com PDFs" },
  { id: "contas", label: "Proteger contas" },
  { id: "arquivos", label: "Recuperar arquivos" },
  { id: "aprender", label: "Aprender tecnologia" },
  { id: "conteudo", label: "Criar conteúdo" },
];
const needs: Record<string, string[]> = {
  filmora: ["video", "conteudo"], pdfelement: ["pdf"], uniconverter: ["video", "conteudo"],
  recoverit: ["arquivos"], "dr-fone": ["arquivos"], nordpass: ["contas"],
  elevenlabs: ["conteudo"], elementor: ["site"], hostinger: ["site"],
  leadlovers: ["site", "conteudo"], nordvpn: ["contas"],
  "hospedagem-primeiro-site": ["site"], febspot: ["video", "conteudo"],
  "meliuz-jogue-e-ganhe": [], metricool: ["conteudo"], astro: ["site", "aprender"],
  vscode: ["site", "aprender"], git: ["site", "aprender"], github: ["site", "aprender"],
  cloudflare: ["site"], linux: ["aprender"], "ebook-programacao-hotmart": ["aprender"],
};
const summaries: Record<string, [string, string]> = {
  filmora: ["Edite vídeos com recursos de inteligência artificial.", "Vídeos e redes sociais."],
  pdfelement: ["Edite, converta e organize documentos PDF.", "Documentos, OCR e assinatura."],
  uniconverter: ["Converta e comprima arquivos de vídeo e áudio.", "Preparação e tratamento de mídia."],
  recoverit: ["Avalie a recuperação de arquivos apagados.", "Arquivos em HD, SSD e pendrive."],
  "dr-fone": ["Ferramentas para backup e transferência de dados móveis.", "Android e iPhone compatíveis."],
  nordpass: ["Organize senhas e evite reutilizar credenciais.", "Proteção do acesso às contas."],
  elevenlabs: ["Crie narrações e áudio com inteligência artificial.", "Roteiros e produção audiovisual."],
  elementor: ["Crie sites WordPress com edição visual.", "Sites e landing pages."],
  hostinger: ["Hospedagem para colocar seu projeto no ar.", "Publicação de pequenos sites."],
  leadlovers: ["Organize páginas, contatos e automações de marketing.", "Captação e relacionamento com clientes."],
  nordvpn: ["VPN para situações específicas de privacidade.", "Conexões em redes não confiáveis."],
  "hospedagem-primeiro-site": ["Compare critérios antes de contratar hospedagem.", "Escolher onde publicar seu primeiro site."],
  febspot: ["Conheça uma alternativa de publicação de vídeos.", "Distribuição de conteúdo audiovisual."],
  "meliuz-jogue-e-ganhe": ["Acompanhe um experimento com campanhas do Méliuz.", "Entender regras e resultados documentados."],
  metricool: ["Organize publicações e acompanhe redes sociais.", "Calendário e métricas de conteúdo."],
  astro: ["Construa sites rápidos e orientados a conteúdo.", "Blogs, sites e documentação."],
  vscode: ["Escreva e organize os arquivos do seu projeto.", "Estudos e desenvolvimento de código."],
  git: ["Registre e acompanhe a evolução do código.", "Histórico e versões de projetos."],
  github: ["Hospede repositórios e colabore em projetos.", "Portfólio, colaboração e automação."],
  cloudflare: ["Publique projetos e use serviços de infraestrutura.", "Sites e serviços de borda."],
  linux: ["Explore referências do ecossistema Linux.", "Continuar aprendendo Linux."],
  "ebook-programacao-hotmart": ["Conheça um e-book de terceiros sobre programação.", "Visão geral dos fundamentos e carreira."],
};
export const getResourceDiscovery = (resource: RecommendedResource) => {
  const label = resource.editorialLabel ?? "";
  // Uso só é declarado quando já consta no registro editorial ou na descrição.
  const used = /Uso no DejotaCode/.test(label) || /usad[oa]/i.test(resource.description);
  const researched = /Pesquisado/.test(label) || /pesquisad[oa]/i.test(resource.description) || resource.affiliateProvider === "awin" || resource.id === "ebook-programacao-hotmart";
  return {
    needs: needs[resource.id] ?? [],
    status: /Em avaliação|Em teste/.test(label) ? "Em avaliação" : used ? "Usado no DejotaCode" : researched ? "Pesquisado" : "Em avaliação",
    summary: summaries[resource.id]?.[0] ?? resource.description,
    ideal: summaries[resource.id]?.[1] ?? resource.bestFor,
  };
};
