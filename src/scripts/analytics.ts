type AnalyticsEvent = "page_view" | "cta_click";

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

export const prepareAnalytics = (rawApiBase: string) => {
  const apiBase = normalizeApiBase(rawApiBase);

  if (!apiBase) return;

  const path = window.location.pathname;

  sendAnalytics(apiBase, {
    event: "page_view",
    path,
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const cta =
      target.closest<HTMLElement>("[data-analytics-cta]");

    if (!cta) return;

    const campaign =
      cleanCampaign(cta.dataset.analyticsCta);

    if (!campaign) return;

    sendAnalytics(apiBase, {
      event: "cta_click",
      path,
      campaign,
    });
  });
};
