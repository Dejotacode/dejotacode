export const storeCategoryLabels: Record<string, string> = {
  linux: "Linux",
  setup: "Setup",
  programacao: "Programação",
  criadores: "Criadores",
  "ferramentas-digitais": "Ferramentas digitais",
};

const storePhotorealVisuals: Record<string, string> = {
  elevenlabs: "/assets/resources/items/elevenlabs.webp",
  metricool: "/assets/resources/items/metricool.webp",
  nordvpn: "/assets/resources/items/nordvpn.webp",
  "fifine-am8-usb-xlr": "/assets/store/fifine-am8-usb-xlr.webp",
  "sandisk-portable-ssd-1tb": "/assets/store/sandisk-portable-ssd-1tb.webp",
  "baseus-fm11-10000mah": "/assets/store/baseus-fm11-10000mah.webp",
  "ugreen-hub-usb-c-6-em-1": "/assets/store/ugreen-hub-usb-c-6-em-1.webp",
  "baseus-fc11-power-bank": "/assets/store/baseus-fc11-power-bank.webp",
  "gshield-hub-usb-c-6-em-1": "/assets/store/gshield-hub-usb-c-6-em-1.webp",
  "logitech-pebble-2-m350s": "/assets/store/logitech-pebble-2-m350s.webp",
};

const storeSpecificFallbacks: Record<string, string> = {
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
