"use client"

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import { z, ZodError } from "zod"
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
import { toast } from "@/components/ui/use-toast"
import { PhoneInput } from "@/components/ui/phone-input"
import { CodeGenerateWhatsApp } from "./codeGenerate"
import { useState } from "react"
import { RefreshCcw } from "lucide-react";

const FormSchema = z.object({
  username: z.string().min(6, {
    message: "Preencha corretamente o seu número de WhatsApp!",
  })
})

export function PhoneCode() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  const [loading, setLoading] = useState(false)
  const [showCode, setShowCode] = useState(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true)
    setShowCode(false)

    // Simulando uma requisição ou um processamento
    await new Promise(resolve => setTimeout(resolve, 3000))

    setLoading(false)
    setShowCode(true)

    // Aqui você poderia realmente enviar os dados para algum serviço
    toast({
      title: "Você submeteu os seguintes valores:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      {!showCode && !loading &&
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mt-24">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <PhoneInput defaultCountry="BR" placeholder="(62)9 8509-5501" {...field} />
                </FormControl>
                {!showCode &&
                  <FormDescription>
                    Digite o número que deseja conectar.
                  </FormDescription>
                }
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={'gooeyLeftDark'} type="submit">Gerar código</Button>
        </form>
      }
      <div className="mt-20 place-content-center mt-10">
        {loading && <div className="flex flex-col items-center mt-14">
          <svg
            aria-hidden="true"
            className="inline h-8 w-8 animate-spin fill-[#6600FF] text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        }
        <div className="flex flex-col items-center mt-6">
          {showCode &&
            <FormDescription className="mb-4">
              Digite esse código no seu WhatsApp
            </FormDescription>
          }
          {showCode && <CodeGenerateWhatsApp />}

          {showCode &&
            <Button size="lg" variant="gooeyLeftDark" className="mt-6 text-sm text-muted-foreground" onClick={() => { setLoading(false); setShowCode(false) }}>
              <RefreshCcw  className="h-4 w-4 mr-1"/>
              Novo Código
            </Button>
          }
        </div>
      </div>
    </Form>
  )
}