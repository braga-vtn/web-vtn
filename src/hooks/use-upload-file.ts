import * as React from "react"
import { toast } from "sonner"
import type { UploadFilesOptions } from "uploadthing/types"
import { getErrorMessage } from "@/lib/handle-error"
import { uploadFiles } from "@/lib/uploadthing"
import { type OurFileRouter } from "@/app/api/uploadthing/core"
import { UploadedFile } from "@/lib/types"

interface UseUploadFileProps
  extends Pick<
    UploadFilesOptions<OurFileRouter, keyof OurFileRouter>,
    "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"
  > {
  defaultUploadedFiles?: UploadedFile[]
}

export function useUploadFile(
  endpoint: keyof OurFileRouter,
  { defaultUploadedFiles = [], ...props }: UseUploadFileProps = {}
) {
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>(defaultUploadedFiles)
  const [progresses, setProgresses] = React.useState<Record<string, number>>({})
  const [isUploading, setIsUploading] = React.useState(false)

  async function uploadThings(files: File[]): Promise<UploadedFile[]> {
    setIsUploading(true)
    try {
      const res = await uploadFiles(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          setProgresses((prev) => {
            return {
              ...prev,
              [file]: progress,
            }
          })
        },
      })

      setUploadedFiles((prev) => (prev ? [...prev, ...res] : res))
      return res;
    } catch (err) {
      toast.error(getErrorMessage(err))
      throw err;
    } finally {
      setProgresses({})
      setIsUploading(false)
    }
  }

  const clearUploadedFiles = () => {
    setUploadedFiles([]);
  };

  return {
    uploadedFiles,
    progresses,
    uploadFiles: uploadThings,
    isUploading,
    clearUploadedFiles,
  }
}