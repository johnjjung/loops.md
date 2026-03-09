import { z } from "zod";
import { categories as rawCategories } from "../../content/categories";
import { loops as rawLoops } from "../../content/loops";
import type { Category, LoopTemplate } from "@/lib/types";

const categorySchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  sortOrder: z.number().int().nonnegative(),
});

const loopBlockSchema = z.object({
  summary: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(2),
  snippet: z.string().min(1),
});

const loopExampleSchema = z.object({
  title: z.string().min(1),
  insight: z.string().min(1),
  payoff: z.string().min(1),
});

const loopTemplateSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  summary: z.string().min(1),
  audience: z.string().min(1),
  tags: z.array(z.string().min(1)).min(2),
  signalSpeed: z.enum(["Fast", "Medium", "Slow"]),
  primaryMetric: z.string().min(1),
  variables: z.array(z.string().min(1)).min(2),
  featured: z.boolean(),
  baseline: loopBlockSchema,
  template: loopBlockSchema,
  program: loopBlockSchema,
  examples: z.array(loopExampleSchema).min(2),
  relatedSlugs: z.array(z.string().min(1)).min(2),
});

const parsedCategories = categorySchema
  .array()
  .parse(rawCategories)
  .sort((left, right) => left.sortOrder - right.sortOrder) as Category[];

const parsedLoops = loopTemplateSchema.array().parse(rawLoops) as LoopTemplate[];

const categorySlugs = new Set<string>();
for (const category of parsedCategories) {
  if (categorySlugs.has(category.slug)) {
    throw new Error(`Duplicate category slug: ${category.slug}`);
  }

  categorySlugs.add(category.slug);
}

const loopSlugs = new Set<string>();
for (const loop of parsedLoops) {
  if (!categorySlugs.has(loop.category)) {
    throw new Error(`Loop ${loop.slug} references missing category ${loop.category}`);
  }

  if (loopSlugs.has(loop.slug)) {
    throw new Error(`Duplicate loop slug: ${loop.slug}`);
  }

  loopSlugs.add(loop.slug);
}

for (const loop of parsedLoops) {
  for (const relatedSlug of loop.relatedSlugs) {
    if (!loopSlugs.has(relatedSlug)) {
      throw new Error(`Loop ${loop.slug} references missing related slug ${relatedSlug}`);
    }
  }
}

export const categories = parsedCategories;
export const loops = parsedLoops;

export function getCategories() {
  return categories;
}

export function getLoops() {
  return loops;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getLoopsByCategory(categorySlug: string) {
  return loops.filter((loop) => loop.category === categorySlug);
}

export function getLoopBySlug(slug: string) {
  return loops.find((loop) => loop.slug === slug);
}

export function getLoopSlugs() {
  return loops.map((loop) => loop.slug);
}

export function getFeaturedLoops() {
  return loops.filter((loop) => loop.featured);
}

export function getRelatedLoops(loop: LoopTemplate) {
  return loop.relatedSlugs
    .map((slug) => getLoopBySlug(slug))
    .filter((relatedLoop): relatedLoop is LoopTemplate => Boolean(relatedLoop));
}
