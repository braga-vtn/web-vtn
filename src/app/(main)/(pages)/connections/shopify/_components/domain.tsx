"use client"

import {
  TabsContent,
} from "@/components/ui/tabs"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { HoverDomain, HoverDomainCheckout } from "../../hover/shopify"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

interface TabDomainProps {
  onChangeTab: (tabName: string, data: { domain: string; isDefaultCheckout: boolean }) => void;
}

const TabDomain: React.FC<TabDomainProps> = ({ onChangeTab }) => {
  const [domain, setDomain] = useState('');
  const [isDefaultCheckout, setIsDefaultCheckout] = useState(true);
  const handleDomainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedDomain = event.target.value;
    setDomain(updatedDomain);
    onChangeTab('domain', { domain: updatedDomain, isDefaultCheckout });
  };
  const handleCheckoutChange = (checked: boolean) => {
    setIsDefaultCheckout(checked);
    onChangeTab('domain', { domain, isDefaultCheckout: checked });
  };

  return (
    <div>
      <TabsContent value="domain" className="space-y-4">
        <DialogHeader>
          <div className="flex justify-center w-full my-2 mb-2">
          </div>
          <DialogTitle>
            <div className="flex items-center ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.9 6.052a.5.5 0 0 1-.8-.602a2.7 2.7 0 0 1 .504-.48c.313-.227.79-.47 1.396-.47a2 2 0 0 1 2 2c0 .548-.275 1.006-.59 1.373c-.308.36-.71.696-1.073.998l-.017.014c-.383.32-.723.605-.972.895q-.099.115-.168.22H9.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.548.275-1.005.59-1.371c.308-.36.709-.694 1.07-.996l.02-.016c.383-.32.723-.605.971-.895C8.9 6.932 9 6.702 9 6.5a1 1 0 0 0-1-1c-.331 0-.605.132-.807.28c-.1.072-.177.145-.228.198c-.038.04-.066.074-.066.074" /></svg>
              <span className="ml-2">Definição do Domínio</span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2">
            O domínio será de uso exclusivo dessa conta! Caso já esteja cadastrada é necessário desvincular da conta antiga.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-11 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-2 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverDomain />
                <span className="ml-2">Domínio</span>
              </div>
            </Label>
            <Input id="domain" value={domain} onChange={handleDomainChange} placeholder="vistune.com" className="col-span-9" />
          </div>
          <div className="grid grid-cols-9 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-4 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverDomainCheckout />
                <span className="ml-2">O checkout é o padrão da Shopify?</span>
              </div>
            </Label>
            <Switch id="checkout" checked={isDefaultCheckout} onCheckedChange={handleCheckoutChange} className="col-span-5" />
          </div>
          <DialogDescription className="ml-2">
            Indicamos que utilize o checkout transparente da Yampi. Os nossos clientes que utilizam contém melhores resultados!
          </DialogDescription>
        </div>
        <DialogFooter>
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 right-2 m-4" onClick={() => onChangeTab('credentials', { domain, isDefaultCheckout })}>
            <span>Próximo</span>
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 left-4 m-4" onClick={() => onChangeTab('instruction', { domain, isDefaultCheckout })}>
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            <span>Anterior</span>
          </Button>
        </DialogFooter>
      </TabsContent>
    </div>
  )
}

export default TabDomain;

