"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import PieChartRevenue from "../components/revenuePieChart"
import { differenceInCalendarDays, subDays } from "date-fns"
import LineChartRevenue from "../components/revenueLineChart"

interface TabsConversionsProps {
  dateRange: { from?: Date; to?: Date };
}

const simulationData = {
  awaitingPayment: 49402975, // 
  currencyUser: "BRL", // 
  abandonedCart: 14034, // 
  orderRefund: 29404820, // 
  couponsUsed: 20994, // 
  revenueGenerated: [
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
    { name: "01/04", pv: 3200 },
    { name: "02/04", pv: 2800 },
    { name: "03/04", pv: 3000 },
    { name: "04/04", pv: 2600 },
    { name: "05/04", pv: 3400 },
    { name: "06/04", pv: 3600 },
    { name: "07/04", pv: 3100 },
    { name: "08/04", pv: 2900 },
    { name: "09/04", pv: 3700 },
    { name: "10/04", pv: 3900 },
    { name: "11/04", pv: 4500 },
    { name: "12/04", pv: 4800 },
    { name: "13/04", pv: 4700 },
    { name: "14/04", pv: 4600 },
    { name: "15/04", pv: 4100 },
    { name: "16/04", pv: 4300 },
    { name: "17/04", pv: 4200 },
    { name: "18/04", pv: 4050 },
    { name: "19/04", pv: 3850 },
    { name: "20/04", pv: 3750 },
    { name: "21/04", pv: 3450 },
    { name: "22/04", pv: 4150 },
    { name: "23/04", pv: 4250 },
    { name: "24/04", pv: 3950 },
    { name: "25/04", pv: 3550 },
    { name: "26/04", pv: 3250 },
    { name: "27/04", pv: 3350 },
    { name: "28/04", pv: 3650 },
    { name: "29/04", pv: 3450 },
    { name: "30/04", pv: 3150 },
    { name: "01/05", pv: 3200 },
    { name: "02/05", pv: 2800 },
    { name: "03/05", pv: 3000 },
    { name: "04/05", pv: 2600 },
    { name: "05/05", pv: 3400 },
    { name: "06/05", pv: 3600 },
    { name: "07/05", pv: 3100 },
    { name: "08/05", pv: 2900 },
    { name: "09/05", pv: 3700 },
    { name: "10/05", pv: 3900 },
    { name: "11/05", pv: 4500 },
    { name: "12/05", pv: 4800 },
    { name: "13/05", pv: 4700 },
    { name: "14/05", pv: 4600 },
    { name: "15/05", pv: 4100 },
    { name: "16/05", pv: 4300 },
    { name: "17/05", pv: 4200 },
    { name: "18/05", pv: 4050 },
    { name: "19/05", pv: 3850 },
    { name: "20/05", pv: 3750 },
    { name: "21/05", pv: 3450 },
    { name: "22/05", pv: 4150 },
    { name: "23/05", pv: 4250 },
    { name: "24/05", pv: 3950 },
    { name: "25/05", pv: 3550 },
    { name: "26/05", pv: 3250 },
    { name: "27/05", pv: 3350 },
    { name: "28/05", pv: 3650 },
    { name: "29/05", pv: 3450 },
    { name: "30/05", pv: 3150 }
  ], // 
  revenueDistribution: [
    { name: "Boleto", value: 102 },
    { name: "Pix", value: 190 },
    { name: "Cartão", value: 249 }
  ], // 
  transactionsMade: 4820, // 
  creditCard: 89374938, //
  billSales: 48294829, // 
  pixSales: 198429742 // 
}

export default function TabsRevenue({ dateRange }: TabsConversionsProps) {
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
      <TabsContent value="revenue" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-neutral-100 dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Aguardando Pagamento
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberWithCents(simulationData.awaitingPayment, simulationData.currencyUser)}
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
                Carrinho Abandonado
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 3C2.22386 3 2 3.22386 2 3.5V9.5C2 9.77614 2.22386 10 2.5 10H12.5C12.7761 10 13 9.77614 13 9.5V3.5C13 3.22386 12.7761 3 12.5 3H2.5ZM1 9.5C1 10.1531 1.4174 10.7087 2 10.9146V11.5C2 12.3284 2.67157 13 3.5 13H11.5C12.3284 13 13 12.3284 13 11.5V10.9146C13.5826 10.7087 14 10.1531 14 9.5V3.5C14 2.67157 13.3284 2 12.5 2H2.5C1.67157 2 1 2.67157 1 3.5V9.5ZM12 11.5V11H3V11.5C3 11.7761 3.22386 12 3.5 12H11.5C11.7761 12 12 11.7761 12 11.5ZM5.5 6C5.22386 6 5 6.22386 5 6.5C5 6.77614 5.22386 7 5.5 7H9.5C9.77614 7 10 6.77614 10 6.5C10 6.22386 9.77614 6 9.5 6H5.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.abandonedCart)}
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
                Reembolso
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075ZM3.85768 3.15057C4.84311 2.32448 6.11342 1.82708 7.49991 1.82708C10.6329 1.82708 13.1727 4.36689 13.1727 7.49991C13.1727 8.88638 12.6753 10.1567 11.8492 11.1421L3.85768 3.15057ZM3.15057 3.85768C2.32448 4.84311 1.82708 6.11342 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C8.88638 13.1727 10.1567 12.6753 11.1421 11.8492L3.15057 3.85768Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumberWithCents(simulationData.orderRefund, simulationData.currencyUser)}
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
                Cupons Utilizados
              </CardTitle>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(simulationData.couponsUsed)}
              </div>
              <p className="text-xs text-muted-foreground">
                {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                  `Período de 1 dia`}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-7 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Receita Gerada</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChartRevenue data={simulationData.revenueGenerated} />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="col-span-2 bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Distribuição da Receita</CardTitle>
            </CardHeader>
            <CardContent className="pl-1">
              <PieChartRevenue data={simulationData.revenueDistribution} />
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Transações
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(simulationData.transactionsMade)}
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
                  Boleto
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.billSales, simulationData.currencyUser)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <Card className="bg-neutral-100 dark:bg-neutral-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cartão de Crédito
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 10.9146C1.4174 10.7087 1 10.1531 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146ZM12 11V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.creditCard, simulationData.currencyUser)}
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
                  Pix
                </CardTitle>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumberWithCents(simulationData.pixSales, simulationData.currencyUser)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {dateDifference > 1 ? `Período de ${dateDifference} dias` :
                    `Período de 1 dia`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </div>

  )
}
