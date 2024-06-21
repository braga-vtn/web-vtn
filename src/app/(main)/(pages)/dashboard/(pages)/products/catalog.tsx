import { differenceInCalendarDays, subDays } from "date-fns";
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { TabsContent } from "@/components/ui/tabs"

const simulationData = {
  data: [
    {
      "image": "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg",
      "nameProduct": "Camisa Black",
      "category": "Camisa",
      "value": "R$ 193.94",
      "link": "https://vistune.ai/products/example-1",
      "sales": 324
    },
    {
      "image": "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg",
      "nameProduct": "Camisa Black",
      "category": "Camisa",
      "value": "R$ 193.94",
      "link": "https://vistune.ai/products/example-1",
      "sales": 324
    },
  ]
}

interface TabsServiceProps {
  dateRange: { from?: Date; to?: Date };
}

export default function CatalogPage({ dateRange }: TabsServiceProps) {
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
      <TabsContent value="catalog" className="space-y-4">
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <DataTable data={simulationData.data} columns={columns} />
        </div>
      </TabsContent>
    </>
  )
}
