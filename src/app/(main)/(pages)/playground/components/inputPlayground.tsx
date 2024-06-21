import { Textarea } from '@/components/ui/textarea';
import React, { useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { CornerDownLeft, Eraser, File, FileAudio2, FileText, FileVideo, Paperclip, RotateCcw } from 'lucide-react';
import { Cross2Icon, ReloadIcon } from '@radix-ui/react-icons';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { toast } from 'sonner';
import { useControllableState } from '@/hooks/use-controllable-state';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { formatBytes } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface InputPlaygroundProps {
  isSending: boolean;
  remainingInteractions: number;
  textAreaRef2: React.RefObject<HTMLTextAreaElement>;
  currentMessage: string;
  value?: File[]
  onValueChange?: React.Dispatch<React.SetStateAction<File[]>>
  onUpload?: (files: File[]) => Promise<void>
  progresses?: Record<string, number>
  accept?: string
  maxSize?: number
  maxFiles?: number
  multiple?: boolean
  disabled?: boolean
  setCurrentMessage: (message: string) => void;
  handleSendMessage: (message: string, files: File[]) => void;
  handleClearChat: () => void;
  handlePauseIA: () => void;
  handleNewChat: () => void;
}

export function InputPlayground(props: InputPlaygroundProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    progresses,
    textAreaRef2,
    currentMessage,
    setCurrentMessage,
    handleSendMessage,
    handleClearChat,
    handlePauseIA,
    handleNewChat,
    accept = "image/jpeg,application/pdf,text/plain",
    maxSize = 1024 * 1024 * 5,
    maxFiles = 5,
    multiple = false,
    disabled = false,
    isSending,
    remainingInteractions,
    ...restProps
  } = props

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  })

  const onDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
    const acceptedFiles = Array.from(event.target.files || [])
    if (!acceptedFiles.length) return

    if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
      toast.error("Não é possível fazer upload de mais de um arquivo")
      return
    }

    if ((files?.length ?? 0) + acceptedFiles.length > maxFiles) {
      toast.error(`Não é possível fazer upload de mais de ${maxFiles} arquivos`)
      return
    }

    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    )

    const updatedFiles = files ? [...files, ...newFiles] : newFiles
    setFiles(updatedFiles)

    if (onUpload && updatedFiles.length > 0 && updatedFiles.length <= maxFiles) {
      const target = updatedFiles.length > 1 ? `${updatedFiles.length} arquivos` : "arquivo"
      toast.promise(onUpload(updatedFiles), {
        loading: `Adicionando ${target}...`,
        success: () => {
          setFiles([])
          return `${target} Adicionado`
        },
        error: `Falha ao adicionar ${target}`,
      })
    }
  }

  function onRemove(index: number) {
    if (!files) return
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    onValueChange?.(newFiles)
  }

  React.useEffect(() => {
    return () => {
      if (!files) return
      files.forEach((file) => {
        if (isFileWithPreview(file)) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
  }, [])

  useEffect(() => {
    if (isSending || remainingInteractions < 1) {
      return;
    } else {
      const keyDownHandler = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "Enter") {
          event.preventDefault();
          setFiles([]);
          handleSendMessage(currentMessage, files ?? []);
        }
      };

      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    }
  }, [currentMessage, isSending, remainingInteractions]);

  const isDisabled = disabled || (files?.length ?? 0) >= maxFiles || isSending || remainingInteractions < 0

  return (
    <form
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage(currentMessage, files ?? []);
        setFiles([]);
      }}
    >
      <Textarea
        id="message"
        ref={textAreaRef2}
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Digite sua pergunta..."
        className={`resize-none ${files?.length ? "max-h-[15vh]" : "max-h-[55vh]"} min-h-12 border-0 p-3 shadow-none focus-visible:ring-0`}
      />
      {files?.length ? (
        <ScrollArea className="max-h-48 w-full px-3 overflow-y-auto my-5">
          {files.map((file, index) => (
            <FileCard
              key={index}
              file={file}
              onRemove={() => onRemove(index)}
              progress={progresses?.[file.name]}
            />
          ))}
        </ScrollArea>
      ) : null}
      <div className="flex items-center p-3 pt-0 gap-2">
        <Button disabled={isDisabled} variant="gooeyLeft2" size="icon2" type="button" onClick={() => document.getElementById("file-input")?.click()}>
          <Paperclip className="size-4" />
        </Button>
        <input
          id="file-input"
          type="file"
          accept={accept}
          multiple={multiple}
          style={{ display: "none" }}
          onChange={onDrop}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="gooeyLeft2" size="icon2" type="button"
                onClick={handleClearChat}
                disabled={isSending}
              >
                <Eraser className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              Limpar Conversa
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="gooeyLeft2" size="icon2" type="button"
                onClick={handleNewChat}
                disabled={isSending || remainingInteractions < 0}
              >
                <RotateCcw className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Novo Chat</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {isSending ? (
          <Button
            disabled={false}
            variant="gooeyLeftDark"
            size="sm"
            className="ml-auto gap-1.5 text-neutral-400 dark:text-neutral-600"
            onClick={handlePauseIA}
          >
            Pausar
            <ReloadIcon className="size-3.5 animate-spin" />
          </Button>
        ) : remainingInteractions > 0 ? (
          <Button
            disabled={currentMessage.length < 1}
            type="submit"
            variant="gooeyLeftDark"
            size="sm"
            className="ml-auto gap-1.5"
          >
            Enviar
            <CornerDownLeft className="size-3.5" />
          </Button>
        ) : (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                disabled={currentMessage.length < 1}
                variant="gooeyLeft2"
                size="sm"
                className="ml-auto gap-1.5">
                Enviar
                <CornerDownLeft className="size-3.5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você não possui mais interações!</AlertDialogTitle>
                <AlertDialogDescription>
                  Por favor, adicione mais fundos para garantir a continuidade do uso dos modelos de Inteligência Artificial.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel>Fechar</AlertDialogCancel>
                <Link href="/billing#additional">
                  <AlertDialogAction>Adicionar Interações</AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </form>
  );
}

function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string"
}

interface FileCardProps {
  file: File
  onRemove: () => void
  progress?: number
}

function FileCard({ file, progress, onRemove }: FileCardProps) {

  return (
    <div className="relative flex items-center space-x-4 my-4 border p-4 rounded-xl shadow-sm  gap-4 min-w-max">
      <div className="flex flex-1 space-x-4">
        {isFileWithPreview(file) && (file.type === "image/jpeg" || file.type === "image/png") ? (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 rounded-md object-cover"
          />
        ) : null}
        {isFileWithPreview(file) && file.type === "image/gif" ? (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 rounded-md object-cover"
          />
        ) : null}
        {isFileWithPreview(file) && file.type === "application/pdf" ? (
          <File className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && file.type === "text/plain" ? (
          <FileText className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && file.type === "audio/mpeg" ? (
          <FileAudio2 className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && file.type === "video/mp4" ? (
          <FileVideo className="ml-3 w-10 h-10" />
        ) : null}
        <div className="flex w-full flex-col gap-2">
          <div className="space-y-px">
            <p className="line-clamp-1 text-sm font-medium text-foreground/80">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatBytes(file.size)}
            </p>
          </div>
          {progress ? <Progress value={progress} /> : null}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="gooeyLeftDark"
          size="icon"
          className="size-7"
          onClick={onRemove}
        >
          <Cross2Icon className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
