export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "affiliate_click"
  | "store_view"
  | "store_category_view"
  | "store_product_view"
  | "store_guide_view"
  | "store_related_article_click"
  | "store_setup_click"
  | "lead_submit"
  | "contact_submit"
  | "form_start"
  | "guide_access"
  | "trail_start"
  | "trail_lesson_click"
  | "trail_complete";

type AnalyticsPayload = {
  event: AnalyticsEvent;
  path: string;
  campaign?: string;
};

const normalizeApiBase = (raw: string) => {
  const value = raw.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    const isLocalHost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    const isHttps = url.protocol === "https:";
    const isLocalHttp = isLocalHost && url.protocol === "http:";
    if (!isHttps && !isLocalHttp) return null;
    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
};

const cleanCampaign = (value: string | undefined) =>
  (value?.trim() ?? "").slice(0, 100);

const cleanAttributionPart = (value: string | null) =>
  (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 28);

const acquisitionSessionKey = "dejotacode:acquisition";
const storeOriginSessionKey = "dejotacode:store-origin";

const getAcquisitionCampaign = () => {
  const params = new URLSearchParams(window.location.search);
  const source = cleanAttributionPart(params.get("utm_source"));
  const medium = cleanAttributionPart(params.get("utm_medium"));
  const campaign = cleanAttributionPart(params.get("utm_campaign"));

  const taggedCampaign = source
    ? cleanCampaign(["acq", source, medium, campaign].filter(Boolean).join(":"))
    : "";

  if (taggedCampaign) {
    try {
      window.sessionStorage.setItem(acquisitionSessionKey, taggedCampaign);
    } catch {}
    return taggedCampaign;
  }

  try {
    return cleanCampaign(window.sessionStorage.getItem(acquisitionSessionKey) ?? undefined);
  } catch {
    return "";
  }
};

const getStoreOrigin = () => {
  try {
    return cleanCampaign(window.sessionStorage.getItem(storeOriginSessionKey) ?? undefined);
  } catch {
    return "";
  }
};

const setStoreOrigin = (origin: string) => {
  const normalized = cleanCampaign(origin);
  if (!normalized) return;
  try {
    window.sessionStorage.setItem(storeOriginSessionKey, normalized);
  } catch {}
};

const clearStoreOrigin = () => {
  try {
    window.sessionStorage.removeItem(storeOriginSessionKey);
  } catch {}
};

const sendAnalytics = (apiBase: string, payload: AnalyticsPayload) => {
  fetch(`${apiBase}/api/analytics`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
};

export const sendAnalyticsEvent = (
  rawApiBase: string,
  event: AnalyticsEvent,
  campaign?: string,
) => {
  const apiBase = normalizeApiBase(rawApiBase);
  if (!apiBase) return;

  const normalizedCampaign = cleanCampaign(campaign);
  sendAnalytics(apiBase, {
    event,
    path: window.location.pathname,
    ...(normalizedCampaign ? { campaign: normalizedCampaign } : {}),
  });
};

const getStorePageEvent = (path: string): AnalyticsEvent | null => {
  if (path === "/store/" || path === "/store") return "store_view";

  if (
    [
      "/store/linux/",
      "/store/setup/",
      "/store/programacao/",
      "/store/criadores/",
      "/store/ferramentas-digitais/",
    ].includes(path)
  ) {
    return "store_category_view";
  }

  if (path.startsWith("/store/guias/")) return "store_guide_view";

  if (
    path === "/store/como-avaliamos/" ||
    path === "/store/setup-do-dejota/"
  ) {
    return null;
  }

  if (/^\/store\/[^/]+\/$/.test(path)) return "store_product_view";

  return null;
};

export const prepareAnalytics = (rawApiBase: string) => {
  const acquisitionCampaign = getAcquisitionCampaign();
  const storeOrigin = getStoreOrigin();

  sendAnalyticsEvent(
    rawApiBase,
    "page_view",
    acquisitionCampaign || undefined,
  );

  const storePageEvent = getStorePageEvent(window.location.pathname);
  if (storePageEvent) {
    sendAnalyticsEvent(
      rawApiBase,
      storePageEvent,
      storeOrigin || acquisitionCampaign || undefined,
    );
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const originLink =
      target.closest<HTMLElement>("[data-store-origin]");
    if (originLink?.dataset.storeOrigin) {
      setStoreOrigin(originLink.dataset.storeOrigin);
    }

    const relatedArticle =
      target.closest<HTMLElement>("[data-store-related-article]");
    if (relatedArticle) {
      sendAnalyticsEvent(
        rawApiBase,
        "store_related_article_click",
        cleanCampaign(relatedArticle.dataset.storeRelatedArticle),
      );
    }

    const setupLink =
      target.closest<HTMLElement>("[data-store-setup]");
    if (setupLink) {
      sendAnalyticsEvent(
        rawApiBase,
        "store_setup_click",
        cleanCampaign(setupLink.dataset.storeSetup),
      );
    }

    const cta =
      target.closest<HTMLElement>("[data-analytics-cta]");
    if (!cta) return;

    const campaign = cleanCampaign(cta.dataset.analyticsCta);
    if (!campaign) return;

    sendAnalyticsEvent(rawApiBase, "cta_click", campaign);

    const affiliateProvider =
      cleanAttributionPart(cta.dataset.analyticsAffiliateProvider ?? null);
    const affiliateId =
      cleanAttributionPart(cta.dataset.analyticsAffiliateId ?? null);

    if (!affiliateProvider || !affiliateId) return;

    const acquisition = getAcquisitionCampaign();
    const origin = getStoreOrigin();

    const affiliateCampaign = cleanCampaign(
      ["affiliate", affiliateProvider, affiliateId, origin, acquisition]
        .filter(Boolean)
        .join(":"),
    );

    sendAnalyticsEvent(
      rawApiBase,
      "affiliate_click",
      affiliateCampaign,
    );

    clearStoreOrigin();
  });
};
