"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LayoutIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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
          type ColumnIdType = 'source' | 'adAccount' | 'status'
            | 'currency' | 'sales' | 'cpa' | 'revenue'
            | 'spent' | 'profit' | 'profitMargin' | 'roi'
            | 'roas' | 'ic' | 'cpi' | 'cpm'
            | 'ctr' | 'cpc' | 'impressions' | 'clicks'
            | 'salesByPix' | 'cardSales' | 'salesByBoleto';

          const getDisplayText = (columnId: ColumnIdType) => {
            const idToTextMapping: { [key in ColumnIdType]: string } = {
              source: 'Fonte',
              adAccount: 'Conta de Anúncio',
              status: 'Status',
              currency: 'Moeda',
              sales: 'Vendas',
              cpa: 'CPA',
              revenue: 'Receita',
              spent: 'Gasto',
              profit: 'Lucro',
              profitMargin: 'Margem de Lucro',
              roi: 'ROI',
              roas: 'ROAS',
              ic: 'IC',
              cpi: 'CPI',
              cpm: 'CPM',
              ctr: 'CTR',
              cpc: 'CPC',
              impressions: 'Impressões',
              clicks: 'Cliques',
              salesByPix: 'Vendas por Pix',
              cardSales: 'Vendas por Cartão',
              salesByBoleto: 'Venda por Boleto',
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
                  className="capitalize"
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
