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
import { Box, Brain, Calendar, Copy, Cylinder, Info, PenLine, Pyramid, TestTube2 } from "lucide-react"

export function HoverTrainingId() {
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
            <h4 className="text-sm font-semibold">~ ID</h4>
            <p className="text-sm">
              ID é o código de identificação do treinamento.
            </p>
            <div className="flex items-center pt-2">
              <Pyramid className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                O suporte pode pedir o ID
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingName() {
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
            <h4 className="text-sm font-semibold">~ Nome</h4>
            <p className="text-sm">
              O nome desse treinamento
            </p>
            <div className="flex items-center pt-2">
              <PenLine className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Definido no momento do treinamento
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingParameters() {
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
            <h4 className="text-sm font-semibold">~ Parâmetros</h4>
            <p className="text-sm">
              Conjunto relevante de vetores do treinamento
            </p>
            <div className="flex items-center pt-2">
              <TestTube2 className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Existem milhões de vetores em cada parâmetro
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingUtilization() {
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
            <h4 className="text-sm font-semibold">~ Utilizados</h4>
            <p className="text-sm">
              Total de vezes que o modelo utilizou esse treinamento
            </p>
            <div className="flex items-center pt-2">
              <Cylinder className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Atualizado a cada pergunta
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingSimilarity() {
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
            <h4 className="text-sm font-semibold">~ Similiaridade</h4>
            <p className="text-sm">
              Define a qualidade do treinamento baseado nas perguntas
            </p>
            <div className="flex items-center pt-2">
              <Copy className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Varia de 0 a 1, acima de 0.7 é bom
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingType() {
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
            <h4 className="text-sm font-semibold">~ Tipo</h4>
            <p className="text-sm">
              Define qual o tipo do treinamento realizado
            </p>
            <div className="flex items-center pt-2">
              <Box className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Temos: texto, arquivo, vídeo, url e áudio
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingModel() {
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
            <h4 className="text-sm font-semibold">~ modelo</h4>
            <p className="text-sm">
              Informa qual modelo utiliza o treinamento selecionado
            </p>
            <div className="flex items-center pt-2">
              <Brain className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Selecionado no momento do treinamento
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function HoverTrainingDate() {
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
            <h4 className="text-sm font-semibold">~ Data e Hora</h4>
            <p className="text-sm">
              Momento em que foi realizado o treinamento
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                A data não pode ser alterada
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}