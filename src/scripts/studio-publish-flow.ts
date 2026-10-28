import { fetchAdminSession } from "./admin-session";
import { canMergeStudioPull, type PullState } from "../lib/studio-publication-policy";

type Snapshot = { slug: string; title: string; markdown: string; version: string; files: string[] };
export function attachStudioPublishFlow(host: HTMLElement, slug: string, api: string) {
  const prepare = host.querySelector<HTMLButtonElement>("[data-assisted-review]");
  if (!prepare || prepare.disabled) return;
  prepare.addEventListener("click", async () => {
    prepare.disabled = true;
    const panel = document.createElement("section");
    panel.className = "studio-publish-assisted";
    panel.innerHTML = '<h3>Publicação pelo Studio</h3><p data-flow-status role="status">Preparando a versão exata do arquivo local…</p><div data-flow-controls hidden><label>Markdown que será enviado<textarea data-flow-markdown readonly rows="12"></textarea></label><label><input type="checkbox" data-flow-ack> Revisei este Markdown e autorizo criar um PR para este artigo.</label><button class="studio-button" type="button" data-flow-create disabled>Criar PR de revisão</button><p><a data-flow-pr target="_blank" rel="noopener noreferrer" hidden>Abrir diff do PR no GitHub</a></p><button class="studio-button" type="button" data-flow-refresh hidden>Atualizar PR e CI</button><div data-flow-merge-controls hidden><p>Integrar à main inicia o deploy automático do site.</p><label><input type="checkbox" data-flow-diff> Conferi o diff do PR e autorizo esta publicação.</label><label>Digite PUBLICAR<input data-flow-confirm autocomplete="off"></label><button class="studio-button" type="button" data-flow-merge disabled>Integrar e publicar</button></div></div>';
    host.append(panel);
    const pick = <T extends HTMLElement>(key: string) => panel.querySelector<T>("[data-flow-" + key + "]")!;
    const status = pick<HTMLElement>("status");
    const controls = pick<HTMLElement>("controls");
    const markdown = pick<HTMLTextAreaElement>("markdown");
    const ack = pick<HTMLInputElement>("ack");
    const create = pick<HTMLButtonElement>("create");
    const refresh = pick<HTMLButtonElement>("refresh");
    const mergeControls = pick<HTMLElement>("merge-controls");
    const diff = pick<HTMLInputElement>("diff");
    const confirm = pick<HTMLInputElement>("confirm");
    const merge = pick<HTMLButtonElement>("merge");
    const link = pick<HTMLAnchorElement>("pr");
    let snapshot: Snapshot;
    let pull: PullState | null = null;
    let number = 0;
    let busy = false;
    let submitted = false;
    const showError = (error: unknown) => { status.textContent = error instanceof Error ? error.message : "Não foi possível concluir a operação."; };
    const request = async (url: string, init: RequestInit = {}) => {
      const response = await fetch(url, { ...init, signal: AbortSignal.timeout(60000) });
      const payload = await response.json();
      if (!response.ok) throw new Error(typeof payload.error === "string" ? payload.error : payload.error?.message || "Não foi possível concluir a operação.");
      return payload;
    };
    const readSnapshot = (): Promise<Snapshot> => request("/__studio-local/publication?slug=" + encodeURIComponent(slug));
    const csrf = async () => {
      const session = await fetchAdminSession(api);
      if (!session?.csrf) throw new Error("Entre na conta editorial pelo Studio antes de continuar.");
      return session.csrf;
    };
    const checkVersion = async () => {
      const current = await readSnapshot();
      if (current.version !== snapshot.version) throw new Error("O arquivo mudou desde sua revisão. Feche este painel e prepare novamente.");
    };
    const sync = () => {
      create.disabled = busy || submitted || !ack.checked || number > 0;
      refresh.disabled = busy;
      merge.disabled = busy || !canMergeStudioPull(pull) || !diff.checked || confirm.value !== "PUBLICAR";
    };
    const refreshPull = async () => {
      const payload = await request(api + "/api/editor/pull-request/" + number, { credentials: "include" });
      const next = payload.data as PullState & { url?: string };
      if (pull?.headSha !== next.headSha) { diff.checked = false; confirm.value = ""; }
      pull = next;
      const label = pull.ci === "success" ? "CI aprovado" : pull.ci === "failure" ? "CI com falha" : "CI pendente ou indisponível";
      status.textContent = pull.merged ? "PR integrado. O deploy é acompanhado no GitHub." : "PR #" + number + " · " + label + (pull.mergeable === false ? " · conflito detectado" : "") + ".";
      mergeControls.hidden = Boolean(pull.merged || pull.state !== "open");
      if (next.url) {
        const target = new URL(next.url);
        if (target.protocol === "https:" && target.hostname === "github.com") { link.href = target.href; link.hidden = false; }
      }
      sync();
    };
    ack.addEventListener("change", sync);
    diff.addEventListener("change", sync);
    confirm.addEventListener("input", sync);
    create.addEventListener("click", async () => {
      if (busy || !ack.checked || number) return;
      busy = true; sync();
      status.textContent = "Validando a versão revisada e criando PR…";
      try {
        await checkVersion();
        const token = await csrf();
        submitted = true;
        const payload = await request(api + "/api/editor/pull-request", {
          method: "POST", credentials: "include",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": token },
          body: JSON.stringify({ slug: snapshot.slug, title: snapshot.title, markdown: snapshot.markdown }),
        });
        number = Number(payload.data?.pullRequestNumber);
        if (!Number.isSafeInteger(number) || number < 1) throw new Error("O Worker não retornou o número do PR. Confira o GitHub antes de tentar de novo.");
        refresh.hidden = false;
        await refreshPull();
      } catch (error) { showError(error); }
      finally { busy = false; sync(); }
    });
    refresh.addEventListener("click", async () => {
      if (busy || !number) return;
      busy = true; sync();
      try { await refreshPull(); } catch (error) { pull = null; showError(error); }
      finally { busy = false; sync(); }
    });
    merge.addEventListener("click", async () => {
      if (busy || !canMergeStudioPull(pull) || !diff.checked || confirm.value !== "PUBLICAR") return;
      const reviewedHead = pull!.headSha;
      busy = true; sync();
      status.textContent = "Validando a versão e solicitando integração…";
      try {
        await checkVersion();
        const token = await csrf();
        await request(api + "/api/editor/pull-request/" + number + "/merge", {
          method: "POST", credentials: "include",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": token },
          body: JSON.stringify({ confirmation: "PUBLICAR", expectedHeadSha: reviewedHead }),
        });
        diff.checked = false; confirm.value = "";
        await refreshPull();
      } catch (error) { pull = null; diff.checked = false; confirm.value = ""; showError(error); }
      finally { busy = false; sync(); }
    });
    try {
      snapshot = await readSnapshot();
      await csrf();
      markdown.value = snapshot.markdown;
      controls.hidden = false;
      status.textContent = "Arquivo completo preservado, incluindo metadados. Revise o Markdown antes de criar o PR.";
    } catch (error) { showError(error); }
  });
}
