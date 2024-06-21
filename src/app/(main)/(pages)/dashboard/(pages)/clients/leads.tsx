import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { DataTable } from "./components/leads/data-table"
import { taskSchema } from "./data/schemaLeads"
import { TabsContent } from "@/components/ui/tabs"
import { columns } from "./components/leads/columns"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(main)/(pages)/dashboard/(pages)/clients/data/leads.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function Leads() {
  const tasks = await getTasks()

  return (
    <>
      <TabsContent value="leads" className="space-y-4">
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
          </div>
          <DataTable data={tasks} columns={columns} />
        </div>
      </TabsContent>
    </>
  )
}
