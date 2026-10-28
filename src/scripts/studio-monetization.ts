type Related = { id: string; title: string; draft: boolean };
type Product = {
  id: string;
  title: string;
  brand: string;
  category: string;
  editorialStatus: string;
  catalogStage: string;
  draft: boolean;
  activeOffers: number;
  legacyLinks: number;
  providers: string[];
  lastChecked: string;
  usedBy: Related[];
  opportunities: Related[];
};

const data = document.querySelector<HTMLScriptElement>("#studio-money-data");
const grid = document.querySelector<HTMLElement>("[data-money-grid]");
const count = document.querySelector<HTMLElement>("[data-money-count]");
const searchInput = document.querySelector<HTMLInputElement>("[data-money-search]");
const status = document.querySelector<HTMLSelectElement>("[data-money-status]");
const provider = document.querySelector<HTMLSelectElement>("[data-money-provider]");
const products: Product[] = JSON.parse(data?.textContent || "[]");

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#039;",
}[char] ?? char));

const stateOf = (product: Product) => product.activeOffers > 0 ? "active" : product.legacyLinks > 0 ? "legacy" : "missing";

const relatedHtml = (items: Related[], empty: string) => items.length
  ? `<ul>${items.map((item) => `<li><a href="/admin/conteudo/?post=${encodeURIComponent(item.id)}">${escapeHtml(item.title)}</a>${item.draft ? " <small>rascunho</small>" : ""}</li>`).join("")}</ul>`
  : `<p class="studio-money-empty">${empty}</p>`;

const render = () => {
  if (!grid) return;
  const query = normalize(searchInput?.value.trim() || "");
  const wantedState = status?.value || "all";
  const wantedProvider = provider?.value || "all";
  const filtered = products.filter((product) => {
    const haystack = normalize([
      product.title,
      product.brand,
      product.category,
      ...product.providers,
      ...product.usedBy.map((post) => post.title),
      ...product.opportunities.map((post) => post.title),
    ].join(" "));
    const matchesQuery = !query || haystack.includes(query);
    const matchesState = wantedState === "all" || (wantedState === "opportunity" ? product.opportunities.length > 0 : stateOf(product) === wantedState);
    const matchesProvider = wantedProvider === "all" || product.providers.includes(wantedProvider);
    return matchesQuery && matchesState && matchesProvider;
  });

  grid.replaceChildren(...filtered.map((product) => {
    const article = document.createElement("article");
    article.className = "studio-money-card";
    const state = stateOf(product);
    const stateLabel = state === "active" ? "Oferta ativa" : state === "legacy" ? "Link legado" : "Sem link comercial";
    article.innerHTML = `
      <div class="studio-money-card__top">
        <div>
          <span class="studio-money-badge" data-state="${state}">${stateLabel}</span>
          <h2>${escapeHtml(product.title)}</h2>
          <p>${escapeHtml(product.brand || product.category)}</p>
        </div>
        <span class="studio-money-editorial">${escapeHtml(product.editorialStatus)}</span>
      </div>
      <div class="studio-money-meta">
        <span>${product.activeOffers} oferta(s) ativa(s)</span>
        <span>${product.providers.length ? product.providers.map(escapeHtml).join(" · ") : "sem parceiro registrado"}</span>
        <span>${product.lastChecked ? `checado ${product.lastChecked.split("-").reverse().join("/")}` : "sem data de checagem"}</span>
      </div>
      <div class="studio-money-relations">
        <section><h3>Usado em ${product.usedBy.length}</h3>${relatedHtml(product.usedBy, "Ainda não vinculado a nenhum conteúdo.")}</section>
        <section><h3>Oportunidades ${product.opportunities.length}</h3>${relatedHtml(product.opportunities, "Nenhuma relação editorial pendente declarada.")}</section>
      </div>
      <div class="studio-money-card__actions">
        <a class="studio-button studio-button--secondary" href="/store/" data-store-link target="_blank" rel="noopener">Abrir ficha</a>
        ${product.opportunities.length ? `<a class="studio-button" href="/admin/conteudo/?post=${encodeURIComponent(product.opportunities[0].id)}">Revisar oportunidade</a>` : ""}
      </div>`;
    const storeLink = article.querySelector<HTMLAnchorElement>("[data-store-link]");
    if (storeLink) storeLink.href = `/store/${encodeURIComponent(product.id)}/`;
    return article;
  }));
  if(!filtered.length){const empty=document.createElement("p");empty.className="studio-module-empty";empty.textContent="Nenhum produto corresponde aos filtros. Tente outro termo ou selecione todas as situações.";grid.append(empty);}
  if (count) count.textContent = `${filtered.length} de ${products.length} produtos`;
};

searchInput?.addEventListener("input", render);
status?.addEventListener("change", render);
provider?.addEventListener("change", render);
render();
export {};
