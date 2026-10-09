import type { CollectionEntry } from "astro:content";

const providerLabels: Record<string, string> = { amazon: "Amazon", mercadolivre: "Mercado Livre", shopee: "Shopee", hotmart: "Hotmart", other: "Parceiro" };

/** Mesma resolução já usada nas fichas: ofertas ativas, com fallback para links legados. */
export function getStoreMerchants(data: CollectionEntry<"storeProducts">["data"]) {
  const active = data.offers.filter(offer => offer.active).map(offer => ({
    name: providerLabels[offer.provider] ?? "Parceiro", provider: offer.provider,
    href: offer.href, label: offer.label, lastChecked: offer.lastChecked,
  }));
  if (active.length) return active;
  return Object.entries(data.affiliateLinks ?? {}).flatMap(([provider, href]) => href ? [{
    name: providerLabels[provider] ?? "Parceiro", provider, href,
    label: undefined, lastChecked: undefined,
  }] : []);
}
