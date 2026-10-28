export type PullState = { state?: string; merged?: boolean; mergeable?: boolean | null; ci?: string; headSha?: string };
export const canMergeStudioPull = (pull: PullState | null): boolean =>
  Boolean(pull && pull.state === "open" && !pull.merged && pull.mergeable === true &&
    pull.ci === "success" && /^[a-f0-9]{40}$/i.test(pull.headSha || ""));
