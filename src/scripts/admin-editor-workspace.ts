import { logoutAdmin, requireAdminSession } from "./admin-session";

type MediaItem = {
  id: number;
  objectKey: string;
  contentType: string;
  sizeBytes: number;
  altText: string;
  createdAt: string;
};

type EditablePost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  type: string;
  readingTime: number;
  difficulty: string;
  featured: boolean;
  draft: boolean;
  tags: string[];
  body: string;
};

const root = document.querySelector<HTMLElement>("[data-api]");
const api = root?.dataset.api;
const form = document.querySelector<HTMLFormElement>("[data-editor-form]");
const select = document.querySelector<HTMLSelectElement>("[data-post-select]");
const status = document.querySelector<HTMLOutputElement>("[data-status]");
const createPrButton = document.querySelector<HTMLButtonElement>("[data-create-pr]");
const githubState = document.querySelector<HTMLElement>("[data-github-state]");
const prLink = document.querySelector<HTMLAnchorElement>("[data-pr-link]");
const publishPanel = document.querySelector<HTMLElement>("[data-publish-panel]");
const publishTitle = document.querySelector<HTMLElement>("[data-publish-title]");
const publishState = document.querySelector<HTMLElement>("[data-publish-state]");
const workflowLink = document.querySelector<HTMLAnchorElement>("[data-workflow-link]");
const refreshPrButton = document.querySelector<HTMLButtonElement>("[data-refresh-pr]");
const mergePrButton = document.querySelector<HTMLButtonElement>("[data-merge-pr]");
const mediaFile = document.querySelector<HTMLInputElement>("[data-media-file]");
const mediaAlt = document.querySelector<HTMLInputElement>("[data-media-alt]");
const uploadImageButton = document.querySelector<HTMLButtonElement>("[data-upload-image]");
const mediaStatus = document.querySelector<HTMLOutputElement>("[data-media-status]");
const mediaGrid = document.querySelector<HTMLElement>("[data-media-grid]");
const mediaLibraryStatus = document.querySelector<HTMLOutputElement>("[data-media-library-status]");
const refreshMediaButton = document.querySelector<HTMLButtonElement>("[data-refresh-media]");
const mediaSearch = document.querySelector<HTMLInputElement>("[data-media-search]");
const mediaContext = document.querySelector<HTMLSelectElement>("[data-media-context]");
const mediaUsage = document.querySelector<HTMLSelectElement>("[data-media-usage]");
const postsNode = document.querySelector<HTMLScriptElement>("#editor-posts");
const posts: EditablePost[] = postsNode?.textContent ? JSON.parse(postsNode.textContent) : [];

let csrf = "";
let generatedMarkdown = "";
let mediaItems: MediaItem[] = [];
let currentPrNumber = Number(sessionStorage.getItem("dejotacode-editor-pr") || 0) || 0;
let currentPrHeadSha = "";
let ciPollTimer: number | undefined;
let ciPollStartedAt = 0;

const ciPollIntervalMs = 5_000;
const ciPollMaxDurationMs = 3 * 60_000;
const field = (name: string) => form?.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
const checked = (name: string) => Boolean((form?.elements.namedItem(name) as HTMLInputElement | null)?.checked);
const value = (name: string) => field(name)?.value.trim() ?? "";

const escapeHtml = (input: string) => input
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const inlineMarkdown = (input: string) => escapeHtml(input)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>")
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g, '<a href="$2">$1</a>');

const renderMarkdown = (source: string) => {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const output: string[] = [];
  let inCode = false;
  let language = "";
  let code: string[] = [];
  let list: "ul" | "ol" | "" = "";

  const closeList = () => {
    if (!list) return;
    output.push(`</${list}>`);
    list = "";
  };

  for (const line of lines) {
    const fence = line.match(/^```([\w-]*)\s*$/);
    if (fence) {
      closeList();
      if (!inCode) {
        inCode = true;
        language = fence[1] ?? "";
        code = [];
      } else {
        output.push(`<pre data-language="${escapeHtml(language)}"><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        inCode = false;
        language = "";
        code = [];
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (!line.trim()) {
      closeList();
      continue;
    }

    const image = line.match(/^!\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)$/);
    if (image) {
      closeList();
      output.push(`<figure class="editor-preview-image"><img src="${escapeHtml(image[2])}" alt="${escapeHtml(image[1])}" loading="lazy" decoding="async"></figure>`);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      if (list !== "ul") {
        closeList();
        list = "ul";
        output.push("<ul>");
      }
      output.push(`<li>${inlineMarkdown(unordered[1])}</li>`);
      continue;
    }

    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      if (list !== "ol") {
        closeList();
        list = "ol";
        output.push("<ol>");
      }
      output.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      continue;
    }

    const quote = line.match(/^>\s?(.+)$/);
    if (quote) {
      closeList();
      output.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }

    closeList();
    output.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  closeList();
  if (inCode) output.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  return output.join("");
};

const slugify = (input: string) => input
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const categoryLabels: Record<string, string> = {
  programacao: "Programação",
  "linux-seguranca": "Linux & Segurança",
  "inteligencia-artificial": "Inteligência Artificial",
  "tecnologia-pratica": "Tecnologia prática",
};

const updatePreview = () => {
  const title = value("title") || "Título do conteúdo";
  const description = value("description") || "A descrição aparecerá aqui conforme você preencher o formulário.";
  const category = categoryLabels[value("category")] ?? "Tecnologia prática";
  const type = value("type") || "artigo";
  const body = value("body");

  document.querySelector<HTMLElement>("[data-preview-title]")!.textContent = title;
  document.querySelector<HTMLElement>("[data-preview-description]")!.textContent = description;
  document.querySelector<HTMLElement>("[data-preview-eyebrow]")!.textContent = `${category} · ${type}`;
  const previewBody = document.querySelector<HTMLElement>("[data-preview-body]");
  if (previewBody) previewBody.innerHTML = body ? renderMarkdown(body) : "<p>Escreva no campo Markdown para visualizar a estrutura do artigo.</p>";
  const previewState = document.querySelector<HTMLElement>("[data-preview-state]");
  if (previewState) previewState.textContent = checked("draft") ? "Rascunho" : "Pronto para revisão";
};

const updateCounters = () => {
  const titleCount = document.querySelector<HTMLElement>('[data-count="title"]');
  const descriptionCount = document.querySelector<HTMLElement>('[data-count="description"]');
  if (titleCount) titleCount.textContent = `${value("title").length}/90`;
  if (descriptionCount) descriptionCount.textContent = `${value("description").length}/180`;
};

const yamlString = (input: string) => JSON.stringify(input);

const buildMarkdown = () => {
  if (!form?.reportValidity()) {
    if (status) status.textContent = "Revise os campos obrigatórios antes de gerar o arquivo.";
    return "";
  }

  const tags = value("tags").split(",").map((tag) => tag.trim()).filter(Boolean);
  generatedMarkdown = [
    "---",
    `title: ${yamlString(value("title"))}`,
    `description: ${yamlString(value("description"))}`,
    `publishedAt: ${value("publishedAt")}`,
    `category: ${value("category")}`,
    `type: ${value("type")}`,
    `readingTime: ${Number(value("readingTime")) || 1}`,
    `difficulty: ${value("difficulty")}`,
    `featured: ${checked("featured")}`,
    `draft: ${checked("draft")}`,
    `tags: [${tags.map((tag) => yamlString(tag)).join(", ")}]`,
    "---",
    "",
    value("body"),
    "",
  ].join("\n");

  if (status) status.textContent = `Markdown válido preparado para src/content/posts/${value("slug")}.md`;
  return generatedMarkdown;
};

const fillPost = (post: EditablePost) => {
  if (!form) return;
  field("title")!.value = post.title;
  field("slug")!.value = post.slug;
  field("description")!.value = post.description;
  field("publishedAt")!.value = post.publishedAt;
  field("category")!.value = post.category;
  field("type")!.value = post.type;
  field("readingTime")!.value = String(post.readingTime);
  field("difficulty")!.value = post.difficulty;
  field("tags")!.value = post.tags.join(", ");
  field("body")!.value = post.body;
  (field("featured") as HTMLInputElement).checked = post.featured;
  (field("draft") as HTMLInputElement).checked = post.draft;
  generatedMarkdown = "";
  updateCounters();
  updatePreview();
  renderMediaLibrary();
  if (status) status.textContent = `Editando ${post.slug}.md localmente; nada foi publicado.`;
};

const resetForm = () => {
  form?.reset();
  if (field("publishedAt")) field("publishedAt")!.value = new Date().toISOString().slice(0, 10);
  if (field("readingTime")) field("readingTime")!.value = "5";
  if (field("category")) field("category")!.value = "tecnologia-pratica";
  if (field("type")) field("type")!.value = "artigo";
  if (field("difficulty")) field("difficulty")!.value = "iniciante";
  generatedMarkdown = "";
  if (select) select.value = "";
  updateCounters();
  updatePreview();
  renderMediaLibrary();
  if (status) status.textContent = "Novo conteúdo iniciado. Nenhuma alteração foi publicada.";
};

const copyGenerated = async () => {
  const markdown = generatedMarkdown || buildMarkdown();
  if (!markdown) return;
  try {
    await navigator.clipboard.writeText(markdown);
    if (status) status.textContent = "Markdown copiado para a área de transferência.";
  } catch {
    if (status) status.textContent = "O navegador bloqueou a cópia automática. Use Baixar .md.";
  }
};

const downloadGenerated = () => {
  const markdown = generatedMarkdown || buildMarkdown();
  if (!markdown) return;
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${value("slug")}.md`;
  link.click();
  URL.revokeObjectURL(url);
  if (status) status.textContent = `${value("slug")}.md preparado para revisão local.`;
};

const insertAtCursor = (textarea: HTMLTextAreaElement, text: string) => {
  const start = textarea.selectionStart ?? textarea.value.length;
  const end = textarea.selectionEnd ?? start;
  const before = textarea.value.slice(0, start);
  const after = textarea.value.slice(end);
  const prefix = before && !before.endsWith("\n") ? "\n\n" : "";
  const suffix = after && !after.startsWith("\n") ? "\n\n" : "";
  const insertion = `${prefix}${text}${suffix}`;
  textarea.value = `${before}${insertion}${after}`;
  const cursor = before.length + insertion.length;
  textarea.setSelectionRange(cursor, cursor);
  textarea.focus();
};

const mediaPublicUrl = (objectKey: string) => api ? new URL(`/api/media/public/${objectKey}`, `${api}/`).toString() : "";
const sanitizeMarkdownAlt = (alt: string) => alt.replace(/[\[\]]/g, "").replace(/\s+/g, " ").trim();

const formatBytes = (bytes: number) => {
  if (!Number.isFinite(bytes) || bytes < 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const formatMediaDate = (input: string) => {
  const normalized = input.includes("T") ? input : `${input.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? input : new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(date);
};

const normalizedSearch = (input: string) => input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const mediaKeysFromMarkdown = (markdown: string) => {
  const keys = new Set<string>();
  const pattern = /https:\/\/api\.dejotacode\.com\.br\/api\/media\/public\/([^\s)]+)/g;
  for (const match of markdown.matchAll(pattern)) if (match[1]) keys.add(match[1]);
  return keys;
};

const canonicalMediaKeys = new Set(posts.flatMap((post) => [...mediaKeysFromMarkdown(post.body)]));
const currentPostMediaKeys = () => mediaKeysFromMarkdown(value("body"));

const insertMediaItem = (item: MediaItem) => {
  const body = field("body");
  if (!(body instanceof HTMLTextAreaElement)) return;
  const alt = sanitizeMarkdownAlt(item.altText || "Imagem editorial");
  if (alt.length < 3) {
    if (mediaLibraryStatus) mediaLibraryStatus.textContent = "Esta imagem não possui texto alternativo válido para reutilização.";
    return;
  }
  insertAtCursor(body, `![${alt}](${mediaPublicUrl(item.objectKey)})`);
  generatedMarkdown = "";
  updatePreview();
  renderMediaLibrary();
  if (mediaLibraryStatus) mediaLibraryStatus.textContent = "Imagem existente inserida no Markdown.";
};

const filteredMediaItems = () => {
  const query = normalizedSearch(mediaSearch?.value ?? "");
  const context = mediaContext?.value ?? "all";
  const usage = mediaUsage?.value ?? "all";
  const currentSlug = value("slug");

  return mediaItems
    .filter((item) => item.contentType.startsWith("image/"))
    .filter((item) => {
      const isPostImage = item.objectKey.startsWith("posts/");
      const isCurrentPost = Boolean(currentSlug) && item.objectKey.startsWith(`posts/${currentSlug}/`);
      if (context === "current" && !isCurrentPost) return false;
      if (context === "general" && isPostImage) return false;
      const isUsed = canonicalMediaKeys.has(item.objectKey);
      if (usage === "used" && !isUsed) return false;
      if (usage === "unused" && isUsed) return false;
      return !query || normalizedSearch(`${item.altText} ${item.objectKey}`).includes(query);
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

const renderMediaLibrary = () => {
  if (!mediaGrid) return;
  mediaGrid.replaceChildren();
  const images = filteredMediaItems();
  const totalImages = mediaItems.filter((item) => item.contentType.startsWith("image/")).length;

  if (!images.length) {
    if (mediaLibraryStatus) mediaLibraryStatus.textContent = totalImages
      ? "Nenhuma imagem corresponde aos filtros atuais."
      : "A biblioteca ainda não possui imagens disponíveis.";
    return;
  }

  for (const item of images) {
    const card = document.createElement("article");
    card.className = "editor-media-card";

    const image = document.createElement("img");
    image.src = mediaPublicUrl(item.objectKey);
    image.alt = item.altText || "Imagem editorial sem texto alternativo";
    image.loading = "lazy";
    image.decoding = "async";

    const info = document.createElement("div");
    info.className = "editor-media-card__info";
    const alt = document.createElement("strong");
    alt.textContent = item.altText || "Sem texto alternativo";
    const meta = document.createElement("span");
    meta.textContent = `${formatBytes(Number(item.sizeBytes))} · ${formatMediaDate(item.createdAt)}`;
    const usageLabel = document.createElement("span");
    usageLabel.className = "editor-media-card__usage";
    const usedCanonically = canonicalMediaKeys.has(item.objectKey);
    const usedInCurrentPost = currentPostMediaKeys().has(item.objectKey);
    usageLabel.textContent = usedInCurrentPost
      ? "Usada neste post"
      : usedCanonically
        ? "Em uso no conteúdo canônico"
        : "Não referenciada no Markdown canônico";
    usageLabel.dataset.state = usedInCurrentPost ? "current" : usedCanonically ? "used" : "unused";
    info.append(alt, meta, usageLabel);

    const actions = document.createElement("div");
    actions.className = "editor-media-card__actions";

    const insertButton = document.createElement("button");
    insertButton.className = "button button-primary";
    insertButton.type = "button";
    insertButton.textContent = "Inserir";
    insertButton.addEventListener("click", () => insertMediaItem(item));

    const copyButton = document.createElement("button");
    copyButton.className = "button";
    copyButton.type = "button";
    copyButton.textContent = "Copiar URL";
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(mediaPublicUrl(item.objectKey));
        if (mediaLibraryStatus) mediaLibraryStatus.textContent = "URL pública da imagem copiada.";
      } catch {
        if (mediaLibraryStatus) mediaLibraryStatus.textContent = "O navegador bloqueou a cópia automática da URL.";
      }
    });

    actions.append(insertButton, copyButton);
    card.append(image, info, actions);
    mediaGrid.append(card);
  }

  if (mediaLibraryStatus) mediaLibraryStatus.textContent = `${images.length} de ${totalImages} imagem(ns) exibida(s), mais recentes primeiro.`;
};

const loadMediaLibrary = async () => {
  if (!api || !mediaGrid) return;
  if (refreshMediaButton) refreshMediaButton.disabled = true;
  if (mediaLibraryStatus) mediaLibraryStatus.textContent = "Atualizando biblioteca…";
  try {
    const response = await fetch(`${api}/api/media/cms`, { credentials: "include" });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error?.message ?? "Não foi possível carregar a biblioteca de imagens.");
    mediaItems = Array.isArray(payload.data?.items) ? payload.data.items : [];
    renderMediaLibrary();
  } catch (error) {
    mediaGrid.replaceChildren();
    if (mediaLibraryStatus) mediaLibraryStatus.textContent = error instanceof Error ? error.message : "Não foi possível carregar a biblioteca de imagens.";
  } finally {
    if (refreshMediaButton) refreshMediaButton.disabled = false;
  }
};

const uploadAndInsertImage = async () => {
  if (!api || !mediaFile || !mediaAlt || !uploadImageButton) return;
  const file = mediaFile.files?.[0];
  const alt = mediaAlt.value.trim();
  const slug = value("slug");
  const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
  const maxImageSize = 10 * 1024 * 1024;

  if (!slug) { if (mediaStatus) mediaStatus.textContent = "Defina o slug do conteúdo antes de enviar a imagem."; return; }
  if (!file) { if (mediaStatus) mediaStatus.textContent = "Selecione uma imagem para enviar."; return; }
  if (!allowedImageTypes.has(file.type)) { if (mediaStatus) mediaStatus.textContent = "Use JPG, PNG, WebP ou AVIF."; return; }
  if (file.size > maxImageSize) { if (mediaStatus) mediaStatus.textContent = "A imagem deve ter no máximo 10 MB."; return; }
  if (alt.length < 3) { if (mediaStatus) mediaStatus.textContent = "Escreva um texto alternativo descritivo."; return; }

  const body = field("body");
  if (!(body instanceof HTMLTextAreaElement)) return;

  uploadImageButton.disabled = true;
  if (mediaStatus) mediaStatus.textContent = "Enviando imagem ao R2…";
  try {
    const upload = new FormData();
    upload.append("file", file);
    upload.append("alt", alt);
    upload.append("postSlug", slug);
    const response = await fetch(`${api}/api/media/cms`, {
      method: "POST",
      credentials: "include",
      headers: { "X-CSRF-Token": csrf },
      body: upload,
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error?.message ?? "Não foi possível enviar a imagem.");
    const publicPath = String(result.data?.publicPath ?? "");
    if (!publicPath) throw new Error("A API não retornou o caminho público da imagem.");
    const imageUrl = new URL(publicPath, `${api}/`).toString();
    const markdownAlt = sanitizeMarkdownAlt(alt);
    if (markdownAlt.length < 3) throw new Error("O texto alternativo precisa conter uma descrição válida.");
    insertAtCursor(body, `![${markdownAlt}](${imageUrl})`);
    mediaFile.value = "";
    mediaAlt.value = "";
    generatedMarkdown = "";
    updatePreview();
    await loadMediaLibrary();
    if (mediaStatus) mediaStatus.textContent = "Imagem enviada e inserida no Markdown.";
  } catch (error) {
    if (mediaStatus) mediaStatus.textContent = error instanceof Error ? error.message : "Não foi possível enviar a imagem.";
  } finally {
    uploadImageButton.disabled = false;
  }
};

const configureGithub = async () => {
  if (!api || !createPrButton || !githubState) return;
  try {
    const response = await fetch(`${api}/api/editor/status`, { credentials: "include" });
    if (!response.ok) {
      createPrButton.disabled = true;
      githubState.textContent = "GitHub: integração indisponível.";
      return;
    }
    const payload = await response.json();
    const configured = Boolean(payload.data?.configured);
    createPrButton.disabled = !configured;
    githubState.textContent = configured
      ? `GitHub: conectado a ${payload.data?.repository ?? "Dejotacode/dejotacode"}.`
      : "GitHub: integração segura ainda não configurada no Worker.";
  } catch {
    createPrButton.disabled = true;
    githubState.textContent = "GitHub: não foi possível validar a integração agora.";
  }
};

const stopCiPolling = () => {
  if (ciPollTimer !== undefined) window.clearTimeout(ciPollTimer);
  ciPollTimer = undefined;
  ciPollStartedAt = 0;
};

const refreshPullRequest = async (showLoading = true) => {
  if (!api || !currentPrNumber || !publishPanel || !publishState || !mergePrButton) return null;
  publishPanel.hidden = false;
  if (publishTitle) publishTitle.textContent = `Pull Request #${currentPrNumber}`;
  if (showLoading) publishState.textContent = "Consultando GitHub e CI…";
  mergePrButton.disabled = true;

  try {
    const response = await fetch(`${api}/api/editor/pull-request/${currentPrNumber}`, { credentials: "include" });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error?.message ?? "Não foi possível consultar o Pull Request.");
    const data = payload.data ?? {};
    currentPrHeadSha = String(data.headSha ?? "");
    const ciLabel = data.ci === "success" ? "CI aprovado" : data.ci === "failure" ? "CI com falha" : data.ci === "pending" ? "CI em andamento" : "CI indisponível";
    const stateLabel = data.merged ? "mesclado" : data.state === "open" ? "aberto" : "fechado";
    publishState.textContent = `Estado: ${stateLabel} · ${ciLabel}${data.mergeable === false ? " · conflito detectado" : ""}.`;
    if (workflowLink && data.workflowUrl) { workflowLink.href = data.workflowUrl; workflowLink.hidden = false; }
    if (prLink && data.url) { prLink.href = data.url; prLink.hidden = false; }
    const canMerge = data.state === "open" && !data.merged && data.ci === "success" && data.mergeable === true && currentPrHeadSha;
    mergePrButton.hidden = Boolean(data.merged || data.state !== "open");
    mergePrButton.disabled = !canMerge;
    return data;
  } catch (error) {
    publishState.textContent = error instanceof Error ? error.message : "Não foi possível consultar o Pull Request.";
    return null;
  }
};

const startCiPolling = () => {
  stopCiPolling();
  ciPollStartedAt = Date.now();
  const poll = async () => {
    const data = await refreshPullRequest(false);
    if (!data || data.merged || data.state !== "open" || data.ci !== "pending") {
      stopCiPolling();
      return;
    }
    if (Date.now() - ciPollStartedAt >= ciPollMaxDurationMs) {
      stopCiPolling();
      if (publishState) publishState.textContent = "CI ainda em andamento. Atualização automática pausada; use Atualizar status para consultar novamente.";
      return;
    }
    ciPollTimer = window.setTimeout(poll, ciPollIntervalMs);
  };
  ciPollTimer = window.setTimeout(poll, ciPollIntervalMs);
};

const mergePullRequest = async () => {
  if (!api || !currentPrNumber || !mergePrButton || !publishState) return;
  if (!currentPrHeadSha) {
    publishState.textContent = "Atualize o status do Pull Request antes de publicar.";
    return;
  }
  if (!confirm(`Mesclar o Pull Request #${currentPrNumber} na main e iniciar a publicação?`)) return;

  mergePrButton.disabled = true;
  publishState.textContent = "Validando CI e solicitando merge…";
  try {
    const response = await fetch(`${api}/api/editor/pull-request/${currentPrNumber}/merge`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf },
      body: JSON.stringify({ confirmation: "PUBLICAR", expectedHeadSha: currentPrHeadSha }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error?.message ?? "Não foi possível publicar o conteúdo.");
    publishState.textContent = "Merge concluído. O Cloudflare Pages iniciou o fluxo de publicação da main.";
    if (status) status.textContent = `Pull Request #${currentPrNumber} mesclado com segurança.`;
    await refreshPullRequest();
    stopCiPolling();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Não foi possível publicar o conteúdo.";
    await refreshPullRequest();
    publishState.textContent = `${message} Atualize o status antes de tentar novamente.`;
  }
};

const createPullRequest = async () => {
  if (!api || !createPrButton) return;
  const markdown = generatedMarkdown || buildMarkdown();
  if (!markdown) return;

  createPrButton.disabled = true;
  if (status) status.textContent = "Criando branch editorial e Pull Request…";
  if (prLink) prLink.hidden = true;
  try {
    const response = await fetch(`${api}/api/editor/pull-request`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf },
      body: JSON.stringify({ slug: value("slug"), title: value("title"), markdown }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error?.message ?? "Não foi possível criar o Pull Request.");
    currentPrNumber = Number(payload.data?.pullRequestNumber ?? 0);
    if (currentPrNumber) sessionStorage.setItem("dejotacode-editor-pr", String(currentPrNumber));
    if (status) status.textContent = `Pull Request #${currentPrNumber || ""} criado para revisão.`;
    if (prLink && payload.data?.pullRequestUrl) { prLink.href = payload.data.pullRequestUrl; prLink.hidden = false; }
    const prState = await refreshPullRequest();
    if (prState?.ci === "pending") startCiPolling();
  } catch (error) {
    if (status) status.textContent = error instanceof Error ? error.message : "Não foi possível criar o Pull Request.";
  } finally {
    await configureGithub();
  }
};

const start = async () => {
  if (!api) return;
  const session = await requireAdminSession(api);
  if (!session) return;
  csrf = session.csrf;
  resetForm();
  await Promise.all([configureGithub(), loadMediaLibrary()]);
  if (currentPrNumber) {
    const prState = await refreshPullRequest();
    if (prState?.ci === "pending") startCiPolling();
  }
};

document.querySelector("[data-new-content]")?.addEventListener("click", resetForm);
document.querySelector("[data-generate]")?.addEventListener("click", () => buildMarkdown());
document.querySelector("[data-copy-markdown]")?.addEventListener("click", copyGenerated);
document.querySelector("[data-download]")?.addEventListener("click", downloadGenerated);
uploadImageButton?.addEventListener("click", uploadAndInsertImage);
refreshMediaButton?.addEventListener("click", loadMediaLibrary);
mediaSearch?.addEventListener("input", renderMediaLibrary);
mediaContext?.addEventListener("change", renderMediaLibrary);
mediaUsage?.addEventListener("change", renderMediaLibrary);
createPrButton?.addEventListener("click", createPullRequest);
refreshPrButton?.addEventListener("click", async () => {
  const prState = await refreshPullRequest();
  if (prState?.ci === "pending") startCiPolling();
  else stopCiPolling();
});
mergePrButton?.addEventListener("click", mergePullRequest);

select?.addEventListener("change", () => {
  if (!select.value) {
    resetForm();
    return;
  }
  const post = posts.find((item) => item.slug === select.value);
  if (post) fillPost(post);
});

form?.addEventListener("input", (event) => {
  const target = event.target;
  let slugChanged = target instanceof HTMLInputElement && target.name === "slug";
  if (target instanceof HTMLInputElement && target.name === "title" && !value("slug")) {
    field("slug")!.value = slugify(target.value);
    slugChanged = true;
  }
  generatedMarkdown = "";
  updateCounters();
  updatePreview();
  if (slugChanged || (target instanceof HTMLTextAreaElement && target.name === "body")) renderMediaLibrary();
});

document.querySelector("[data-logout]")?.addEventListener("click", async () => {
  if (!api) return;
  await logoutAdmin(api, csrf);
  location.href = "/admin/";
});

start().catch(() => {
  if (status) status.textContent = "Não foi possível validar a sessão administrativa.";
});
