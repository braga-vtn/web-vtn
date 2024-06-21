import { Separator } from "@/components/ui/separator"
import { TokenRevealed } from "./token-revealed"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="text-lg font-medium">Token de API</h3>
        <p className="text-sm text-muted-foreground">
          Acesse nossos endpoints da API, saiba mais da <a
            className="text-[#6600FF] font-bold after:content-['_↗'] ..."
            href="https://docs.vistune.ai" target="_blank">Vistune Tools</a>
        </p>
      </div>
      <Separator />
      <TokenRevealed />
    </div>
  )
}
