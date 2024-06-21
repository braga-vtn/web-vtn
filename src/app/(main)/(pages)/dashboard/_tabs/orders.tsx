"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Overview } from "../components/overview"
import { RecentSales } from "../components/recent-sales"
import { LineChartRevenue } from "../components/revenueLineChart"
import PieChartRevenue from "../components/revenuePieChart"

export default function TabsOrders() {
  return (
    <div>
      <TabsContent value="revenue" className="space-y-4">

      </TabsContent>
    </div>

  )
}
