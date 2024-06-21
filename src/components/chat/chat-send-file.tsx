"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LucidePaperclip, Plus } from "lucide-react"
import React, { useEffect, useState } from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useUploadFile } from "@/hooks/use-upload-file"
import { UploadedFilesCard } from "@/components/global/uploaded-files-card"
import { FileUploaderChat } from "../global/file-uploader-chat"
import { getErrorMessage } from "@/lib/handle-error"
import { toast } from "sonner"
import { UploadedFile } from "@/lib/types"
import { ReloadIcon } from "@radix-ui/react-icons"

const profileFormSchema = z.object({
  images: z.array(z.instanceof(File)),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface DialogSendFileProps {
  onFilesUpload: (uploadResult: UploadedFile<unknown>[]) => void;
}

export function DialogSendFile({ onFilesUpload }: DialogSendFileProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
  });

  const {
    uploadFiles,
    progresses,
    uploadedFiles,
    isUploading,
    clearUploadedFiles
  } = useUploadFile("fileUploader", { defaultUploadedFiles: [] })

  const [fileTraining, setFileTraining] = useState<File[]>([]);
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadedFile<unknown>[]>([]);

  async function onSubmit(data: ProfileFormValues) {
    setLoading(true);

    if (data.images.length > 0) {
      try {
        const res: UploadedFile<unknown>[] = await uploadFiles(data.images);
        setUploadResult(res);
        toast.success("Mensagem enviada");
        onFilesUpload(res);
      } catch (err) {
        toast.error(getErrorMessage(err));
      } finally {
        setLoading(false);
        form.reset();
        setDialogOpen(false);
      }
    }
  }

  useEffect(() => {
    if (isDialogOpen) {
      form.reset();
      clearUploadedFiles();
    }
  }, [isDialogOpen, form, clearUploadedFiles]); // Adicionadas as dependências faltantes

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"gooeyLeftDark"} size="icon" onClick={() => { setUploadResult([]); setFileTraining([]) }}>
          <LucidePaperclip className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <ScrollArea className="sm:max-w-[500px] w-full mt-4">
          <div className="sm:max-w-[650px]">
            <DialogHeader className="text-start">
              <DialogTitle>
                Adicionar Arquivos
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <div className="space-y-6">
                      <FormItem>
                        <FormControl>
                          <div className="mb-4 mt-8">
                            <FileUploaderChat
                              value={field.value}
                              onValueChange={(newFiles) => {
                                const validFiles = Array.isArray(newFiles) ? newFiles : [];
                                field.onChange(validFiles);
                                setFileTraining(validFiles);
                              }}
                              maxFiles={5}
                              maxSize={5 * 1024 * 1024}
                              progresses={progresses}
                              // onUpload={uploadFiles}
                              disabled={isUploading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                      {uploadedFiles.length > 0 ? (
                        <UploadedFilesCard uploadedFiles={uploadedFiles} />
                      ) : null}
                    </div>
                  )}
                />
                <DialogFooter>
                  {loading ?
                    <Button
                      disabled={true}
                      variant={"outline"}
                      className="w-full">
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </Button>
                    :
                    < Button
                      disabled={fileTraining.length < 1}
                      type="submit"
                      variant={"gooeyLeft"}
                      className="w-full"
                    >
                      Enviar Mensagem
                    </Button>
                  }
                </DialogFooter>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog >
  )
}