import type { OfficialIconId } from "./categoryIcons";

export type ResourceCategoryId = "desenvolvimento" | "digitais" | "infraestrutura" | "aprendizado" | "seguranca" | "renda-digital";

export type ResourceCategory = {
  id: ResourceCategoryId;
  label: string;
  description: string;
  iconId: OfficialIconId;
};

export const resourceCategories: ResourceCategory[] = [
  { id: "desenvolvimento", label: "Desenvolvimento", description: "Ferramentas para escrever, testar e versionar projetos.", iconId: "code" },
  { id: "digitais", label: "Ferramentas digitais", description: "Serviços usados para criação, publicação, automação e operação de conteúdo.", iconId: "apps" },
  { id: "infraestrutura", label: "Infraestrutura", description: "Serviços e equipamentos usados para publicar, manter e operar projetos web.", iconId: "cloud-server" },
  { id: "aprendizado", label: "Aprendizado", description: "Referências, cursos e materiais para continuar estudando com contexto.", iconId: "checklist" },
  { id: "seguranca", label: "Segurança", description: "Ferramentas e referências para proteção de contas, dados e navegação.", iconId: "shield-check" },
  { id: "renda-digital", label: "Renda digital", description: "Plataformas e experiências acompanhadas com foco em evidência, regras e transparência.", iconId: "wallet" },
];

export const getResourceCategory = (id: string) => resourceCategories.find((category) => category.id === id);
