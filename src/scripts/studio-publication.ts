export {};

type Dependency = { path: string; reason: string; status: string };
type Candidate = {
  slug: string;
  title: string;
  draft: boolean;
  postPath: string;
  postStatus: string;
  image: string;
  dependencies: Dependency[];
  issues: string[];
  warnings: string[];
  packageType: "markdown" | "package";
  storeProducts: string[];
  relatedPosts: string[];
};

const root = document.querySelector<HTMLElement>("[data-publication-page]");
const dataNode = document.querySelector<HTMLScriptElement>("#studio-publication-data");
if (!root || !dataNode) throw new Error("Studio publication data unavailable");

const rows: Candidate[] = JSON.parse(dataNode.textContent || "[]");
const list = root.querySelector<HTMLElement>("[data-publish-list]")!;
const empty = root.querySelector<HTMLElement>("[data-publish-empty]")!;
const search = root.querySelector<HTMLInputElement>("[data-publish-search]")!;
const filter = root.querySelector<HTMLSelectElement>("[data-publish-filter]")!;
const dialog = root.querySelector<HTMLDialogElement>("[data-publish-dialog]")!;
const detail = root.querySelector<HTMLElement>("[data-publish-detail]")!;
const apiState = root.querySelector<HTMLElement>("[data-api-state]")!;
const apiMessage = root.querySelector<HTMLElement>("[data-api-message]")!;
const api = root.dataset.api || "";
const workspaceSafe = root.dataset.workspaceSafe === "true";

const esc = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char] || char));

const readiness = (row: Candidate) => {
  if (row.draft || row.issues.length) return "blocked";
  if (row.packageType === "package") return "package";
  return "ready";
};

const labelFor = (row: Candidate) => {
  const state = readiness(row);
  if (state === "blocked") return "Revisar antes de publicar";
  if (state === "package") return "Pacote isolado necessário";
  return "Markdown elegível";
};

const manifest = (row: Candidate) => {
  const files = [row.postPath, ...row.dependencies.map((item) => item.path)];
  return [
    `# Manifesto de publicação — ${row.title}`,
    `Slug: ${row.slug}`,
    `Tipo: ${row.packageType === "package" ? "pacote isolado" : "Markdown via Worker"}`,
    "",
    "Arquivos:",
    ...files.map((file) => `- ${file}`),
    "",
    row.issues.length ? `Bloqueios editoriais: ${row.issues.join("; ")}` : "Bloqueios editoriais: nenhum",
    row.warnings.length ? `Avisos: ${row.warnings.join("; ")}` : "Avisos: nenhum",
    "",
    "Regras: revisar diff; executar check/build/QA; PR para main; merge somente com CI verde e HEAD revisado.",
  ].join("\n");
};

const openDetail = (row: Candidate) => {
  const state = readiness(row);
  const dependencies = row.dependencies.length
    ? `<ul>${row.dependencies.map((item) => `<li><code>${esc(item.path)}</code><small>${esc(item.reason)} · ${esc(item.status)}</small></li>`).join("")}</ul>`
    : `<p class="studio-publish-ok">Nenhuma dependência local adicional detectada.</p>`;
  const issues = row.issues.length ? `<ul>${row.issues.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : `<p class="studio-publish-ok">Sem bloqueio editorial detectado.</p>`;
  const warnings = row.warnings.length ? `<ul>${row.warnings.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : `<p class="studio-publish-ok">Sem avisos adicionais.</p>`;
  detail.innerHTML = `
    <p class="studio-eyebrow">Manifesto de publicação</p>
    <h2>${esc(row.title)}</h2>
    <p class="studio-publish-detail__slug"><code>${esc(row.slug)}</code></p>
    <div class="studio-publish-detail__status is-${state}">${esc(labelFor(row))}</div>
    <div class="studio-publish-detail__grid">
      <section><h3>Arquivo principal</h3><p><code>${esc(row.postPath)}</code> · ${esc(row.postStatus)}</p></section>
      <section><h3>Dependências do pacote</h3>${dependencies}</section>
      <section><h3>Bloqueios editoriais</h3>${issues}</section>
      <section><h3>Avisos</h3>${warnings}</section>
    </div>
    <div class="studio-publish-detail__actions">
      <a class="studio-button" href="/admin/conteudo/?post=${encodeURIComponent(row.slug)}">Abrir no Conteúdo</a>
      <button class="studio-button" type="button" data-copy-manifest>Copiar manifesto</button>
      <a class="studio-button${!workspaceSafe || state !== "ready" ? " is-disabled" : ""}" href="/admin/editor/" ${!workspaceSafe || state !== "ready" ? 'aria-disabled="true" tabindex="-1"' : ""}>Abrir publicação assistida</a>
    </div>
    <p class="studio-publish-note">O Studio não faz merge ou deploy por conta própria. O fluxo oficial continua exigindo PR, CI aprovado, SHA revisado e confirmação explícita.</p>`;
  detail.querySelector<HTMLButtonElement>("[data-copy-manifest]")?.addEventListener("click", async () => {
    const button = detail.querySelector<HTMLButtonElement>("[data-copy-manifest]")!;
    try { await navigator.clipboard.writeText(manifest(row)); button.textContent = "Manifesto copiado"; }
    catch { button.textContent = "Cópia bloqueada pelo navegador"; }
  });
  dialog.showModal();
};

const render = () => {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  const mode = filter.value;
  const visible = rows.filter((row) => {
    const state = readiness(row);
    const matchesText = !term || `${row.title} ${row.slug}`.toLocaleLowerCase("pt-BR").includes(term);
    const matchesMode = mode === "all" || (mode === "ready" && state === "ready") || (mode === "draft" && row.draft) || (mode === "package" && row.packageType === "package");
    return matchesText && matchesMode;
  });
  empty.hidden = visible.length > 0;
  list.replaceChildren(...visible.map((row) => {
    const card = document.createElement("article");
    const state = readiness(row);
    card.className = "studio-publish-card";
    card.innerHTML = `<div><span class="studio-publish-card__status is-${state}">${esc(labelFor(row))}</span><h3>${esc(row.title)}</h3><p><code>${esc(row.postPath)}</code></p></div><div class="studio-publish-card__meta"><span>${row.dependencies.length} dependência(s)</span><span>${row.warnings.length} aviso(s)</span><span>${row.issues.length} bloqueio(s)</span></div><button class="studio-button" type="button">Revisar manifesto</button>`;
    card.querySelector("button")?.addEventListener("click", () => openDetail(row));
    return card;
  }));
};

const checkApi = async () => {
  if (!api) { apiState.textContent = "Sem endpoint"; apiMessage.textContent = "PUBLIC_API_URL não está configurada."; return; }
  try {
    const response = await fetch(`${api}/api/editor/status`, { credentials: "include" });
    if (response.status === 401 || response.status === 403) {
      apiState.textContent = "Autenticação necessária";
      apiMessage.textContent = "Worker respondeu. Entre no Admin para verificar a integração GitHub; nenhuma publicação foi liberada.";
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const configured = Boolean(payload.data?.configured);
    apiState.textContent = configured ? "GitHub conectado" : "GitHub não configurado";
    apiState.classList.toggle("is-ok", configured);
    apiMessage.textContent = configured ? `Worker conectado a ${payload.data?.repository ?? "Dejotacode/dejotacode"}. Nenhuma alteração foi feita.` : "Worker respondeu, mas a integração GitHub não está pronta para criar PR.";
  } catch {
    apiState.textContent = "Indisponível";
    apiMessage.textContent = `Worker editorial não respondeu em ${api}. O gate permanece somente leitura.`;
  }
};

search.addEventListener("input", render);
filter.addEventListener("change", render);
root.querySelector("[data-publish-close]")?.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
render();
void checkApi();
