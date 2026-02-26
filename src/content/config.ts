import { z, defineCollection } from 'astro:content';

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().optional(),
        geojson: z.string(), // string path like 'geo/area.geojson' to parse client-side
        image: z.string().optional() // path like 'images/navy-yard.svg'
    })
});

export const collections = {
    'case-studies': caseStudies,
};
