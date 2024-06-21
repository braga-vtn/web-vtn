"use client"

import { ColumnDef } from "@tanstack/react-table"
import { status } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

function formatNumber(value: number) {
  return new Intl.NumberFormat('pt-BR').format(value);
}

function formatNumberWithCents(value: number, currency: string) {
  const numericValue = value / 100;
  const formattedNumber = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericValue);
  // Prefixando com o símbolo de moeda baseado no valor da moeda
  return currency === 'BRL' ? `R$ ${formattedNumber}` : `$ ${formattedNumber}`;
}

function formatNumberDivision100(value: number) {
  const numericValue = value / 100;

  return numericValue;
}

function formatPercentage(value: number) {
  const percentageValue = value * 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(percentageValue) + '%';
}

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fonte" />
    ),
    cell: ({ row }) => <div className="max-w-[300px]">{row.getValue("source")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "adAccount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Conta de Anúncio" />
    ),
    cell: ({ row }) => <div className="max-w-[300px] truncate font-medium">{row.getValue("adAccount")}</div>,
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
    accessorKey: "currency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Moeda" />
    ),
    cell: ({ row }) => <div className="max-w-[300px]">{row.getValue("currency")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "sales",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vendas" />
    ),
    cell: ({ row }) => <div className="truncate font-medium">{formatNumber(row.getValue("sales"))}</div>,
    enableSorting: false,

  },
  {
    accessorKey: "cpa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPA" />
    ),
    cell: ({ row }) => <div className="truncate font-medium">{formatNumberWithCents(row.getValue("cpa"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "revenue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Receita" />
    ),
    cell: ({ row }) => <div>{formatNumberWithCents(row.getValue("revenue"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "spent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gasto" />
    ),
    cell: ({ row }) => <div>{formatNumberWithCents(row.getValue("spent"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "profit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lucro" />
    ),
    cell: ({ row }) => <div>{formatNumberWithCents(row.getValue("profit"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  // {
  //   accessorKey: "profitMargin",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Margem de Lucro" />
  //   ),
  //   cell: ({ row }) => <div >{formatPercentage(row.getValue("profitMargin"))}</div>,
  //   enableSorting: false,
  // },
  {
    accessorKey: "roi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ROI" />
    ),
    cell: ({ row }) => <div >{formatPercentage(row.getValue("roi"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "roas",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ROAS" />
    ),
    cell: ({ row }) => <div >{formatNumberDivision100(row.getValue("roas"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "ic",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IC" />
    ),
    cell: ({ row }) => <div >{formatNumber(row.getValue("ic"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "cpi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPI" />
    ),
    cell: ({ row }) => <div >{formatNumberWithCents(row.getValue("cpi"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "cpm",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPM" />
    ),
    cell: ({ row }) => <div >{formatNumberWithCents(row.getValue("cpm"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "ctr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CTR" />
    ),
    cell: ({ row }) => <div >{formatPercentage(row.getValue("ctr"))}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "cpc",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPC" />
    ),
    cell: ({ row }) => <div >{formatNumberWithCents(row.getValue("cpc"), row.getValue("currency"))}</div>,
    enableSorting: false,
  },
  // {
  //   accessorKey: "impressions",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Impressões" />
  //   ),
  //   cell: ({ row }) => <div >{formatNumber(row.getValue("impressions"))}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "clicks",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Cliques" />
  //   ),
  //   cell: ({ row }) => <div >{formatNumber(row.getValue("clicks"))}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "salesByPix",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Vendas por Pix" />
  //   ),
  //   cell: ({ row }) => <div >{formatNumber(row.getValue("salesByPix"))}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "cardSales",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Vendas por Cartão" />
  //   ),
  //   cell: ({ row }) => <div >{formatNumber(row.getValue("cardSales"))}</div>,
  //   enableSorting: false,
  // },
  // {
  //   accessorKey: "salesByBoleto",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Vendas por Boleto" />
  //   ),
  //   cell: ({ row }) => <div >{formatNumber(row.getValue("salesByBoleto"))}</div>,
  //   enableSorting: false,
  // },
]
