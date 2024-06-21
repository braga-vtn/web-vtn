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
import ImageUpload from "@/components/ui/input-file";
import { SonnerAvatar } from "@/components/ui/sonner";

const DialogAvatar: FC = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" >Mudar Foto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] min-h-[320px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center mt-5">
            </div>
          </DialogTitle>
          <DialogDescription className="text-center">
            <ImageUpload />
          </DialogDescription>
          <div className="flex flex-col items-center">
            <DialogClose>
              <SonnerAvatar />
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogAvatar;