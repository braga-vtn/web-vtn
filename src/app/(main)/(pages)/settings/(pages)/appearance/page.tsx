import { Separator } from "@/components/ui/separator"
import { AppearanceForm } from "./form-appearance"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Aparência</h3>
        <p className="text-sm text-muted-foreground">
          Personalize a plataforma da Vistune.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
