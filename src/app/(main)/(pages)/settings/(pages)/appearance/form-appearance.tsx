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
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "next-themes"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { CheckIcon } from "lucide-react"
import DialogAvatar from "../../components/dialog-avatar"
import { Skeleton } from "@/components/ui/skeleton"

const languages = [
  { label: "Português", value: "pt" },
  { label: "Inglês", value: "en" },
  { label: "Espanhol", value: "es" },
] as const

const profileFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


export function AppearanceForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const { setTheme } = useTheme()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Idioma</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? languages.find(
                          (language) => language.value === field.value
                        )?.label
                        : "Selecione o Idioma"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue("language", language.value)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Este é o idioma que será usado no plataforma.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Tema</FormLabel>
              <FormDescription>
                Selecione o tema para a plataforma.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary" onClick={() => setTheme('light')}>
                    <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm p-2  bg-neutral-200">
                        <div className="space-y-2 rounded-md bg-neutral-100 p-2 shadow-sm">
                          <Skeleton className="h-2 w-[80px] rounded-lg bg-neutral-300" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-300" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 shadow-sm">
                          <Skeleton className="h-4 w-4 rounded-full bg-neutral-300" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-300" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-neutral-100 p-2 shadow-sm">
                          <Skeleton className="h-4 w-4 rounded-full bg-neutral-300" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-300" />
                        </div>
                      </div>
                    </div>
                    <div className="block w-full p-2 text-center font-normal">
                      Claro
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary" onClick={() => setTheme('dark')}>
                    <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm p-2  bg-neutral-900">
                        <div className="space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                          <Skeleton className="h-2 w-[80px] rounded-lg bg-neutral-400" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                          <Skeleton className="h-4 w-4 rounded-full bg-neutral-400" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                          <Skeleton className="h-4 w-4 rounded-full bg-neutral-400" />
                          <Skeleton className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                        </div>
                      </div>
                    </div>
                    <div className="block w-full p-2 text-center font-normal">
                      Escuro
                    </div>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
