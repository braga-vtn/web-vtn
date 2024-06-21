"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export type Payment = {
  product: string;
};

// Note that this would need to align with DataEntry, so we'll change the type here
export const columns: ColumnDef<DataEntry>[] = [
  {
    accessorKey: "domain",
    header: () => <div className="text-left">Domínio</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("domain")}</div>,
  },
  {
    accessorKey: "value",
    header: () => <div className="text-left">Investimento</div>,
    cell: ({ row }) => {
      const value = parseFloat(row.getValue("value"))

      // Format the value as a dollar value
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)

      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "click",
    header: () => <div className="text-left">Cliques</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("click")}</div>,
  }
];

interface DataEntry {
  value: number;
  domain: string;
  click: number;
}

interface CostDomainProps {
  data: DataEntry[];
}

export default function CostDomain({ data }: CostDomainProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [pageSize, setPageSize] = React.useState(6);
  const [pageIndex, setPageIndex] = React.useState(0);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Habilitar a modelagem por paginação
    manualPagination: false, // False se a paginação é tratada internamente
    pageCount: -1,
  });

  const pageCount = Math.ceil(data.length / pageSize);

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.slice(0, 6).map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  Nenhum resultado encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="gooeyLeftDark"
            size="sm"
            onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
            disabled={pageIndex === 0}
          >
            Anterior
          </Button>
          <Button
            variant="gooeyLeftDark"
            size="sm"
            onClick={() => setPageIndex((old) => old + 1)}
            disabled={pageIndex >= pageCount - 1}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
