import { differenceInCalendarDays, subDays } from "date-fns";
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { TabsContent } from "@/components/ui/tabs"

const simulationData = {
  data: [
    {
      "order": "8782",
      "nomeClient": "Matheus Braga",
      "telefoneClient": "+55 (62)9 8509-5500",
      "status": "Pago",
      "link": "https://vistune.ai/products/example-1",
      "tracking": "A caminho",
      "codeTracking": "BR078395985HR",
      "dataOrder": "13/04/2024"
    },
    {
      "order": "7878",
      "nomeClient": "Matheus Braga",
      "telefoneClient": "+55 (62)9 8509-5500",
      "status": "Pago",
      "link": "https://vistune.ai/products/example-1",
      "tracking": "A caminho",
      "codeTracking": "BR078395985HR",
      "dataOrder": "13/04/2024"
    },
  ]
}

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

export default function TaskPage({ dateRange }: TabsServiceProps) {
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
      <TabsContent value="orders" className="space-y-4">
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <DataTable data={simulationData.data} columns={columns} />
        </div>
      </TabsContent>
    </>
  )
}
