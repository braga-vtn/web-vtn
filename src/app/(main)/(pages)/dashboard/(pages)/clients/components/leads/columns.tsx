"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Task } from "../../data/schemaLeads"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "avatar",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="" />
    ),
    cell: ({ row }) => <div className="w-[10px]">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src={row.getValue("avatar")} alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telefone" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("phone")}</div>,
    enableSorting: false,

  },
  {
    accessorKey: "productInterest",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Produto de Interesse" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("productInterest")}</div>,
    enableSorting: false,

  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("email")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "lastPurchase",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Último pedido" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("lastPurchase")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Endereço" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("address")}</div>,
    enableSorting: false,
  },
  // {
  //   accessorKey: "city",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Cidade" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("city")}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "state",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Estado" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("state")}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "country",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="País" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("country")}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "lastContact",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Última interação" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("lastContact")}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "registrationDate",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Data de Registro" />
  //   ),
  //   cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("registrationDate")}</div>,
  //   enableSorting: false,
  // },
]
