import { AspectRatio } from "@/components/ui/aspect-ratio"
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
import SelectStatus from "./selectStatus"
import { capitalizeFirstLetter } from "@/lib/utils"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

type Props = {
  name: string
  description: string
  id: string
  status: boolean | null
  updatedAt: Date
}

const CardModels = ({ description, id, name, status, updatedAt }: Props) => {
  const timeSinceUpdated = formatDistanceToNow(updatedAt, { addSuffix: true, locale: ptBR });

  return (
    <div className="isolate mx-auto mt-4 mb-10 grid min-w-[840px] grid-cols-1 
     gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1 ">
      <Card className="flex flex-row dark:bg-neutral-900 bg-zinc-100">
        <div className="flex-1">
          <CardHeader className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <CardTitle>
                {capitalizeFirstLetter(name == "custom" ? "Personalizado" : name)}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="w-96" >
              {description}
            </CardDescription>
            <Card className="w-full bg-transparent border-hidden">
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <SelectStatus status={status} />
                    <div className="flex flex-col space-y-1.5 mt-3">
                      <Label htmlFor="name">Última Alteração</Label>
                      <Input id="name" disabled={true} value={timeSinceUpdated} className="bg-transparent" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </CardContent>
          <Link href={`/workflows/editor/${id}`}>
            <CardFooter>
              <Button disabled={false} variant="gooeyLeft" className="w-full">
                Editar {name == "cleo" ? "a Cleo" : name == "vision" ? "o Vision" : "o Personalizado"}
              </Button>
            </CardFooter>
          </Link>
        </div>
        <div className="flex-1">
          <AspectRatio ratio={4 / 4} className="bg-transparent hidden  
            lg:block">
            <Image
              src={name == 'cleo' ? "/cleo-list-models.png" : name == 'vision' ? "/vision-list-models.png" : "/custom-list-models.png"}
              alt="models-list"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </Card >
    </div >
  )
}

export default CardModels;
