import { defineCollection } from "astro:content";
import { z } from "astro/zod";
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
      "renda-digital",
    ]),
    type: z.enum(["artigo", "tutorial"]),
    readingTime: z.number().int().positive(),
    difficulty: z.enum(["iniciante", "intermediario", "avancado"]).default("iniciante"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const storeProducts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/store/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["linux", "setup", "programacao", "criadores", "ferramentas-digitais"]),
    editorialStatus: z.enum(["uso", "testado", "pesquisado"]),
    recommendedFor: z.array(z.string()).default([]),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
    affiliateLinks: z.object({
      amazon: z.string().url().optional(),
      mercadolivre: z.string().url().optional(),
      shopee: z.string().url().optional(),
      hotmart: z.string().url().optional(),
      other: z.string().url().optional(),
    }).optional(),
  }),
});

const storeGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/store/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["linux", "setup", "programacao", "criadores", "ferramentas-digitais"]),
    productIds: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { posts, storeProducts, storeGuides };
