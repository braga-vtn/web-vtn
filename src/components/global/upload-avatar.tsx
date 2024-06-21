"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { getErrorMessage } from "@/lib/handle-error";
import { useUploadFile } from "@/hooks/use-upload-file";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { UploadedFilesCard } from "./uploaded-files-card";
import { FileUploader } from "./file-uploader";
import { UploadedFile } from "@/lib/types";

const schema = z.object({
  images: z.array(z.instanceof(File)),
});

type Schema = z.infer<typeof schema>;

interface UploadAvatarProps {
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFile<unknown>[]>>;
}

export function UploadAvatar({ setUploadedFiles }: UploadAvatarProps) {
  const [loading, setLoading] = React.useState(false);
  const { uploadFiles, progresses, uploadedFiles, isUploading, clearUploadedFiles } = useUploadFile(
    "fileUploader", // Corrigido aqui
    { defaultUploadedFiles: [] }
  );

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  });

  React.useEffect(() => {
    setUploadedFiles(uploadedFiles);
  }, [uploadedFiles, setUploadedFiles]);

  function onSubmit(input: Schema) {
    setLoading(true);

    toast.promise(uploadFiles(input.images), {
      loading: "Fazendo upload da foto...",
      success: () => {
        form.reset();
        setLoading(false);
        return "Foto adicionada";
      },
      error: (err) => {
        setLoading(false);
        return getErrorMessage(err);
      },
    });
  }

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    clearUploadedFiles();
    setUploadedFiles([]);
    form.reset();
  };

  const handleFileUpload = async (files: File[]): Promise<void> => {
    await uploadFiles(files);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              {uploadedFiles.length > 0 ? (
                <div className="flex flex-col items-center space-y-4">
                  <UploadedFilesCard uploadedFiles={uploadedFiles} />
                  <Button variant="gooeyLeft2" size={"sm"} className="justify-items-center border" onClick={handleEditClick}>
                    Mudar Foto
                  </Button>
                </div>
              ) : (
                <FormItem className="w-full">
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      maxFiles={1}
                      maxSize={1 * 1024 * 1024}
                      progresses={progresses}
                      onUpload={handleFileUpload} // Corrigido aqui
                      disabled={isUploading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            </div>
          )}
        />
      </form>
    </Form>
  );
}