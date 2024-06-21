import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const tracking = [
  {
    value: "Entregue",
    label: "Entregue",
  },
  {
    value: "A caminho",
    label: "A caminho",
  },
  {
    value: "Cancelado",
    label: "Cancelado",
  },
]

export const codeTracking = [
  {
    value: "BR948028849GO",
    label: "BR948028849GO",
    icon: QuestionMarkCircledIcon,
  }
]

export const status = [
  {
    label: "Pago",
    value: "Pago",
    icon: ArrowDownIcon,
  },
  {
    label: "Pendente",
    value: "Pendente",
    icon: ArrowRightIcon,
  },
  {
    label: "Cancelado",
    value: "Cancelado",
    icon: ArrowUpIcon,
  },
]
