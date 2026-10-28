export {};

type MediaItem = {
  path: string;
  name: string;
  section: string;
  size: number;
  modified: string;
  refs: string[];
  consumers: string[];
  used: boolean;
  extension: string;
};

const raw = document.querySelector<HTMLScriptElement>("#studio-media-data")?.textContent ?? "[]";
const items: MediaItem[] = JSON.parse(raw);
const grid = document.querySelector<HTMLElement>("[data-media-grid]");
const count = document.querySelector<HTMLElement>("[data-media-count]");
const search = document.querySelector<HTMLInputElement>("[data-media-search]");
const section = document.querySelector<HTMLSelectElement>("[data-media-section]");
const usage = document.querySelector<HTMLSelectElement>("[data-media-usage]");
const dialog = document.querySelector<HTMLDialogElement>("[data-media-dialog]");
const dialogContent = document.querySelector<HTMLElement>("[data-media-dialog-content]");

const sizeLabel = (bytes: number) => bytes < 1024 ? `${bytes} B` : bytes < 1048576 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1048576).toFixed(1)} MB`;
const norm = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const copy = async (value: string, label: string) => {
 const message=dialogContent?.querySelector<HTMLElement>("[data-copy-message]");
 try{await navigator.clipboard.writeText(value);if(message)message.textContent=label+" copiado.";}
 catch{if(message)message.textContent="Não foi possível copiar automaticamente. O caminho permanece visível para cópia manual.";}
};

const openDetails = (item: MediaItem) => {
  if (!dialog || !dialogContent) return;
  const consumers = item.consumers.length
    ? `<ul>${item.consumers.map((value) => `<li>${value}</li>`).join("")}</ul>`
    : `<p>Nenhum consumidor direto identificado. Isso <strong>não prova</strong> que o arquivo pode ser apagado.</p>`;
  const refs = item.refs.length
    ? `<details><summary>Referências técnicas (${item.refs.length})</summary><ul>${item.refs.map((value) => `<li><code>${value}</code></li>`).join("")}</ul></details>`
    : "";
  dialogContent.innerHTML = `
    <div class="studio-media-detail">
      <div class="studio-media-detail__preview"><img src="${item.path}" alt="" /></div>
      <div class="studio-media-detail__body">
        <p class="studio-eyebrow">${item.section} · ${item.extension}</p>
        <h2 id="studio-media-title">${item.name}</h2>
        <p class="studio-media-detail__path"><code>${item.path}</code></p>
        <div class="studio-media-detail__meta"><span>${sizeLabel(item.size)}</span><span>${new Date(item.modified).toLocaleDateString("pt-BR")}</span><span>${item.used ? "Em uso" : "Uso não confirmado"}</span></div>
        <p class="studio-media-copy-message" data-copy-message role="status" aria-live="polite"></p><h3>Onde aparece</h3>${consumers}${refs}
        <div class="studio-media-detail__actions">
          <button class="studio-button studio-button--primary" type="button" data-copy-path>Copiar caminho</button>
          <button class="studio-button" type="button" data-copy-md>Copiar Markdown</button>
          <button class="studio-button studio-button--danger" type="button" data-delete-check>${item.used ? "Exclusão bloqueada" : "Auditar antes de excluir"}</button>
        </div>
        <p class="studio-media-detail__safety" data-delete-message>${item.used ? "Este arquivo possui referências no projeto e não pode ser tratado como órfão." : "Sem referência textual encontrada. Antes de excluir, ainda é obrigatório conferir resolvers, build e usos dinâmicos."}</p>
      </div>
    </div>`;
  dialogContent.querySelector<HTMLButtonElement>("[data-copy-path]")?.addEventListener("click", () => copy(item.path,"Caminho"));
  dialogContent.querySelector<HTMLButtonElement>("[data-copy-md]")?.addEventListener("click", () => copy(`![Descrição da imagem](${item.path})`,"Markdown"));
  dialogContent.querySelector<HTMLButtonElement>("[data-delete-check]")?.addEventListener("click", () => {
    const message = dialogContent.querySelector<HTMLElement>("[data-delete-message]");
    if (message) message.textContent = item.used
      ? `Bloqueado: ${item.refs.length} referência(s) encontrada(s). Nenhuma exclusão foi executada.`
      : "Auditoria necessária: o Studio não executa exclusão automática apenas pela ausência de referência textual. Nenhuma exclusão foi executada.";
  });
  dialog.showModal();
};

const render = () => {
  if (!grid) return;
  const q = norm(search?.value.trim() ?? "");
  const sec = section?.value ?? "all";
  const use = usage?.value ?? "all";
  const filtered = items.filter((item) => {
    const matchText = !q || norm(`${item.name} ${item.path} ${item.consumers.join(" ")}`).includes(q);
    const matchSection = sec === "all" || item.section === sec;
    const matchUsage = use === "all" || (use === "used" ? item.used : !item.used);
    return matchText && matchSection && matchUsage;
  });
  grid.replaceChildren();
  if(!filtered.length){const empty=document.createElement("p");empty.className="studio-module-empty";empty.textContent="Nenhuma mídia corresponde aos filtros. Tente outro nome ou limpe os filtros.";grid.append(empty);}

  for (const item of filtered) {
    const card = document.createElement("article");
    card.className = "studio-media-card";
    card.innerHTML = `
      <button type="button" class="studio-media-card__preview" aria-label="Abrir detalhes de ${item.name}"><img src="${item.path}" alt="" loading="lazy" /></button>
      <div class="studio-media-card__body">
        <div class="studio-media-card__top"><span>${item.section}</span><span class="${item.used ? "is-used" : "is-review"}">${item.used ? "Em uso" : "Auditar"}</span></div>
        <strong title="${item.name}">${item.name}</strong>
        <small>${sizeLabel(item.size)} · ${item.extension}</small>
      </div>`;
    card.querySelector("button")?.addEventListener("click", () => openDetails(item));
    grid.append(card);
  }
  if (count) count.textContent = `${filtered.length} de ${items.length} arquivos`;
};

[search, section, usage].forEach((control) => control?.addEventListener(control instanceof HTMLInputElement ? "input" : "change", render));
document.querySelector("[data-media-close]")?.addEventListener("click", () => dialog?.close());
dialog?.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
render();
