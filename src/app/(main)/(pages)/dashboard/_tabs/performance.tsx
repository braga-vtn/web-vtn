"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarX2 } from "lucide-react"
import { differenceInCalendarDays, subDays } from "date-fns"
import SearchProduct from "../components/search-service"
import BestProduct from "../components/best-selling-product"
import ListSearchProduct from "../components/list-search-product"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  totalItems: 39, // 
  averageValue: 24989, // 
  currencyUser: "BRL", //
  bestSellers: [
    { product: "Iphone 11" },
    { product: "Iphone 15 pro" },
    { product: "iphone Xr" },
    { product: "Iphone 12" },
    { product: "Iphone 15 pro max" },
    { product: "iphone 14 pro" },
    { product: "iphone 11 pro max" },
    { product: "iphone 15" },
    { product: "iphone x" },
    { product: "iphone Xs" },
    { product: "iphone Xs" }
  ], // 
  searchCatalog: [
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
  ], // 
  mostWanted: [
    { product: "Iphone 11" },
    { product: "Iphone 13 pro" },
    { product: "iphone Xr" },
    { product: "Iphone 12" },
    { product: "Iphone 15 pro max" },
    { product: "iphone 14 pro" },
    { product: "iphone 11 pro max" },
    { product: "iphone 15" },
    { product: "iphone x" },
    { product: "iphone Xs" },
    { product: "iphone Xs" },
  ]
}

export default function TabsPerformance({ dateRange }: TabsServiceProps) {
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
      <TabsContent value="performance" className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-2">
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ">
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle>Mais Vendidos</CardTitle>
                <CardDescription>
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BestProduct data={simulationData.bestSellers} />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <div className="flex" >
                    Total de Items
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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.totalItems)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Baseado em todo o Catálogo
                </p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <div className="flex" >
                    Valor Médio
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
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.averageValue, simulationData.currencyUser)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Baseado em todo o Catálogo
                </p>
              </CardContent>
            </Card>
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <Card className="bg-neutral-100 dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle>Procura pelo Catálogo</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 mt-5">
                  <SearchProduct data={simulationData.searchCatalog} />
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Mais Procurados</CardTitle>
              <CardDescription>
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ListSearchProduct data={simulationData.mostWanted} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  )
}
