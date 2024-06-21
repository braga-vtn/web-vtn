"use client"

import { ColumnDef } from "@tanstack/react-table"
import { status } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ação" />
    ),
    cell: ({ row }) => <div className="w-[170px]">{row.getValue("action")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nomeClient",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("nomeClient")}</div>,
    enableSorting: false,

  },
  {
    accessorKey: "phoneClient",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telefone" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("phoneClient")}</div>,
    enableSorting: false,

  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const priority = status.find(
        (priority) => priority.value === row.getValue("status")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          <span>{priority.label}</span>
        </div>
      )
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "dateSend",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Envio" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("dateSend")}</div>,
    enableSorting: false,
  },
 ]
