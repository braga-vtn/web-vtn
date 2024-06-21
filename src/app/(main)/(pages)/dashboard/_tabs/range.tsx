"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import RangerGender from "../components/range-gender"
import RangeFbAds from "../components/range-fb-ads"
import RangePie from "../components/range-pie"
import { differenceInCalendarDays, subDays } from "date-fns"
import RangeCity from "../components/range-city"
import RangeFunnel from "../components/range-funnel"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  maleGender: 923758, // 
  feminineGender: 598482, // 
  conversionIndex: 2.4, // 
  fullRange: 4289042, // 
  majorCities: [
    { city: "Goiânia", interaction: 298.939 },
    { city: "São Paulo", interaction: 189.475 },
    { city: "Rio de Janeiro", interaction: 132.105 },
    { city: "Salvador", interaction: 94.924 },
    { city: "Belo Horizonte", interaction: 67.019 },
    { city: "Belo Horizonte", interaction: 23.852 },
    { city: "Belo Horizonte", interaction: 13.843 },
    { city: "Belo Horizonte", interaction: 9.824 },
    { city: "Belo Horizonte", interaction: 4.289 },
    { city: "Belo Horizonte", interaction: 894 }
  ], // 
  conversionFunnel: [
    { id: "step_sent", value: 10000, label: "Entraram no Canal", vt: 90028 },
    { id: "step_viewed", value: 7000, label: "Demonstrou Interesse", vt: 27918 },
    { id: "step_clicked", value: 4000, label: "Entrou no Checkout", vt: 7741 },
    { id: "step_add_to_card", value: 1000, label: "Realizou o Pagamento", vt: 938 }
  ], // 
  genderComparison: [
    { name: "01/03", feminino: 4050, masculino: 2410 },
    { name: "02/03", feminino: 3640, masculino: 2198 },
    { name: "03/03", feminino: 3120, masculino: 3400 },
    { name: "04/03", feminino: 4125, masculino: 2901 },
    { name: "05/03", feminino: 3080, masculino: 1998 },
    { name: "06/03", feminino: 4096, masculino: 3178 },
    { name: "07/03", feminino: 5003, masculino: 2871 },
    { name: "08/03", feminino: 4999, masculino: 3660 },
    { name: "09/03", feminino: 4204, masculino: 2089 },
    { name: "10/03", feminino: 3800, masculino: 2500 },
    { name: "11/03", feminino: 4601, masculino: 3055 },
    { name: "12/03", feminino: 3407, masculino: 2322 },
    { name: "13/03", feminino: 3100, masculino: 2986 },
    { name: "14/03", feminino: 3655, masculino: 2433 },
    { name: "15/03", feminino: 3960, masculino: 2567 },
    { name: "16/03", feminino: 3898, masculino: 3158 },
    { name: "17/03", feminino: 4080, masculino: 2980 },
    { name: "18/03", feminino: 4791, masculino: 2836 },
    { name: "19/03", feminino: 4567, masculino: 3902 },
    { name: "20/03", feminino: 3940, masculino: 2109 },
    { name: "21/03", feminino: 5241, masculino: 3217 },
    { name: "22/03", feminino: 4105, masculino: 2987 },
    { name: "23/03", feminino: 3751, masculino: 3310 },
    { name: "24/03", feminino: 4403, masculino: 2727 },
    { name: "25/03", feminino: 5055, masculino: 2820 },
    { name: "26/03", feminino: 3811, masculino: 3001 },
    { name: "27/03", feminino: 3259, masculino: 2240 },
    { name: "28/03", feminino: 4888, masculino: 2199 },
    { name: "29/03", feminino: 3370, masculino: 3810 },
    { name: "30/03", feminino: 4228, masculino: 2790 }
  ], // 
  rangeMeta: [
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
    { name: "28/02", pv: 3650 }
  ], // 
  deviceMetrics: [
    { name: "Celular", value: 100.392 },
    { name: "Tablet", value: 129.404 },
    { name: "Computador", value: 283.094 }
  ], // 
}

export default function TabsRange({ dateRange }: TabsServiceProps) {
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

  function formatNumberDivision100(value: number) {
    const numericValue = value / 100;

    return `${numericValue}%`
  }

  function formatNumberWithCents(value: number, currency: string) {
    const numericValue = value / 100;
    const formattedNumber = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericValue);
    return currency === 'BRL' ? `R$ ${formattedNumber}` : `$ ${formattedNumber}`;
  }

  const dateDifference = calculateDateDifference(dateRange.from, dateRange.to);

  return (
    <div>
      <TabsContent value="range" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 col-span-2">
            <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Genero Masculino
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.maleGender)}
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
                  Genero Feminino
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.feminineGender)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Índice de Conversão
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberDivision100(simulationData.conversionIndex)}
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
                  Alcance Total
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.fullRange)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 col-span-2">
              <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle>Principais Cidades</CardTitle>
                  <CardDescription>
                    Cidades mais alcançadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RangeCity data={simulationData.majorCities} />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 col-span-3">
            <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle>Funil de Conversão</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <RangeFunnel data={simulationData.conversionFunnel} />
              </CardContent>
            </Card>
            <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
              <CardHeader>
                <CardTitle>Gêneros</CardTitle>
              </CardHeader>
              <CardContent className="pl-1">
                <RangerGender data={simulationData.genderComparison} />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Alcance ~ Fb. Ads</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <RangeFbAds data={simulationData.rangeMeta} />
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Dispositivos</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <RangePie data={simulationData.deviceMetrics} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  )
}
