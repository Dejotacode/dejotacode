export const PAGE_SIZE = 12;
export const FIRST_PAGE_COUNT = PAGE_SIZE + 1; // Featured article plus the grid.

export function blogTotalPages(postCount: number): number {
  return 1 + Math.ceil(Math.max(postCount - FIRST_PAGE_COUNT, 0) / PAGE_SIZE);
}

// The public archive had 12 pages before the 22/10/2026 pagination change.
// Only retire URLs beyond the current archive, so new pages remain reachable.
export function retiredBlogRedirects(postCount: number): string[] {
  const currentPages = blogTotalPages(postCount);
  const rules: string[] = [];
  for (let oldPage = currentPages + 1; oldPage <= 12; oldPage++) {
    const oldStart = 7 + (oldPage - 2) * 6;
    const targetPage = Math.min(
      currentPages,
      oldStart < FIRST_PAGE_COUNT ? 1 : 2 + Math.floor((oldStart - FIRST_PAGE_COUNT) / PAGE_SIZE),
    );
    const target = targetPage === 1 ? "/blog/" : `/blog/${targetPage}/`;
    rules.push(`/blog/${oldPage} ${target} 301`, `/blog/${oldPage}/ ${target} 301`);
  }
  return rules;
}
