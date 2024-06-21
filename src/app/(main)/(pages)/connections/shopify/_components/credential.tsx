import { useEffect } from "react";
import {
  TabsContent,
} from "@/components/ui/tabs"
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { HoverApiKeyShopify, HoverDomainShopify, HoverSecretKeyShopify, HoverTokenShopify } from "../../hover/shopify"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ChevronLeftIcon } from "lucide-react"
import { SonnerShopify } from "@/components/ui/sonner";

interface TabCredentialProps {
  onChangeTab: (tabName: string, data?: { domain: string; isDefaultCheckout: boolean }) => void;
  domainData: { domain: string; isDefaultCheckout: boolean };
}

const TabCredential: React.FC<TabCredentialProps> = ({ onChangeTab, domainData }) => {
  const [domain, setDomain] = useState('');
  const [shopifyDomain, setShopifyDomain] = useState('');
  const [shopifyCheckout, setShopifyCheckout] = useState(true);
  const [apiToken, setApiToken] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiSecretKey, setApiSecretKey] = useState('');

  useEffect(() => {
    setDomain(domainData.domain);
  }, [domainData.domain]);

  useEffect(() => {
    setShopifyCheckout(domainData.isDefaultCheckout);
  }, [domainData.isDefaultCheckout]);

  return (
    <div>
      <TabsContent value="credentials" className="space-y-4">
        <DialogHeader>
          <div className="flex justify-center w-full my-2 mb-2">
          </div>
          <DialogTitle>
            <div className="flex items-center ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 16 16"><path fill="currentColor" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5.703-1.994c.061-.055.154-.13.276-.207A1.9 1.9 0 0 1 8 5.5c.766 0 1.251.517 1.251 1s-.485 1-1.25 1h-.5a.5.5 0 0 0 0 1H8c.765 0 1.25.517 1.25 1s-.485 1-1.251 1a1.9 1.9 0 0 1-1.02-.3a2 2 0 0 1-.276-.206c-.046-.04-.078-.074-.078-.074a.5.5 0 1 0-.749.662c.041.046.084.09.16.158c.096.086.235.198.414.31c.357.222.885.45 1.549.45c1.168 0 2.25-.826 2.25-2c0-.621-.302-1.145-.76-1.5c.458-.355.761-.879.761-1.5c0-1.174-1.083-2-2.25-2a2.9 2.9 0 0 0-1.55.45a3 3 0 0 0-.414.31a2 2 0 0 0-.16.158a.5.5 0 1 0 .75.662s.031-.034.077-.074M6.625 9.92l-.001-.001" /></svg>
              <span className="ml-2">Informações do App</span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2">
            Essas credenciais serão utilizadas por nossos modelos para acessar informações na sua loja Shopify, como clientes, pedidos, métricas e outros!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-10 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverDomainShopify />
                <span className="ml-2">Domínio da Shopify</span>
              </div>
            </Label>
            <Input id="shopifyDomain" value={shopifyDomain} onChange={e => setShopifyDomain(e.target.value)} placeholder="vistune.myshopify.com" className="col-span-7" />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverTokenShopify />
                <span className="ml-2">Token da API</span>
              </div>
            </Label>
            <Input id="apiToken" value={apiToken} onChange={e => setApiToken(e.target.value)} placeholder="shpat_07ace44d41a9..." type="password" className="col-span-9" /></div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverApiKeyShopify />
                <span className="ml-2">Chave da API</span>
              </div>
            </Label>
            <Input id="apiKey" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="77cf20e1c5935..." type="password" className="col-span-9" /></div>
          <div className="grid grid-cols-11 items-center gap-4">
            <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
              <div className="col-span-10 flex justify-start items-center">
                <HoverSecretKeyShopify />
                <span className="ml-2">Chave Secreta</span>
              </div>
            </Label>
            <Input id="apiSecretKey" value={apiSecretKey} onChange={e => setApiSecretKey(e.target.value)} placeholder="dfbcb0841d3..." type="password" className="col-span-8" /></div>
          <DialogDescription className="ml-2">
            Após adicionar as credenciais nossos modelos irão se conectar com a sua loja! Avisaremos quando o processo for finalizado.
          </DialogDescription>
        </div>
        <DialogFooter>
          {shopifyDomain && apiKey && apiSecretKey && domainData.domain ?
            <DialogClose>
              <SonnerShopify />
            </DialogClose>
            :
            <Button variant={"gooeyLeft"} type="submit" disabled={true} className="fixed bottom-6 right-2 m-4">Concluir Integração</Button>
          }
          <Button type="submit" variant="gooeyLeftDark" className="fixed bottom-6 left-4 m-4" onClick={() => onChangeTab('domain')}>
            <ChevronLeftIcon className="h-4 w-4 mr-1" />
            <span>Anterior</span>
          </Button>
        </DialogFooter>
      </TabsContent>
    </div>
  )
}

export default TabCredential;
