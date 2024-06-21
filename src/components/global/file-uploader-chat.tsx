"use client"

import * as React from "react"
import Image from "next/image"
import { Cross2Icon, UploadIcon } from "@radix-ui/react-icons"
import Dropzone, {
  type DropzoneProps,
  type FileRejection,
} from "react-dropzone"
import { toast } from "sonner"

import { cn, formatBytes } from "@/lib/utils"
import { useControllableState } from "@/hooks/use-controllable-state"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { File, FileAudio2, FileText, FileVideo, Text, UploadCloud } from "lucide-react"

interface FileUploaderChatProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: File[]
  onValueChange?: React.Dispatch<React.SetStateAction<File[]>>
  onUpload?: (files: File[]) => Promise<void>
  progresses?: Record<string, number>
  accept?: DropzoneProps["accept"]
  maxSize?: DropzoneProps["maxSize"]
  maxFiles?: DropzoneProps["maxFiles"]
  multiple?: boolean
  disabled?: boolean
}

export function FileUploaderChat(props: FileUploaderChatProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    progresses,
    accept = {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "audio/mpeg": [".mp3"],
      "video/mp4": [".mp4"],
    },
    maxSize = 1024 * 1024 * 5,
    maxFiles = 5,
    multiple = true,
    disabled = false,
    className,
    ...dropzoneProps
  } = props

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  })

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
        toast.error("Não é possível fazer upload de mais de um arquivo")
        return
      }

      if ((files?.length ?? 0) + acceptedFiles.length > maxFiles) {
        toast.error(`Não é possível fazer upload de mais de ${maxFiles} arquivo`)
        return
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )

      const updatedFiles = files ? [...files, ...newFiles] : newFiles

      setFiles(updatedFiles)

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`Arquivo ${file.name} foi rejeitado`)
        })
      }

      if (
        onUpload &&
        updatedFiles.length > 0 &&
        updatedFiles.length <= maxFiles
      ) {
        const target =
          updatedFiles.length > 1 ? `${updatedFiles.length} arquivos` : `arquivo`

        toast.promise(onUpload(updatedFiles), {
          loading: `Adicionando ${target}...`,
          success: () => {
            setFiles([])
            return `${target} Adicionado`
          },
          error: `Falha ao adicionar ${target}`,
        })
      }
    },

    [files, maxFiles, multiple, onUpload, setFiles]
  )

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

  const isDisabled = disabled || (files?.length ?? 0) >= maxFiles

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden">
      {isDisabled ? (
        null
      ) :
        <Dropzone
          onDrop={onDrop}
          accept={accept}
          maxSize={maxSize}
          maxFiles={maxFiles}
          multiple={maxFiles > 1 || multiple}
          disabled={isDisabled}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={cn(
                "relative flex flex-col items-center justify-center w-full py-10 border-2 dark:border-neutral-800 border-zinc-200 rounded-lg cursor-pointer dark:bg-neutral-900 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-neutral-800",
                "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isDragActive && "border-muted-foreground/50",
                isDisabled && "pointer-events-none opacity-60",
                className
              )}
              {...dropzoneProps}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className=" text-center">
                  <div className=" border p-2 rounded-md max-w-min mx-auto">
                    <UploadCloud size={20} />
                  </div>

                  <p className="mt-2 text-sm text-currentcolor">
                    <span className="font-semibold">
                      Clique para adicionar
                    </span>
                  </p>
                  <p className="text-xs text-zinc-500">
                    Clique para adicionar arquivos &#40; eles devem ter menos de 5 MB &#41;
                  </p>
                </div>
              ) : (
                <div className=" text-center">
                  <div className=" border p-2 rounded-md max-w-min mx-auto">
                    <UploadCloud size={20} />
                  </div>
                  <div className="space-y-px">
                    <p className="mt-2 text-sm text-currentcolor">
                      <span className="font-semibold">
                        Clique para adicionar
                      </span>
                    </p>
                    <p className="text-xs text-zinc-500">
                      Você pode adicionar até
                      {maxFiles > 1
                        ? ` ${maxFiles === Infinity ? "multiple" : maxFiles}
                      arquivos (com menos de ${formatBytes(maxSize)} por arquivo)`
                        : ` um arquivo com ${formatBytes(maxSize)}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </Dropzone>
      }
      {files?.length ? (
        <ScrollArea className="h-fit w-full px-3">
          <div className="max-h-48 space-y-4">
            {files?.map((file, index) => (
              <FileCard
                key={index}
                file={file}
                onRemove={() => onRemove(index)}
                progress={progresses?.[file.name]}
              />
            ))}
          </div>
        </ScrollArea>
      ) : null}
    </div>
  )
}

interface FileCardProps {
  file: File
  onRemove: () => void
  progress?: number
}

function FileCard({ file, progress, onRemove }: FileCardProps) {

  return (
    <div className="relative flex items-center space-x-4">
      <div className="flex flex-1 space-x-4">
        {isFileWithPreview(file) && (file.type == "image/jpeg" || file.type == "image/png") ? (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 rounded-md object-cover"
          />
        ) : null}
        {isFileWithPreview(file) && (file.type == "image/gif") ? (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 rounded-md object-cover"
          />
        ) : null}
        {isFileWithPreview(file) && (file.type == "application/pdf") ? (
          <File className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && (file.type == "text/plain") ? (
          <FileText className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && (file.type == "audio/mpeg") ? (
          <FileAudio2 className="ml-3 w-10 h-10" />
        ) : null}
        {isFileWithPreview(file) && (file.type == "video/mp4") ? (
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
      {progress ? null :
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="gooeyLeftDark"
            size="icon"
            className="size-7"
            onClick={onRemove}
          >
            <Cross2Icon className="size-4 " aria-hidden="true" />
          </Button>
        </div>}
    </div>
  )
}

function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string"
}
