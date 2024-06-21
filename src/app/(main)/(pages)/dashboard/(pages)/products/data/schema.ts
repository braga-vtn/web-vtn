import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  image: z.custom(),
  nameProduct: z.string(),
  category: z.string(),
  value: z.string(),
  link: z.string(),
  sales: z.number(),
})

export type Task = z.infer<typeof taskSchema>
