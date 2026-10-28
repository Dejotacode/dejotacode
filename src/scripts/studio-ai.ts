export {};

type ProductRef = { id: string; title: string; editorialStatus: string };
type RecordItem = {
  slug: string; title: string; description: string; category: string; type: string; difficulty: string;
  draft: boolean; tags: string[]; publishedAt: string; body?: string; truncated?: boolean;
  seo: { words: number; h2: number; internalLinks: number; issues: string[] };
  monetization: { usedProducts: ProductRef[]; opportunities: ProductRef[] };
};

const data = JSON.parse(document.querySelector<HTMLScriptElement>("#studio-ai-data")?.textContent || "[]") as RecordItem[];
const bySlug = new Map(data.map((item) => [item.slug, item]));
const postSelect = document.querySelector<HTMLInputElement>("[data-ai-post]")!;
const postSearch = document.querySelector<HTMLInputElement>("[data-ai-post-search]")!;
const postList = document.querySelector<HTMLElement>("[data-ai-post-list]")!;
const taskSelect = document.querySelector<HTMLInputElement>("[data-ai-task]")!;
const extra = document.querySelector<HTMLTextAreaElement>("[data-ai-extra]")!;
const output = document.querySelector<HTMLElement>("[data-ai-output]")!;
const promptBox = document.querySelector<HTMLTextAreaElement>("[data-ai-prompt]")!;
const contextTitle = document.querySelector<HTMLElement>("[data-ai-context-title]")!;
const meta = document.querySelector<HTMLElement>("[data-ai-meta]")!;
const signals = document.querySelector<HTMLElement>("[data-ai-signals]")!;

const taskInstruction: Record<string, string> = {
  editorial: "Revise clareza, estrutura, ordem dos argumentos e adequação para o público. Proponha mudanças pontuais, sem reescrever por reescrever.",
  claims: "Identifique alegações que exigem fonte, teste, data ou qualificação. Separe fato presente no contexto, inferência e item que precisa de verificação externa.",
  seo: "Sugira melhorias editoriais de SEO com base no conteúdo fornecido. Não invente volume de busca, posição, CTR, tráfego ou qualquer dado externo.",
  money: "Revise se as relações de monetização declaradas são coerentes com o artigo. Não invente afiliados, links, testes, preços, descontos ou experiência de uso.",
  media: "Crie um briefing visual para capa e mídia de apoio seguindo a identidade DejotaCode. Não gere a imagem; descreva objetivo, conceito, elementos, texto curto e riscos de interpretação.",
  final: "Faça uma revisão final pré-publicação: clareza, consistência, alegações, SEO editorial, monetização, transparência e pendências. Entregue uma lista priorizada de ações.",
};

const esc = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
const selectedRecord = () => bySlug.get(postSelect.value);
const checked = (name: string) => document.querySelector<HTMLInputElement>(`[data-ai-context="${name}"]`)?.checked ?? false;

const closePostList = () => {
  postList.hidden = true;
  postSearch.setAttribute("aria-expanded", "false");
};

const choosePost = (item: RecordItem) => {
  postSelect.value = item.slug;
  postSearch.value = item.title;
  closePostList();
  renderContext();
};

const renderPostList = (term = "") => {
  const normalized = term.trim().toLocaleLowerCase("pt-BR");
  const matches = data.filter((item) => !normalized || `${item.title} ${item.slug} ${item.category}`.toLocaleLowerCase("pt-BR").includes(normalized)).slice(0, 10);
  postList.replaceChildren();
  for (const item of matches) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "option");
    button.dataset.aiPostOption = item.slug;
    button.className = "studio-ai-combobox__option";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const metaLine = document.createElement("small");
    metaLine.textContent = `${item.draft ? "Rascunho" : "Publicado"} · ${item.category}`;
    button.append(title, metaLine);
    button.addEventListener("click", () => choosePost(item));
    postList.append(button);
  }
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "studio-ai-combobox__empty";
    empty.textContent = "Nenhum conteúdo encontrado.";
    postList.append(empty);
  }
  postList.hidden = false;
  postSearch.setAttribute("aria-expanded", "true");
};

const renderContext = () => {
  const item = selectedRecord();
  if (!item) return;
  contextTitle.textContent = item.title;
  meta.innerHTML = `<span>${esc(item.draft ? "Rascunho" : "Publicado")}</span><span>${esc(item.category)}</span><span>${item.seo.words} palavras</span><span>${esc(item.publishedAt)}</span>`;
  const seo = item.seo.issues.length ? item.seo.issues.map((issue) => `<li>${esc(issue)}</li>`).join("") : "<li>Sem alertas do diagnóstico interno.</li>";
  const products = item.monetization.usedProducts.length ? item.monetization.usedProducts.map((p) => `<li>${esc(p.title)} · ${esc(p.editorialStatus)}</li>`).join("") : "<li>Nenhum produto relacionado no artigo.</li>";
  const opps = item.monetization.opportunities.length ? item.monetization.opportunities.map((p) => `<li>${esc(p.title)} · relação declarada pendente</li>`).join("") : "<li>Nenhuma relação pendente declarada.</li>";
  signals.innerHTML = `<article><strong>SEO interno</strong><ul>${seo}</ul></article><article><strong>Monetização atual</strong><ul>${products}</ul></article><article><strong>Oportunidades declaradas</strong><ul>${opps}</ul></article>`;
};

const listProducts = (items: ProductRef[]) => items.length ? items.map((p) => `- ${p.id} | ${p.title} | status editorial: ${p.editorialStatus}`).join("\n") : "- Nenhum";

const ensureBody = async (item: RecordItem) => {
  if (item.body !== undefined) return;
  const response = await fetch(`/admin/data/posts/${encodeURIComponent(item.slug)}.json`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Falha ao carregar ${item.slug}`);
  const payload = await response.json() as { body?: string };
  const body = payload.body ?? "";
  item.body = body.slice(0, 14000);
  item.truncated = body.length > 14000;
};

const buildPrompt = () => {
  const item = selectedRecord();
  if (!item) return "";
  const sections = [
    "# DejotaCode Studio — pacote de contexto para IA",
    "",
    "## Regras obrigatórias",
    "- Não invente teste, uso, experiência, métrica, venda, resultado, preço, desconto ou parceria.",
    "- Quando algo não estiver comprovado no contexto, marque como pendente de verificação.",
    "- Produto não testado deve permanecer descrito como pesquisado/avaliado quando aplicável.",
    "- Markdown é a fonte editorial; sugestões não autorizam alteração de arquivo.",
    "- Não publique, não faça merge e não transforme sugestão em ação sem confirmação humana.",
    "- Separe claramente fato presente no contexto, inferência e recomendação.",
    "",
    "## Tarefa",
    taskInstruction[taskSelect.value] || taskInstruction.editorial,
    "",
    "## Conteúdo selecionado",
    `- slug: ${item.slug}`,
    `- título: ${item.title}`,
    `- descrição: ${item.description}`,
    `- status: ${item.draft ? "rascunho" : "publicado"}`,
    `- categoria: ${item.category}`,
    `- tipo: ${item.type}`,
    `- dificuldade: ${item.difficulty}`,
    `- data: ${item.publishedAt}`,
    `- tags: ${item.tags.join(", ") || "nenhuma"}`,
  ];

  if (checked("seo")) sections.push("", "## Diagnóstico SEO interno", `- palavras: ${item.seo.words}`, `- H2: ${item.seo.h2}`, `- links internos: ${item.seo.internalLinks}`, `- alertas: ${item.seo.issues.join("; ") || "nenhum"}`);
  if (checked("money")) sections.push("", "## Monetização", "### Produtos já relacionados", listProducts(item.monetization.usedProducts), "", "### Relações declaradas ainda pendentes", listProducts(item.monetization.opportunities));
  if (checked("body")) sections.push("", "## Corpo do artigo", item.truncated ? "> Contexto truncado pelo Studio em 14.000 caracteres para esta preparação.\n" : "", item.body || "[corpo indisponível]");
  if (extra.value.trim()) sections.push("", "## Instrução adicional do operador", extra.value.trim());
  sections.push("", "## Formato de resposta", "Entregue primeiro os achados, depois as sugestões. Para cada sugestão, indique o motivo e se depende de verificação externa ou de aprovação humana.");
  return sections.join("\n");
};

const build = async () => {
  const item = selectedRecord();
  const button = document.querySelector<HTMLButtonElement>("[data-ai-build]");
  if (!item || !button) return;
  const original = button.textContent || "Gerar pacote de contexto";
  button.disabled = true;
  button.textContent = checked("body") ? "Carregando conteúdo…" : "Gerando pacote…";
  try {
    if (checked("body")) await ensureBody(item);
    promptBox.value = buildPrompt();
    output.hidden = false;
    promptBox.style.height = "auto";
    promptBox.style.height = `${Math.min(Math.max(promptBox.scrollHeight, 360), 760)}px`;
    output.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    output.hidden = false;
    promptBox.value = "Não foi possível carregar o corpo do artigo pelo endpoint local. Nenhum dado foi enviado e nenhuma alteração foi feita.";
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
};

document.querySelector<HTMLButtonElement>("[data-ai-build]")?.addEventListener("click", () => void build());
document.querySelector<HTMLButtonElement>("[data-ai-copy]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget as HTMLButtonElement;
  try { await navigator.clipboard.writeText(promptBox.value); button.textContent = "Pacote copiado"; }
  catch { button.textContent = "Cópia bloqueada"; }
  window.setTimeout(() => { button.textContent = "Copiar pacote"; }, 1800);
});
document.querySelector<HTMLButtonElement>("[data-ai-download]")?.addEventListener("click", () => {
  const item = selectedRecord();
  const blob = new Blob([promptBox.value], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url; anchor.download = `ia-${item?.slug || "dejotacode"}.md`; anchor.click();
  URL.revokeObjectURL(url);
});
postSearch.addEventListener("focus", () => renderPostList(postSearch.value));
postSearch.addEventListener("input", () => {
  postSelect.value = "";
  renderPostList(postSearch.value);
});
postSearch.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePostList();
  if (event.key === "ArrowDown") {
    event.preventDefault();
    postList.querySelector<HTMLButtonElement>("button")?.focus();
  }
});
postList.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  if (!(target instanceof HTMLButtonElement)) return;
  const options = [...postList.querySelectorAll<HTMLButtonElement>("button")];
  const index = options.indexOf(target);
  if (event.key === "ArrowDown") { event.preventDefault(); options[Math.min(index + 1, options.length - 1)]?.focus(); }
  if (event.key === "ArrowUp") { event.preventDefault(); if (index <= 0) postSearch.focus(); else options[index - 1]?.focus(); }
  if (event.key === "Escape") { closePostList(); postSearch.focus(); }
});
document.addEventListener("click", (event) => {
  const target = event.target as Node;
  if (!document.querySelector("[data-ai-combobox]")?.contains(target)) closePostList();
});

document.querySelectorAll<HTMLButtonElement>("[data-ai-task-option]").forEach((button) => {
  button.addEventListener("click", () => {
    taskSelect.value = button.dataset.aiTaskOption || "editorial";
    document.querySelectorAll<HTMLButtonElement>("[data-ai-task-option]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-checked", active ? "true" : "false");
    });
  });
});

if (data[0]) choosePost(data[0]);
else renderContext();
