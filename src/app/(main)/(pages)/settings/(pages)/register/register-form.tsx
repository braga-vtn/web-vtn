"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import { formatCpfCnpj } from "@/components/global/format-document"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { ptBR } from "date-fns/locale"
import { PhoneInput } from "@/components/ui/phone-input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import React, { useEffect, useState } from "react"
import CountryDropdown from "@/components/global/countries"
import StateDropdown from "@/components/global/states"
import { Textarea } from "@/components/ui/textarea"
import { TimePickerStartMonday } from "./_components/monday"
import { TimePickerStartTuesday } from "./_components/tuesday"
import { TimePickerStartWednesday } from "./_components/wednesday"
import { TimePickerStartThursday } from "./_components/thursday"
import { TimePickerStartFriday } from "./_components/friday"
import { TimePickerStartSaturday } from "./_components/saturday"
import { TimePickerStartSunday } from "./_components/sunday"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SelectMarketplace } from "./_components/select-marketplace"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { DateRange } from "react-day-picker"

const registerFormSchema = z.object({
  companyname: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    })
    .min(2, {
      message: "companyname must be at least 2 characters.",
    })
    .max(30, {
      message: "companyname must not be longer than 30 characters.",
    }),
  description: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    }),
  sector: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    })
    .min(2, {
      message: "companyname must be at least 2 characters.",
    })
    .max(30, {
      message: "companyname must not be longer than 30 characters.",
    }),
  domain: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    })
    .min(2, {
      message: "companyname must be at least 2 characters.",
    })
    .max(30, {
      message: "companyname must not be longer than 30 characters.",
    }),
  address: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    }).optional(),
  phone: z
    .string({
      required_error: 'Nome do negócio é obrigatório.',
    })
    .min(8, {
      message: "companyname must be at least 2 characters.",
    })
    .max(20, {
      message: "companyname must not be longer than 30 characters.",
    }),
  cpfCnpj: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório.',
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length >= 11;
    }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length <= 14;
    }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return !!Number(replacedDoc);
    }, 'CPF/CNPJ deve conter apenas números.'),
  dob: z.date({
    required_error: "A data de Fundação é obrigatória.",
  }),
})

type registerFormValues = z.infer<typeof registerFormSchema>

const simulationData = {
  nameCompany: 'Vistune', //user company name
  documentCompany: '12345678000120', //user identification document
  servicePhoneCompany: "5562987654321", //company contact phone number
  foundationCompany: "03-09-2024", //company founding date
  domainCompany: "https://vistune.ai", //company domain
  descriptionCompany: "Na vanguarda da inovação empresarial está a Vistune. Uma Inteligência Artificial autônoma, elevando com excelência e profissionalismo sua empresa para o ápice global.", //short company description
  countryCompany: "brasil", //company country
  stateCompany: "goiás", //company country
  addressCompany: "Av. Rio de Janeiro, Qd 10A, Lt 219, n°49 - Goiânia - Goiás", //company address
}

export function RegisterForm() {
  const form = useForm<registerFormValues>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
    defaultValues: {
      companyname: simulationData.nameCompany,
      description: simulationData.descriptionCompany,
      sector: '', // Populate as needed
      domain: simulationData.domainCompany,
      address: simulationData.addressCompany,
      phone: simulationData.servicePhoneCompany,
      cpfCnpj: simulationData.documentCompany,
      dob: new Date(simulationData.foundationCompany),
    }
  })

  function onSubmit(data: registerFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const foundationDate = new Date(simulationData.foundationCompany);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="companyname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Negócio</FormLabel>
                <FormControl>
                  <Input defaultValue={simulationData.nameCompany} {...field} />
                </FormControl>
                <FormDescription>
                  Nossos modelos irá representar vocês da melhor forma!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpfCnpj"
            render={({ field: { onChange, ...props } }) => (
              <FormItem>
                <FormLabel>CPF ou CNPJ</FormLabel>
                <FormControl>
                  <Input
                    maxLength={18}
                    defaultValue={formatCpfCnpj(simulationData.documentCompany)}
                    onChange={(e) => {
                      const { value } = e.target;
                      e.target.value = formatCpfCnpj(value);
                      onChange(e);
                    }}
                    {...props}
                  />
                </FormControl>
                <FormDescription>
                  Todos os dados informados são armazenados com o máximo sigilo!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone de Atendimento</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="BR"
                    defaultValue={simulationData.servicePhoneCompany}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  O telefone de atendimento ao cliente, deixe em branco caso não tenha.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de Fundação</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"gooeyLeft2"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal border",
                          !field.value && !foundationDate && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : ((
                          format(foundationDate, "PPP", { locale: ptBR })
                        )
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value || foundationDate}
                      locale={ptBR}
                      defaultMonth={foundationDate}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Conte para nós desde quando o seu negócio está no mercado.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Site</FormLabel>
                <FormControl>
                  <Input defaultValue={simulationData.domainCompany} {...field} />
                </FormControl>
                <FormDescription>
                  O seu site será lido por nossos modelos.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do Negócio</FormLabel>
                <FormControl>
                  <Textarea defaultValue={simulationData.descriptionCompany} placeholder="Digite aqui..." {...field} />
                </FormControl>
                <FormDescription>
                  Forneça uma descrição sucinta e clara do seu negócio para que os nossos modelos entenda mais sobre sua atuação.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Card className="w-full bg-neutral-100 dark:bg-neutral-900">
            <CardHeader>
              <CardTitle>Localização</CardTitle>
              <CardDescription>Informe a região e o endereço do seu negócio</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="companyname"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <div className="flex">
                      <div>
                        <CountryDropdown defaultCountry={simulationData.countryCompany} />
                      </div>
                      <div>
                        <StateDropdown defaultCountry={simulationData.countryCompany} defaultState={simulationData.stateCompany}  />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço Completo</FormLabel>
                    <FormControl>
                      <Input defaultValue={simulationData.addressCompany} placeholder="Av. Rio de Janeiro, Qd 10A, Lt 219, n°49 - Goiânia - Goiás" {...field} />
                    </FormControl>
                    <FormDescription>
                      Caso não tenha local físico você pode deixar em branco. Nossos modelos irão orientar seus clientes
                      sobre a localização de acordo com essas informações!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Button variant={"gooeyLeft"} type="submit">Atualizar Cadastro</Button>
        </form>
      </Form>
    </div>
  )
}
