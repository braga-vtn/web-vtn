import Image from "next/image"

import { UploadedFile } from "@/lib/types"

interface UploadedFilesCardProps {
  uploadedFiles: UploadedFile[]
}

export function UploadedFilesCard({ uploadedFiles }: UploadedFilesCardProps) {
  return (
    <div className="flex flex-col">
      {uploadedFiles.length > 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            {uploadedFiles.map((file) => (
              <div key={file.key}>
                <Image
                  src={file.url}
                  alt={file.name}
                  fill
                  sizes="(min-width: 340px) 340px, 100vw"
                  loading="lazy"
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
}