"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CheckIcon, X } from "lucide-react"

export function CollapsibleCompanyPositive() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="flex items-center text-sm font-semibold">
          <CheckIcon className="h-4 w-4 mr-2" />
          Você recebe
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="gooeyLeft2" size="sm">
            <CaretSortIcon className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        500 interações por mês
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          vtn-basic
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com a Shopify
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com o Google Analytics
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com a Meta Adsense
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com o Google Adsense
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com a Yampi
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Dashboard
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Suporte 7/24
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Modelo Cleo
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Integração com o WhatsApp
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Modelo Vision
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          vtn-pro
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Follow-up
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Remarketing
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Recuperação de Vendas
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Confirmação de Compra
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Envio do Código de rastreio
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Atualização do status de rastreio
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Consulta de Feedbacks
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          Outras integrações
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CollapsibleCompanyNegative() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4 mt-10">
        <h4 className="flex items-center text-sm font-semibold">
          <X className="h-4 w-4 mr-2" />
          Você não recebe
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="gooeyLeft2" size="sm">
            <CaretSortIcon className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
        Treine o próprio modelo
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Suporte prioritário
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Integração com o Instagram
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Integração com o Facebook
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Integração com o Email
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Integração com o Telegram
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm text-zinc-500 ">
          Acesso a biblioteca de ferramentas
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
