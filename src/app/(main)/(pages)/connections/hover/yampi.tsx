import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Info, KeyRound, PanelTop } from "lucide-react"

export function HoverDomainCheckoutYampi() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/vistune-dark-perfil.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">~ Domínio do Checkout</h4>
            <p className="text-sm">
              O domínio do checkout da sua loja integrada a Yampi
            </p>
            <div className="flex items-center pt-2">
              <PanelTop className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Geralmente, inicia com "seguro."
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTokenYampi() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/vistune-dark-perfil.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">~ Chave Secreta</h4>
            <p className="text-sm">
              A Chave Secreta da sua conta - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Sempre inicia com "sk_"
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverApiKeyYampi() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/vistune-dark-perfil.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">~ Alias</h4>
            <p className="text-sm">
              O Alias da conta - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Geralmente o nome da loja
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverSecretKeyYampi() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/vistune-dark-perfil.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">~ Token do Usuário</h4>
            <p className="text-sm">
              O token da sua conta - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Exclusivo da sua conta na Yampi
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
