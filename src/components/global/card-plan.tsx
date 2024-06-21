import React from "react";
import { CheckIcon, MenuIcon, SidebarCloseIcon, X } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type Props = {};

export function CardPlan() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
      <CardContainer className="inter-var ">
        <a href="/billing">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white "
            >
              Starter
              <h2 className="text-6xl ">R$0</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Teste grátis a Vistune e seus modelos de Inteligência Artificial em seu negócio!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  100 interações
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  vtn-basic
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Shopify
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  WhatsApp por 24h*
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Google Analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Meta Adsense
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Google Adsense
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Yampi
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Dashboard
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Suporte
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Modelo Cleo
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Assine Agora →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Assinar Plano
              </CardItem>
            </div>
          </CardBody>
        </a>
      </CardContainer>
      <CardContainer className="inter-var ">
        <a href="/billing">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white "
            >
              Company
              <h2 className="text-6xl ">R$497</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Um plano ideal que reúne as principais funções e ferramentas da Vistune!
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  500 interações
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Tudo do plano Starter
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Suporte prioritário
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Modelo Vision
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  vtn-pro
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  follow-up
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Remarketing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Recuperação de Vendas
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Confirmação de Compra
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Envio do Código de rastreio
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Atualização do status de rastreio
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Consulta de Feedbacks
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Outras integrações
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Assine Agora →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Assinar Plano
              </CardItem>
            </div>
          </CardBody>
        </a>
      </CardContainer>
      <CardContainer className="inter-var ">
        <a href="/billing">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white "
            >
              Enterprise
              <h2 className="text-6xl ">R$1.897</h2>
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Um plano feito para entusiastas como nós! Tenha modelos e ferramentas da Vistune em toda sua operação.
              <ul className="my-4 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  3.000 interações
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Tudo do plano Company
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Suporte 7/24
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Treine o próprio modelo
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Instagram
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Facebook
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Email
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Telegram
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Acesso a biblioteca de ferramentas
                </li>
              </ul>
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Assine Agora →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Assinar Plano
              </CardItem>
            </div>
          </CardBody>
        </a>
      </CardContainer>
    </div>
  );
};

export default CardPlan;