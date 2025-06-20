import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const stories = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/stories", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    isPublished: z.boolean(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { stories };
