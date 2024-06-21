"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabInstruction from "../yampi/_components/instruction"
import TabCredential from "../yampi/_components/credential"
import { useState } from "react"

const DialogYampi: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('instruction');
  const handleChangeTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="gooeyLeftNeutral" className="w-full" onClick={() => handleChangeTab('instruction')}>Conectar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] min-h-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 mt-5">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-100 dark:bg-neutral-900">
            <TabsTrigger value="instruction">
              Instruções
            </TabsTrigger>
            <TabsTrigger value="credentials">
              Credenciais
            </TabsTrigger>
          </TabsList>
          <TabInstruction onChangeTab={handleChangeTab} />
          <TabCredential onChangeTab={handleChangeTab} />
        </Tabs>
      </DialogContent>
    </Dialog >
  )
}

export default DialogYampi;
