import { parseDocument } from "yaml";
export {};

type PostRecord = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  type: string;
  readingTime: number;
  difficulty: string;
  draft: boolean;
  hasCover: boolean;
  cover?: string;
  fallbackCover?: string;
  coverImage?: string;
  coverAlt?: string;
  coverCaption?: string;
  tags: string[];
  storeProducts: string[];
  relatedPosts: string[];
  frontmatter?: string;
  body?: string;
};

const root = document.querySelector<HTMLElement>("[data-content-studio]");
const dataNode = document.querySelector<HTMLScriptElement>("#studio-posts-data");
if (!root || !dataNode) throw new Error("Studio content data unavailable");

const posts: PostRecord[] = JSON.parse(dataNode.textContent || "[]");
const list = root.querySelector<HTMLElement>("[data-post-list]")!;
const listStatus = root.querySelector<HTMLElement>("[data-list-status]")!;
const search = root.querySelector<HTMLInputElement>("[data-post-search]")!;
const form = root.querySelector<HTMLFormElement>("[data-editor-form]")!;
const empty = root.querySelector<HTMLElement>("[data-editor-empty]")!;
const heading = root.querySelector<HTMLElement>("[data-editor-heading]")!;
const state = root.querySelector<HTMLElement>("[data-editor-state]")!;
const message = root.querySelector<HTMLElement>("[data-editor-message]")!;
const markdownOutput = root.querySelector<HTMLTextAreaElement>("[data-final-markdown]")!;
const preview = root.querySelector<HTMLElement>('[data-panel="preview"]')!;
const wordStatus = root.querySelector<HTMLElement>("[data-editor-words]")!;
const charStatus = root.querySelector<HTMLElement>("[data-editor-chars]")!;

let current: PostRecord | null = null;
let revision: string | null = null;
let baseline = "";
let dirty = false;
let saving = false;
let slugEdited = false;
let filter: "all" | "draft" | "published" | "missing-cover" = "all";
type EditorSnapshot = { value: string; start: number; end: number };
let editorHistory: EditorSnapshot[] = [];
let editorHistoryIndex = -1;
let restoringHistory = false;

const field = <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(name: string) =>
  form.elements.namedItem(name) as T;
const bodyField = field<HTMLTextAreaElement>("body");

const snapshot = (): EditorSnapshot => ({ value: bodyField.value, start: bodyField.selectionStart, end: bodyField.selectionEnd });
const resetHistory = () => { editorHistory = [snapshot()]; editorHistoryIndex = 0; };
const recordHistory = () => {
  if (restoringHistory) return;
  const next = snapshot();
  const currentSnapshot = editorHistory[editorHistoryIndex];
  if (currentSnapshot?.value === next.value) return;
  editorHistory = editorHistory.slice(0, editorHistoryIndex + 1);
  editorHistory.push(next);
  if (editorHistory.length > 120) editorHistory.shift();
  editorHistoryIndex = editorHistory.length - 1;
};
const restoreHistory = (offset: number) => {
  const target = editorHistoryIndex + offset;
  if (target < 0 || target >= editorHistory.length) return;
  restoringHistory = true;
  editorHistoryIndex = target;
  const item = editorHistory[target];
  bodyField.value = item.value;
  bodyField.focus();
  bodyField.setSelectionRange(item.start, item.end);
  restoringHistory = false;
  syncDerivedViews();
};

const slugify = (value: string) => value
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const csv = (value: string) => value.split(",").map(item=>item.trim()).filter(Boolean);
const buildFrontmatter = () => {
 const doc=parseDocument(current?.frontmatter||"featured: false");
 const values=formFields();
 for(const [key,value] of Object.entries(values)){
  if(["coverImage","coverAlt","coverCaption"].includes(key)&&!values.coverImage)doc.delete(key);
  else doc.set(key,value);
 }
 return doc.toString().trimEnd();
};
const buildMarkdown = () => `---\n${buildFrontmatter()}\n---\n${bodyField.value}`;

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

const inlineMarkdown = (value: string) => escapeHtml(value)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>")
  .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g, '<a href="$2">$1</a>');

const renderMarkdown = (source: string) => {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const html: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let codeFence = false;
  let codeLanguage = "";
  let codeLines: string[] = [];
  const closeList = () => { if (listType) { html.push(`</${listType}>`); listType = null; } };
  const tableSeparator = /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/;
  const cells = (line: string) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trimEnd();
    const fence = line.match(/^```\s*([\w+-]*)\s*$/);
    if (fence) {
      closeList();
      if (!codeFence) { codeFence = true; codeLanguage = fence[1] || ""; codeLines = []; }
      else {
        const language = codeLanguage ? ` class="language-${escapeHtml(codeLanguage)}"` : "";
        html.push(`<pre><code${language}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeFence = false; codeLanguage = ""; codeLines = [];
      }
      continue;
    }
    if (codeFence) { codeLines.push(raw); continue; }
    if (!line.trim()) { closeList(); continue; }

    if (line.includes("|") && index + 1 < lines.length && tableSeparator.test(lines[index + 1])) {
      closeList();
      const header = cells(line);
      const bodyRows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        bodyRows.push(cells(lines[index]));
        index += 1;
      }
      index -= 1;
      html.push(`<div class="studio-preview-table"><table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)$/);
    if (image) { closeList(); html.push(`<figure><img src="${escapeHtml(image[2])}" alt="${escapeHtml(image[1])}" loading="lazy" /><figcaption>${escapeHtml(image[1])}</figcaption></figure>`); continue; }
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) { closeList(); const level = headingMatch[1].length; html.push(`<h${level}>${inlineMarkdown(headingMatch[2])}</h${level}>`); continue; }
    const unordered = line.match(/^[-*]\s+(.+)$/);
    if (unordered) { if (listType !== "ul") { closeList(); html.push("<ul>"); listType = "ul"; } html.push(`<li>${inlineMarkdown(unordered[1])}</li>`); continue; }
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (ordered) { if (listType !== "ol") { closeList(); html.push("<ol>"); listType = "ol"; } html.push(`<li>${inlineMarkdown(ordered[1])}</li>`); continue; }
    if (/^>\s?/.test(line)) { closeList(); html.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`); continue; }
    closeList(); html.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  if (codeFence) html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  return html.join("\n");
};

const syncDerivedViews = () => {
  refreshContext();
  const canvas=root.querySelector<HTMLElement>("[data-editor-canvas]");
  if(canvas&&!canvas.contains(document.activeElement))renderVisualEditor(canvas);
  markdownOutput.value = buildMarkdown();
  const plain = bodyField.value.trim();
  const words = plain ? plain.split(/\s+/).filter(Boolean).length : 0;
  wordStatus.textContent = `${words} palavra${words === 1 ? "" : "s"}`;
  charStatus.textContent = `${bodyField.value.length} caracteres`;
  preview.innerHTML = `
    <article class="studio-preview-article">
      <p class="studio-eyebrow">${escapeHtml(field<HTMLSelectElement>("category").selectedOptions[0]?.textContent || "Conteúdo")}</p>
      <h1>${escapeHtml(field<HTMLInputElement>("title").value || "Sem título")}</h1>
      <p class="studio-preview-article__description">${escapeHtml(field<HTMLTextAreaElement>("description").value || "")}</p>
      <div class="studio-preview-article__meta"><span>${escapeHtml(field<HTMLSelectElement>("type").value)}</span><span>${escapeHtml(field<HTMLInputElement>("readingTime").value || "0")} min</span><span>${field<HTMLInputElement>("draft").checked ? "Rascunho" : "Não rascunho"}</span></div>
      <div class="studio-preview-article__body">${renderMarkdown(field<HTMLTextAreaElement>("body").value)}</div>
    </article>`;
};

const replaceSelection = (before: string, after = "", fallback = "texto") => {
  const start = bodyField.selectionStart;
  const end = bodyField.selectionEnd;
  const selected = bodyField.value.slice(start, end) || fallback;
  bodyField.setRangeText(`${before}${selected}${after}`, start, end, "select");
  bodyField.focus();
  bodyField.dispatchEvent(new Event("input", { bubbles: true }));
};

const prefixSelectedLines = (prefix: string | ((index: number) => string)) => {
  const start = bodyField.selectionStart;
  const end = bodyField.selectionEnd;
  const lineStart = bodyField.value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
  const lineEndIndex = bodyField.value.indexOf("\n", end);
  const lineEnd = lineEndIndex === -1 ? bodyField.value.length : lineEndIndex;
  const selected = bodyField.value.slice(lineStart, lineEnd) || "item";
  const replaced = selected.split("\n").map((line, index) => `${typeof prefix === "function" ? prefix(index) : prefix}${line}`).join("\n");
  bodyField.setRangeText(replaced, lineStart, lineEnd, "select");
  bodyField.focus();
  bodyField.dispatchEvent(new Event("input", { bubbles: true }));
};

const insertBlock = (text: string) => {
  const start = bodyField.selectionStart;
  const end = bodyField.selectionEnd;
  const before = start > 0 && bodyField.value[start - 1] !== "\n" ? "\n\n" : "";
  const after = end < bodyField.value.length && bodyField.value[end] !== "\n" ? "\n\n" : "";
  bodyField.setRangeText(`${before}${text}${after}`, start, end, "end");
  bodyField.focus();
  bodyField.dispatchEvent(new Event("input", { bubbles: true }));
};

const runMarkdownAction = (action: string) => {
  if(applyVisualAction(action))return;
  root.querySelector<HTMLButtonElement>('[data-editor-tab="markdown"]')?.click();
  switch (action) {
    case "undo": restoreHistory(-1); break;
    case "redo": restoreHistory(1); break;
    case "bold": replaceSelection("**", "**", "texto em negrito"); break;
    case "italic": replaceSelection("*", "*", "texto em itálico"); break;
    case "code": replaceSelection("`", "`", "código"); break;
    case "h2": prefixSelectedLines("## "); break;
    case "h3": prefixSelectedLines("### "); break;
    case "quote": prefixSelectedLines("> "); break;
    case "ul": prefixSelectedLines("- "); break;
    case "ol": prefixSelectedLines((index) => `${index + 1}. `); break;
    case "link": replaceSelection("[", "](/caminho-ou-url)", "texto do link"); break;
    case "image": insertBlock("![Descrição da imagem](/assets/posts/imagem.webp)"); break;
    case "codeblock": insertBlock("```\nseu código aqui\n```"); break;
    case "table": insertBlock("| Coluna 1 | Coluna 2 |\n| --- | --- |\n| Valor 1 | Valor 2 |"); break;
  }
  syncDerivedViews();
};


const loadPostSource = async (post: PostRecord) => {
 const response=await fetch("/__studio-local/posts?slug="+encodeURIComponent(post.slug),{cache:"no-store"});
 const payload=await response.json();
 if(!response.ok)throw new Error(payload.error||"Falha ao carregar o arquivo.");
 Object.assign(post,payload.fields,{frontmatter:payload.frontmatter,body:payload.body,publishedAt:String(payload.fields.publishedAt).slice(0,10)});
 revision=payload.version;
 return post;
};

const openEditor = async (post: PostRecord | null) => {
  if(saving){message.textContent="Aguarde a gravação antes de trocar de conteúdo.";return;}
  if(dirty && !(await confirmDiscard()))return;
  baseline="";dirty=false;revision=null;root.dataset.editing="true";
  if (post) {
    empty.hidden = false;
    form.hidden = true;
    const title = empty.querySelector("h2");
    const text = empty.querySelector("p");
    if (title) title.textContent = "Carregando conteúdo…";
    if (text) text.textContent = "O corpo Markdown é carregado apenas quando você abre este item.";
    try { await loadPostSource(post); }
    catch {
      if (title) title.textContent = "Não foi possível abrir o conteúdo";
      if (text) text.textContent = "O endpoint local de leitura não respondeu. Nenhum arquivo foi alterado.";
      return;
    }
  }
  current = post;
  slugEdited=Boolean(post);
  empty.hidden = true;
  form.hidden = false;
  field<HTMLInputElement>("title").value = post?.title || "";
  field<HTMLInputElement>("slug").value = post?.slug || "";
  field<HTMLInputElement>("slug").readOnly = Boolean(post);
  field<HTMLTextAreaElement>("description").value = post?.description || "";
  field<HTMLInputElement>("publishedAt").value = post?.publishedAt || new Date().toISOString().slice(0, 10);
  field<HTMLSelectElement>("category").value = post?.category || "tecnologia-pratica";
  field<HTMLSelectElement>("type").value = post?.type || "artigo";
  field<HTMLSelectElement>("difficulty").value = post?.difficulty || "iniciante";
  field<HTMLInputElement>("readingTime").value = String(post?.readingTime || 5);
  field<HTMLInputElement>("tags").value = post?.tags.join(", ") || "";
  field<HTMLInputElement>("storeProducts").value = post?.storeProducts.join(", ") || "";
  field<HTMLInputElement>("relatedPosts").value = post?.relatedPosts.join(", ") || "";
  field<HTMLInputElement>("draft").checked = post?.draft ?? true;
  field<HTMLTextAreaElement>("body").value = post?.body || "";
  field<HTMLInputElement>("coverImage").value=post?.coverImage||"";
  field<HTMLTextAreaElement>("coverAlt").value=post?.coverAlt||"";
  field<HTMLTextAreaElement>("coverCaption").value=post?.coverCaption||"";
  resetHistory();
  heading.textContent = post?.title || "Novo conteúdo";
  state.textContent = post ? (post.draft ? "Rascunho existente" : "Arquivo não rascunho") : "Novo rascunho";
  message.textContent = post ? "Arquivo carregado do projeto local. Salvar grava neste projeto; não publica." : "Novo conteúdo inicia como rascunho e ainda não altera o repositório.";
  root.querySelectorAll<HTMLElement>("[data-post-card]").forEach((card) => card.classList.toggle("is-selected", card.dataset.postCard === post?.slug));
  syncDerivedViews();
  baseline=formSignature();refreshContext();
  history.replaceState(null,"",post?"?post="+encodeURIComponent(post.slug):"?new=1");
};

const renderList = () => {
  const term = search.value.trim().toLowerCase();
  const visible = posts.filter((post) => {
    if (filter === "draft" && !post.draft) return false;
    if (filter === "published" && post.draft) return false;
    if (filter === "missing-cover" && post.hasCover) return false;
    return !term || `${post.title} ${post.slug} ${post.category}`.toLowerCase().includes(term);
  });
  list.replaceChildren();
  visible.forEach((post) => {
    const row=document.createElement("tr");
    row.dataset.postCard=post.slug;
    const title=document.createElement("td");title.textContent=post.title;
    const category=document.createElement("td");category.textContent=post.category.replaceAll("-"," ");
    const status=document.createElement("td");const badge=document.createElement("span");badge.className="studio-final-status";badge.textContent=post.draft?"Rascunho":"Não rascunho";status.append(badge);
    const action=document.createElement("td");const open=document.createElement("button");open.type="button";open.className="studio-button";open.textContent="Abrir";open.setAttribute("aria-label","Abrir "+post.title);open.addEventListener("click",()=>openEditor(post));action.append(open);
    row.append(title,category,status,action);list.append(row);
  });
  if(!visible.length){const row=document.createElement("tr"),cell=document.createElement("td");cell.colSpan=4;cell.textContent="Nenhum conteúdo encontrado neste filtro.";row.append(cell);list.append(row);}
  listStatus.textContent = `${visible.length} de ${posts.length} conteúdo(s)`;
};

root.querySelector<HTMLButtonElement>("[data-new-post]")?.addEventListener("click", () => openEditor(null));
search.addEventListener("input", renderList);
root.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((button) => button.addEventListener("click", () => {
  filter = button.dataset.filter as typeof filter;
  root.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
  renderList();
}));

root.querySelectorAll<HTMLButtonElement>("[data-editor-tab]").forEach((button) => button.addEventListener("click", () => {
  const target = button.dataset.editorTab!;
  syncDerivedViews();
  root.querySelectorAll<HTMLButtonElement>("[data-editor-tab]").forEach((item) => item.classList.toggle("is-active", item === button));
  root.querySelectorAll<HTMLElement>("[data-panel]").forEach((panel) => { panel.hidden = panel.dataset.panel !== target; });
}));

root.querySelectorAll<HTMLButtonElement>("[data-md-action]").forEach((button) => {
  button.addEventListener("click", () => runMarkdownAction(button.dataset.mdAction || ""));
});

bodyField.addEventListener("keydown", (event) => {
  const mod = event.ctrlKey || event.metaKey;
  const key = event.key.toLowerCase();
  let action = "";
  if (mod && !event.shiftKey && key === "z") action = "undo";
  else if (mod && (key === "y" || (event.shiftKey && key === "z"))) action = "redo";
  else if (mod && !event.shiftKey && key === "b") action = "bold";
  else if (mod && !event.shiftKey && key === "i") action = "italic";
  else if (mod && event.shiftKey && key === "k") action = "link";
  else if (mod && event.altKey && key === "2") action = "h2";
  else if (mod && event.altKey && key === "3") action = "h3";
  else if (mod && event.shiftKey && key === "7") action = "ol";
  else if (mod && event.shiftKey && key === "8") action = "ul";
  if (action) { event.preventDefault(); runMarkdownAction(action); }

});

form.addEventListener("input", (event) => {
  const target = event.target;
  if (target === bodyField) recordHistory();
  if (target instanceof HTMLInputElement && target.name==="slug")slugEdited=true;
  if (!current && !slugEdited && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) && target.name === "title") {
    field<HTMLInputElement>("slug").value = slugify(target.value);
  }
  syncDerivedViews();
});

root.querySelector<HTMLButtonElement>("[data-copy-markdown]")?.addEventListener("click", async () => {
  const markdown = buildMarkdown();
  try { await navigator.clipboard.writeText(markdown); message.textContent = "Markdown copiado. Nenhum arquivo foi alterado."; }
  catch { message.textContent = "O navegador bloqueou a cópia automática. Selecione o texto visível no modal Exportar."; }
});

root.querySelector<HTMLButtonElement>("[data-download-markdown]")?.addEventListener("click", () => {
  if (!validateEditor()) return;
  const markdown = buildMarkdown();
  const slug = field<HTMLInputElement>("slug").value.trim();
  const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url; link.download = `${slug}.md`; link.click(); URL.revokeObjectURL(url);
  message.textContent = `Arquivo ${slug}.md preparado. Nenhuma publicação foi feita.`;
});


function formFields() {
 return {title:field<HTMLInputElement>("title").value,description:field<HTMLTextAreaElement>("description").value,publishedAt:field<HTMLInputElement>("publishedAt").value,category:field<HTMLSelectElement>("category").value,type:field<HTMLSelectElement>("type").value,difficulty:field<HTMLSelectElement>("difficulty").value,readingTime:Number(field<HTMLInputElement>("readingTime").value),draft:field<HTMLInputElement>("draft").checked,tags:csv(field<HTMLInputElement>("tags").value),storeProducts:csv(field<HTMLInputElement>("storeProducts").value),relatedPosts:csv(field<HTMLInputElement>("relatedPosts").value),coverImage:field<HTMLInputElement>("coverImage").value,coverAlt:field<HTMLTextAreaElement>("coverAlt").value,coverCaption:field<HTMLTextAreaElement>("coverCaption").value};
}
function formSignature(){return JSON.stringify([field<HTMLInputElement>("slug").value,formFields(),bodyField.value]);}
function refreshContext(){
 const f=formFields(),words=bodyField.value.trim().split(/\s+/).filter(Boolean).length;
 const checks=[["Título entre 30 e 65 caracteres",f.title.length>=30&&f.title.length<=65],["Descrição entre 120 e 165 caracteres",f.description.length>=120&&f.description.length<=165],["Pelo menos um subtítulo H2",/^##\s/m.test(bodyField.value)],["Capa resolvida no mapa editorial",Boolean(current?.hasCover)]];
 const target=root!.querySelector<HTMLElement>("[data-context-checks]");
 if(target){target.replaceChildren();for(const [label,ok] of checks){const p=document.createElement("p");p.textContent=(ok?"OK · ":"Revisar · ")+label;target.append(p);}}
 const titleMirror=root!.querySelector<HTMLInputElement>("[data-seo-title]");
 if(titleMirror)titleMirror.value=f.title;
 const descMirror=root!.querySelector<HTMLTextAreaElement>("[data-seo-description]");
 if(descMirror)descMirror.value=f.description;
 const serpTitle=root!.querySelector<HTMLElement>("[data-serp-title]");
 if(serpTitle)serpTitle.textContent=f.title+" | DejotaCode";
 const serpDescription=root!.querySelector<HTMLElement>("[data-serp-description]");
 if(serpDescription)serpDescription.textContent=f.description;
 const diagnostic=root!.querySelector<HTMLElement>("[data-context-diagnostic]");
 if(diagnostic)diagnostic.textContent=checks.filter(([,ok])=>!ok).length+" critérios para revisar";
 const chosenCover=f.coverImage||current?.fallbackCover||current?.cover;
 field<HTMLTextAreaElement>("coverAlt").required=Boolean(f.coverImage);
 field<HTMLTextAreaElement>("coverCaption").required=Boolean(f.coverImage);
 const cover=root!.querySelector<HTMLImageElement>("[data-current-cover]");
 const coverEmpty=root!.querySelector<HTMLElement>("[data-cover-empty]");
 if(cover){cover.hidden=!chosenCover;if(chosenCover&&cover.getAttribute("src")!==chosenCover)cover.src=chosenCover;}
 if(coverEmpty)coverEmpty.hidden=Boolean(chosenCover);
 const seo=root!.querySelector<HTMLElement>("[data-context-seo]");
 if(seo)seo.textContent=f.title+" | DejotaCode\n\n"+f.description+"\n\n"+words+" palavras · diagnóstico interno, sem nota Google.";
 const status=root!.querySelector<HTMLElement>("[data-context-status]");
 if(status)status.textContent=f.draft?"Rascunho local. Salvar não publica.":"draft: false no arquivo local. Isso não comprova publicação desta versão.";
 dirty=baseline!==""&&baseline!==formSignature();
 const indicator=root!.querySelector<HTMLElement>("[data-save-state]");
 if(indicator){indicator.textContent=dirty?"Alterações não salvas":revision?"Arquivo local":"Novo rascunho";indicator.dataset.state=dirty?"dirty":"loaded";}
}
form.addEventListener("submit",event=>event.preventDefault());
window.addEventListener("beforeunload",event=>{if(dirty||saving){event.preventDefault();}});
root.querySelector("[data-back-library]")?.addEventListener("click",async()=>{
 if(saving){message.textContent="Aguarde a gravação antes de voltar à biblioteca.";return;}
 if(dirty&&!(await confirmDiscard()))return;
 exitFocus();
 dirty=false;baseline="";root.dataset.editing="false";form.hidden=true;empty.hidden=false;current=null;
 history.replaceState(null,"","/admin/conteudo/");root.querySelector<HTMLInputElement>("[data-post-search]")?.focus();
});
root.querySelectorAll<HTMLButtonElement>("[data-toggle-panel]").forEach(button=>button.addEventListener("click",()=>{
 const name=button.dataset.togglePanel!;const key=name==="meta"?"metaHidden":"contextHidden";
 root.dataset[key]=root.dataset[key]==="true"?"false":"true";button.setAttribute("aria-expanded",String(root.dataset[key]!=="true"));button.setAttribute("aria-label",(root.dataset[key]==="true"?"Expandir ":"Recolher ")+(name==="meta"?"informações do artigo":"contexto do artigo"));
}));
root.querySelector<HTMLButtonElement>("[data-focus-editor]")?.addEventListener("click",event=>{
 const on=root.dataset.focus!=="true";root.dataset.focus=String(on);
 document.querySelector("[data-studio-shell]")?.classList.toggle("studio-shell--focus",on);
 (event.currentTarget as HTMLButtonElement).setAttribute("aria-pressed",String(on));
 (event.currentTarget as HTMLButtonElement).textContent=on?"Sair do foco":"Modo foco";
});
root.querySelectorAll<HTMLButtonElement>("[data-context-tab]").forEach(button=>button.addEventListener("click",()=>{
 root.querySelectorAll<HTMLButtonElement>("[data-context-tab]").forEach(b=>b.setAttribute("aria-selected",String(b===button)));
 root.querySelectorAll<HTMLElement>("[data-context-panel]").forEach(p=>p.hidden=p.dataset.contextPanel!==button.dataset.contextTab);
}));
root.querySelector<HTMLButtonElement>("[data-save-post]")?.addEventListener("click",async event=>{
 if(saving||!validateEditor())return;
 saving=true;
 const button=event.currentTarget as HTMLButtonElement;button.disabled=true;
 message.textContent="Salvando no projeto local…";
 const saveLabel=root.querySelector<HTMLElement>("[data-save-state]");if(saveLabel)saveLabel.textContent="Salvando…";
 const signature=formSignature();
 const sentFields=formFields();
 try{
  const response=await fetch("/__studio-local/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:field<HTMLInputElement>("slug").value,expectedVersion:revision,fields:sentFields,body:bodyField.value})});
  const data=await response.json();if(!response.ok)throw new Error(data.error||"Não foi possível salvar.");
  revision=data.version;
  const saved:PostRecord={...sentFields,slug:data.slug,body:data.body,frontmatter:data.frontmatter,hasCover:Boolean(sentFields.coverImage||current?.fallbackCover||current?.cover),cover:sentFields.coverImage||current?.fallbackCover||current?.cover,fallbackCover:current?.fallbackCover};
  if(current)Object.assign(current,saved);else {current=saved;posts.unshift(saved);}
  field<HTMLInputElement>("slug").readOnly=true;baseline=signature;refreshContext();renderList();
  if(saveLabel&&!dirty){saveLabel.textContent="Salvo no projeto";saveLabel.dataset.state="saved";}
  message.textContent=dirty?"Versão enviada salva; há novas alterações nesta tela.":"Salvo no projeto local. Pode reabrir para conferir. Nenhuma publicação foi feita.";
  history.replaceState(null,"","?post="+encodeURIComponent(data.slug));
 }catch(error){if(saveLabel){saveLabel.textContent="Falha ao salvar";saveLabel.dataset.state="error";}message.textContent=error instanceof Error?error.message:"Falha ao salvar. Alterações preservadas nesta tela.";}
 finally{saving=false;button.disabled=false;}
});

root.querySelectorAll<HTMLButtonElement>("[data-editor-tab]").forEach((button,index)=>{
 button.setAttribute("role","tab");button.id="editor-tab-"+button.dataset.editorTab;
 button.setAttribute("aria-controls","editor-panel-"+button.dataset.editorTab);
 button.setAttribute("aria-selected",String(index===0));button.tabIndex=index===0?0:-1;
 button.addEventListener("click",()=>root.querySelectorAll<HTMLButtonElement>("[data-editor-tab]").forEach(b=>{b.setAttribute("aria-selected",String(b===button));b.tabIndex=b===button?0:-1;}));
 button.addEventListener("keydown",event=>{
  if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
  event.preventDefault();const tabs=[...root.querySelectorAll<HTMLButtonElement>("[data-editor-tab]")];
  const i=event.key==="Home"?0:event.key==="End"?tabs.length-1:(tabs.indexOf(button)+(event.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length;
  tabs[i].click();tabs[i].focus();
 });
});
root.querySelectorAll<HTMLElement>("[data-panel]").forEach(p=>{p.id="editor-panel-"+p.dataset.panel;p.setAttribute("role","tabpanel");p.setAttribute("aria-labelledby","editor-tab-"+p.dataset.panel);});
const showEditorTab=(name:string)=>root.querySelector<HTMLButtonElement>('[data-editor-tab="'+name+'"]')?.click();
root.querySelector("[data-show-preview]")?.addEventListener("click",()=>showEditorTab("preview"));
root.querySelector("[data-show-ai]")?.addEventListener("click",()=>{showEditorTab("ai");root.querySelector<HTMLButtonElement>('[data-context-tab="ai"]')?.click();});
const exportDialog=root.querySelector<HTMLDialogElement>("[data-export-dialog]");
root.querySelector("[data-export-open]")?.addEventListener("click",()=>{syncDerivedViews();exportDialog?.showModal();});
root.querySelector("[data-export-close]")?.addEventListener("click",()=>exportDialog?.close());
exportDialog?.addEventListener("click",event=>{if(event.target===exportDialog)exportDialog.close();});

function exitFocus(){
 root!.dataset.focus="false";
 document.querySelector("[data-studio-shell]")?.classList.remove("studio-shell--focus");
 const button=root!.querySelector<HTMLButtonElement>("[data-focus-editor]");
 if(button){button.setAttribute("aria-pressed","false");button.textContent="Modo foco";}
}
function validateEditor(){
 if(form.checkValidity())return true;
 exportDialog?.close();
 const invalid=form.querySelector<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>(":invalid");
 if(invalid?.closest(".studio-editor-meta")){
  exitFocus();root!.dataset.metaHidden="false";
  const button=root!.querySelector<HTMLButtonElement>('[data-toggle-panel="meta"]');
  button?.setAttribute("aria-expanded","true");button?.setAttribute("aria-label","Recolher informações do artigo");
  const details=invalid.closest("details");if(details)details.open=true;
 }
 form.reportValidity();return false;
}

const contextTabs=[...root.querySelectorAll<HTMLButtonElement>("[data-context-tab]")];
contextTabs.forEach((button,index)=>{
 button.setAttribute("role","tab");button.id="context-tab-"+button.dataset.contextTab;
 button.setAttribute("aria-controls","context-panel-"+button.dataset.contextTab);
 button.setAttribute("aria-selected",String(index===0));button.removeAttribute("aria-pressed");button.tabIndex=index===0?0:-1;
 button.addEventListener("click",()=>contextTabs.forEach(other=>other.tabIndex=other===button?0:-1));
 button.addEventListener("keydown",event=>{
  if(!["ArrowLeft","ArrowRight","Home","End"].includes(event.key))return;
  event.preventDefault();
  const target=event.key==="Home"?0:event.key==="End"?contextTabs.length-1:(contextTabs.indexOf(button)+(event.key==="ArrowRight"?1:-1)+contextTabs.length)%contextTabs.length;
  contextTabs[target].click();contextTabs[target].focus();
 });
});
root.querySelectorAll<HTMLElement>("[data-context-panel]").forEach(panel=>{
 panel.id="context-panel-"+panel.dataset.contextPanel;
 panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby","context-tab-"+panel.dataset.contextPanel);
});

const discardDialog=root.querySelector<HTMLDialogElement>("[data-discard-dialog]")!;
discardDialog.querySelectorAll<HTMLButtonElement>("[data-discard-result]").forEach(button=>button.addEventListener("click",()=>discardDialog.close(button.dataset.discardResult)));
function confirmDiscard():Promise<boolean>{
 if(discardDialog.open)return Promise.resolve(false);
 discardDialog.returnValue="keep";
 return new Promise(resolve=>{
  discardDialog.addEventListener("close",()=>resolve(discardDialog.returnValue==="discard"),{once:true});
  discardDialog.showModal();
 });
}

const params = new URLSearchParams(window.location.search);
const requestedFilter = params.get("filter");
if (requestedFilter === "draft" || requestedFilter === "published" || requestedFilter === "missing-cover") {
  filter = requestedFilter;
  root.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((item) => item.classList.remove("is-active"));
}
renderList();

if (params.get("new") === "1") openEditor(null);
const requestedPost = params.get("post");
if (requestedPost) {
  const post = posts.find((item) => item.slug === requestedPost);
  if (post) openEditor(post);
  else{
    root.dataset.editing="true";empty.hidden=false;form.hidden=true;
    empty.querySelector("h2")!.textContent="Conteúdo não encontrado";
    empty.querySelector("p")!.textContent="O artigo solicitado não está na biblioteca local. Volte para escolher um conteúdo disponível.";
  }
}


// Visual edits update only their source line; untouched Markdown is kept verbatim.
function inlineSource(node: Node): string {
 if(node.nodeType===Node.TEXT_NODE)return node.textContent||"";
 if(!(node instanceof HTMLElement))return "";
 const text=[...node.childNodes].map(inlineSource).join("");
 const tag=node.tagName;
 if(tag==="STRONG"||tag==="B")return "**"+text+"**";
 if(tag==="EM"||tag==="I")return "*"+text+"*";
 if(tag==="CODE")return "\x60"+text+"\x60";
 if(tag==="A"){const href=node.getAttribute("href")||"";return /^(https?:\/\/|\/(?!\/))/.test(href)?"["+text+"]("+href+")":text;}
 if(tag==="BR")return "\n";
 return text;
}
function commitVisualLine(element: HTMLElement){
 const index=Number(element.dataset.sourceLine),lines=bodyField.value.split("\n");
 if(!Number.isInteger(index)||index<0||index>=lines.length)return;
 lines[index]=(element.dataset.sourcePrefix||"")+[...element.childNodes].map(inlineSource).join("");
 bodyField.value=lines.join("\n");recordHistory();syncDerivedViews();
}
function renderVisualEditor(canvas: HTMLElement){
 canvas.replaceChildren();
 const title=document.createElement("h1");title.textContent=field<HTMLInputElement>("title").value||"Sem título";canvas.append(title);
 let fence=false;
 bodyField.value.split("\n").forEach((line,index)=>{
  const isFence=/^\s*\x60{3}|^\s*~{3}/.test(line);
  const complex=fence||isFence||/\||<|^\s{4}|^!\[|^\[[^\]]+\]:/.test(line);
  if(isFence)fence=!fence;
  const prefix=line.match(/^(#{1,4}\s+|>\s?|(?:[-*+]|\d+\.)\s+)/)?.[0]||"";
  const tag=prefix.startsWith("#")?"h"+prefix.trim().length:prefix.startsWith(">")?"blockquote":"p";
  const element=document.createElement(complex?"pre":tag);
  if(complex){element.textContent=line;element.className="studio-visual-readonly";element.title="Edite esta estrutura na aba Markdown";}
  else{
   element.innerHTML=inlineMarkdown(line.slice(prefix.length));
   element.contentEditable="true";element.dataset.sourceLine=String(index);element.dataset.sourcePrefix=prefix;
   element.setAttribute("role","textbox");element.setAttribute("aria-label","Bloco "+(index+1));element.setAttribute("aria-multiline","true");
   element.addEventListener("input",()=>commitVisualLine(element));
   element.addEventListener("paste",event=>{
    event.preventDefault();const text=event.clipboardData?.getData("text/plain")||"";
    const selection=window.getSelection();if(!selection?.rangeCount)return;
    const range=selection.getRangeAt(0);range.deleteContents();const node=document.createTextNode(text);range.insertNode(node);range.setStartAfter(node);range.collapse(true);selection.removeAllRanges();selection.addRange(range);commitVisualLine(element);if(text.includes("\n")){renderVisualEditor(canvas);canvas.querySelector<HTMLElement>('[data-source-line="'+index+'"]')?.focus();}
   });
   element.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
     event.preventDefault();commitVisualLine(element);
     const lines=bodyField.value.split("\n");lines.splice(index+1,0,"");bodyField.value=lines.join("\n");recordHistory();renderVisualEditor(canvas);syncDerivedViews();
     canvas.querySelector<HTMLElement>('[data-source-line="'+(index+1)+'"]')?.focus();
    }
    if((event.ctrlKey||event.metaKey)&&["b","i"].includes(event.key.toLowerCase())){event.preventDefault();applyVisualAction(event.key.toLowerCase()==="b"?"bold":"italic");}
   });
  }
  canvas.append(element);
 });
}
function applyVisualAction(action:string):boolean {
 const selection=window.getSelection(),canvas=root!.querySelector<HTMLElement>("[data-editor-canvas]");
 const focus=selection?.anchorNode?.parentElement?.closest<HTMLElement>("[data-source-line]");
 if(!selection?.rangeCount||!focus||!canvas?.contains(focus))return false;
 if(["h2","h3","ul","ol","quote"].includes(action)){
  const prefix=({h2:"## ",h3:"### ",ul:"- ",ol:"1. ",quote:"> "} as Record<string,string>)[action];
  focus.dataset.sourcePrefix=prefix;commitVisualLine(focus);renderVisualEditor(canvas);canvas.querySelector<HTMLElement>('[data-source-line="'+focus.dataset.sourceLine+'"]')?.focus();return true;
 }
 const tag=({bold:"strong",italic:"em",code:"code"} as Record<string,string>)[action];
 if(!tag){
  const index=Number(focus.dataset.sourceLine),offset=bodyField.value.split("\n").slice(0,index+1).join("\n").length;
  bodyField.setSelectionRange(offset,offset);
  root!.querySelector<HTMLButtonElement>('[data-editor-tab="markdown"]')?.click();return false;}
 if(selection.isCollapsed)return true;
 const range=selection.getRangeAt(0);if(!focus.contains(range.commonAncestorContainer))return false;
 const wrapper=document.createElement(tag);wrapper.append(range.extractContents());range.insertNode(wrapper);
 range.selectNodeContents(wrapper);selection.removeAllRanges();selection.addRange(range);commitVisualLine(focus);return true;
}
root.querySelectorAll<HTMLButtonElement>("[data-md-action]").forEach(button=>button.addEventListener("mousedown",event=>{
 if(root.querySelector("[data-editor-canvas]")?.contains(document.activeElement))event.preventDefault();
}));

const coverDialog=root.querySelector<HTMLDialogElement>("[data-cover-dialog]")!;
const coverSearch=root.querySelector<HTMLInputElement>("[data-cover-search]")!;
let coverItems:string[]=[];
function renderCoverChoices(){
 const target=root!.querySelector<HTMLElement>("[data-cover-results]")!;
 const items=coverItems.filter(path=>path.toLowerCase().includes(coverSearch.value.toLowerCase())).slice(0,48);
 target.replaceChildren(...items.map(path=>{
  const button=document.createElement("button");button.type="button";button.className="studio-cover-choice";
  const img=document.createElement("img");img.src=path;img.alt="";img.loading="lazy";
  const label=document.createElement("span");label.textContent=path.split("/").pop()||path;
  button.append(img,label);button.setAttribute("aria-label","Selecionar "+label.textContent);
  button.addEventListener("click",()=>{field<HTMLInputElement>("coverImage").value=path;coverDialog.close();syncDerivedViews();field<HTMLTextAreaElement>("coverAlt").focus();});
  return button;
 }));
 root!.querySelector<HTMLElement>("[data-cover-status]")!.textContent=items.length+" imagens exibidas. Refine a busca para encontrar outras.";
}
root.querySelector("[data-cover-picker]")?.addEventListener("click",async()=>{
 coverDialog.showModal();
 try{
  const response=await fetch("/__studio-local/media");if(!response.ok)throw new Error("Biblioteca indisponível.");
  coverItems=(await response.json()).items;renderCoverChoices();
 }catch{root!.querySelector<HTMLElement>("[data-cover-status]")!.textContent="Não foi possível carregar a biblioteca local.";}
});
root.querySelector("[data-cover-close]")?.addEventListener("click",()=>coverDialog.close());
coverSearch.addEventListener("input",renderCoverChoices);
root.querySelector("[data-cover-reset]")?.addEventListener("click",()=>{
 for(const name of ["coverImage","coverAlt","coverCaption"])field<HTMLInputElement>(name).value="";
 syncDerivedViews();
});

const aiRun=root.querySelector<HTMLButtonElement>("[data-ai-local-run]")!;
const aiModel=root.querySelector<HTMLSelectElement>("[data-ai-local-model]")!;
const aiConsent=root.querySelector<HTMLInputElement>("[data-ai-consent]")!;
const aiCancel=root.querySelector<HTMLButtonElement>("[data-ai-cancel]")!;
let aiAvailable=false,aiInFlight=false,aiController:AbortController|null=null;
function aiControls(){aiRun.disabled=aiInFlight||!aiAvailable||!aiConsent.checked;aiModel.disabled=aiInFlight;aiCancel.hidden=!aiInFlight;}
aiConsent.addEventListener("change",aiControls);
async function checkLocalAi(){
 if(aiInFlight)return;
 const status=root!.querySelector<HTMLElement>("[data-ai-local-status]")!;
 aiAvailable=false;aiControls();
 try{
  const response=await fetch("/__studio-local/ai/status");if(!response.ok)throw new Error();
  const data=await response.json();
  aiModel.replaceChildren(...data.models.map((name:string)=>{const option=document.createElement("option");option.value=name;option.textContent="Codex · conta ChatGPT";return option;}));
  aiAvailable=data.available&&data.models.length>0&&!data.busy;
  status.textContent=data.message+(data.busy?" Há uma análise em andamento.":"");
 }catch{status.textContent="Não foi possível consultar o Codex. O artigo permanece intacto.";}
 aiControls();
}
root.querySelector("[data-ai-local-refresh]")?.addEventListener("click",()=>void checkLocalAi());
root.querySelector('[data-editor-tab="ai"]')?.addEventListener("click",()=>void checkLocalAi());
aiCancel.addEventListener("click",()=>aiController?.abort());
aiRun.addEventListener("click",async()=>{
 if(aiInFlight||!aiAvailable||!aiConsent.checked)return;
 const output=root!.querySelector<HTMLTextAreaElement>("[data-ai-local-output]")!;
 const origin=formSignature(),slug=field<HTMLInputElement>("slug").value;
 aiInFlight=true;aiController=new AbortController();aiControls();
 output.value="Analisando com Codex/ChatGPT… Pode levar até dois minutos.";
 try{
  const response=await fetch("/__studio-local/ai/review",{method:"POST",signal:aiController.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify({model:aiModel.value,consent:true,task:root!.querySelector<HTMLSelectElement>("[data-ai-local-task]")!.value,title:field<HTMLInputElement>("title").value,body:bodyField.value})});
  const data=await response.json();if(!response.ok)throw new Error(data.error||"Falha na análise.");
  if(slug!==field<HTMLInputElement>("slug").value){output.value="O conteúdo selecionado mudou. Execute uma nova análise para este artigo.";return;}
  output.value=(origin!==formSignature()?"Atenção: o artigo mudou desde o início da análise.\n\n":"")+data.suggestion+"\n\nAnálise concluída em "+data.durationSeconds+" s. Nenhuma alteração aplicada.";
 }catch(error){output.value=error instanceof Error?(error.name==="AbortError"?"Análise cancelada. O artigo não foi alterado.":error.message):"Não foi possível analisar.";}
 finally{aiInFlight=false;aiController=null;aiConsent.checked=false;aiControls();}
});
