"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import DialogDeleteAccount from "./components/dialog-delete-account"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components/ui/password-input"
import React, { useState } from "react"
import { UploadAvatar } from "@/components/global/upload-avatar"
import { UploadedFile } from "@/lib/types"
import { useUser } from "@/context/UserContext"

const profileFormSchema = z.object({
  username: z
    .string({ required_error: 'Seu nome é obrigatório.' })
    .min(5, { message: "O nome de usuário deve ter pelo menos 5 caracteres." })
    .max(30, { message: "O nome de usuário não deve ter mais de 30 caracteres." }),
  email: z.string().optional(),
  image: z.string().optional(),
  password: z
    .string({ required_error: 'É obrigatório definir uma senha.' })
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres." }),
  bio: z.string().max(160).min(4),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const simulationData = {
  nameUser: 'Matheus Braga', // user name
  mailUser: 'braga@vistune.ai', // user mail
  passwordAccount: "password", // user password
  avatarUser: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg', // user avatar
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
    defaultValues: {
      username: simulationData.nameUser,
      email: simulationData.mailUser,
      password: simulationData.passwordAccount,
      image: simulationData.avatarUser,
    },
  })

  const [currentPassword, setCurrentPassword] = useState(simulationData.passwordAccount)
  const [currentUploadedFiles, setCurrentUploadedFiles] = useState<UploadedFile[]>([])
  const avatarNow = currentUploadedFiles?.length ? currentUploadedFiles[0].url : simulationData.avatarUser;
  const { setUser } = useUser();
  const [seeAvatar, setSeeAvatar] = useState(currentUploadedFiles?.length ? true : simulationData.avatarUser ? true : false)

  const onSubmit = (data: ProfileFormValues) => {
    setUser({ avatarUrl: avatarNow });
    toast({
      title: "Valores submetidos:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleSubmit = () => {
    setUser({ avatarUrl: avatarNow });
  };

  const handleEditClick = () => {
    setSeeAvatar(false)
  };

  return (
    <div>
      {avatarNow && seeAvatar ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                src={avatarNow}
                alt="User_Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <Button variant="gooeyLeft2" size={"sm"} className="justify-items-center border" onClick={() => {
            handleEditClick();
          }}>
            Mudar Foto
          </Button>
        </div>
      ) : (
        <div className="grid w-full items-center gap-1.5 mb-5">
          <UploadAvatar setUploadedFiles={setCurrentUploadedFiles} />
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seu Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Nossos modelos irão conhecer melhor você!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email da Conta</FormLabel>
                <FormControl>
                  <Input disabled={true} {...field} />
                </FormControl>
                <FormDescription>
                  Não é possível alterar o email da conta. Caso seja necessário, entre em contato com o time de suporte da Vistune para que possamos analisar sua situação!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current_password">Senha Atual</Label>
                    <PasswordInput
                      id="current_password"
                      {...field}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
          variant={"gooeyLeft"}
          onClick={() => {
            handleSubmit();
          }}
            type="submit">Atualizar Perfil</Button>
          <DialogDeleteAccount />
        </form>
      </Form>
    </div>
  )
}