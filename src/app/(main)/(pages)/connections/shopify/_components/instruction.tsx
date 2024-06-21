"use client"

import {
  TabsContent,
} from "@/components/ui/tabs"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Permissions } from "./permissions"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

interface TabInstructionProps {
  onChangeTab: (tabName: string) => void;
}

const TabInstruction: React.FC<TabInstructionProps> = ({ onChangeTab }) => {

  return (
    <div>
      <TabsContent value="instruction" className="space-y-4">
        <DialogHeader>
          <div className="flex justify-center w-full my-2 mb-2">
          </div>
          <DialogTitle>
            <div className="flex items-center ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1 4.25v5.25a.5.5 0 0 1-1 0V6.986a3.6 3.6 0 0 1-1.043.72a.5.5 0 1 1-.414-.911a2.7 2.7 0 0 0 1.174-1.046a3 3 0 0 0 .3-.628v-.005A.5.5 0 0 1 9 5.25" /></svg>                    <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-136v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80" />
              <span className="ml-2">Integração com <a className="text-[#6600FF] font-bold text-xl after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">a Shopify</a></span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2">
            A Shopify é um dos ecommerce mais utilizados no mundo! Para integrar a Vistune à sua Loja Shopify, é necessário que você crie um app dentro
            da sua Loja com as seguintes permissões:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Permissions />
          <DialogDescription className="ml-2">
            As permissões é essenciais para que nossos modelos possam acessar informações da sua loja!
          </DialogDescription>
        </div>
        <DialogFooter>
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 right-2 m-4" onClick={() => onChangeTab('domain')}>
            <span>Próximo</span>
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
        </DialogFooter>
      </TabsContent>
    </div>
  )
}

export default TabInstruction;
