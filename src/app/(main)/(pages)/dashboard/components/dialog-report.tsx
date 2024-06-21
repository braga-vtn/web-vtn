import { Metadata } from "next"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SonnerAnalytics } from "@/components/ui/sonner"
import { Download } from "lucide-react"
import React from "react"
import { Buttonv2 } from "@/components/ui/button-v2"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DialogReport() {
  return (
    <Dialog>
      <DialogTrigger>
        <Buttonv2 variant="expandIcon" Icon={Download} iconPlacement="left">
          Relatório
        </Buttonv2>
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
  )
}
