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
import { Input } from "@/components/ui/input"
import { Plus, X } from "lucide-react"
import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { ReactHookFormDemo } from "@/components/global/upload-file-training"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tag, TagInput } from 'emblor';
import { z } from "zod"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast as useToast } from "@/components/ui/use-toast"
import { useUploadFile } from "@/hooks/use-upload-file"
import { FileUploader } from "@/components/global/file-uploader"
import { UploadedFilesCard } from "@/components/global/uploaded-files-card"
import { toast } from "sonner"
import { getErrorMessage } from "@/lib/handle-error"
import { v4 as uuidv4 } from "uuid"
import { FileUploaderTraining } from "@/components/global/file-uploader-training"

interface TrainingData {
    id: string;
    title: string;
    model: string;
    url: string;
    date: string;
    type: string;
    similarity: number;
    utilization: number;
    parameters: number;
}

interface AddNewTrainingProps {
    addTraining: (newTraining: TrainingData) => void;
}

const profileFormSchema = z.object({
    username: z
        .string()
        .min(5, {
            message: "O nome do treinamento deve ter pelo menos 05 caracteres.",
        })
        .max(20, {
            message: "O nome do treinamento deve ter no máximo 30 caracteres.",
        }),
    longText: z
        .string()
        .min(100, {
            message: "O treinamento por texto deve ter pelo menos 100 caracteres.",
        })
        .max(1000, {
            message: "O treinamento por texto deve ter no máximo 1000 caracteres.",
        }).optional(),
    model: z
        .string({
            required_error: "Selecione uma opção.",
        }),
    exampleQuestion: z
        .string()
        .min(30, {
            message: "O exemplo de pergunta deve conter pelo menos 30 caracteres.",
        })
        .max(85, {
            message: "O exemplo de pergunta deve conter no máximo 85 caracteres.",
        }).optional(),
    file: z
        .string({
            required_error: "Please select a file to upload.",
        }).optional(),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        ).optional(),
    topics: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        }),
    ).optional(),
    images: z.array(z.instanceof(File)),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function AddNewTraining({ addTraining }: AddNewTrainingProps) {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            images: [],
        },
    })

    const { uploadFiles, progresses, uploadedFiles, isUploading, clearUploadedFiles } = useUploadFile(
        "fileUploader",
        { defaultUploadedFiles: [] }
    )
    const [itemName, setItemName] = useState("");
    const { setValue } = form;
    const [textTraining, setTextTraining] = useState('');
    const [urlTraining, setUrlTraining] = useState('');
    const [fileTraining, setFileTraining] = useState<File[]>([]);
    const [loading, setLoading] = useState(false)
    const [selectedModel, setSelectedModel] = useState('');
    const [tags, setTags] = useState<Tag[]>([]);
    const [isDialogOpen, setDialogOpen] = useState(false);

    const { fields, append, remove } = useFieldArray({
        name: "urls",
        control: form.control,
    })

    function onSubmit(data: ProfileFormValues) {
        setItemName('')
        setTextTraining('')
        setUrlTraining('')
        setSelectedModel('')
        setTags([])
        setLoading(true)

        if (data.images.length > 0) {
            toast.promise(uploadFiles(data.images), {
                loading: "Fazendo upload do treinamento...",
                success: () => {
                    form.reset()
                    setLoading(false)
                    return "Treinamento Iniciado"
                },
                error: (err) => {
                    setLoading(false)
                    return getErrorMessage(err)
                },
            })
        }

        const newId = `id_${uuidv4()}`;
        const typeTraining = (
            data.longText ? 
                ((data.urls && data.urls.length > 0) || data.images) ? 'group' :
                'text' :
                (data.urls && data.urls.length > 0) ? 
                (data.images) ? 'group' :
                'url' : 'file'
        );

        const newTraining = {
            id: String(newId),
            title: data.username,
            model: data.model,
            url: (data.urls && data.urls.length > 0) ? data.urls[0].value : '',
            date: new Date().toISOString(),
            type: typeTraining,
            similarity: 0.0,
            utilization: 0.0,
            parameters: 0
        };

        addTraining(newTraining);
        form.reset();
        setDialogOpen(false);
    }

    useEffect(() => {
        if (isDialogOpen) {
            form.reset();
            clearUploadedFiles();
        }
    }, [isDialogOpen, clearUploadedFiles, form]);

    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button variant={"gooeyLeft"} size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px] h-[83vh]">
                <ScrollArea className="h-full w-full my-4">
                    <div className="sm:max-w-[650px]">
                        <DialogHeader className="text-start">
                            <DialogTitle>
                                Novo Treinamento
                            </DialogTitle>
                            <DialogDescription>
                                Adicione textos e arquivos ao conhecimento dos modelos da Vistune!
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="flex w-full items-center gap-3 mt-5">
                                    <div className="flex-1">
                                        <FormField
                                            control={form.control}
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Nome
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field}
                                                            onChange={(event) => {
                                                                const value = event.target.value;
                                                                setItemName(event.target.value);
                                                                field.onChange(value);
                                                            }}
                                                            id="name" maxLength={20} value={itemName} className="w-full" />
                                                    </FormControl>
                                                    <FormDescription>
                                                        Uma forma de identificação desse novo treinamento.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <FormField
                                            control={form.control}
                                            name="model"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Modelo</FormLabel>
                                                    <Select
                                                        onValueChange={(value) => {
                                                            setSelectedModel(value);
                                                            field.onChange(value);
                                                        }}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecione o modelo" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="all models">Todos os modelos</SelectItem>
                                                            <SelectItem value="cleo">Cleo</SelectItem>
                                                            <SelectItem value="vision">Vision</SelectItem>
                                                            <SelectItem value="my models">Meus Modelos</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormDescription>
                                                        Escolha o modelo que será afetado com esse novo ensinamento.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="exampleQuestion"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col items-start">
                                            <div className="flex items-center space-x-2">
                                                <Label id="example-question" className="font-semibold">Exemplo de Pergunta</Label>
                                                <Label id="example-question" className="dark:text-zinc-700 text-zinc-300">opcional</Label>
                                            </div>
                                            <FormControl>
                                                <TagInput
                                                    {...field}
                                                    tags={tags}
                                                    minLength={30}
                                                    maxLength={85}
                                                    maxTags={4}
                                                    setTags={(newTags) => {
                                                        setTags(newTags);
                                                        setValue('topics', newTags as [Tag, ...Tag[]]);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Ideal para mostrar aos modelos exemplos reais de perguntas sobre
                                                o assunto desse treinamento.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Separator className="mt-2 mb-4" />
                                <FormField
                                    control={form.control}
                                    name="images"
                                    render={({ field }) => (
                                        <div className="space-y-6">
                                            <FormItem>
                                                <div className="flex items-center space-x-2">
                                                    <Label id="example-question" className="font-semibold">Arquivos</Label>
                                                    <Label id="example-question" className="dark:text-zinc-700 text-zinc-300">opcional</Label>
                                                </div>
                                                <FormControl>
                                                    <div className="mb-4 mt-1">
                                                        <FileUploaderTraining
                                                            value={field.value}
                                                            onValueChange={(newFiles) => {
                                                                const validFiles = Array.isArray(newFiles) ? newFiles : [];
                                                                field.onChange(validFiles);
                                                                setFileTraining(validFiles);
                                                            }}
                                                            maxFiles={5}
                                                            maxSize={5 * 1024 * 1024}
                                                            progresses={progresses}
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
                                <FormField
                                    control={form.control}
                                    name="longText"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center space-x-2">
                                                <Label className="font-semibold">Textos</Label>
                                                <Label className="dark:text-zinc-700 text-zinc-300">opcional</Label>
                                            </div>
                                            <FormDescription>
                                                Uma excelente forma de treinamento é por texto. Cole abaixo o que for interessante!
                                            </FormDescription>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    value={textTraining}
                                                    onChange={(event) => {
                                                        const value = event.target.value;
                                                        setTextTraining(value);
                                                        field.onChange(value);
                                                    }}
                                                    minLength={100}
                                                    maxLength={5000}
                                                    rows={5}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <FormLabel>
                                            Urls
                                            <Label id="example-question" className="dark:text-zinc-700 text-zinc-300 ml-2">opcional</Label>
                                        </FormLabel>
                                    </div>
                                    <FormDescription>
                                        Os modelos da Vistune conseguem ler todo site público. Também pode navegar por todas as páginas se selecionar a opção a baixo!
                                    </FormDescription>
                                    {fields.map((field, index) => (
                                        <FormField
                                            control={form.control}
                                            key={field.id}
                                            name={`urls.${index}.value`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex justify-between items-center my-2">
                                                        <FormControl>
                                                            <Input className="w-full"
                                                                {...field}
                                                                onChange={(event) => {
                                                                    const value = event.target.value;
                                                                    setUrlTraining(value);
                                                                    field.onChange(value);
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <Button
                                                            className="ml-2"
                                                            size="icon"
                                                            variant="gooeyLeftDark"
                                                            onClick={() => remove(index)}>
                                                            <X className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                    <Button
                                        type="button"
                                        variant="gooeyLeftDark"
                                        size="sm"
                                        className="mt-2"
                                        onClick={() => append({ value: "" })}
                                    >
                                        Adicionar Url
                                    </Button>
                                </div>
                                <DialogFooter>
                                    <Button
                                    variant={"gooeyLeft"}
                                        disabled={!itemName || !selectedModel || (textTraining.length <= 100 && !urlTraining.includes('https://') && fileTraining.length < 1)}
                                        type="submit"
                                        className="w-full mb-5"
                                    >
                                        Enviar Treinamento
                                    </Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog >
    )
}