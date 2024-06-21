"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import InteractionUsed from "../components/interaction-used"
import InteractionModel from "../components/interaction-model"
import InteractionPlataform from "../components/interaction-plataform"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarX2 } from "lucide-react"
import { differenceInCalendarDays, subDays } from "date-fns"
import { capitalizeFirstLetter } from "@/lib/utils"
import InteractionTraining from "../components/interaction-training"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  availableInteractions: 202, // 
  interactionsUsed: 298, // 
  monthInteractions: 500, // 
  planUser: "company", // 
  generatedReports: 3, // 
  playgroundUse: 93, // 
  consumptionInteractions: [
    { name: "01/03", uv: 3200 },
    { name: "02/03", uv: 2800 },
    { name: "03/03", uv: 3000 },
    { name: "04/03", uv: 2600 },
    { name: "05/03", uv: 3400 },
    { name: "06/03", uv: 3600 },
    { name: "07/03", uv: 3100 },
    { name: "08/03", uv: 2900 },
    { name: "09/03", uv: 3700 },
    { name: "10/03", uv: 3900 },
    { name: "11/03", uv: 4500 },
    { name: "12/03", uv: 4800 },
    { name: "13/03", uv: 4700 },
    { name: "14/03", uv: 4600 },
    { name: "15/03", uv: 4100 },
    { name: "16/03", uv: 4300 },
    { name: "17/03", uv: 4200 },
    { name: "18/03", uv: 4050 },
    { name: "19/03", uv: 3850 },
    { name: "20/03", uv: 3750 },
    { name: "21/03", uv: 3450 },
    { name: "22/03", uv: 4150 },
    { name: "23/03", uv: 4250 },
    { name: "24/03", uv: 3950 },
    { name: "25/03", uv: 3550 },
    { name: "26/03", uv: 3250 },
    { name: "27/03", uv: 3350 },
    { name: "28/03", uv: 3650 },
    { name: "29/03", uv: 3450 },
    { name: "30/03", uv: 3150 }
  ], // 
  UsingModels: [
    { name: "Vision", value: 132 },
    { name: "Cleo", value: 480 },
    { name: "Meus Modelos", value: 42 },
  ], // 
  servicePlatform: [
    { name: "WhatsApp", value: 2230 },
    { name: "Instagram", value: 680 },
    { name: "Messenger", value: 249 },
    { name: "Email", value: 330 },
    { name: "Telegram", value: 420 },
  ], // 
  trainingMethod: [
    { name: "Texto", value: 19 },
    { name: "Vídeo", value: 2 },
    { name: "Arquivo", value: 24 },
    { name: "Áudio", value: 13 },
    { name: "Url", value: 49 },
  ] // 
}

export default function TabsInteraction({ dateRange }: TabsServiceProps) {
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

  const dateDifference = calculateDateDifference(dateRange.from, dateRange.to);

  return (
    <div>
      <TabsContent value="interaction" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Interações Disponíveis
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.availableInteractions)}
              </div>
              <p className="text-xs text-muted-foreground">
                Este mês
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Interações Utilizadas
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0697 1.76746C12.4807 1.21947 11.4605 0.454311 11.0495 1.0023C10.6385 1.55028 11.6588 2.31544 12.0697 1.76746ZM8.39263 1.07811C7.15585 0.950602 5.7823 1.16348 4.58433 1.70937C3.38552 2.25563 2.32735 3.15309 1.78844 4.41832C1.37574 5.38724 1.01715 6.28113 1.00088 7.44354C0.984724 8.59844 1.30522 9.96898 2.13174 11.928C2.61142 13.0649 4.03963 13.5446 5.13895 13.8079C6.40836 14.1119 7.80857 14.1914 8.6644 14.0742C9.36515 13.9782 10.1448 13.8284 10.7987 13.297C11.8977 12.4039 12.9009 11.3955 13.4994 10.3393C14.104 9.27221 14.3256 8.09207 13.7216 6.95324C13.5628 6.65373 13.316 6.57734 13.0412 6.4923C12.9374 6.46016 12.8295 6.42678 12.7209 6.37966C11.6211 5.90234 10.9646 5.34963 10.9135 5.02876C10.8656 4.72808 10.9221 4.51463 10.9811 4.29181C11.0129 4.17199 11.0453 4.04947 11.0626 3.90922C11.0838 3.73737 11.0814 3.33319 10.6996 3.12761C10.4048 2.96888 10.2164 2.65843 10.0407 2.36904C9.99742 2.29775 9.95492 2.22773 9.9118 2.16158C9.62634 1.72367 9.20769 1.16213 8.39263 1.07811ZM4.99899 2.61935C3.96483 3.09058 3.12554 3.83097 2.70846 4.81018C2.29808 5.77368 2.01406 6.50873 2.00079 7.45753C1.98741 8.41385 2.25043 9.6368 3.0531 11.5393C3.39181 12.3421 4.62167 12.6557 5.37186 12.8354C6.5493 13.1174 7.822 13.1802 8.52868 13.0834C9.21271 12.9897 9.74568 12.8642 10.1681 12.5209C11.229 11.6587 12.121 10.7435 12.6293 9.84635C12.9349 9.30709 13.5141 7.7028 12.6292 7.3873C10.7539 6.71875 10.262 6.06669 9.99011 5.41268C9.80915 4.97744 9.82868 4.52282 9.95741 4.07885L9.95741 4.07884C9.97662 4.0126 9.99538 3.94791 10.0334 3.88882C9.81857 3.73676 9.6515 3.55195 9.51464 3.3715C9.42876 3.25828 9.3469 3.12099 9.26197 2.97856C9.01866 2.57052 8.75018 2.12027 8.29008 2.07283C7.22889 1.96343 6.03398 2.14772 4.99899 2.61935ZM13.2081 3.77471C13.441 3.22671 12.4547 2.63606 12.0822 3.10163C11.5817 3.72732 12.9029 4.49281 13.2081 3.77471ZM14.3672 2.26031C14.9668 2.27493 15.1551 1.11603 14.5718 0.949371C13.8076 0.731026 13.5918 2.24139 14.3672 2.26031ZM14.2857 5.09098C14.8644 5.10004 15.0462 4.38222 14.4832 4.27899C13.7455 4.14375 13.5373 5.07927 14.2857 5.09098ZM6.9075 4.28672C6.46898 4.66754 6.0522 4.15185 5.97983 3.7365C5.86848 3.09744 6.33696 2.56856 6.94823 2.91156C7.43344 3.18382 7.26678 3.97471 6.9075 4.28672ZM4.94455 5.88184C5.40885 5.41754 4.59567 4.57013 4.11425 5.05154C3.83338 5.33242 4.00936 5.65376 4.23744 5.88184C4.43271 6.0771 4.74929 6.0771 4.94455 5.88184ZM6.97716 6.71984C7.31181 7.38914 8.48804 6.79159 7.99413 6.14788C7.86519 5.97983 7.68657 5.9494 7.62145 5.94207C7.21217 5.89601 6.76349 6.2925 6.97716 6.71984ZM6.98798 8.72461C7.14066 9.1188 7.51122 9.3187 7.91915 9.1633C8.27434 9.02799 8.33186 8.39689 8.17175 8.07427C8.02331 7.77514 7.63956 7.67793 7.33747 7.79417C6.98512 7.92976 6.85672 8.38708 6.98576 8.71889L6.98798 8.72461ZM10.3885 8.84081C10.7575 8.6566 11.4617 8.82771 11.4617 9.31199C11.4617 9.71286 10.9587 10.2165 10.5634 10.2826C10.1813 10.3465 9.70515 9.97581 9.76648 9.57718C9.81445 9.26539 10.1217 8.97401 10.3885 8.84081ZM7.56704 10.8432C7.33461 10.7502 7.14353 10.8601 7.11437 10.8769L7.11279 10.8778C6.90782 10.9949 6.71383 11.2439 6.6747 11.4842C6.59018 12.0034 7.13199 12.1239 7.52661 12.0987C8.2074 12.0553 8.06547 11.0426 7.56704 10.8432ZM4.8805 10.8932C5.0674 10.7723 5.15658 10.5363 5.08293 10.3153C4.93046 9.79687 4.3246 9.71252 3.96561 10.1297C3.79336 10.3299 3.80749 10.6274 3.99214 10.8105L3.99495 10.814L3.9979 10.8176C4.22025 11.0942 4.63624 11.1857 4.8805 10.8932ZM3.04695 7.81318C3.33147 8.0977 3.60077 8.15067 3.98443 8.05859C4.60826 7.90887 4.13814 6.24299 3.047 6.87296C2.70939 7.06788 2.86716 7.63339 3.04695 7.81318Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.interactionsUsed)}
              </div>
              <p className="text-xs text-muted-foreground">
                Este mês
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Interações por Mês
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
                {formatNumber(simulationData.monthInteractions)}
              </div>
              <p className="text-xs text-muted-foreground">
                Plano {capitalizeFirstLetter(simulationData.planUser)}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Relatórios Gerados
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.generatedReports)}
              </div>
              <p className="text-xs text-muted-foreground">
                Este mês
              </p>
            </CardContent>
          </Card>
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex" >
                  Utilização do Playground
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.playgroundUse)}
              </div>
              <p className="text-xs text-muted-foreground">
                Este mês
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>
                Consumo de Interações 30d
              </CardTitle>
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
            <CardContent className="pl-1">
              <InteractionUsed data={simulationData.consumptionInteractions} />
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Utilização dos Modelos</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <InteractionModel data={simulationData.UsingModels} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Plataformas de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <InteractionPlataform data={simulationData.servicePlatform} />
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>
                Métodos de Treinamentos
              </CardTitle>
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
            <CardContent className="pl-2">
              <InteractionTraining data={simulationData.trainingMethod} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  )
}
