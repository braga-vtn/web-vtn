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
          // Definindo explicitamente o tipo para as chaves do mapeamento
          type ColumnIdType =
            'name' | 'phone' | 'productInterest' | 'email' | 'lastContact' |
            'lastPurchase' | 'address' | 'city' | 'state' | 'country' |
            'registrationDate';

          // Função que mapeia os IDs para os textos correspondentes
          const getDisplayText = (columnId: ColumnIdType) => {
            const idToTextMapping: { [key in ColumnIdType]: string } = {
              name: 'Nome',
              phone: 'Telefone',
              productInterest: 'Produto de interesse',
              email: 'Email',
              lastPurchase: 'Último pedido',
              address: 'Endereço',
              city: 'Cidade',
              state: 'Estado',
              country: 'País',
              lastContact: 'Último contato',
              registrationDate: 'Data de registro'
            };

            // Retorna o texto correspondente ou o próprio ID se não encontrou correspondência
            return idToTextMapping[columnId] || columnId;
          };

          return table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== 'undefined' && column.getCanHide()
            )
            .map((column) => {
              // Assegura que o id é reconhecido como ColumnIdType ou converte para string caso contrário
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
