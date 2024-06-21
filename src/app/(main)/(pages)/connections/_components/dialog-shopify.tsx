"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabInstruction from "../shopify/_components/instruction"
import TabCredential from "../shopify/_components/credential"
import { useEffect, useState } from "react"
import TabDomain from "../shopify/_components/domain"

const DialogShopify: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('instruction');
  const [domainData, setDomainData] = useState({ domain: '', isDefaultCheckout: true });
  const handleChangeTab = (tabName: string, data?: { domain: string; isDefaultCheckout: boolean }) => {
    if (data) {
      setDomainData(data);
    }
    setActiveTab(tabName);
  };
  useEffect(() => {
    if (activeTab === "credentials") {
      handleChangeTab("credentials", domainData);
    }
  }, [activeTab, domainData]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="gooeyLeftNeutral" className="w-full" onClick={() => handleChangeTab('instruction')}>Conectar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] min-h-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 mt-5">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-100 dark:bg-neutral-900">
            <TabsTrigger value="instruction">
              Instruções
            </TabsTrigger>
            <TabsTrigger value="domain">
              Domínio
            </TabsTrigger>
            <TabsTrigger value="credentials">
              Credenciais
            </TabsTrigger>
          </TabsList>
          <TabInstruction onChangeTab={handleChangeTab} />
          <TabDomain onChangeTab={handleChangeTab} />
          <TabCredential onChangeTab={handleChangeTab} domainData={domainData} />
        </Tabs>
      </DialogContent>
    </Dialog >
  )
}

export default DialogShopify;
