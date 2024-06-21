import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  order: z.string(),
  nomeClient: z.string(),
  telefoneClient: z.string(),
  status: z.string(),
  link: z.string(),
  tracking: z.string(),
  codeTracking: z.string(),
  dataOrder: z.string(),
})

export type Task = z.infer<typeof taskSchema>

