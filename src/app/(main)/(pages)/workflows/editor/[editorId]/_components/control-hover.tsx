import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

export function HoverNameResponse() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              A Cleo pode informar o nome no início de todas suas respostas. Isso é indicado para atendimentos em massa ou rotativo!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Somente em respostas de texto.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverCancelCall() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Nosso modelo pode cancelar ligações automaticamente e não só isso, ao cancelar a ligação, a Cleo entra em contato com o usuário!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                A Cleo cancela até 3 ligações, depois tranfere o atendimento ao Humano.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverConfirmReading() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Confirmar a leitura de uma mensagem é mesmo que visualizar a conversa. Isso faz com que o usuário veja quando uma mensagem é lida!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Indicamos deixar essa opção ativada.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverPinMessages() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Algumas mensagens importantes podem ser fixadas pela Cleo para o usuário acessar facilmente.
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Sobre pedidos ou produtos por exemplo.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverShowOnline() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Se ativo, o usuário irá visualizar que sempre está online no Whatsapp.
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Ative apenas se for necessário.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverAssistantName() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Cleo pode ser chamada pelo nome que você preferir. Por favor, informe qual nome deseja utilizar!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                O nome serve para todos os canais!
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverModel() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              A principal diferença está na capacidade de processamento: em média, a vtn-pro possui um potencial 10x maior!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                A vtn-basic consome 1 interação, enquanto a vtn-pro consome 2.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverResponseTime() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              O tempo de resposta pode influenciar tanto a naturalidade do atendimento quanto a precisão das respostas.
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Recomendamos utilizar a partir de 45s.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverMainGoal() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="invisible" size="icon2">
          <Info className="h-3 w-3" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 absolute left-full top-0 ml-2">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm">
              Você pode definir qual será o objetivo da Cleo. A partir disso, ela conduzirá a conversa sempre com o intuito de alcançar esse objetivo!
            </p>
            <div className="flex items-center pt-2">
              <Info className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Ela continuará realizando todas as outras funções.
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}