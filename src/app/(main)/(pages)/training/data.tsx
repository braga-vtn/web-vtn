import { Training } from "@/lib/types";
import { Archive, Ban, ShieldCheck } from "lucide-react";

export const trainingList: Training[] = [

  {
    id: 'id_d2e301b1-405f-4de9-b7ff-f239130d4c40',
    title: 'Sobre pedidos',
    model: 'cleo',
    url: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/training/vtn-training-29-teste-arquivo.txt",
    date: "19/04/2024 21:32",
    type: "text",
    similarity: 0.84,
    utilization: 12,
    parameters: 53
  },
  {
    id: 'id_a00b9ada-42d1-4aab-b13b-bfe017d656f1',
    title: 'Vídeo de apresentação',
    model: 'cleo',
    url: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/training/F0KH2-QEQL7-WGB03-1ZSVG-SJRY7-Vd1+(3)+(2).mp4",
    date: "16/05/2023 00:28",
    type: "video",
    similarity: 0.63,
    utilization: 1940,
    parameters: 51
  },
  {
    id: 'id_fd6345d8-f08b-4b6e-a8f3-33d6c54aa7bd',
    title: 'Políticas da Empresa',
    model: 'vision',
    url: "https://vistune.ai",
    date: "29/03/2024 06:55",
    type: "url",
    similarity: 0.72,
    utilization: 0,
    parameters: 12
  },
  {
    id: 'id_57ec6b9e-3215-4eb2-b46d-c8e391c82d35',
    title: 'Suporte e atendimento',
    model: 'vision',
    url: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/training/example-audio.mp3",
    date: "18/01/2024 18:31",
    type: "audio",
    similarity: 0.45,
    utilization: 523,
    parameters: 6
  },
  {
    id: 'id_768c0186-1748-452a-b26d-315433e5fb23',
    title: 'Sobre garantia',
    model: 'all',
    url: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/training/vtn-training-29-Google+Analytics+2020.pdf",
    date: "25/08/2023 16:47",
    type: "file",
    similarity: 0.46,
    utilization: 412,
    parameters: 64
  },
  {
    id: 'id_759eda19-a77e-4829-8d1a-2004eec3f72b',
    title: 'Site da loja',
    model: 'my models',
    url: "",
    date: "09/04/2024 13:31",
    type: "group",
    similarity: 0.75,
    utilization: 531,
    parameters: 193
  },
]

export const status = [
  {
    label: "Para todos",
    value: "all",
    icon: Archive,
  },
  {
    label: "Cleo",
    value: "cleo",
    icon: ShieldCheck,
  },
  {
    label: "Vision",
    value: "vision",
    icon: Ban,
  },
  {
    label: "Meus modelos",
    value: "my models",
    icon: Archive,
  },
]