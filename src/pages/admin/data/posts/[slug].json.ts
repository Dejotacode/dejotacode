import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import fs from "node:fs/promises";
import path from "node:path";

const studioDataEnabled = import.meta.env.DEV || process.env.STUDIO_ENABLED === "true";

export async function getStaticPaths() {
  if (!studioDataEnabled) return [];
  const posts = await getCollection("posts");
  return posts.map((post) => ({ params: { slug: post.id }, props: { slug: post.id } }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!studioDataEnabled) return new Response(null, { status: 404 });
  const slug = String(props.slug ?? "");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return new Response(null, { status: 400 });

  try {
    const raw = await fs.readFile(path.resolve("src/content/posts", `${slug}.md`), "utf8");
    const normalized = raw.replace(/\r\n?/g, "\n");
    const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const payload = match
      ? { slug, frontmatter: match[1], body: match[2].replace(/^\n/, "") }
      : { slug, frontmatter: "", body: normalized };
    return new Response(JSON.stringify(payload), {
      headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
};
