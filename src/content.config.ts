import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        slug: z.string().optional(), // Optional custom slug, will use title if not provided
        description: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        image: z.object({
            url: z.union([image(), z.string()]),
            alt: z.string().optional()
        })
        .optional(),
    }),
});

export const collections = {
    blogs: blogsCollection,
};
