import { ModeAccount } from "@/components/global/mode-toggle"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BookOpen, Info, LogInIcon, Medal, Rocket, Sailboat } from "lucide-react"
import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"

type UserNavProps = {
  avatarUrl: string;
};

const simulationData = {
  nameUser: "Matheus Braga",
  avatarUser: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg', // user avatar
}

export const UserNav = ({ avatarUrl }: UserNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-8 h-8">
          <AvatarImage src={avatarUrl ? avatarUrl : simulationData.avatarUser} />
          <AvatarFallback className="font-bold">{simulationData.nameUser.slice(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Tema</DropdownMenuSubTrigger>
          <ModeAccount />
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Idioma</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                Português
                <DropdownMenuShortcut>
                  <Medal className="h-3.5 w-3.5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Inglês
                <DropdownMenuShortcut>
                  <Rocket className="h-3.5 w-3.5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Espanhol
                <DropdownMenuShortcut>
                  <Sailboat className="h-3.5 w-3.5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <Link href="https://docs.vistune.ai" target="_blank">
          <DropdownMenuItem>
            Suporte
            <DropdownMenuShortcut>
              <Info className="w-4 h-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <Link href="https://docs.vistune.ai" target="_blank">
          <DropdownMenuItem>
            Documentação
            <DropdownMenuShortcut>
              <BookOpen className="w-4 h-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <SignOutButton>
            <span className="flex items-center">
              Sair
              <DropdownMenuShortcut>
                <LogInIcon className="w-4 h-4" />
              </DropdownMenuShortcut>
            </span>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}