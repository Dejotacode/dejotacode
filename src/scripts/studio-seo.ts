export {};

type SeoRow = {
  slug: string; title: string; draft: boolean; words: number; h2: number;
  internalLinks: number; externalLinks: number; issues: string[];
  health: "ok" | "attention" | "review";
};

const dataNode = document.querySelector<HTMLScriptElement>("#studio-seo-data");
const body = document.querySelector<HTMLTableSectionElement>("[data-seo-body]");
const empty = document.querySelector<HTMLElement>("[data-seo-empty]");
const searchInput = document.querySelector<HTMLInputElement>("[data-seo-search]");
const statusSelect = document.querySelector<HTMLSelectElement>("[data-seo-status]");
if (!dataNode || !body || !empty) throw new Error("SEO data unavailable");
const rows: SeoRow[] = JSON.parse(dataNode.textContent || "[]");

const labels = { ok: "Saudável", attention: "Atenção", review: "Revisar" } as const;
const render = () => {
  const term = (searchInput?.value || "").trim().toLocaleLowerCase("pt-BR");
  const status = statusSelect?.value || "all";
  const filtered = rows.filter((row) => (!term || `${row.title} ${row.slug}`.toLocaleLowerCase("pt-BR").includes(term)) && (status === "all" || row.health === status));
  body.replaceChildren();
  empty.hidden = filtered.length > 0;
  for (const row of filtered) {
    const tr = document.createElement("tr");
    const content = document.createElement("td");
    const title = document.createElement("strong"); title.textContent = row.title;
    const slug = document.createElement("small"); slug.textContent = `/blog/${row.slug}/`;
    content.append(title, slug);
    const health = document.createElement("td");
    const badge = document.createElement("span"); badge.className = `studio-seo-health is-${row.health}`; badge.textContent = labels[row.health]; health.append(badge);
    const issues = document.createElement("td");
    if (row.issues.length) row.issues.forEach((issue) => { const chip = document.createElement("span"); chip.className = "studio-seo-issue"; chip.textContent = issue; issues.append(chip); });
    else { const clean = document.createElement("span"); clean.className = "studio-seo-clean"; clean.textContent = "Sem alertas básicos"; issues.append(clean); }
    const structure = document.createElement("td"); structure.innerHTML = `<span>${row.words} palavras</span><span>${row.h2} H2</span><span>${row.internalLinks} internos</span><span>${row.externalLinks} externos</span>`;
    const action = document.createElement("td"); const link = document.createElement("a"); link.className = "studio-button studio-button--ghost"; link.href = `/admin/conteudo/?post=${encodeURIComponent(row.slug)}`; link.textContent = "Abrir"; action.append(link);
    tr.append(content, health, issues, structure, action); body.append(tr);
  }
};
searchInput?.addEventListener("input", render); statusSelect?.addEventListener("change", render); render();
