"use client"
import React, { useState, useEffect, FC } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { qrcode } from "../whatsapp/data"
import { PhoneCode } from "../whatsapp/_components/phoneInput";
import { ChevronLeftIcon } from "lucide-react";

const DialogWhatsapp: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showQrcode, setShowQrcodeInput] = useState(true);
  const qrcodeImage = qrcode[0];

  const loadQrCode = () => {
    setIsLoaded(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timeout);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="gooeyLeftNeutral" className="w-full" onClick={() => {loadQrCode(); setShowPhoneInput(false); setShowQrcodeInput(true)}}>Conectar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] min-h-[600px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center mt-10">
              <span className="text-lg font-bold">Integração com <a className="mt-2 text-[#6600FF] font-bold text-xl after:content-['_↗']" href="https://docs.vistune.ai" target="_blank">WhatsApp</a></span>
              {isLoaded && showQrcode ? (
                <img className="mt-10" width={300} src={qrcodeImage} alt="QR Code" />
              ) : null}
              {!isLoaded ? (
                <Skeleton className="w-[300px] h-[300px] rounded-md mt-10 animate-pulse" />
              ) : null}
              {isLoaded && !showPhoneInput ? (
                <Button className="mt-5" variant="gooeyLeftDark" onClick={() => { setShowPhoneInput(true); setShowQrcodeInput(false) }}>Conectar por código</Button>
              ) : null}
              {isLoaded && showPhoneInput ? (
                <PhoneCode />
              ) : null}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"gooeyLeft2"} type="submit" className="fixed bottom-6 right-2 m-4">Fechar</Button>
          </DialogClose>
          {isLoaded && showPhoneInput ? (
            <Button type="submit" variant="gooeyLeft2" className="fixed bottom-6 left-4 m-4" onClick={() => { setShowPhoneInput(false); setShowQrcodeInput(true); loadQrCode()}}>
              <ChevronLeftIcon className="h-4 w-4 mr-1" />
              <span>Voltar ao QrCode</span>
            </Button>
          ) : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogWhatsapp;