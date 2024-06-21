'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from 'react';
import { PieUseBilling } from "./pie-use";
import { format, formatDistance, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

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

export function CardPlanDescription({
  data
}: dataProps) {

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const formatDate = (dateString: string) => {
    const parsedDate = parse(dateString, "dd-MM-yyyy'T'HH:mm:ss", new Date());
    return format(parsedDate, "d 'de' MMMM", { locale: ptBR });
  }

  // Função para calcular a distância entre a data atual e a `dueDate`
  const calculateDateDistance = (dateString: string) => {
    const now = new Date();
    const targetDate = parse(dateString, "dd-MM-yyyy'T'HH:mm:ss", new Date());
    return formatDistance(targetDate, now, { locale: ptBR, addSuffix: true });
  }

  const planDescription = data.plan == 'starter' ?
    "permite que você experimente a" :
    data.plan == 'company' ?
      "oferece uma diversidade de ferramentas da" :
      data.plan == 'enterprise' ?
        "entrega o que há de melhor na" : "";

  const planInteraction = data.plan == 'starter' ?
    "100" :
    data.plan == 'company' ?
      "500" :
      data.plan == 'enterprise' ?
        "3.000" : "";

  return (
    <div className="isolate mx-auto mt-10 mb-10 max-w-full lg:mx-0 lg:max-w-none ">
      <Card className="max-w-[1344px] dark:bg-neutral-900 bg-zinc-100 ">
        <CardContent className="flex">
          <div className="flex flex-none w-1/3 mt-6">
            <PieUseBilling data={data} />
          </div>
          <CardHeader>
            <CardTitle>
              <h2 className="text-black dark:text-white text-2xl font-semibold max-w-xs mt-7 sm:max-w-none md:text-4xl !leading-tight">
                Plano {capitalizeFirstLetter(data.plan)}
              </h2>
              <Badge className="mb-2 mr-1" variant="zinc">Ativo</Badge>
              <Badge className="mb-2" variant="zinc">
                {data.format == 'monthly' ? 'Mensal' :
                  data.format == 'yearly' ? 'Anual' :
                    ""}
              </Badge>
            </CardTitle>
            <CardDescription>
              O <strong>Plano {capitalizeFirstLetter(data.plan)}</strong> {planDescription} <strong>Vistune</strong>, além de disponibilizar <strong>{planInteraction} interações mensais</strong>, conforme detalhado no gráfico ao lado.
              Seu plano vence no <strong className="font-bold">dia {formatDate(data.dueDate)}</strong>, ou seja, <strong> {calculateDateDistance(data.dueDate)}!</strong>
            </CardDescription>
            <div className="flex">
              <Button disabled={false} className="mr-3 mt-3" variant="gooeyLeft">Pagar Assinatura</Button>
              <Button disabled={false} className="mt-3 border" variant="gooeyLeft2">Resgatar Cupom</Button>
            </div>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  )
}
