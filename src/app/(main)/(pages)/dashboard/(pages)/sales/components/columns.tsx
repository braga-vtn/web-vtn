"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { tracking, status, codeTracking } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "order",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Código do Pedido" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("order")}</div>,
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
    accessorKey: "telefoneClient",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telefone" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("telefoneClient")}</div>,
    enableSorting: false,
  
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link do Pedido" />
    ),
    cell: ({ row }) => {
      const label = tracking.find((label) => label.value === row.original.tracking)


      return (
        <div className="flex space-x-1">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("link")}
          </span>
        </div>
      )
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status do Pagamento" />
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
    accessorKey: "codeTracking",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Código de Rastreio" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("codeTracking")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "dataOrder",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("dataOrder")}</div>,
    enableSorting: false,
  },

]
