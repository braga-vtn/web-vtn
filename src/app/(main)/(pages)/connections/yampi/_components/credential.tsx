import {
  TabsContent,
} from "@/components/ui/tabs"
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ChevronLeftIcon } from "lucide-react"
import { SonnerYampi } from "@/components/ui/sonner";
import { HoverApiKeyYampi, HoverDomainCheckoutYampi, HoverSecretKeyYampi, HoverTokenYampi } from "../../hover/yampi";

interface TabCredentialProps {
  onChangeTab: (tabName: string, data?: { domain: string; isDefaultCheckout: boolean }) => void;
}

const TabCredential: React.FC<TabCredentialProps> = ({ onChangeTab }) => {
  const [checkoutDomain, setcheckoutDomain] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiSecretKey, setApiSecretKey] = useState('');

  return (
    <div>
      <TabsContent value="credentials" className="space-y-4">
        <DialogHeader>
          <div className="flex justify-center w-full my-2 mb-2">
          </div>
          <DialogTitle>
            <div className="flex items-center ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.9 6.052a.5.5 0 0 1-.8-.602a2.7 2.7 0 0 1 .504-.48c.313-.227.79-.47 1.396-.47a2 2 0 0 1 2 2c0 .548-.275 1.006-.59 1.373c-.308.36-.71.696-1.073.998l-.017.014c-.383.32-.723.605-.972.895q-.099.115-.168.22H9.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5c0-.548.275-1.005.59-1.371c.308-.36.709-.694 1.07-.996l.02-.016c.383-.32.723-.605.971-.895C8.9 6.932 9 6.702 9 6.5a1 1 0 0 0-1-1c-.331 0-.605.132-.807.28c-.1.072-.177.145-.228.198c-.038.04-.066.074-.066.074" /></svg>
              <span className="ml-2">Informações do App</span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2">
            Essas credenciais serão utilizadas por nossos modelos para acessar informações na sua conta na Yampi como clientes, pedidos, métricas e outros!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-10 items-center gap-4">
            <Label htmlFor="domain-checkout" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverDomainCheckoutYampi />
                <span className="ml-2">Domínio do Checkout</span>
              </div>
            </Label>
            <Input id="domain-checkout" value={checkoutDomain} onChange={e => setcheckoutDomain(e.target.value)} placeholder="seguro.vistune.ai" className="col-span-7" /></div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="secret-key" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverTokenYampi />
                <span className="ml-2">Chave Secreta</span>
              </div>
            </Label>
            <Input id="secret-key" value={apiToken} onChange={e => setApiToken(e.target.value)} placeholder="sk_YEQi5Dg1J7Iv..." type="password" className="col-span-9" /></div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="alias" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverApiKeyYampi />
                <span className="ml-2">Alias</span>
              </div>
            </Label>
            <Input id="alias" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="vistune-shop" className="col-span-9" /></div>
          <div className="grid grid-cols-11 items-center gap-4">
            <Label htmlFor="token-user" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverSecretKeyYampi />
                <span className="ml-2">Token do Usuário</span>
              </div>
            </Label>
            <Input id="token-user" value={apiSecretKey} onChange={e => setApiSecretKey(e.target.value)} placeholder="cDNrDt69bBt..." type="password" className="col-span-8" /></div>
          <DialogDescription className="ml-2">
            Após adicionar as credenciais nossos modelos irão se conectar com a sua conta! Avisaremos quando o processo for finalizado.
          </DialogDescription>
        </div>
        <DialogFooter>
          {checkoutDomain && apiKey && apiSecretKey ?
            <DialogClose>
              <SonnerYampi />
            </DialogClose>
            :
            <Button variant={"gooeyLeft"} type="submit" disabled={true} className="fixed bottom-6 right-2 m-4">Concluir Integração</Button>
          }
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 left-4 m-4" onClick={() => onChangeTab('instruction')}>
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            <span>Anterior</span>
          </Button>
        </DialogFooter>
      </TabsContent>
    </div>
  )
}

export default TabCredential;
