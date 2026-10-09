export type OfficialIconId =
  | "code"
  | "terminal"
  | "ai-nodes"
  | "grid"
  | "wallet"
  | "monitor"
  | "microphone"
  | "apps"
  | "window"
  | "smartphone-android"
  | "smartphone-ios"
  | "shield-check"
  | "blockchain"
  | "cloud-server"
  | "browser"
  | "smartphone"
  | "workflow"
  | "checklist"
  | "news"
  | "privacy"
  | "network"
  | "chip"
  | "database"
  | "calendar"
  | "clock"
  | "keyboard"
  | "mouse"
  | "usb-hub"
  | "arrow-right"
  | "arrow-up-right";

export type IconCategoryStatus = "current" | "future";

export interface OfficialCategoryIcon {
  label: string;
  slug: string;
  iconId: OfficialIconId;
  status: IconCategoryStatus;
  scope: "editorial" | "store" | "shared";
}

export const officialCategoryIcons: OfficialCategoryIcon[] = [
  { label: "Programação", slug: "programacao", iconId: "code", status: "current", scope: "shared" },
  { label: "Linux & Segurança", slug: "linux-seguranca", iconId: "terminal", status: "current", scope: "editorial" },
  { label: "Inteligência Artificial", slug: "inteligencia-artificial", iconId: "ai-nodes", status: "current", scope: "editorial" },
  { label: "Tecnologia prática", slug: "tecnologia-pratica", iconId: "grid", status: "current", scope: "editorial" },
  { label: "Renda digital", slug: "renda-digital", iconId: "wallet", status: "current", scope: "editorial" },
  { label: "Linux", slug: "linux", iconId: "terminal", status: "current", scope: "store" },
  { label: "Setup", slug: "setup", iconId: "monitor", status: "current", scope: "store" },
  { label: "Criadores", slug: "criadores", iconId: "microphone", status: "current", scope: "store" },
  { label: "Ferramentas digitais", slug: "ferramentas-digitais", iconId: "apps", status: "current", scope: "store" },

  { label: "Windows", slug: "windows", iconId: "window", status: "future", scope: "editorial" },
  { label: "Android", slug: "android", iconId: "smartphone-android", status: "future", scope: "editorial" },
  { label: "iPhone / iOS", slug: "ios", iconId: "smartphone-ios", status: "future", scope: "editorial" },
  { label: "Segurança digital", slug: "seguranca-digital", iconId: "shield-check", status: "future", scope: "shared" },
  { label: "Criptoativos", slug: "criptoativos", iconId: "blockchain", status: "future", scope: "editorial" },
  { label: "Infraestrutura", slug: "infraestrutura", iconId: "cloud-server", status: "future", scope: "shared" },
  { label: "Web & Sites", slug: "web", iconId: "browser", status: "future", scope: "editorial" },
  { label: "Mobile", slug: "mobile", iconId: "smartphone", status: "future", scope: "editorial" },
  { label: "Automação", slug: "automacao", iconId: "workflow", status: "future", scope: "editorial" },
  { label: "Produtividade", slug: "produtividade", iconId: "checklist", status: "future", scope: "editorial" },
  { label: "Notícias Tech", slug: "noticias-tech", iconId: "news", status: "future", scope: "editorial" },
  { label: "Privacidade", slug: "privacidade", iconId: "privacy", status: "future", scope: "editorial" },
  { label: "Redes & Internet", slug: "redes-internet", iconId: "network", status: "future", scope: "editorial" },
  { label: "Hardware", slug: "hardware", iconId: "chip", status: "future", scope: "shared" },
  { label: "Dados", slug: "dados", iconId: "database", status: "future", scope: "editorial" },
];

export function getOfficialCategoryIcon(slug: string, scope?: OfficialCategoryIcon["scope"]) {
  return officialCategoryIcons.find((item) => item.slug === slug && (!scope || item.scope === scope || item.scope === "shared"));
}
