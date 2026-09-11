import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      "programacao",
      "linux-seguranca",
      "inteligencia-artificial",
      "tecnologia-pratica",
    ]),
    type: z.enum(["artigo", "tutorial"]),
    readingTime: z.number().int().positive(),
    difficulty: z.enum(["iniciante", "intermediario", "avancado"]).default("iniciante"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
