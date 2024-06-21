import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  source: z.string(),
  adAccount: z.string(),
  status: z.string(),
  currency: z.string(),
  sales: z.number(),
  cpa: z.number(),
  revenue: z.number(),
  spent: z.number(),
  profit: z.number(),
  profitMargin: z.number(),
  roi: z.number(),
  roas: z.number(),
  ic: z.number(),
  cpi: z.number(),
  cpm: z.number(),
  ctr: z.number(),
  cpc: z.number(),
  impressions: z.number(),
  clicks: z.number(),
  salesByPix: z.number(),
  cardSales: z.number(),
  salesByBoleto: z.number(),
})

export type Task = z.infer<typeof taskSchema>

