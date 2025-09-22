import { z } from "zod/v4";

export const cosmeticSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    description: z.string().nullable().optional(),
    viewCount: z.number(),
    category: z.number().nullable().optional(),
    manufacturerI: z.number().optional(),
    sellCount: z.number(),
  })
  .array();

export type Cosmetics = z.infer<typeof cosmeticSchema>;
