import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const categories = {
  programacao: "Programação",
  "linux-seguranca": "Linux & Segurança",
  "inteligencia-artificial": "Inteligência Artificial",
  "tecnologia-pratica": "Tecnologia prática",
} as const;

export type CategorySlug = keyof typeof categories;

export const categoryDescriptions: Record<CategorySlug, string> = {
  programacao:
    "Conceitos, ferramentas e projetos explicados passo a passo para quem está começando a programar.",
  "linux-seguranca":
    "Linux, privacidade e segurança digital com orientações práticas para usar a tecnologia com confiança.",
  "inteligencia-artificial":
    "Inteligência artificial aplicada aos estudos e ao trabalho de maneira útil, responsável e compreensível.",
  "tecnologia-pratica":
    "Soluções simples, escolhas de ferramentas e respostas para dúvidas comuns do dia a dia digital.",
};

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
