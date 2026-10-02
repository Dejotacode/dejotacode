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
    storeProducts: z.array(z.string()).default([]),
  }),
});

const storeCategory = z.enum([
  "linux",
  "setup",
  "programacao",
  "criadores",
  "ferramentas-digitais",
]);

const storeProducts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/store/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: storeCategory,
    editorialStatus: z.enum(["uso", "testado", "pesquisado"]),
    catalogStage: z.enum(["catalogo-v1", "catalogo-geral", "avaliacao"]).default("catalogo-geral"),
    brand: z.string().optional(),
    productKind: z.enum(["fisico", "digital", "servico"]).optional(),
    recommendedFor: z.array(z.string()).default([]),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    relatedPosts: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
    verification: z.object({
      lastChecked: z.coerce.date().optional(),
      sourceLabel: z.string().optional(),
      notes: z.string().optional(),
    }).optional(),
    compatibility: z.object({
      linux: z.string().optional(),
      windows: z.string().optional(),
      macos: z.string().optional(),
      android: z.string().optional(),
      ios: z.string().optional(),
    }).optional(),
    offers: z.array(z.object({
      provider: z.enum(["mercadolivre", "shopee", "hotmart", "other"]),
      href: z.url(),
      active: z.boolean().default(true),
      lastChecked: z.coerce.date().optional(),
      label: z.string().optional(),
    })).default([]),
    affiliateLinks: z.object({
      amazon: z.url().optional(),
      mercadolivre: z.url().optional(),
      shopee: z.url().optional(),
      hotmart: z.url().optional(),
      other: z.url().optional(),
    }).optional(),
  }),
});

const storeGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/store/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: storeCategory,
    productIds: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { posts, storeProducts, storeGuides };
