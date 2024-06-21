import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Rocket, Terminal } from "lucide-react"

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <div className="isolate mx-auto mt-4 mb-10 grid min-w-[840px] grid-cols-1
     gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-1 ">
        <Alert className="bg-neutral-100 dark:bg-neutral-900">
          <Rocket className="h-4 w-4" />
          <AlertTitle className="font-bold">Em breve estará disponível!</AlertTitle>
          <AlertDescription className="text-neutral-500">
            Estamos trabalhando em uma nova ferramenta que permite você criar fluxos de conversa e conexão via Webhook.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

export default ComingSoon
