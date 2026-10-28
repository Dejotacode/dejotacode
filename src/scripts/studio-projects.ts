export {};
const search = document.querySelector<HTMLInputElement>("[data-project-search]");
const filter = document.querySelector<HTMLSelectElement>("[data-project-filter]");
const cards = [...document.querySelectorAll<HTMLElement>("[data-project-card]")];
const empty = document.querySelector<HTMLElement>("[data-project-empty]");

const normalize = (value:string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const render = () => {
  const q = normalize(search?.value || "");
  const state = filter?.value || "all";
  let visible = 0;
  for (const card of cards) {
    const matchesText = !q || normalize(card.dataset.search || "").includes(q);
    const matchesState = state === "all" || card.dataset.state === state;
    const show = matchesText && matchesState;
    card.hidden = !show;
    if (show) visible += 1;
  }
  if (empty) empty.hidden = visible !== 0;
};
const params = new URLSearchParams(window.location.search);
const requestedQuery = params.get("q");
if (search && requestedQuery) search.value = requestedQuery;
search?.addEventListener("input", render);
filter?.addEventListener("change", render);
render();
