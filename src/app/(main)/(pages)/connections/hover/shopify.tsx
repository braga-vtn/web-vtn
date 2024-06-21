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
import { Check, Info, KeyRound, Link, PanelTop, ShoppingBasketIcon } from "lucide-react"

export function HoverDomainCheckout() {
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
            <h4 className="text-sm font-semibold">~ Checkout</h4>
            <p className="text-sm">
              O Checkout é a página de conclusão da compra.
            </p>
            <div className="flex items-center pt-2">
              <PanelTop className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Geralmente, é usado o padrão.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverDomain() {
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
            <h4 className="text-sm font-semibold">~ Domínio</h4>
            <p className="text-sm">
              O domínio da sua loja – nosso modelo irá ler seu site.
            </p>
            <div className="flex items-center pt-2">
              <Check className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                O treinamento do site é automático!
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverDomainShopify() {
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
            <h4 className="text-sm font-semibold">~ Domínio da Shopify</h4>
            <p className="text-sm">
              Ele pode ser encontrado em configurações lá na Shopify
            </p>
            <div className="flex items-center pt-2">
              <Link className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Geramente com ".myshopify.com"
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTokenShopify() {
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
            <h4 className="text-sm font-semibold">~ Token da API</h4>
            <p className="text-sm">
              O token do App criado - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Sempre inicia com "shpat_"
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverApiKeyShopify() {
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
            <h4 className="text-sm font-semibold">~ Chave da API</h4>
            <p className="text-sm">
              A Chave API do App criado - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Exclusivo do App criado
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverSecretKeyShopify() {
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
            <h4 className="text-sm font-semibold">~ Chave da Secreta</h4>
            <p className="text-sm">
              Chave Secreta do App criado - se tiver dúvidas visite nossa <a className="text-[#6600FF] font-bold text-sm after:content-['_↗'] ..." href="https://docs.vistune.ai" target="_blank">docs</a>
            </p>
            <div className="flex items-center pt-2">
              <KeyRound className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Exclusivo do App criado
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
