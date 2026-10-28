/** @param {string | null} raw */
export function parseGitRelation(raw) {
  if (typeof raw !== 'string' || !/^\d+\s+\d+$/.test(raw.trim())) {
    return { verified: false, behind: 0, ahead: 0 };
  }
  const [behind, ahead] = raw.trim().split(/\s+/).map(Number);
  return { verified: Number.isSafeInteger(behind) && Number.isSafeInteger(ahead), behind, ahead };
}
