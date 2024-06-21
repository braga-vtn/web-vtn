import React, { useState } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trash } from 'lucide-react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogExit, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { SonnerDeleteTraining } from '@/components/ui/sonner'
import { Button } from '@/components/ui/button'
import DialogTrainingText from './dialog-training-text'
import { float } from 'aws-sdk/clients/cloudfront'
import { toast } from 'sonner'

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
  onDelete: (id: string) => void; // Adicionando a definição da nova prop
}

const TrainingCard = ({
  id,
  model,
  title,
  url,
  date,
  type,
  similarity,
  utilization,
  parameters,
  onDelete, // Função passada por props para controlar a exclusão.
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    toast("Treinamento excluído com sucesso!", {
      description: "Em alguns minutos todos os parâmetros serão deletados e os modelos estarão atualizados.",
    });
  };

  return isVisible ? (
    <Card className="flex flex-col items-center justify-center m-3 dark:bg-neutral-900 bg-zinc-100">
      <CardHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col p-1 mb-5">
          <CardTitle className="text-lg flex items-center justify-between">
            <div className="flex items-center text-base">
              {title}
              <span className="px-2 py-1 ml-1 flex items-center">
                <Badge variant="zinc" className="mb-0">
                  {
                    type == 'text' ? 'texto' :
                      type == 'video' ? 'vídeo' :
                        type == 'url' ? 'url' :
                          type == 'audio' ? 'áudio' :
                            type == 'file' ? 'arquivo' : 'conjunto'
                  }
                </Badge>
              </span>
            </div>
            <div>
              {parameters == 0 ?
                <svg
                  aria-hidden="true"
                  className="inline h-6 w-6 animate-spin fill-[#6600FF] text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                :
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant={'gooeyLeft2'}>
                            <Trash className='h-3 w-3' />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Deseja excluir esse treinamento?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Se optar por excluir, todos os parâmetros gerados serão deletados.
                              Esse processo pode levar alguns minutos!
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel asChild>
                              <Button type="button" variant="gooeyLeft2" className="border">
                                Cancelar
                              </Button>
                            </AlertDialogCancel>
                            <AlertDialogExit>
                              <Button variant={"gooeyLeft"} onClick={() => onDelete(id)}>
                                Deletar Treinamento
                              </Button>
                            </AlertDialogExit>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              }
            </div>
          </CardTitle>
          {model && (
            ''
          )}
          <CardDescription className='text-xs dark:text-zinc-500 text-zinc-400 mb-2'>
            {id}
            {/* <SonnerCopiedIdTraining text={id} /> */}
          </CardDescription>
          <CardDescription className='mt-3'>
            Realizado por {
              type == 'text' ? 'texto' :
                type == 'video' ? 'vídeo' :
                  type == 'url' ? 'url' :
                    type == 'audio' ? 'áudio' :
                      type == 'file' ? 'arquivo' : 'conjunto'
            }, contém {parameters} parâmetros e {utilization} utilizações.
          </CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4 w-full">
        <DialogTrainingText
          key={title}
          id={id}
          title={title}
          model={model}
          url={url}
          date={date}
          type={type}
          similarity={similarity}
          utilization={utilization}
          parameters={parameters} />
      </div>
    </Card>
  ) : null;
}

export default TrainingCard