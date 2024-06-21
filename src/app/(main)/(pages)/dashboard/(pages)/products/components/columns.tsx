"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) => <div className="w-[10px]">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src={row.getValue("image")} alt="image" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nameProduct",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("nameProduct")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categoria" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("category")}</div>,
    enableSorting: false,
  
  },
  {
    accessorKey: "value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Preço" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("value")}</div>,
    enableSorting: false,
  
  },
  {
    accessorKey: "sales",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendas" />
    ),
    cell: ({ row }) => <div className="max-w-[100px] truncate font-medium">{row.getValue("sales")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link no site" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("link")}</div>,
    enableSorting: false,
  }
]
