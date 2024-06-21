"use client"

import {
  TabsContent,
} from "@/components/ui/tabs"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

interface TabInstructionProps {
  onChangeTab: (tabName: string) => void;
}

const TabInstruction: React.FC<TabInstructionProps> = ({ onChangeTab }) => {

  return (
    <div>
      <TabsContent value="instruction" className="space-y-3">
        <DialogHeader>
          <div className="flex justify-center w-full my-2 mb-2">
          </div>
          <DialogTitle>
            <div className="flex items-center ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1 4.25v5.25a.5.5 0 0 1-1 0V6.986a3.6 3.6 0 0 1-1.043.72a.5.5 0 1 1-.414-.911a2.7 2.7 0 0 0 1.174-1.046a3 3 0 0 0 .3-.628v-.005A.5.5 0 0 1 9 5.25" /></svg>                    <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-136v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80" />
              <span className="ml-2">Integração com <a className="text-[#6600FF] font-bold text-xl after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">a Yampi</a></span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2">
            A Yampi é uma empresa brasileira que fornece soluções incríveis como gateway de pagamento e muito mais! Conecte a sua Yampi com a Vistune.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <DialogDescription className="ml-2">
            Todas as informações necessárias estão no <a className="font-bold	"> Perfil {'->'} Credenciais de API </a>
          </DialogDescription>
        </div>
        <AspectRatio ratio={16 / 5} className="bg-transparent">
          <Image
            src="/tutor-yampi.png"
            alt="integrations-yampi-tutor"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <DialogFooter>
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 right-2 m-4" onClick={() => onChangeTab('credentials')}>
            <span>Próximo</span>
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
        </DialogFooter>
      </TabsContent>
    </div>
  )
}

export default TabInstruction;
