"use client";

import axios, { AxiosProgressEvent, CancelTokenSource } from "axios";
import {
  AudioWaveform,
  File,
  FileImage,
  FolderArchive,
  FolderCheck,
  Headphones,
  Image,
  LucideImage,
  Play,
  UploadCloud,
  Video,
  X,
} from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "../ui/input";
import ProgressBar from "./progress";
import { ScrollArea } from "../ui/scroll-area";
import AWS from 'aws-sdk';

// Configurações do AWS S3 SDK
const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || 'fallback-access-key-id',
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || 'fallback-secret-access-key',
  region: process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION || 'sa-east-1',
  s3ForcePathStyle: process.env.NEXT_PUBLIC_AWS_USE_PATH_STYLE_ENDPOINT === 'true',
  endpoint: new AWS.Endpoint(process.env.NEXT_PUBLIC_AWS_URL || 'https://s3.sa-east-1.amazonaws.com')
});

interface FileUploadProgress {
  progress: number;
  source: AWS.S3.ManagedUpload | null;
  File: File;
}

enum FileTypes {
  Image = "image",
  Pdf = "pdf",
  Audio = "audio",
  Video = "video",
  Other = "other",
}

const ImageColor = {
  bgColor: "bg-transparent",
  fillColor: "dark:fill-zinc-900 fill-zinc-300",
};

const PdfColor = {
  bgColor: "bg-transparent",
  fillColor: "dark:fill-zinc-900 fill-zinc-300",
};

const AudioColor = {
  bgColor: "bg-transparent",
  fillColor: "dark:fill-zinc-900 fill-zinc-300",
};

const VideoColor = {
  bgColor: "bg-transparent",
  fillColor: "dark:fill-zinc-900 fill-zinc-300",
};

const OtherColor = {
  bgColor: "bg-transparent",
  fillColor: "dark:fill-zinc-900 fill-zinc-300",
};

export default function ImageUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [filesToUpload, setFilesToUpload] = useState<FileUploadProgress[]>([]);

  const getFileIconAndColor = (file: File) => {
    if (file.type.includes(FileTypes.Image)) {
      return {
        icon: <div aria-label="Image file"><LucideImage size={40} className={ImageColor.fillColor} /></div>,
        color: ImageColor.bgColor,
      };
    }
  
    if (file.type.includes(FileTypes.Pdf)) {
      return {
        icon: <div aria-label="PDF file"><File size={40} className={PdfColor.fillColor} /></div>,
        color: PdfColor.bgColor,
      };
    }
  
    if (file.type.includes(FileTypes.Audio)) {
      return {
        icon: <div aria-label="Audio file"><Headphones size={40} className={AudioColor.fillColor} /></div>,
        color: AudioColor.bgColor,
      };
    }
  
    if (file.type.includes(FileTypes.Video)) {
      return {
        icon: <div aria-label="Video file"><Play size={40} className={VideoColor.fillColor} /></div>,
        color: VideoColor.bgColor,
      };
    }
  
    return {
      icon: <div aria-label="Other file"><FolderCheck size={40} className={OtherColor.fillColor} /></div>,
      color: OtherColor.bgColor,
    };
  };

  // Configurações do AWS S3 SDK
  const s3 = new AWS.S3({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? '',
    region: process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION ?? '',
    s3ForcePathStyle: process.env.NEXT_PUBLIC_AWS_USE_PATH_STYLE_ENDPOINT === 'true',
    endpoint: new AWS.Endpoint(process.env.NEXT_PUBLIC_AWS_URL ?? '')
  });

  const onUploadProgress = (
    progressEvent: AWS.S3.ManagedUpload.Progress, // Corrigir o tipo de ProgressEvent aqui
    file: File,
    source: AWS.S3.ManagedUpload,
  ) => {

    // Verifique se o total é definido antes de fazer a divisão para evitar a divisão por zero
    const total = progressEvent.total || 1;
    const progress = Math.round((progressEvent.loaded / total) * 100);

    if (progress === 100) {
      setUploadedFiles(prevUploadedFiles => [...prevUploadedFiles, file]);
      setFilesToUpload(prevFilesToUpload => prevFilesToUpload.filter(f => f.File !== file));
    } else {
      setFilesToUpload(prevFilesToUpload => prevFilesToUpload.map(item => {
        if (item.File.name === file.name) {
          return { ...item, progress, source };
        }
        return item;
      }));
    }
  };

  const uploadFileToS3 = useCallback(async (file: File) => {
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET ?? '',
      Key: file.name,
      Body: file,
    };
  
    const managedUpload = new AWS.S3.ManagedUpload({
      params,
      partSize: 10 * 1024 * 1024, // 10 MB
      queueSize: 1,
    });
  
    setFilesToUpload(prevFiles => prevFiles.map(item => {
      if (item.File.name === file.name) {
        return { ...item, source: managedUpload };
      }
      return item;
    }));
  
    managedUpload.on('httpUploadProgress', (progressEvent) => {
      onUploadProgress(progressEvent, file, managedUpload);
    });
  
    try {
      const result = await managedUpload.promise();
      return result;
    } catch (error) {
      throw error;
    }
  }, []);

  const cancelUpload = (file: File) => {
    setFilesToUpload(files => {
      const currentFile = files.find(f => f.File.name === file.name);
      if (currentFile && currentFile.source) {
        currentFile.source.abort();
      }
      return files.filter(f => f.File.name !== file.name);
    });
  };

  const removeFile = (file: File) => {
    setFilesToUpload(prevFilesToUpload => prevFilesToUpload.filter(f => f.File.name !== file.name));
    setUploadedFiles(prevUploadedFiles => prevUploadedFiles.filter(f => f.name !== file.name));
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFilesToUpload(prevFilesToUpload => [
      ...prevFilesToUpload,
      ...acceptedFiles.map(file => ({
        File: file,
        progress: 0,
        source: null,
      }))
    ]);
  
    try {
      const uploadPromises = acceptedFiles.map(file => uploadFileToS3(file));
      await Promise.all(uploadPromises);
      alert('Todos os arquivos foram enviados com sucesso');
    } catch (error) {
      console.error(error);
    }
  }, [uploadFileToS3]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex flex-col items-center justify-center w-full py-6 border-2 dark:border-neutral-800 border-zinc-200 rounded-lg cursor-pointer dark:bg-neutral-900 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-neutral-800"
        >
          <div className=" text-center">
            <div className=" border p-2 rounded-md max-w-min mx-auto">
              <UploadCloud size={20} />
            </div>

            <p className="mt-2 text-sm text-currentcolor">
              <span className="font-semibold">Arrastar arquivos</span>
            </p>
            <p className="text-xs text-zinc-500">
              Clique para fazer upload de arquivos &#40; os arquivos devem ter menos de 10 MB &#41;
            </p>
          </div>
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
      </div>

      {filesToUpload.length > 0 && (
        <div>
          <ScrollArea className="h-40">
            <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
            </p>
            <div className="space-y-2 pr-3">
              {filesToUpload.map((fileUploadProgress) => {
                return (
                  <div
                    key={fileUploadProgress.File.lastModified}
                    className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2"
                  >
                    <div className="flex items-center flex-1 p-2">
                      <div className="text-white">
                        {getFileIconAndColor(fileUploadProgress.File).icon}
                      </div>

                      <div className="w-full ml-2 space-y-1">
                        <div className="text-sm flex justify-between">
                          <p className="text-muted-foreground ">
                            {fileUploadProgress.File.name.slice(0, 25)}
                          </p>
                          <span className="text-xs">
                            {fileUploadProgress.progress}%
                          </span>
                        </div>
                        <ProgressBar
                          progress={fileUploadProgress.progress}
                          className={
                            getFileIconAndColor(fileUploadProgress.File).color
                          }
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (fileUploadProgress.source) {
                          fileUploadProgress.source.abort();
                          removeFile(fileUploadProgress.File);
                        }
                      }}
                      className="dark:bg-zinc-800 bg-zinc-200 text-white transition-all items-center justify-center cursor-pointer px-2 hidden group-hover:flex"
                    >
                      <X size={20} />
                    </button>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div>
          <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
          </p>
          <div className="space-y-2 pr-3">
            {uploadedFiles.map((file) => {
              return (
                <div
                  key={file.lastModified}
                  className="flex justify-between gap-2 rounded-lg overflow-hidden border border-slate-100 group hover:pr-0 pr-2 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center flex-1 p-2">
                    <div className="text-white">
                      {getFileIconAndColor(file).icon}
                    </div>
                    <div className="w-full ml-2 space-y-1">
                      <div className="text-sm flex justify-between">
                        <p className="text-muted-foreground ">
                          {file.name.slice(0, 25)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(file)}
                    className="bg-zinc-500 text-white transition-all items-center justify-center px-2 hidden group-hover:flex"
                  >
                    <X size={20} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}