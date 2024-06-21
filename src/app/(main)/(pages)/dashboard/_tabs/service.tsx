"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import ServiceResponse from "../components/service-response"
import ServiceDivision from "../components/service-division"
import { CalendarX2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { differenceInCalendarDays, subDays } from "date-fns"
import ServiceFlow from "../components/service-flow"

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  totalServices: 1398, // 
  chatManager: 298, // 
  timeManager: 13, // 
  questionsProducts: 988, // 
  questionsRequests: 31894, // 
  serviceDivision: [
    { name: "Suporte", value: 132 },
    { name: "Pedido", value: 80 },
    { name: "Outros", value: 249 },
  ],  // 
  replySent: [
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
    { name: "30/03", pv: 3150 },
  ], // 
  serviceFlow: [
    { name: "01h", total: 0 },
    { name: "02h", total: 10 },
    { name: "03h", total: 10 },
    { name: "04h", total: 5 },
    { name: "05h", total: 20 },
    { name: "06h", total: 25 },
    { name: "07h", total: 25 },
    { name: "08h", total: 30 },
    { name: "09h", total: 40 },
    { name: "10h", total: 60 },
    { name: "11h", total: 80 },
    { name: "12h", total: 120 },
    { name: "13h", total: 130 },
    { name: "14h", total: 140 },
    { name: "15h", total: 140 },
    { name: "16h", total: 150 },
    { name: "17h", total: 140 },
    { name: "18h", total: 120 },
    { name: "19h", total: 80 },
    { name: "20h", total: 40 },
    { name: "21h", total: 20 },
    { name: "22h", total: 10 },
    { name: "23h", total: 5 },
    { name: "24h", total: 0 },
  ] //
}

export default function TabsService({ dateRange }: TabsServiceProps) {
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
      <TabsContent value="service" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Atendimentos
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.totalServices)}
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
                Chat para o Gerente
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.chatManager)}
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
                Tempo Médio do Gerente
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.timeManager)} min
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
                Perguntas sobre Produtos
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.questionsProducts)}
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
                Perguntas sobre Pedidos
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8113 1.64706C6.62188 2.87918 6.68268 3.88523 6.76848 5.30499C6.78415 5.56426 6.80065 5.83732 6.81661 6.12808C6.83111 6.39208 6.63758 6.62172 6.37495 6.65217C6.11232 6.68262 5.87138 6.50334 5.82509 6.24304L5.74754 5.80698C5.64402 5.16529 5.48355 4.25481 5.17807 3.44741C4.86241 2.61312 4.4486 2.04121 3.93436 1.86044C3.64994 1.76104 3.41901 1.84279 3.25868 2.01052C3.08746 2.18962 2.9976 2.47065 3.0627 2.75399C3.2146 3.34424 3.44627 3.9167 3.69836 4.51802C3.72082 4.57158 3.74346 4.62543 3.76621 4.67954C3.9954 5.22457 4.23619 5.7972 4.41644 6.39081L4.41691 6.39238C4.562 6.87586 4.65646 7.2595 4.73086 7.56165C4.76034 7.68138 4.78667 7.78831 4.81175 7.88359C4.86768 8.09606 4.77836 8.32014 4.59161 8.43588C4.40486 8.55161 4.16445 8.53188 3.99907 8.38725C3.73749 8.15848 3.515 7.92784 3.31817 7.71802C3.27627 7.67335 3.23602 7.63018 3.19705 7.58838C3.04777 7.42826 2.91712 7.28812 2.78334 7.16029C2.45989 6.85122 2.18398 6.68004 1.80585 6.64369L1.80324 6.64343C1.56117 6.61888 1.41402 6.66441 1.31756 6.72627C1.21899 6.78947 1.11988 6.90414 1.03784 7.1123C0.976576 7.28492 1.01515 7.62987 1.1929 7.96911L1.19728 7.97747C1.40086 8.38452 1.74475 8.81587 2.18141 9.29299C2.39739 9.52898 2.62872 9.76849 2.86934 10.0174L2.87966 10.0281C3.11546 10.2721 3.35962 10.5247 3.59713 10.7827C4.4288 11.6863 5.27706 12.7538 5.4627 14H11.5087C11.5636 12.4353 11.8756 11.268 12.2875 10.1346C12.4454 9.70041 12.6121 9.28412 12.7826 8.85829C13.1097 8.04139 13.4509 7.18937 13.7705 6.10824C14.0989 4.99737 14.0097 4.37033 13.8613 4.03984C13.717 3.71858 13.4914 3.61786 13.3816 3.59606C13.1381 3.54774 13.0384 3.60947 12.9698 3.67901C12.867 3.78316 12.7698 3.98273 12.6921 4.30269C12.6166 4.61345 12.5752 4.96517 12.533 5.32501L12.5298 5.35285C12.4924 5.67242 12.4505 6.03016 12.3665 6.30098C12.3383 6.40699 12.2819 6.50407 12.1979 6.57539C12.1382 6.6261 12.0104 6.70818 11.8309 6.69312C11.5424 6.66891 11.3712 6.42143 11.365 6.14783C11.356 5.75454 11.3883 5.35864 11.4074 4.96608C11.4428 4.23646 11.477 3.5337 11.4245 2.8342L11.4242 2.82934C11.3916 2.32997 11.0493 2.00228 10.7007 1.9228C10.5305 1.88401 10.369 1.90601 10.2347 1.9835C10.103 2.05946 9.95535 2.21318 9.8574 2.51394L9.85631 2.51726C9.81525 2.6404 9.77298 2.87753 9.73606 3.2124C9.70044 3.53542 9.67337 3.91279 9.65156 4.29418C9.6329 4.62033 9.61785 4.9584 9.60434 5.26194C9.58728 5.64529 9.57267 5.97357 9.55633 6.1532C9.54983 6.22459 9.52939 6.29493 9.49501 6.35785C9.47356 6.39711 9.36115 6.60947 9.07106 6.61843C8.77917 6.62744 8.63975 6.40057 8.61698 6.35919C8.55634 6.24899 8.55066 6.11807 8.54754 5.99283C8.54474 5.88064 8.54294 5.71798 8.54174 5.54767C8.53935 5.20582 8.53935 4.81919 8.53935 4.70952C8.53935 3.6657 8.53838 2.65372 8.44714 1.64372C8.39183 1.24127 8.06278 1.00455 7.6436 1.00005C7.22399 0.995552 6.87918 1.22704 6.8113 1.64706ZM9.41219 1.3617C9.21469 0.448484 8.39913 0.00810324 7.65433 0.00011154C6.86452 -0.00836308 5.98761 0.465881 5.82365 1.49037L5.82318 1.49334C5.78239 1.7584 5.75229 2.01481 5.7309 2.26652C5.39423 1.67364 4.92622 1.14894 4.2655 0.916859C3.58661 0.679312 2.9492 0.887087 2.53582 1.31952C2.13415 1.73971 1.94438 2.36742 2.09031 2.98746L2.09269 2.99713C2.26478 3.66808 2.52396 4.30316 2.77613 4.90465C2.79814 4.95717 2.8201 5.00941 2.84194 5.06139C3.02139 5.48842 3.19378 5.89866 3.33871 6.31256C2.96404 5.98142 2.51925 5.70796 1.90276 5.6484C1.48865 5.60663 1.10391 5.67536 0.777805 5.88444C0.454239 6.0919 0.240671 6.40405 0.104187 6.75406L0.100868 6.76281C-0.10184 7.31286 0.0663312 7.97157 0.304895 8.42897C0.573704 8.96474 0.996104 9.47904 1.44372 9.96813C1.67046 10.2159 1.91136 10.4652 2.15033 10.7124L2.15682 10.7191C2.39524 10.9658 2.63217 11.2109 2.86134 11.4599C3.80937 12.49 4.50002 13.4632 4.50002 14.5C4.50002 14.7761 4.72388 15 5.00002 15H12C12.2762 15 12.5 14.7761 12.5 14.5C12.5 12.8212 12.8021 11.6462 13.2274 10.4762C13.3653 10.0968 13.5216 9.70579 13.6868 9.29247C14.0238 8.44922 14.398 7.51298 14.7295 6.39175C15.0956 5.15324 15.0559 4.25904 14.7735 3.63017C14.487 2.99208 13.9798 2.6953 13.5763 2.6152C13.1276 2.52614 12.7367 2.60475 12.4268 2.83081C12.4253 2.80773 12.4236 2.78468 12.4219 2.76167C12.3587 1.8105 11.6907 1.12285 10.923 0.947821C10.5346 0.859287 10.1111 0.900393 9.73509 1.11724C9.61852 1.18446 9.51055 1.26623 9.41219 1.3617Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.questionsRequests)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Divisão do Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <ServiceDivision data={simulationData.serviceDivision} />
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Respostas Enviadas</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <ServiceResponse data={simulationData.replySent} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          <Card className="col-span-1 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>
                Fluxo de Atendimento 24h
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
              <ServiceFlow data={simulationData.serviceFlow} />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  )
}
