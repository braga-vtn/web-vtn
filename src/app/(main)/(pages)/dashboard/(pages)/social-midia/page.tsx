'use client'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDashboard } from "../../components/date-range-picker"
import { MainNav } from "./components/main-nav"
import TabsActivity from "../../_tabs/activity"
import DialogReport from "../../components/dialog-report"
import { useState } from "react"

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// }

export default function DashboardClients() {
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

  const handleDateChange = (range: { from?: Date; to?: Date }) => {
    setDateRange(range);
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <CalendarDashboard onDateChange={handleDateChange} />
            <DialogReport />
          </div>
        </div>
        <Tabs defaultValue="actividad" className="space-y-4">
          <TabsList>
            <TabsTrigger value="actividad">
              Atividade
            </TabsTrigger>
          </TabsList>
          <TabsActivity dateRange={dateRange} />
        </Tabs>
      </div>
    </div>
  )
}
