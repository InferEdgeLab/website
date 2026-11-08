import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Benchmark scaffold - no entries yet. See src/content/benchmarks/README.md for how to
 * publish one. README.md is excluded from the glob so it never has to satisfy the schema.
 */
const benchmarks = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: './src/content/benchmarks' }),
  schema: z.object({
    title: z.string(),
    model: z.string(),
    gpu: z.string(),
    cloudInstance: z.string(),
    runtimes: z.array(z.string()),
    precisions: z.array(z.string()),
    datePublished: z.string(),
    summary: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { benchmarks };
