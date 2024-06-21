import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  action: z.string(),
  nomeClient: z.string(),
  phoneClient: z.string(),
  status: z.string(),
  dateSend: z.string(),
})

export type Task = z.infer<typeof taskSchema>

