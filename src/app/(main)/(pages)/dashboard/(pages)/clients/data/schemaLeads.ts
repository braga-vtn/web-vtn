import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  avatar: z.custom(),
  name: z.string(),
  phone: z.string(),
  productInterest: z.string(),
  email: z.string(),
  lastPurchase: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  lastContact: z.string(),
  registrationDate: z.string(),
})

export type Task = z.infer<typeof taskSchema>
