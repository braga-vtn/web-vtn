import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import { TabsContent } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(main)/(pages)/dashboard/(pages)/clients/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function ActionQueue() {
  const tasks = await getTasks()

  return (
    <>
      <TabsContent value="actions" className="space-y-4">
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Ações Agendadas!</h2>
              <p className="text-muted-foreground">
                Aqui você encontra todos os futuros contatos que a Cleo irá fazer.
              </p>
            </div>
          </div>
          <DataTable data={tasks} columns={columns} />
        </div>
      </TabsContent>
    </>
  )
}
