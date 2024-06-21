"use client"

import React, { FC } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { HoverApiKeyShopify, HoverDomainShopify, HoverSecretKeyShopify, HoverTokenShopify } from "../../connections/hover/shopify";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Boxes, Download, ExternalLink, Info, Rocket } from "lucide-react";
import { CardDescription } from "@/components/ui/card";
import { v4 } from 'uuid';
import { SonnerDownloadTraining } from "@/components/ui/sonner";
import { float } from "aws-sdk/clients/cloudfront";
import { HoverTrainingDate, HoverTrainingId, HoverTrainingModel, HoverTrainingName, HoverTrainingParameters, HoverTrainingSimilarity, HoverTrainingType, HoverTrainingUtilization } from "./hover-info-training";
import { ScrollArea } from "@/components/ui/scroll-area";


type Props = {
  id: string
  title: string
  model: string
  url: string
  date: string
  type: string
  similarity: number
  utilization: float
  parameters: number
  callback?: () => void
}

const DialogTrainingText = ({
  id,
  model,
  title,
  url,
  date,
  type,
  similarity,
  utilization,
  parameters,
}: Props) => {

  function capitalize(string: string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function typeTraining(type: string): string {
    switch (type) {
      case 'text':
        return 'Texto';
      case 'audio':
        return 'Áudio';
      case 'file':
        return 'Arquivo';
      case 'video':
        return 'Vídeo';
      case 'group':
        return 'Conjunto';
      case 'url':
        return 'Url';

      default:
        return 'Conjunto';
    }
  }

  function modelTraining(model: string): string {
    switch (model) {
      case 'cleo':
        return 'Cleo';
      case 'vision':
        return 'Vision';
      case 'custom':
        return 'Meus modelos';

      default:
        return 'Todos os modelos';
    }
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const urlPathSegments = new URL(url).pathname.split('/');
      const originalFileName = urlPathSegments.pop() || "default-file";

      const extensionParts = originalFileName.split('.');
      const extension = extensionParts.length > 1 ? extensionParts.pop() : "bin";

      const fileName = `${v4()}.${extension}`;

      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();

      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }

      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={parameters == 0 ? true : false} size="lg" variant="gooeyLeftNeutral" className="w-full">
          Ver detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[595px] min-h-[320px]">
        <ScrollArea className="h-[83vh] w-full">
          <DialogHeader>
            <DialogTitle>
              <div className='flex justify-center items-center gap-3' >
                <span className="">Detalhes do Treinamento</span>
                {type == 'group' ?
                  <Button disabled={true} variant="outline" size="icon2">
                    <Boxes className="w-4 h-4" />
                  </Button>
                  :
                  null
                }
                {type == 'url' ?
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button variant="gooeyLeftDark" size="icon2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                  :
                  null
                }
                {type !== 'url' && type !== 'group' ?
                  <Button variant="gooeyLeftDark" size="icon2" onClick={handleDownload}>
                    <Download className="w-4 h-4" />
                  </Button>
                  :
                  null
                }
              </div>
              <Separator className="my-4" />
            </DialogTitle>
            <DialogDescription className="ml-2">
              Os treinamentos são essenciais para que os modelos possam ser
              aprimorados como informações específicas do seu negócio!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-12 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-2 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingId />
                  <span className="ml-2">ID</span>
                </div>
              </Label>
              <Input disabled={true} value={id} id="shopifyDomain" className="col-span-10" />
            </div>
            <div className="grid grid-cols-10 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-2 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingName />
                  <span className="ml-2">Nome</span>
                </div>
              </Label>
              <Input disabled={true} value={title} id="shopifyDomain" className="col-span-8" />
            </div>
            <div className="grid grid-cols-12 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingParameters />
                  <span className="ml-2">Parâmetros</span>
                </div>
              </Label>
              <Input disabled={true} value={parameters} id="apiToken" className="col-span-9" />
            </div>
            <div className="grid grid-cols-12 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingUtilization />
                  <span className="ml-2">Utilizações</span>
                </div>
              </Label>
              <Input disabled={true} value={utilization} id="apiKey" className="col-span-9" />
            </div>
            <div className="grid grid-cols-11 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingSimilarity />
                  <span className="ml-2">Similiaridade</span>
                </div>
              </Label>
              <Input disabled={true} value={similarity} id="apiSecretKey" className="col-span-8" />
            </div>
            <div className="grid grid-cols-12 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-2 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingType />
                  <span className="ml-2">Tipo</span>
                </div>
              </Label>
              <Input disabled={true} value={typeTraining(type)} id="apiToken" className="col-span-10" />
            </div>
            <div className="grid grid-cols-10 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-2 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingModel />
                  <span className="ml-2">Modelo</span>
                </div>
              </Label>
              <Input disabled={true} value={capitalize(modelTraining(model))} id="apiKey" className="col-span-8" />
            </div>
            <div className="grid grid-cols-11 items-center gap-4">
              <Label htmlFor="checkout" className="col-span-3 grid grid-cols-10 items-center">
                <div className="col-span-10 flex justify-start items-center">
                  <HoverTrainingDate />
                  <span className="ml-2">Data e Hora</span>
                </div>
              </Label>
              <Input disabled={true} value={date} id="apiSecretKey" className="col-span-8" />
            </div>
            <div className="flex items-center ml-2" >
              <Rocket className='h-4 w-4 mr-2 stroke-zinc-500' />
              <CardDescription className="mt-2 text-xs	">
                A Vistune também implementa novos parâmetros a cada interação do usuário.
                Isso significa que todos os modelos são aprimorados com o passar do tempo!
              </CardDescription>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default DialogTrainingText;