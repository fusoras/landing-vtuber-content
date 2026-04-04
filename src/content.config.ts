import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const integrantes = defineCollection({
	// Load Markdown and MDX files in the `src/content/integrantes/` directory.
	loader: glob({ base: './src/content/integrantes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
			name: z.string(),
			description: z.string(),
			cover: z.string().optional(),
			youtube: z.string().optional(),
			instagram: z.string().optional(),
			x: z.string().optional(),
			tiktok: z.string().optional(),
		}),
});

export const collections = { integrantes };
