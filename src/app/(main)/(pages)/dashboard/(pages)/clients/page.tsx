import { Metadata } from "next"
import Image from "next/image"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDashboard } from "../../components/date-range-picker"
import TabsActions from "../../_tabs/actions"
import ActionQueue from "./actionQueue"
import { MainNav } from "./components/main-nav"
import Leads from "./leads"
import DialogReport from "../../components/dialog-report"
import { useState } from "react"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardClients() {
  return (
    <>
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
              <DialogReport />
            </div>
          </div>
          <Tabs defaultValue="actions" className="space-y-4">
            <TabsList className="bg-neutral-100 dark:bg-neutral-900">
              <TabsTrigger value="actions">
                Ações
              </TabsTrigger>
              <TabsTrigger value="leads">
                Leads
              </TabsTrigger>
            </TabsList>
            <TabsActions />
            <ActionQueue />
            <Leads />
          </Tabs>
        </div>
      </div>
    </>
  )
}
