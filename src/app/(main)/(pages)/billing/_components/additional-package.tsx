import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface simulationProps {
  plan: string; //starter and enterprise 
  format: string; //yearly 
  dueDate: string; //date of payment 
  usage: {
    used: number; //total interactions used 
    available: number //total interactions available 
  };
  tag: {
    payment: string; //customer id in stripe 
    additional: string; //additional id on vistune 
  };
}

interface dataProps {
  data: simulationProps;
}

export function AdditionalPackage({
  data
}: dataProps) {
  return (
    <div
      id="additional"
      className="isolate mx-auto mt-4 mb-10 grid max-w-md grid-cols-1 gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-4"
    >
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>500 interações</CardTitle>
          <CardDescription>
            Adquira um pacote com 500 interações agora mesmo em sua conta!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">R$ 100</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/un</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={false} variant="gooeyLeft" className="w-full">Adicionar</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>1.000 interações</CardTitle>
          <CardDescription>
            Um pacote de interações com 10% de desconto disponível para você!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">R$ 180</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/un</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={false} variant="gooeyLeft" className="w-full">Adicionar</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>2.000 interações</CardTitle>
          <CardDescription>
            Um pacote Empreendedor, utilize +2.000 interações em sua conta!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">R$ 340</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/un</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={false} variant="gooeyLeft" className="w-full">Adicionar</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>5.000 interações</CardTitle>
          <CardDescription>
            Larga escala! Avance na tecnologia com 25% de desconto.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">R$ 750</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/un</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={false} variant="gooeyLeft" className="w-full">Adicionar</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>Whitelabel</CardTitle>
          <CardDescription>
            Uma Vistune com a marca da sua Empresa!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">R$ 997</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/mês</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={true} variant="gooeyLeft" className="w-full">Indisponível</Button>
        </CardFooter>
      </Card>
      <Card className="max-w-xs dark:bg-neutral-900 bg-zinc-100">
        <CardHeader>
          <CardTitle>Afiliação</CardTitle>
          <CardDescription>
            Seja um afiliado da Vistune e fature nesse mercado inovador!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 mt-2 mb-2 flex items-baseline">
            <CardTitle className="text-3xl font-bold">XX%</CardTitle>
            <span className="text-sm font-semibold ml-1 text-zinc-500 ">/por venda</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={false} variant="gooeyLeft" className="w-full">Entrar em Contato</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
