export const storeCategoryLabels: Record<string, string> = {
  linux: "Linux",
  setup: "Setup",
  programacao: "Programação",
  criadores: "Criadores",
  "ferramentas-digitais": "Ferramentas digitais",
};

const storePhotorealVisuals: Record<string, string> = {
  nordpass: "/assets/store/nordpass-sem-texto-v1-assinatura-v2.webp",
  "sandisk-ultra-flair-32gb": "/assets/store/sandisk-ultra-flair-32gb-assinatura-v2.webp",
  "leadlovers-hotmart": "/assets/store/leadlovers-hotmart-assinatura-v2.webp",
  "programacao-iniciante-avancado-hotmart": "/assets/store/programacao-iniciante-avancado-hotmart-assinatura-v2.webp",
  "seguranca-digital-essencial-hotmart": "/assets/store/seguranca-digital-essencial-hotmart-assinatura-v2.webp",
  "hospedagem-primeiro-site": "/assets/store/hospedagem-primeiro-site-assinatura-v2.webp",
  "hotmart-extensoes": "/assets/store/hotmart-extensoes-assinatura-v2.webp",
  elevenlabs: "/assets/resources/items/elevenlabs.webp",
  metricool: "/assets/store/metricool-sem-texto-v2-assinatura-v2.webp",
  nordvpn: "/assets/store/nordvpn-sem-texto-v2-assinatura-v2.webp",
  "elementor-site-builder": "/assets/store/elementor-site-builder.webp",
  "hostinger-hospedagem": "/assets/store/hostinger-hospedagem.webp",
  "logitech-mx-keys-mini": "/assets/store/logitech-mx-keys-mini.webp",
  "logitech-mx-anywhere-3s": "/assets/store/logitech-mx-anywhere-3s.webp",
  "fifine-am8-usb-xlr": "/assets/store/fifine-am8-usb-xlr.webp",
  "sandisk-portable-ssd-1tb": "/assets/store/sandisk-portable-ssd-1tb.webp",
  "baseus-fm11-10000mah": "/assets/store/baseus-fm11-10000mah-sem-texto-v2-assinatura-v2.webp",
  "ugreen-hub-usb-c-6-em-1": "/assets/store/ugreen-hub-usb-c-6-em-1-sem-texto-v2-assinatura-v2.webp",
  "baseus-fc11-power-bank": "/assets/store/baseus-fc11-power-bank-sem-texto-v2-assinatura-v2.webp",
  "gshield-hub-usb-c-6-em-1": "/assets/store/gshield-hub-usb-c-6-em-1-sem-texto-v2-assinatura-v2.webp",
  "logitech-pebble-2-m350s": "/assets/store/logitech-pebble-2-m350s-sem-texto-v2-assinatura-v2.webp",
};

const storeSpecificFallbacks: Record<string, string> = {
  nordpass: "/assets/resources/category-seguranca.svg",
  "baseus-fc11-power-bank": "/assets/store/baseus-fc11-power-bank.svg",
  "baseus-fm11-10000mah": "/assets/store/baseus-fm11-10000mah.svg",
  "fifine-am8-usb-xlr": "/assets/store/fifine-am8-usb-xlr.svg",
  "gshield-hub-usb-c-6-em-1": "/assets/store/gshield-hub-usb-c-6-em-1.svg",
  "logitech-pebble-2-m350s": "/assets/store/logitech-pebble-2-m350s.svg",
  "sandisk-portable-ssd-1tb": "/assets/store/sandisk-portable-ssd-1tb.svg",
  "ugreen-hub-usb-c-6-em-1": "/assets/store/ugreen-hub-usb-c-6-em-1.svg",
};

const storeCategoryFallbacks: Record<string, string> = {
  linux: "/assets/resources/category-aprendizado.svg",
  setup: "/assets/resources/category-infraestrutura.svg",
  programacao: "/assets/resources/category-desenvolvimento.svg",
  criadores: "/assets/resources/category-digitais.svg",
  "ferramentas-digitais": "/assets/resources/category-digitais.svg",
};

export function resolveStoreVisual(id: string, category: string) {
  const categoryFallback = storeCategoryFallbacks[category] ?? "/assets/resources/category-digitais.svg";
  const fallbackSrc = storeSpecificFallbacks[id] ?? categoryFallback;
  return {
    src: storePhotorealVisuals[id] ?? storeSpecificFallbacks[id] ?? categoryFallback,
    fallbackSrc,
    categoryLabel: storeCategoryLabels[category] ?? category,
  };
}
