"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Info, Rocket, RotateCcwIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SonnerCopiedSecretkey, SonnerGenerateSecretKey, SonnerReport } from "@/components/ui/sonner"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogExit, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const simulationData = {
  tier: 5,
  secretKey: "sk-a044fb70a9df7160f4fc689b99d493e01f21050dd9ea8f16"
}

export function TokenRevealed() {
  const tierDefault = !simulationData.tier? 1 : simulationData.tier
  const secretKeyDefault = !simulationData.secretKey ? `sk-${generateRandomHex(48)}` : simulationData.secretKey;
  const [secretKeyValue, setSecretKeyValue] = React.useState(secretKeyDefault)
  const displaySecretKey = `${secretKeyValue.substring(0, 10)}...`;

  function generateRandomHex(length: number): string {
    return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  }

  function handleGenerateNewKey() {
    const newKey = `sk-${generateRandomHex(48)}`;
    setSecretKeyValue(newKey);
  }
  return (
    <div>
      <Card className="w-full bg-neutral-100 dark:bg-neutral-900">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center" >
              <Rocket className='h-5 w-5 mr-2' />
              Acesse o Novo Mundo
            </div>
          </CardTitle>
          <CardDescription>
            Na Vistune, empoderamos nossos usuários a desbravar e transformar o mundo
            através da nossa API. Mergulhe nessa jornada de inovação e impacto com a Vistune.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="secret-key">
                Esse é o seu
                <Badge variant="outline" className="ml-1 italic">
                  Secret-Key
                </Badge>
              </Label>
              <div className="flex w-full">
                <Input id="tier" value={`tier-${tierDefault}`} disabled={true} className="w-1/6 mr-1" />
                <Input id="name" value={displaySecretKey} disabled={true} className="w-5/6 mr-1" />
                <SonnerCopiedSecretkey text={secretKeyValue} />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="gooeyLeft2" size="icon" className="ml-1">
                            <RotateCcwIcon className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Tem certeza disso?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Quando uma nova Secret-key é gerada todas as aplicações que
                              estiverem ativas serão interrompidas até que sejam atualizadas!
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel asChild>
                              <Button className="border" variant={"gooeyLeft2"}>
                                Cancelar
                              </Button>
                            </AlertDialogCancel>
                            <AlertDialogExit onClick={handleGenerateNewKey}>
                              <SonnerGenerateSecretKey />
                            </AlertDialogExit>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-2" >
            <Info className='h-4 w-4 mr-2 stroke-zinc-500' />
            <CardDescription className="mt-2 text-xs	">
              Não compartilhe sua chave de API com outras pessoas nem a exponha no
              navegador ou em outro código do lado do cliente.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full mt-5 bg-neutral-100 dark:bg-neutral-900">
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Observações:</AccordionTrigger>
              <AccordionContent>
                Nossos endpoints estão disponíveis exclusivamente para os planos
                Company e Enterprise. Para garantir um funcionamento saudável e
                eficiente da nossa API, implementamos um sistema de limitação de
                consumo baseado na utilização individual dos usuários. É importante
                esclarecer que esta medida não visa limitar o seu desenvolvimento;
                ao contrário, o objetivo é assegurar uma distribuição equilibrada
                de recursos para todos os usuários. <br></br><br></br>
                Cada conta é classificada em um &quot;Tier&quot;, que varia de 1 a 5. O
                Tier representa o limite máximo de requisições que uma conta pode
                realizar por hora. Para mais detalhes, visite a página da
                <a className="text-[#6600FF] font-bold after:content-['_↗'] ..."
                  href="https://docs.vistune.ai" target="_blank"> Vistune Tools
                </a><br></br><br></br>
                A nossa API é projetada para oferecer aos usuários a capacidade
                de desenvolver modelos de inteligência artificial focados em
                objetivos específicos, complementando assim aquelas áreas que
                talvez não sejam plenamente abordadas pela Vistune. Todos os
                recursos utilizados por nossos desenvolvedores para criar modelos
                inovadores, como a Cleo e o Vision, estão igualmente acessíveis
                para você utilizar.<br></br><br></br>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
