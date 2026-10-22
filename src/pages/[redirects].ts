import type { APIRoute } from "astro";
import { getPublishedPosts } from "../lib/content";
import { retiredBlogRedirects } from "../lib/blogPagination";

export function getStaticPaths() {
  return [{ params: { redirects: "_redirects" } }];
}

// Static build artifact consumed by Cloudflare Pages, not a server/API service.
export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const rules = retiredBlogRedirects(posts.length);
  return new Response(["# Retired blog pagination URLs", ...rules, ""].join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
