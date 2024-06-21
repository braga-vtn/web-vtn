"use client"
import React, { FC } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";

const DialogBling: FC = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="gooeyLeftNeutral" className="w-full">Conectar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[495px] min-h-[360px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center mt-10">
              <span className="text-lg font-bold">Integração com <a className="mt-2 text-[#6600FF] font-bold text-xl after:content-['_↗']" href="https://docs.vistune.ai" target="_blank">a Bling</a></span>
            </div>
          </DialogTitle>
          <DialogDescription className="ml-2 text-center">
            Para conectarmos a Vistune com sua conta na Bling, é necessário redirecionar você para a página de login oficial da Bling!
          </DialogDescription>
          <div className="mt-4 flex flex-col items-center">
            <DialogClose asChild>
              <Button type="submit" variant="gooeyLeft" className="mt-10">
              <Link href="/connect-bling" target="_blank">Conectar Agora</Link>
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant="gooeyLeft2" className="fixed bottom-6 left-2 m-4">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBling;