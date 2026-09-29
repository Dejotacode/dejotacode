export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
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

    const isLocalHost =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1";

    const isHttps = url.protocol === "https:";
    const isLocalHttp =
      isLocalHost &&
      url.protocol === "http:";

    if (!isHttps && !isLocalHttp) {
      return null;
    }

    return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
};

const cleanCampaign = (value: string | undefined) => {
  const campaign = value?.trim() ?? "";

  return campaign.slice(0, 100);
};

const acquisitionSessionKey = "dejotacode:acquisition";

const cleanAttributionPart = (value: string | null) =>
  (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 28);

const getAcquisitionCampaign = () => {
  const params = new URLSearchParams(window.location.search);
  const source = cleanAttributionPart(params.get("utm_source"));
  const medium = cleanAttributionPart(params.get("utm_medium"));
  const campaign = cleanAttributionPart(params.get("utm_campaign"));

  const taggedCampaign = source
    ? cleanCampaign(
        ["acq", source, medium, campaign]
          .filter(Boolean)
          .join(":"),
      )
    : "";

  if (taggedCampaign) {
    try {
      window.sessionStorage.setItem(acquisitionSessionKey, taggedCampaign);
    } catch {}

    return taggedCampaign;
  }

  try {
    return cleanCampaign(
      window.sessionStorage.getItem(acquisitionSessionKey) ?? undefined,
    );
  } catch {
    return "";
  }
};

const sendAnalytics = (
  apiBase: string,
  payload: AnalyticsPayload,
) => {
  fetch(`${apiBase}/api/analytics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
    ...(normalizedCampaign
      ? { campaign: normalizedCampaign }
      : {}),
  });
};

export const prepareAnalytics = (rawApiBase: string) => {
  const acquisitionCampaign = getAcquisitionCampaign();

  sendAnalyticsEvent(
    rawApiBase,
    "page_view",
    acquisitionCampaign || undefined,
  );

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const cta =
      target.closest<HTMLElement>("[data-analytics-cta]");

    if (!cta) return;

    const campaign =
      cleanCampaign(cta.dataset.analyticsCta);

    if (!campaign) return;

    sendAnalyticsEvent(
      rawApiBase,
      "cta_click",
      campaign,
    );
  });
};
