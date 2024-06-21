import { Archive, ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, Ban, ShieldCheck } from "lucide-react"

export const mails = [
  {
    id: 0,
    name: "Matheus Braga",
    cleo: true,
    avatar: "https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+%C3%A0(s)+16.04.19_0e0cf0ae.jpg",
    email: "matheusbr722@gmail.com",
    phone: "+5562985095500",
    document: "123.456.789-00",
    subject: "Compra de um produto",
    text: "Pode sim! Fico no aguardo!",
    date: "2024-04-16T07:30:00",
    read: false,
    manager: false,
    archive: false,
    report: false,
    managerResponse: "Segue o link de pagamento: https://vistune.ai/products/camisa-black",
    channel: "whatsapp",
    labels: ["Interesse", "Camisa Black", "Novo usuário"],
    status: "ativa",
    orderCode: "1092",
    orderDate: "2024-04-18T09:00:00",
    orderLink: "https://www.mellowcogumelos.com.br/72197406993/orders/5abc934e69e7c6f93371ab4e00e2bca7",
    orderStatus: "Pagamento realizado",
    orderPayment: "Feito por PIX",
    orderValue: "R$ 339.90",
    trackingMap: "https://linketrack.com/track/?tk=029b79119a21bd0f3ff59e1d9841e1c89417c1b74558ba8b86b5e691b6e274d0&codigo=DQ844256488BR",
    trackingShipping: "Envio pelos Correios",
    trackingStatus: "Encaminhado para o Centro de Distribuição - Água Santa",
    trackingCode: "aa",
    productInterest: "",
    address: "",
    messages: [
      {
        id: 1,
        type: "text",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'Opa, boa tarde',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 2,
        type: "text",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'Queria saber sobre uma camiseta que vi no anúncio. É uma preta com detalhes em branco, poderia me passar mais detalhes e o valor por favor?',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 3,
        type: "audio",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/example-audio.mp3',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 4,
        type: "video",
        avatar: '/vistune-perfil.png',
        name: 'Jakob Hoeg',
        phone: '+5562985095500',
        message: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/example-video.mp4',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 5,
        type: "image",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/foto-perfil2.png',
        date: "2024-04-21T16:40:00"
      },
      // {
      //   id: 6,
      //   type: "pdf",
      //   avatar: '/vistune-perfil.png',
      //   name: 'Jakob Hoeg',
      //   phone: '+5562985095500',
      //   message: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/pitch.pdf',
      //   date: "2024-04-21T16:40:00"
      // },
      {
        id: 7,
        type: "text",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'Legal, e vocês aceitam pix?',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 8,
        type: "text",
        avatar: '/vistune-perfil.png',
        name: 'Jakob Hoeg',
        phone: '+5562985095500',
        message: 'Sim aceitamos! Posso mandar o código do pix por aqui?',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 9,
        type: "text",
        avatar: 'https://vtn-archive-training.s3.sa-east-1.amazonaws.com/files-admin/Imagem+do+WhatsApp+de+2024-04-01+à(s)+16.04.19_0e0cf0ae.jpg',
        name: 'Matheus Braga',
        phone: '+5562985095500',
        message: 'Pode sim! Fico no aguardo!',
        date: "2024-04-21T16:40:00"
      }
    ]
  },
  {
    id: 1,
    name: "Cleyton Pereira",
    cleo: false,
    avatar: "https://pbs.twimg.com/media/GFatiCPWEAA4iqt.jpg",
    email: "marialves@gmail.com",
    phone: "+5562985157850",
    document: "",
    subject: "Sobre um pedido",
    text: "Olá Boa tarde",
    date: "2023-10-22T09:00:00",
    read: true,
    manager: false,
    archive: false,
    report: false,
    managerResponse: "Segue o link de pagamento: https://vistune.ai/products/camisa-black",
    channel: "telegram",
    labels: ["Pedido", "Gerente"],
    status: "ativa",
    orderCode: "",
    orderDate: "",
    orderLink: "",
    orderStatus: "",
    orderPayment: "",
    orderValue: "",
    trackingMap: "",
    trackingShipping: "",
    trackingStatus: "",
    trackingCode: "",
    productInterest: "",
    address: "",
    messages: [
      {
        id: 1,
        type: "text",
        avatar: 'https://pbs.twimg.com/media/GFatiCPWEAA4iqt.jpg',
        name: 'Cleyton Pereira',
        phone: "+5562985157850",
        message: 'Olá Boa tarde',
        date: "2024-04-21T16:40:00"
      },
      {
        id: 2,
        type: "text",
        avatar: '/vistune-perfil.png',
        name: 'Jakob Hoeg',
        phone: "+5562985157850",
        message: 'Como posso ajudar?',
        date: "2024-04-21T16:40:00"
      }
    ]
  },
  {
    id: 2,
    name: "Maria Luisa",
    cleo: false,
    avatar: "",
    email: "marialves@gmail.com",
    phone: "+5562985157850",
    document: "",
    subject: "Sobre um pedido",
    text: "Fala meu parceiro",
    date: "2023-10-22T09:00:00",
    read: false,
    manager: true,
    archive: true,
    report: false,
    managerResponse: "Segue o link de pagamento: https://vistune.ai/products/camisa-black",
    channel: "instagram",
    labels: ["Pedido", "Gerente"],
    status: "ativa",
    orderCode: "",
    orderDate: "",
    orderLink: "",
    orderStatus: "",
    orderPayment: "",
    orderValue: "",
    trackingMap: "",
    trackingShipping: "",
    trackingStatus: "",
    trackingCode: "",
    productInterest: "",
    address: "",
    messages: [
      {
        id: 1,
        type: "text",
        avatar: '',
        name: 'Maria Luisa',
        phone: "+5562985157850",
        message: 'Fala meu parceiro',
        date: "2024-04-16T12:32:00",
      },
      {
        id: 2,
        type: "text",
        avatar: '/vistune-perfil.png',
        name: 'Jakob Hoeg',
        phone: "+5562985157850",
        message: 'Opa, tudo bem?',
        date: "2024-04-16T09:11:00",
      }
    ]
  },
  {
    id: 3,
    name: "",
    cleo: false,
    avatar: "/default-2.png",
    email: "marialves@gmail.com",
    phone: "+5562985157850",
    document: "",
    subject: "Sobre um pedido",
    text: "Fala meu parceiro",
    date: "2023-10-22T09:00:00",
    read: true,
    manager: true,
    archive: false,
    report: true,
    channel: "gmail",
    managerResponse: "Segue o link de pagamento: https://vistune.ai/products/camisa-black",
    labels: ["Pedido", "Gerente"],
    status: "ativa",
    orderCode: "",
    orderDate: "",
    orderLink: "",
    orderStatus: "",
    orderPayment: "",
    orderValue: "",
    trackingMap: "",
    trackingShipping: "",
    trackingStatus: "",
    trackingCode: "",
    productInterest: "",
    address: "",
    messages: [
      {
        id: 1,
        type: "text",
        avatar: '/default-2.png',
        name: '',
        phone: "+5562985157850",
        message: 'Fala meu parceiro',
        date: "2024-04-16T12:32:00",
      },
      {
        id: 2,
        type: "text",
        avatar: '/vistune-perfil.png',
        name: 'Jakob Hoeg',
        phone: "+5562985157850",
        message: 'Opa, tudo bem?',
        date: "2024-04-16T09:11:00",
      }
    ]
  }
]

export type Mail = (typeof mails)[number]

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
]

export type Contact = (typeof contacts)[number]

export type UserData = (typeof mails)[number];

export const loggedInUserData = {
  id: 5,
  avatar: '/vistune-perfil.png',
  name: 'Jakob Hoeg',
};

export type LoggedInUserData = (typeof loggedInUserData);

export interface Message {
  id: number;
  avatar: string;
  name: string;
  phone: string;
  message: string;
  type: string;
  date: string;
}

export interface User {
  id: number;
  avatar: string;
  messages: Message[];
  name: string;
}

export const status = [
  {
    label: "Enviado ao Gerente",
    value: "Gerente",
    icon: ShieldCheck,
  },
  {
    label: "Atendimento Humano",
    value: "Pausados",
    icon: Ban,
  },
  {
    label: "Arquivados",
    value: "Arquivados",
    icon: Archive,
  },
]