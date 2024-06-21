import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function CardNodes() {
  return (
    <div className="isolate mx-auto mt-4 mb-10 grid min-w-[840px] grid-cols-1
     gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1 ">
      <Card className="flex flex-row dark:bg-neutral-900 bg-zinc-100">
        <div className="flex-1">
          <CardHeader>
            <CardTitle>
              Nodes
            </CardTitle>
            <Badge className="w-[122px]">
              Plano Enterprise
            </Badge>
            <CardDescription>
              Nodes é ideal para quem busca excelência! Organize ideias e
              tarefas de modo rápido e prático com IA.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className="w-full bg-transparent">
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5 mt-3">
                      <Label htmlFor="name">Versão</Label>
                      <Input id="name" disabled={true} value='1.0.0'
                        className="bg-transparent" />
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-3">
                      <Label htmlFor="name">Lançamento</Label>
                      <Input id="name" disabled={true} value='2° Semestre, 2025'
                        className="bg-transparent" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            <Button disabled={false} variant="gooeyLeft" className="w-full">
            Indisponível
            </Button>
          </CardFooter>
        </div>
        <div className="flex-1">
          <CardHeader>
            <AspectRatio ratio={4 / 4} className="bg-transparent hidden 
            lg:block">
              <Image
                src="/logo-nodes.png"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </CardHeader>
        </div>
      </Card>
    </div>
  )
}