import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import { CollapsibleStarterNegative, CollapsibleStarterPositive } from "../_collapsible/starter"
import { CollapsibleCompanyNegative, CollapsibleCompanyPositive } from "../_collapsible/company"
import { CollapsibleEnterpriseNegative, CollapsibleEnterprisePositive } from "../_collapsible/enterprise"

interface simulationProps {
  plan: string, //starter and enterprise
  format: string, //yearly
  dueDate: string, //date of payment
  usage: {
    used: number, //total interactions used
    available: number //total interactions available
  },
  tag: {
    payment: string, //customer id in stripe
    additional: string //additional id on vistune
  },
}

interface dataProps {
  data: simulationProps
}

export function TabsPlanYearly({
  data
}: dataProps) {

  return (
    <TabsContent value="yearly" className="space-y-4">
      <div className="isolate mx-auto mt-4 mb-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <Card className="max-w-md dark:bg-neutral-900 bg-neutral-100">
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>
              Teste grátis a Vistune e seus <br></br>modelos de Inteligência Artificial em seu negócio!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 mt-3 mb-2">
              <CardTitle className="text-3xl font-bold">Gratuito</CardTitle>
            </div>
          </CardContent>
          <CardFooter>
            {data.plan == 'starter' && data.format == 'yearly' ?
              <Button disabled={true} variant="gooeyLeftNeutral" className="w-full">
                Plano Atual
              </Button>
              :
              <Button disabled={false} variant="gooeyLeft" className="w-full">
                Quero o Plano Starter
              </Button>
            }
          </CardFooter>
          <CardContent className="space-y-2">
            <CollapsibleStarterPositive />
            <CollapsibleStarterNegative />
          </CardContent>
        </Card>
        <Card className="max-w-md dark:bg-neutral-900 bg-neutral-100">
          <CardHeader>
            <CardTitle>Company</CardTitle>
            <CardDescription>
              Um plano ideal que reúne as <br></br>principais funções e ferramentas da Vistune!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-baseline space-y-1 mt-3 mb-2">
              <CardTitle className="text-3xl font-bold mr-2">
                <div className="dark:text-neutral-700 text-neutral-300 line-through">
                  R$ 497
                </div>
              </CardTitle>
              <div className="">
                <CardTitle className="text-2xl font-bold">
                  R$ 447
                </CardTitle>
              </div>
              <div className="text-sm font-semibold text-neutral-500 ml-1">/mês</div>
            </div>
          </CardContent>
          <CardFooter>
            {data.plan == 'company' && data.format == 'yearly' ?
              <Button disabled={true} variant="gooeyLeftNeutral" className="w-full">
                Plano Atual
              </Button>
              :
              <Button disabled={false} variant="gooeyLeft" className="w-full">
                Quero o Plano Starter
              </Button>
            }
          </CardFooter>
          <CardContent className="space-y-2">
            <CollapsibleCompanyPositive />
            <CollapsibleCompanyNegative />
          </CardContent>
        </Card>
        <Card className="max-w-md dark:bg-neutral-900 bg-neutral-100">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>
              Um plano feito para entusiastas como nós! Tenha <br></br> modelos e ferramentas da Vistune em toda sua operação.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="flex items-baseline mt-3 mb-2">
              <CardTitle className="text-3xl font-bold mr-2">
                <div className="dark:text-neutral-700 text-neutral-300 line-through">
                  R$ 1.897
                </div>
              </CardTitle>
              <CardTitle className="text-2xl font-bold">
                R$ 1.707
              </CardTitle>
              <div className="text-sm font-semibold text-neutral-500 ml-1">
                /mês
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {data.plan == 'enterprise' && data.format == 'yearly' ?
              <Button disabled={true} variant="gooeyLeftNeutral" className="w-full">
                Plano Atual
              </Button>
              :
              <Button disabled={false} variant="gooeyLeft" className="w-full">
                Quero o Plano Starter
              </Button>
            }
          </CardFooter>
          <CardContent className="space-y-2">
            <CollapsibleEnterprisePositive />
            <CollapsibleEnterpriseNegative />
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  )
}
