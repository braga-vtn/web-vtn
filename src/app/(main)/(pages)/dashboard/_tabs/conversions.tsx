"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarX2 } from "lucide-react"
import { differenceInCalendarDays, subDays } from "date-fns"
import Overview from "../components/overview"
import RecentSales from "../components/recent-sales"

interface TabsConversionsProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  totalSales: 9884, // 
  averageTicket: 13904, // 
  currencyUser: "BRL", //
  totalBilled: 148953958, // 
  recentSales: 389, // 
  salesMade: [
    { name: "01/02", pv: 3200 },
    { name: "02/02", pv: 2800 },
    { name: "03/02", pv: 3000 },
    { name: "04/02", pv: 2600 },
    { name: "05/02", pv: 3400 },
    { name: "06/02", pv: 3600 },
    { name: "07/02", pv: 3100 },
    { name: "08/02", pv: 2900 },
    { name: "09/02", pv: 3700 },
    { name: "10/02", pv: 3900 },
    { name: "11/02", pv: 4500 },
    { name: "12/02", pv: 4800 },
    { name: "13/02", pv: 4700 },
    { name: "14/02", pv: 4600 },
    { name: "15/02", pv: 4100 },
    { name: "16/02", pv: 4300 },
    { name: "17/02", pv: 4200 },
    { name: "18/02", pv: 4050 },
    { name: "19/02", pv: 3850 },
    { name: "20/02", pv: 3750 },
    { name: "21/02", pv: 3450 },
    { name: "22/02", pv: 4150 },
    { name: "23/02", pv: 4250 },
    { name: "24/02", pv: 3950 },
    { name: "25/02", pv: 3550 },
    { name: "26/02", pv: 3250 },
    { name: "27/02", pv: 3350 },
    { name: "28/02", pv: 3650 },
    { name: "29/02", pv: 3450 },
    { name: "30/02", pv: 3150 },
    { name: "01/03", pv: 3200 },
    { name: "02/03", pv: 2800 },
    { name: "03/03", pv: 3000 },
    { name: "04/03", pv: 2600 },
    { name: "05/03", pv: 3400 },
    { name: "06/03", pv: 3600 },
    { name: "07/03", pv: 3100 },
    { name: "08/03", pv: 2900 },
    { name: "09/03", pv: 3700 },
    { name: "10/03", pv: 3900 },
    { name: "11/03", pv: 4500 },
    { name: "12/03", pv: 4800 },
    { name: "13/03", pv: 4700 },
    { name: "14/03", pv: 4600 },
    { name: "15/03", pv: 4100 },
    { name: "16/03", pv: 4300 },
    { name: "17/03", pv: 4200 },
    { name: "18/03", pv: 4050 },
    { name: "19/03", pv: 3850 },
    { name: "20/03", pv: 3750 },
    { name: "21/03", pv: 3450 },
    { name: "22/03", pv: 4150 },
    { name: "23/03", pv: 4250 },
    { name: "24/03", pv: 3950 },
    { name: "25/03", pv: 3550 },
    { name: "26/03", pv: 3250 },
    { name: "27/03", pv: 3350 },
    { name: "28/03", pv: 3650 },
    { name: "29/03", pv: 3450 },
    { name: "30/03", pv: 3150 }
  ], //
  lastOrders: [
    { value: 316, client: "Matheus Braga", order: "4289" },
    { value: 242, client: "Lucas Silva", order: "2533" },
    { value: 837, client: "Maria Alves", order: "2904" },
    { value: 874, client: "Gabriela Londrina", order: "5039" },
    { value: 721, client: "Kléber Machado", order: "1039" },
    { value: 721, client: "Rodrigo Martins", order: "5095" },
    { value: 721, client: "Giovana Alves", order: "3129" },
    { value: 721, client: "Marcos Souza", order: "5309" },
    { value: 721, client: "Endrick Alves", order: "5093" },
    { value: 721, client: "Cleyton Pereira", order: "3210" }
  ] //
}

export default function TabsConversions({ dateRange }: TabsConversionsProps) {
  const calculateDateDifference = (from?: Date, to?: Date): number => {
    if (!from || !to) {
      const today = new Date();
      const defaultFrom = subDays(today, 7);
      return differenceInCalendarDays(today, defaultFrom);
    }
    return differenceInCalendarDays(to, from) + 1;
  };

  function formatNumber(value: number) {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  function formatNumberWithCents(value: number, currency: string) {
    const numericValue = value / 100;
    const formattedNumber = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericValue);
    return currency === 'BRL' ? `R$ ${formattedNumber}` : `$ ${formattedNumber}`;
  }

  const dateDifference = calculateDateDifference(dateRange.from, dateRange.to);

  return (
    <div>
      <TabsContent value="conversions" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Vendas
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.totalSales)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ticket Médio
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberWithCents(simulationData.averageTicket, simulationData.currencyUser)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Faturado
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberWithCents(simulationData.totalBilled, simulationData.currencyUser)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Vendas Recentes
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CalendarX2 className="w-4 h-4 ml-2" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>O filtro não se aplica</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.recentSales)}
              </div>
              <p className="text-xs text-muted-foreground">
                Realizada nas últimas 24h
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Vendas Realizadas</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview data={simulationData.salesMade} />
            </CardContent>
          </Card>
          <Card className="col-span-3 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Últimos pedidos</CardTitle>
                <CardDescription className="my-2">
                  Essas forão as últimas 10 vendas realizadas
                </CardDescription>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CalendarX2 className="w-4 h-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>O filtro não se aplica</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardHeader>
            <CardContent>
              <RecentSales data={simulationData.lastOrders} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  )
}
