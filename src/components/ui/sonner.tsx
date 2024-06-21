"use client"

import React from 'react';
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as AlertDialogPrimitive from "@radix-ui/react-dialog"
import { string } from "zod"
import { Archive, CopyIcon, FolderOpen, Trash2, TriangleAlert } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import CopyText from "../global/copytext"

const DialogClose = DialogPrimitive.Close

type SonnerCopiedProps = {
  text: string;  // Adicionando a prop text para ser utilizada
};

type SonnerEditChatProps = {
  messageId: number;  // Adicionando a prop text para ser utilizada
  editedMessage: string;
  onSave: (messageId: number, editedMessage: string) => void;
};

type SonnerDeleteChatProps = {
  onDelete: () => void;
};

export const SonnerDeleteChat: React.FC<SonnerDeleteChatProps> = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete()
    toast("A mensagem foi deletada", {
      description: "Recebemos sua solicitação, lembre-se que esse processo é irreversível.",
    });
  };

  return (
    <Button variant="gooeyLeft" onClick={handleDelete}>Excluir mensagem</Button>
  );
};

export function SonnerAnalytics() {
  return (
    <DialogPrimitive.Close>
      <Button
        onClick={() =>
          toast("O Relatório será gerado", {
            description: "Em breve o Vision irá enviar o Relatório por email, whatsApp e aqui na plataforma.",
          })
        }
      >
        Gerar Relatório
      </Button>
    </DialogPrimitive.Close>
  )
}

export const SonnerCopied: React.FC<SonnerCopiedProps> = ({ text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CopyText text={text} />
          <Button
            variant="ghost"
            size="icon2"
            onClick={() => {
              navigator.clipboard.writeText(text).then(() => {
                toast("O texto foi copiado", {
                  description: "Você copiou o texto para sua área de transferência!",
                });
              }).catch(err => {
                toast("Erro ao copiar", {
                  description: "Houve um erro ao tentar copiar o texto.",
                });
              });
            }}
          >
            <CopyIcon className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
        {/* <TooltipContent>
          <p>Copiar</p>
        </TooltipContent> */}
      </Tooltip>
    </TooltipProvider>
  )
};

export const SonnerCopied2: React.FC<SonnerCopiedProps> = ({ text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CopyText text={text} />
          <Button
            variant="ghost3"
            size="icon4"
            className='ml-3'
            onClick={() => {
              navigator.clipboard.writeText(text).then(() => {
                toast("O texto foi copiado", {
                  description: "Você copiou o texto para sua área de transferência!",
                });
              }).catch(err => {
                toast("Erro ao copiar", {
                  description: "Houve um erro ao tentar copiar o texto.",
                });
              });
            }}
          >
            <CopyIcon className="h-3.5 w-3.5" />
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
};

export const SonnerCopiedIdTraining: React.FC<SonnerCopiedProps> = ({ text }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CopyText text={text} />
          <Button
            variant="invisible"
            onClick={() => {
              navigator.clipboard.writeText(text).then(() => {
                toast("O texto foi copiado", {
                  description: "Você copiou o texto para sua área de transferência!",
                });
              }).catch(err => {
                toast("Erro ao copiar", {
                  description: "Houve um erro ao tentar copiar o texto.",
                });
              });
            }}
          >
            <CopyIcon className="h-2.5 w-2.5" />
          </Button>
        </TooltipTrigger>
        {/* <TooltipContent>
          <p>Copiar</p>
        </TooltipContent> */}
      </Tooltip>
    </TooltipProvider>
  )
};

export const SonnerCopiedSecretkey: React.FC<SonnerCopiedProps> = ({ text }) => {
  return (
    <div>
      <CopyText text={text} />
      <Button
        variant="gooeyLeft2"
        size={"icon"}
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            toast("O Secret-Key foi copiado", {
              description: "Você copiou o Secret-Key para sua área de transferência!",
            });
          })
        }}
      >
        <CopyIcon className="h-3.5 w-3.5" />
      </Button>
    </div>
  )
};

export function SonnerReport() {
  return (
    <Button
      onClick={() =>
        toast("A mensagem foi reportada", {
          description: "Agradecemos! você contribui para uma Vistune cada vez melhor.",
        })
      }
    >
      Reportar Conversa
    </Button>
  )
}

export function SonnerGenerateSecretKey() {
  return (
    <Button
    variant={"gooeyLeft"}
      onClick={() =>
        toast("Uma nova Secret-key foi gerada", {
          description: "Você já pode copiar e utilizar em sua aplicação!",
        })
      }
    >
      Nova Secret-key
    </Button>
  )
}

export function SonnerDeleteMember() {
  return (
    <Button
    variant={"gooeyLeft"}
      onClick={() =>
        toast("Membro deletado com sucesso!", {
          description: "O membro não tem mais acesso a essa conta.",
        })
      }
    >
      Deletar Membro
    </Button>
  )
}

export function SonnerDeleteTraining() {
  return (
    <Button
      onClick={() =>
        toast("Treinamento excluído com sucesso!", {
          description: "Em alguns minutos todos os parâmetros serão deletados e os modelos estarão atualizados.",
        })
      }
    >
      Deletar Treinamento
    </Button>
  )
}

export function SonnerDownloadTraining() {
  return (
    <div
      onClick={() =>
        toast("Download realizado com sucesso!", {
          description: "O arquivo já está em seu dispositivo, acesse os Downloads.",
        })
      }
    >
    </div>
  )
}

export function SonnerManager() {
  return (
    <Button
      type='submit'
      onClick={() =>
        toast("A instrução foi enviada", {
          description: "A Cleo está processando o seu pedido. Em breve será concluído!",
        })
      }
    >
      Enviar Instrução
    </Button>
  )
}

export function SonnerShopify() {
  return (
    <Button
      variant={"gooeyLeft"}
      type='submit'
      className="fixed bottom-6 right-2 m-4"
      onClick={() =>
        toast("A integração com a Shopify foi concluída!", {
          description: "Nossos modelos já se conectaram à sua conta Shopify.",
        })
      }
    >
      Concluir Integração
    </Button>
  )
}

export function SonnerAvatar() {
  return (
    <Button
      type='submit'
      className="fixed bottom-6 right-2 m-4"
      onClick={() =>
        toast("Sua foto foi atualizada!", {
          description: "Altere sempre que achar necessário, aqui em configurações!",
        })
      }
    >
      Salvar Alteração
    </Button>
  )
}

export function SonnerYampi() {
  return (
    <Button
      variant={"gooeyLeft"}
      type='submit'
      className="fixed bottom-6 right-2 m-4"
      onClick={() =>
        toast("A integração com a Yampi foi concluída!", {
          description: "Nossos modelos já se conectaram à sua conta Yampi.",
        })
      }
    >
      Concluir Integração
    </Button>
  )
}

export function SonnerWhatsApp() {
  return (
    <Button
      type='submit'
      className="fixed bottom-6 right-2 m-4"
      onClick={() =>
        toast("Conexão com o WhatsApp", {
          description: "Você pode conectar ou desconectar quando quiser! Basta, voltar aqui novamente.",
        })
      }
    >
      Finalizar
    </Button>
  )
}

export const SonnerEditConfirm: React.FC<SonnerEditChatProps> = ({
  messageId,
  editedMessage,
  onSave
}) => {
  const handleSave = () => {
    toast("O texto foi editado", {
      description: "Em breve a alteração será realizada no aplicativo de origem.",
    });
    onSave(messageId, editedMessage);
  };

  return (
    <Button onClick={handleSave} variant={"gooeyLeft"}>
      Salvar alteração
    </Button>
  );
}

export function SonnerUnarchived() {
  return (
    <div>
      <Button variant="ghost" size="icon"
        onClick={() =>
          toast("O usuário foi desarquivado", {
            description: "Esse contato foi desarquivado, ele será exibido na tela inicial.",
          })
        }>
        <FolderOpen className="h-4 w-4" />
        <span className="sr-only">Desarquivar</span>
      </Button>
    </div>
  )
}

export function SonnerFile() {
  return (
    <div>
      <Button variant="ghost" size="icon"
        onClick={() =>
          toast("O usuário foi arquivado", {
            description: "Caso o usuário envie uma nova mensagem, será desarquivado automaticamente!",
          })
        }>
        <Archive className="h-4 w-4" />
      </Button>
    </div>
  )
}

// export function SonnerDeleteChat() {
//   return (
//     <div>
//       <Button variant="invisible2"
//         onClick={() =>
//           toast("A mensagem foi deletada", {
//             description: "Recebemos sua solicitação, lembre-se que esse processo é irreversível.",
//           })
//         }>Excluir mensagem
//       </Button>
//     </div>
//   )
// }

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
