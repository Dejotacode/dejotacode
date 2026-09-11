import rss from "@astrojs/rss";
import { getPublishedPosts, postHref } from "../lib/content";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: "DejotaCode",
    description:
      "Tutoriais passo a passo sobre Linux, programação e tecnologia prática para quem está começando.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: postHref(post),
    })),
    customData: "<language>pt-BR</language>",
  });
}
