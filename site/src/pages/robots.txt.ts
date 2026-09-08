export function GET() {
  const site = import.meta.env.PUBLIC_SITE_URL ?? 'https://dejotacode.com.br';
  return new Response(`User-agent: *\nAllow: /\nDisallow: /admin/\nSitemap: ${site}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
}
