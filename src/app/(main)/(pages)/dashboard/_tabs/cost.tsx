"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import ImpressionsInvestment from "../components/cost-impressions-investment"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarX2 } from "lucide-react"
import { differenceInCalendarDays, subDays } from "date-fns"
import CpaGoogleAds from "../components/cpa-google-ads"
import CpaFacebookAds from "../components/cpa-facebook-ads"
import CostDomain from "../components/cost-domain"
import CostEngagement from "../components/cost-engagement"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  totalServices: 1398, // 
  currencyUser: "BRL", //
  averageCpaGoogle: 39049, // 
  totalInvested: 20940294, // 
  averageCpaMeta: 29490, // 
  cpaGoogle: [
    { "name": "01/02", "pv": 3300 },
    { "name": "02/02", "pv": 3500 },
    { "name": "03/02", "pv": 2000 },
    { "name": "04/02", "pv": 3400 },
    { "name": "05/02", "pv": 3600 },
    { "name": "06/02", "pv": 1600 },
    { "name": "07/02", "pv": 3400 },
    { "name": "08/02", "pv": 3500 },
    { "name": "09/02", "pv": 1700 },
    { "name": "10/02", "pv": 3300 },
    { "name": "11/02", "pv": 2500 },
    { "name": "12/02", "pv": 4400 },
    { "name": "13/02", "pv": 3700 },
    { "name": "14/02", "pv": 4200 },
    { "name": "15/02", "pv": 2100 },
    { "name": "16/02", "pv": 3300 },
    { "name": "17/02", "pv": 2300 },
    { "name": "18/02", "pv": 5050 },
    { "name": "19/02", "pv": 3250 },
    { "name": "20/02", "pv": 3750 },
    { "name": "21/02", "pv": 2350 },
    { "name": "22/02", "pv": 3450 },
    { "name": "23/02", "pv": 5350 },
    { "name": "24/02", "pv": 3450 },
    { "name": "25/02", "pv": 4350 },
    { "name": "26/02", "pv": 3350 },
    { "name": "27/02", "pv": 4450 },
    { "name": "28/02", "pv": 2350 },
    { "name": "29/02", "pv": 4350 },
    { "name": "30/02", "pv": 3450 },
    { "name": "01/03", "pv": 3600 },
    { "name": "02/03", "pv": 3500 },
    { "name": "03/03", "pv": 2300 },
    { "name": "04/03", "pv": 2500 },
    { "name": "05/03", "pv": 3500 },
    { "name": "06/03", "pv": 2600 },
    { "name": "07/03", "pv": 4400 },
    { "name": "08/03", "pv": 5300 },
    { "name": "09/03", "pv": 2400 },
    { "name": "10/03", "pv": 3500 },
    { "name": "11/03", "pv": 3200 },
    { "name": "12/03", "pv": 3600 },
    { "name": "13/03", "pv": 3100 },
    { "name": "14/03", "pv": 2500 },
    { "name": "15/03", "pv": 2600 },
    { "name": "16/03", "pv": 5300 },
    { "name": "17/03", "pv": 4600 },
    { "name": "18/03", "pv": 5050 }
  ], // 
  cpaMeta: [
    { "name": "01/02", "pv": 3300 },
    { "name": "02/02", "pv": 3500 },
    { "name": "03/02", "pv": 2000 },
    { "name": "04/02", "pv": 3400 },
    { "name": "05/02", "pv": 3600 },
    { "name": "06/02", "pv": 1600 },
    { "name": "07/02", "pv": 3400 },
    { "name": "08/02", "pv": 3500 },
    { "name": "09/02", "pv": 1700 },
    { "name": "10/02", "pv": 3300 },
    { "name": "11/02", "pv": 2500 },
    { "name": "12/02", "pv": 4400 },
    { "name": "13/02", "pv": 3700 },
    { "name": "14/02", "pv": 4200 },
    { "name": "15/02", "pv": 2100 },
    { "name": "16/02", "pv": 3300 },
    { "name": "17/02", "pv": 2300 },
    { "name": "18/02", "pv": 5050 },
    { "name": "19/02", "pv": 3250 },
    { "name": "20/02", "pv": 3750 },
    { "name": "21/02", "pv": 2350 },
    { "name": "22/02", "pv": 3450 },
    { "name": "23/02", "pv": 5350 },
    { "name": "24/02", "pv": 3450 },
    { "name": "25/02", "pv": 4350 },
    { "name": "26/02", "pv": 3350 },
    { "name": "27/02", "pv": 4450 },
    { "name": "28/02", "pv": 2350 },
    { "name": "29/02", "pv": 4350 },
    { "name": "30/02", "pv": 3450 },
    { "name": "01/03", "pv": 3600 },
    { "name": "02/03", "pv": 3500 },
    { "name": "03/03", "pv": 2300 },
    { "name": "04/03", "pv": 2500 },
    { "name": "05/03", "pv": 3500 },
    { "name": "06/03", "pv": 2600 },
    { "name": "07/03", "pv": 4400 },
    { "name": "08/03", "pv": 5300 },
    { "name": "09/03", "pv": 2400 },
    { "name": "10/03", "pv": 3500 },
    { "name": "11/03", "pv": 3200 },
    { "name": "12/03", "pv": 3600 },
    { "name": "13/03", "pv": 3100 },
    { "name": "14/03", "pv": 2500 },
    { "name": "15/03", "pv": 2600 },
    { "name": "16/03", "pv": 5300 },
    { "name": "17/03", "pv": 4600 },
    { "name": "18/03", "pv": 5050 }
  ], // 
  listDomains: [
    { value: 316, domain: "vistune.ai", click: 298 },
    { value: 242, domain: "google.com", click: 298 },
    { value: 837, domain: "shoponline.com.br", click: 298 },
    { value: 874, domain: "facebook.com", click: 298 },
    { value: 721, domain: "apple.com", click: 298 },
    { value: 721, domain: "instagram.com", click: 298 },
    { value: 721, domain: "youtube.com", click: 298 },
    { value: 721, domain: "shopify.com", click: 298 },
    { value: 721, domain: "bling.com.br", click: 298 },
    { value: 721, domain: "cloudflare.com", click: 298 },
    { value: 721, domain: "adobe.com", click: 298 }
  ], // 
  investmentClicks: [
    { name: '01/03', investimento: 1500, cliques: 450 },
    { name: '02/03', investimento: 1520, cliques: 460 },
    { name: '03/03', investimento: 1480, cliques: 430 },
    { name: '04/03', investimento: 1550, cliques: 475 },
    { name: '05/03', investimento: 1600, cliques: 480 },
    { name: '06/03', investimento: 1620, cliques: 490 },
    { name: '07/03', investimento: 1580, cliques: 460 },
    { name: '08/03', investimento: 1650, cliques: 495 },
    { name: '09/03', investimento: 1700, cliques: 510 },
    { name: '10/03', investimento: 1750, cliques: 525 },
    { name: '11/03', investimento: 1720, cliques: 515 },
    { name: '12/03', investimento: 1680, cliques: 500 },
    { name: '13/03', investimento: 1690, cliques: 505 },
    { name: '14/03', investimento: 1660, cliques: 495 },
    { name: '15/03', investimento: 1640, cliques: 490 },
    { name: '16/03', investimento: 1670, cliques: 500 },
    { name: '17/03', investimento: 1700, cliques: 510 },
    { name: '18/03', investimento: 1650, cliques: 495 },
    { name: '19/03', investimento: 1600, cliques: 475 },
    { name: '20/03', investimento: 1620, cliques: 485 },
    { name: '21/03', investimento: 1580, cliques: 470 },
    { name: '22/03', investimento: 1550, cliques: 465 },
    { name: '23/03', investimento: 1530, cliques: 455 },
    { name: '24/03', investimento: 1560, cliques: 470 },
    { name: '25/03', investimento: 1590, cliques: 480 },
    { name: '26/03', investimento: 1540, cliques: 460 },
    { name: '27/03', investimento: 1600, cliques: 485 },
    { name: '28/03', investimento: 1630, cliques: 495 },
    { name: '29/03', investimento: 1680, cliques: 505 },
    { name: '30/03', investimento: 1650, cliques: 500 }
  ], // 
  totalImpressions: 849294019, // 
  averageCpe: 1839, // 
  engagementCost: [
    { date: "01/04", vt: 3200 },
    { date: "02/04", vt: 2800 },
    { date: "03/04", vt: 3000 },
    { date: "04/04", vt: 2600 },
    { date: "05/04", vt: 3400 },
    { date: "06/04", vt: 3600 },
    { date: "07/04", vt: 3100 },
    { date: "08/04", vt: 2900 },
    { date: "09/04", vt: 3700 },
    { date: "10/04", vt: 3900 },
    { date: "11/04", vt: 4500 },
    { date: "12/04", vt: 4800 },
    { date: "13/04", vt: 4700 },
    { date: "14/04", vt: 4600 },
    { date: "15/04", vt: 4100 },
    { date: "16/04", vt: 4300 },
    { date: "17/04", vt: 4200 },
    { date: "18/04", vt: 4050 },
    { date: "19/04", vt: 3850 },
    { date: "20/04", vt: 3750 },
    { date: "21/04", vt: 3450 },
    { date: "22/04", vt: 4150 },
    { date: "23/04", vt: 4250 },
    { date: "24/04", vt: 3950 },
    { date: "25/04", vt: 3550 },
    { date: "26/04", vt: 3250 },
    { date: "27/04", vt: 3350 },
    { date: "28/04", vt: 3650 },
    { date: "29/04", vt: 3450 },
    { date: "30/04", vt: 3150 },
    { date: "01/05", vt: 3200 },
    { date: "02/05", vt: 2800 },
    { date: "03/05", vt: 3000 },
    { date: "04/05", vt: 2600 },
    { date: "05/05", vt: 3400 },
    { date: "06/05", vt: 3600 },
    { date: "07/05", vt: 3100 },
    { date: "08/05", vt: 2900 },
    { date: "09/05", vt: 3700 },
    { date: "10/05", vt: 3900 },
    { date: "11/05", vt: 4500 },
    { date: "12/05", vt: 4800 },
    { date: "13/05", vt: 4700 },
    { date: "14/05", vt: 4600 },
    { date: "15/05", vt: 4100 },
    { date: "16/05", vt: 4300 },
    { date: "17/05", vt: 4200 },
    { date: "18/05", vt: 4050 }
  ] // 
}

export default function TabsCost({ dateRange }: TabsServiceProps) {
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
      <TabsContent value="costs" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-2">
            <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  CPA Médio ~ G. Ads
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg"><path d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.averageCpaGoogle, simulationData.currencyUser)}
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
                  Total Investido
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
                  {formatNumberWithCents(simulationData.totalInvested, simulationData.currencyUser)}
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
                  CPA Médio ~ Fb. Ads
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.averageCpaMeta, simulationData.currencyUser)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 col-span-3">
              <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle>CPA ~ Google Ads</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 mt-3">
                  <CpaGoogleAds data={simulationData.cpaGoogle} />
                </CardContent>
              </Card>
              <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle>CPA ~ Facebook Ads</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 mt-3">
                  <CpaFacebookAds data={simulationData.cpaMeta} />
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Domínios</CardTitle>
                <CardDescription className="my-2">
                  Veja o desempenho por domínio
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
              <CostDomain data={simulationData.listDomains} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Cliques por Investimento</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <ImpressionsInvestment data={simulationData.investmentClicks} />
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Impressões
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.totalImpressions)}
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
                  Média do CPE
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.averageCpe, simulationData.currencyUser)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle>Custo por Engajamento</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <CostEngagement data={simulationData.engagementCost} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TabsContent>
    </div>
  )
}
