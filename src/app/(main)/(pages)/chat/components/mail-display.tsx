'use client'
import {
  AlertTriangle,
  Archive,
  FolderOpen,
  MessageCircle,
  MoreVertical,
  ShieldCheck,
  ShoppingBasketIcon,
  UserRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { formatRelative } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogExit, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { SonnerCopied, SonnerFile, SonnerManager, SonnerReport, SonnerUnarchived } from "@/components/ui/sonner"
import { Dialog, DialogClose, DialogContent, DialogContent2, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ChatLayout from "@/components/chat/chat-layout"
import { useEffect, useState } from "react"
import { Mail, mails } from "../data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface MailDisplayProps {
  mail: Mail | null;
  onReportMail: (mailId: number) => void; // Ajustado para number
  onToFileMail: (mailId: number) => void; // Ajustado para number
  onUnarchiveMail: (mailId: number) => void; // Ajustado para number
  onInstructionMail: (mailId: number) => void; // Ajustado para number
  onStatusCleoMail: (mailId: number, checked: boolean) => void; // Ajustado para number
}

export const MailDisplay: React.FC<MailDisplayProps> = ({ mail, onReportMail, onToFileMail, onUnarchiveMail, onInstructionMail, onStatusCleoMail }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [instructionValue, setInstructionValue] = useState('');
  const [localMailCleoState, setLocalMailCleoState] = useState(mail ? mail.cleo : false);

  const handleSwitchChange = (checked: boolean) => {
    setLocalMailCleoState(checked);

    if (mail && onStatusCleoMail) {
      onStatusCleoMail(mail.id, checked);
    }

  };

  useEffect(() => {
    if (mail) {
      setLocalMailCleoState(mail.cleo);
    }
  }, [mail]);

  const handleReportClick = () => {
    if (mail && onReportMail) {
      onReportMail(mail.id);
    }
  };

  const handleToFileClick = () => {
    if (mail && onToFileMail) {
      onToFileMail(mail.id);
    }
  };

  const handleInstructionClick = () => {
    if (mail && onInstructionMail) {
      onInstructionMail(mail.id);
    }
  };

  const handleUnarchiveClick = () => {
    if (mail && onUnarchiveMail) {
      onUnarchiveMail(mail.id);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          {mail ? (
            <div className="flex flex-1 flex-col">
              <div className="flex items-start p-1">
                <div className="flex items-start gap-1 text-sm">
                  <Avatar>
                    <AvatarImage alt={mail.name} src={mail.avatar ? mail.avatar : 'default-1.png'} />
                    <AvatarFallback>
                      {mail.name
                        .split(" ")
                        .map((chunk) => chunk[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">{mail.name ? mail.name : mail.phone}</div>
                    <div className="line-clamp-1 text-xs">{mail.subject}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              Nenhum contato selecionado
            </div>
          )
          }
        </div>
        <div className="ml-auto flex items-center gap-2">
        </div>
        {mail ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                htmlFor="cleo-status-switch"
                className="flex items-center gap-2 text-xs font-normal mx-4 h-6"
              >
                <Switch
                  id="cleo-status-switch"
                  checked={localMailCleoState}
                  onCheckedChange={handleSwitchChange}
                  aria-label="Mute thread"
                />
              </Label>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              Atendimento da IA
            </TooltipContent>
          </Tooltip>
        ) : (
          ''
        )
        }
        {mail?.manager == true ?
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="gooeyLeft2"
                      size="icon"
                      onClick={() => {
                        setSelectedOption('');
                        setInstructionValue('');
                      }}
                    >
                      <ShieldCheck className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Modo Gerente</DialogTitle>
                      <DialogDescription>
                        Instrua a Cleo sobre esse atendimento.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Pergunta do Usuário</Label>
                        <Textarea id="name" disabled={true} value={mail?.text} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Resposta da Cleo</Label>
                        <Textarea id="name" disabled={true} value={mail?.managerResponse} />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Selecione uma Opção</Label>
                        <Select onValueChange={setSelectedOption}>
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="send">Enviar a resposta</SelectItem>
                            <SelectItem value="paused">Pausar o atendimento</SelectItem>
                            <SelectItem value="both">Realizar ambos</SelectItem>
                            <Separator className="mt-1 mb-1" />
                            <SelectItem value="instruction">Instruir a Cleo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {selectedOption === 'instruction' && selectedOption && (
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="instruction">Digite a Instrução</Label>
                          <Textarea
                            id="instruction"
                            placeholder="Exp.: Quero que você diga ao cliente que ele pode efetuar a compra pelo site!"
                            value={instructionValue}
                            onChange={(e) => setInstructionValue(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="gooeyLeft2" className="border">
                          Cancelar
                        </Button>
                      </DialogClose>
                      {(selectedOption === 'instruction' && instructionValue) || (selectedOption && selectedOption !== 'instruction') ?
                        <DialogClose>
                          <Button
                            variant="gooeyLeft"
                            type='submit'
                            onClick={() => {
                              handleInstructionClick();
                              toast("A instrução foi enviada", {
                                description: "A Cleo está processando o seu pedido. Em breve será concluído!",
                              })
                            }
                            }>
                            Enviar Instrução
                          </Button>
                        </DialogClose>
                        :
                        <Button type="submit" disabled={true}>
                          Enviar Instrução
                        </Button>
                      }
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TooltipTrigger>
              <TooltipContent>
                <p>Modo Gerente</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          : ''}
        {mail?.archive == false ?
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="gooeyLeft2" size="icon" className="mx-1"
                  onClick={() => {
                    handleToFileClick();
                    toast("O usuário foi arquivado", {
                      description: "Caso o usuário envie uma nova mensagem, será desarquivado automaticamente!",
                    })
                  }
                  }>
                  <Archive className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Arquivar contato</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> :
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="gooeyLeft2" size="icon" className="mx-1"
                  onClick={() => {
                    handleUnarchiveClick();
                    toast("O usuário foi desarquivado", {
                      description: "Esse contato foi desarquivado, ele será exibido na tela inicial.",
                    })
                  }
                  }>
                  <FolderOpen className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Desarquivar contato</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="gooeyLeft2" size="icon" disabled={!mail || mail.report}>
                    <AlertTriangle className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Você quer reportar essa conversa?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Todas as mensagens reportadas são enviadas para nossos desenvolvedores
                      para uma possível correção nos modelos e serviços!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button type="button" variant="gooeyLeft2">
                          Cancelar
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogExit>
                      <Button
                      variant={"gooeyLeft"}
                        onClick={() => {
                          handleReportClick();
                          toast("A mensagem foi reportada", {
                            description: "Agradecemos! você contribui para uma Vistune cada vez melhor.",
                          })
                        }
                        }
                      >
                        Reportar Conversa
                      </Button>
                    </AlertDialogExit>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TooltipTrigger>
            {/* <TooltipContent>
              <p>Reportar essa conversa</p>
            </TooltipContent> */}
          </Tooltip>
        </TooltipProvider>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Dialog>
                <DialogTrigger>
                  <Button variant="gooeyLeft2" size="icon" disabled={!mail}>
                    <UserRound className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent2>
                  <Card className="overflow-auto">
                    {mail && mail.orderCode ? (
                      <CardHeader className="flex flex-row items-start bg-[#ededed] dark:bg-neutral-900">
                        <div className="grid gap-0.5">
                          <CardTitle className="group flex items-center gap-1 text-lg">
                            Pedido {mail.orderCode}<SonnerCopied text={mail.orderCode} />
                          </CardTitle>
                          <CardDescription>
                            {formatRelative(new Date(mail.orderDate), new Date(), {
                              locale: ptBR
                            })}
                          </CardDescription>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                          {mail && mail.orderLink ? (
                            <a href={mail.orderLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block">
                              <Button size="sm" variant="gooeyLeftDark" className="h-8 gap-1">
                                <ShoppingBasketIcon className="h-3.5 w-3.5" />
                                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                  Ver Pedido
                                </span>
                              </Button>
                            </a>
                          ) : ''}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button size="icon" variant="gooeyLeftDark" className="h-8 w-8">
                                <MoreVertical className="h-3.5 w-3.5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {mail && mail.trackingCode ? (
                                <a href={`https://linketrack.com/track/?tk=029b79119a21bd0f3ff59e1d9841e1c89417c1b74558ba8b86b5e691b6e274d0&codigo=${mail.trackingCode}`}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <DropdownMenuItem>
                                    Rastrear
                                  </DropdownMenuItem>
                                </a>
                              ) : ''}
                              <DropdownMenuItem>
                                <a href={`https://api.whatsapp.com/send?phone=${mail.phone}&text=Olá,%20como%20posso%20ajudar?`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block">
                                  Abrir whatsApp
                                </a>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardHeader>
                    ) : (
                      <CardHeader className="flex flex-row items-start bg-muted/50">
                        <div className="grid">
                          <CardTitle className="group flex items-center text-lg mt-2">
                            Sem Pedido
                          </CardTitle>
                        </div>
                        {mail && mail.phone ? (
                          <div className="ml-auto flex items-center gap-1">
                            <a href={`https://api.whatsapp.com/send?phone=${mail.phone}&text=Olá,%20como%20posso%20ajudar?`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block">
                              <Button size="sm" variant="gooeyLeftDark" className="h-8 gap-1">
                                <MessageCircle className="h-3.5 w-3.5" />
                                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                  Abrir whatsApp
                                </span>
                              </Button>
                            </a>
                          </div>
                        ) : ''}
                      </CardHeader>
                    )}
                    <CardContent className="p-6 text-sm">
                      {mail && mail.orderCode ? (
                        <div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                              <div className="font-semibold">Informação do Envio</div>
                              <address className="grid gap-0.5 not-italic text-muted-foreground">
                                {mail && mail.trackingShipping ? (
                                  <span>
                                    {mail.trackingShipping}
                                  </span>
                                ) : ''}
                                {mail && mail.trackingStatus ? (
                                  <span>
                                    {mail.trackingStatus}
                                  </span>
                                ) : ''}
                                {mail && mail.trackingCode ? (
                                  <span>
                                    {mail.trackingCode} <SonnerCopied text={mail.trackingCode} />
                                  </span>
                                ) : ''}
                              </address>
                            </div>
                            <div className="grid auto-rows-max gap-3">
                              <div className="font-semibold">Informações do Pagamento</div>
                              <address className="grid gap-0.5 not-italic text-muted-foreground">
                                {mail && mail.orderStatus ? (
                                  <span>
                                    {mail.orderStatus}
                                  </span>
                                ) : ''}
                                {mail && mail.orderPayment ? (
                                  <span>
                                    {mail.orderPayment}
                                  </span>
                                ) : ''}
                                {mail && mail.orderValue ? (
                                  <span>
                                    {mail.orderValue} <SonnerCopied text={mail.orderValue} />
                                  </span>
                                ) : ''}
                              </address>
                            </div>
                          </div>
                          <Separator className="my-4" />
                        </div>
                      ) : (
                        ''
                      )}
                      <div className="grid gap-3">
                        <div className="font-semibold">Informação do Cliente</div>
                        <dl className="grid gap-3">
                          {mail && mail.name ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Nome</dt>
                              <dd>
                                {mail.name} <SonnerCopied text={mail.name} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}
                          {mail && mail.email ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Email</dt>
                              <dd>
                                {mail.email} <SonnerCopied text={mail.email} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}
                          {mail && mail.phone ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Telefone</dt>
                              <dd>
                                {mail.phone} <SonnerCopied text={mail.phone} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}
                          {mail && mail.document ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">CPF</dt>
                              <dd>
                                {mail.document} <SonnerCopied text={mail.document} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}
                          {mail && mail.productInterest ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Produto de Interesse</dt>
                              <dd>
                                {mail.productInterest} <SonnerCopied text={mail.productInterest} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}
                          {mail && mail.address ? (
                            <div className="flex items-center justify-between">
                              <dt className="text-muted-foreground">Endereço</dt>
                              <dd>
                                {mail.address} <SonnerCopied text={mail.address} />
                              </dd>
                            </div>
                          ) : (
                            ''
                          )}

                        </dl>
                      </div>
                    </CardContent>
                  </Card>
                </DialogContent2>
              </Dialog>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ver contato</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Separator />
      {mail && mail.id ? (
        <ChatLayout user={mail.id} />
      ) :
        <ChatLayout user={0} />}
    </div >
  )
}
