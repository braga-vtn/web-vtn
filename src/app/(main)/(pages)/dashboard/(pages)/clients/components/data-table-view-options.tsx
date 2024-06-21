"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LayoutIcon, MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="gooeyLeft2"
          size="sm"
          className="ml-auto hidden h-8 lg:flex border" 
        >
          <LayoutIcon className="mr-2 h-4 w-4" />
          Coluna
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {(() => {
          type ColumnIdType = 'nomeClient' | 'phoneClient' | 'status' | 'dateSend';

          const getDisplayText = (columnId: ColumnIdType) => {
            const idToTextMapping: { [key in ColumnIdType]: string } = {
              nomeClient: "Nome",
              phoneClient: "Telefone",
              status: "Status",
              dateSend: "Data de Envio"
            };

            return idToTextMapping[columnId] || columnId;
          };

          return table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== 'undefined' && column.getCanHide()
            )
            .map((column) => {
              const columnId = column.id as ColumnIdType;
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {getDisplayText(columnId)}
                </DropdownMenuCheckboxItem>
              );
            });
        })()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
