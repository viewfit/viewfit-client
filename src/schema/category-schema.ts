import z from "zod/v4";


export const categorySchema = z.object(
    {
        id : z.number(),
        name: z.string(),
        parentId: z.number().optional().nullable(),
    }
).array();

export type Categories = z.infer<typeof categorySchema>;

