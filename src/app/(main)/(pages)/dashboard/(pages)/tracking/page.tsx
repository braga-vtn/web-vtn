import { Metadata } from "next"
import Image from "next/image"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "../../components/date-range-picker"
import TabsInteraction from "../../_tabs/interaction"
import TabsTraining from "../../_tabs/training"
import TabsTools from "../../_tabs/tools"
import { MainNav } from "./components/main-nav"
import { DashboardFilter } from "../../components/filter"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SonnerAnalytics } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardClients() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search />
              <UserNav /> */}
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <DashboardFilter />
              <CalendarDateRangePicker />
              <Dialog>
                <DialogTrigger>
                  <Button>
                    Relatório
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Relatório com o Vision</DialogTitle>
                    <DialogDescription>
                      <div className="mt-2.5 mb-8">
                        O nosso modelo Vision foi desenvolvido para fornecer uma
                        análise detalhada de cada gráfico.
                        No entanto, é importante salientar que essa análise deve
                        ser utilizada apenas como um apoio. Ela não substitui a
                        avaliação de um especialista!
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <SonnerAnalytics />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Tabs defaultValue="opened" className="space-y-4">
            <TabsList>
              <TabsTrigger value="opened">
                Em aberto
              </TabsTrigger>
              <TabsTrigger value="historic">
                Histórico
              </TabsTrigger>
            </TabsList>
            <TabsTraining />
            <TabsTools />
          </Tabs>
        </div>
      </div>
    </>
  )
}
