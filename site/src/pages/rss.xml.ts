import { getPosts } from '../lib/content';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export async function GET({ site }: { site: URL }) {
  const posts = (await getPosts()).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const items = posts.map((post) => {
    const path = post.type === 'tutorial' ? `/tutorial/${post.slug}` : `/blog/${post.slug}`;
    const link = new URL(path, site).toString();
    return `<item><title>${escapeXml(post.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${escapeXml(post.excerpt)}</description><pubDate>${new Date(`${post.publishedAt}T12:00:00Z`).toUTCString()}</pubDate><category>${escapeXml(post.category)}</category></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>DejotaCode</title><link>${site}</link><description>Tutoriais práticos de tecnologia e renda digital para iniciantes.</description><language>pt-BR</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
