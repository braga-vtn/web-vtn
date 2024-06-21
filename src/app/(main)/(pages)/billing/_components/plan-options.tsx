"use client"
import { useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsPlanMonth } from "./_tabs/plan-month";
import { TabsPlanYearly } from "./_tabs/plan-yearly";
import { Badge } from "@/components/ui/badge";
import { MoveUpRightIcon } from "lucide-react";
import { CardPlanDescription } from "./plan-description";
import { Separator } from "@/components/ui/separator";
import { AdditionalPackage } from "./additional-package";

const simulationData = {
  plan: 'company', //starter and enterprise
  format: 'monthly', //yearly
  dueDate: "17-05-2024T10:59:32", //date of payment
  usage: {
    used: 346, //total interactions used
    available: 154 //total interactions available
  },
  tag: {
    payment: 'st_6877a78dtas785bafb6f5d84f329m723dm7', //customer id in stripe
    additional: 'additional_7a0dda01-bbde-4035-a05e-1c3b4aa1b4f1' //additional id on vistune
  },
};

export function PlanOptions() {
  useEffect(() => {
    if (window.location.hash === '#additional') {
      const element = document.getElementById('additional');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
        <h1 className="text-black dark:text-white text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
          Planos
        </h1>
        <p className="text-muted-foreground mt-6 text-lg max-w-prose">
          Na Vistune você tem a liberdade de personalizar seu plano para criar a experiência ideal com nossos sofisticados modelos de Inteligência Artificial.
        </p>
      </div>
      <div className="lg:w-auto flex justify-center my-4">
        <Badge>
          Saber Mais
          <MoveUpRightIcon className="ml-2 h-3 w-3" />
        </Badge>
      </div>
      <Tabs defaultValue="month" className="space-y-4 mt-10">
        <div className="flex justify-center">
          <TabsList className="flex justify-center space-x-1 bg-neutral-100 dark:bg-neutral-900">
            <TabsTrigger value="month">Mensal</TabsTrigger>
            <TabsTrigger value="yearly">Anual</TabsTrigger>
          </TabsList>
        </div>
        <TabsPlanMonth data={simulationData} />
        <TabsPlanYearly data={simulationData} />
        <Separator />
      </Tabs>
      <CardPlanDescription data={simulationData} />
      <div className="lg:w-auto mx-auto max-w-4xl lg:text-center mt-10">
        <h1 className="text-black dark:text-white text-4xl font-bold max-w-xs sm:max-w-none md:text-4xl !leading-tight">
          Pacotes Adicionais
        </h1>
        <p className="text-black dark:text-white mt-6 mb-3 md:text-sm lg:text-center max-w-prose">
          Na Vistune você tem a liberdade de personalizar seu plano para criar a experiência ideal com nossos sofisticados modelos de Inteligência Artificial.
        </p>
      </div>
      <AdditionalPackage data={simulationData} />
    </div>
  );
}
