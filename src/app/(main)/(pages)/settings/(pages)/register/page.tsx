import { Separator } from "@/components/ui/separator"
import { RegisterForm } from "./register-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Cadastro Inicial</h3>
        <p className="text-sm text-muted-foreground">
          Apresente o seu negócio para os nossos modelos de IA.
        </p>
      </div>
      <Separator />
      <RegisterForm />
    </div>
  )
}
