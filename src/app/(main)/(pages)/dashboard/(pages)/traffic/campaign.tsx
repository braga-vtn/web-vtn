import { differenceInCalendarDays, subDays } from "date-fns";
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { TabsContent } from "@/components/ui/tabs"

const simulationData = {
  data: [
    {
      "source": "cam-31/24 Ig-Reals",
      "adAccount": "Ilim. Borges",
      "sales": 310,
      "status": "Ativado",
      "currency": "BRL",
      "cpa": 1923,
      "revenue": 19892804,
      "spent": 8384948,
      "profit": 11507856,
      "profitMargin": 0.578493,
      "roi": 0.214934,
      "roas": 134,
      "ic": 58,
      "cpi": 3495,
      "cpm": 2840,
      "ctr": 0.053425,
      "cpc": 49,
      "impressions": 294802,
      "clicks": 48508,
      "salesByPix": 139,
      "cardSales": 110,
      "salesByBoleto": 61
    },
    {
      "source": "cam-31/24 Ig-Reals",
      "adAccount": "Ilim. Borges",
      "sales": 310,
      "status": "Ativado",
      "currency": "BRL",
      "cpa": 1923,
      "revenue": 19892804,
      "spent": 8384948,
      "profit": 11507856,
      "profitMargin": 0.578493,
      "roi": 0.214934,
      "roas": 134,
      "ic": 58,
      "cpi": 3495,
      "cpm": 2840,
      "ctr": 0.053425,
      "cpc": 49,
      "impressions": 294802,
      "clicks": 48508,
      "salesByPix": 139,
      "cardSales": 110,
      "salesByBoleto": 61
    }
  ]
}

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

export default function CampaignPage({ dateRange }: TabsServiceProps) {
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
    <>
      <TabsContent value="campaign" className="space-y-4">
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <DataTable data={simulationData.data} columns={columns} />
        </div>
      </TabsContent>
    </>
  )
}
