import { z, defineCollection } from 'astro:content';

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        place: z.string(),
        concept: z.string(),
        description: z.string(),
        author: z.string().optional(),
        type: z.enum(['passenger', 'freight', 'service']),
        geojson: z.string(),
        media: z.array(z.object({
            file: z.string(),
            caption: z.string(),
            featured: z.boolean().optional(),
        })).optional(),
    })
});

export const collections = {
    'case-studies': caseStudies,
};
