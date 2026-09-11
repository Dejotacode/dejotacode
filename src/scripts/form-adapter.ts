type ApiPayload = { data?: { message?: string }; error?: { code?: string; message?: string } };
type FormState = "idle" | "loading" | "success" | "error";

const setState = (form: HTMLFormElement, output: HTMLOutputElement, state: FormState, message: string) => {
  form.dataset.state = state;
  output.dataset.state = state;
  output.textContent = message;
};

const getApiBase = (form: HTMLFormElement) => {
  const raw = form.dataset.apiBase?.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol !== "https:" && !(local && url.protocol === "http:")) return null;
    return url.toString().replace(/\/$/, "");
  } catch { return null; }
};

const readPayload = async (response: Response): Promise<ApiPayload> => {
  try { return (await response.json()) as ApiPayload; } catch { return {}; }
};

const responseError = (response: Response, payload: ApiPayload) => {
  if (response.status === 429) return "Muitas tentativas. Aguarde um minuto e tente novamente.";
  if (response.status >= 500) return "O serviço está temporariamente indisponível. Tente novamente mais tarde.";
  return payload.error?.message ?? "Não foi possível enviar. Revise os campos e tente novamente.";
};

export const preparePublicForm = (selector: string) => {
  const form = document.querySelector<HTMLFormElement>(selector);
  if (!form) return;
  const output = form.querySelector<HTMLOutputElement>("output");
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!output || !button) return;

  const apiBase = getApiBase(form);
  if (!apiBase) {
    button.disabled = true;
    setState(form, output, "idle", "Envio em preparação. Nenhum dado será transmitido nesta etapa.");
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || form.dataset.state === "loading") return;
    const formData = new FormData(form);
    if (String(formData.get("website") ?? "").trim()) {
      form.reset();
      setState(form, output, "success", "Dados recebidos.");
      return;
    }
    formData.delete("website");
    const body: Record<string, FormDataEntryValue | boolean> = Object.fromEntries(formData.entries());
    body.consent = formData.get("consent") === "true";
    const endpoint = form.dataset.endpoint;
    if (!endpoint?.startsWith("/api/")) return;

    const originalLabel = button.textContent;
    button.disabled = true;
    button.textContent = "Enviando…";
    setState(form, output, "loading", "Enviando com segurança…");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(`${apiBase}${endpoint}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: controller.signal });
      const payload = await readPayload(response);
      if (!response.ok) throw new Error(responseError(response, payload));
      form.reset();
      setState(form, output, "success", payload.data?.message ?? form.dataset.success ?? "Enviado com sucesso.");
      document.dispatchEvent(new CustomEvent("dejotacode:conversion", { detail: { type: form.dataset.conversion ?? "form_submit", campaign: String(body.resource ?? "") } }));
    } catch (error) {
      const message = error instanceof DOMException && error.name === "AbortError"
        ? "O envio demorou demais. Verifique sua conexão e tente novamente."
        : error instanceof Error ? error.message : "Não foi possível enviar agora.";
      setState(form, output, "error", message);
    } finally {
      window.clearTimeout(timeout);
      button.disabled = false;
      button.textContent = originalLabel;
    }
  });
};
