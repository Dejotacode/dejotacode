import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const categories = {
  programacao: "Programação",
  "linux-seguranca": "Linux & Segurança",
  "inteligencia-artificial": "Inteligência Artificial",
  "tecnologia-pratica": "Tecnologia prática",
} as const;

export type CategorySlug = keyof typeof categories;

export async function getPublishedPosts() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function postSlug(post: Post) {
  return post.id.replace(/\.(md|mdx)$/, "").replace(/\/index$/, "");
}

export function postHref(post: Post) {
  return `/blog/${postSlug(post)}/`;
}

export function categoryHref(category: CategorySlug) {
  return `/categoria/${category}/`;
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
