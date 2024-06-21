import Category from '@/components/icons/category'
import Logs from '@/components/icons/logs'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
import { Connection } from './types'
import Training from '@/components/icons/training'
import Chat from '@/components/icons/chat'
import Playground from '@/components/icons/playground'
import IntegrationIcon from '@/components/icons/integrations'
import Library from '@/components/icons/Library'

export const clients = [...new Array(9)].map((client, index) => ({
  href: `/${index + 1}.webp`,
}))

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/p3.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Bate Papo', Component: Chat, href: '/chat' },
  { name: 'Flow', Component: Workflows, href: '/workflows' },
  { name: 'Treinamento', Component: Training, href: '/training' },
  { name: 'Playground', Component: Playground, href: '/playground' },
  { name: 'Integrações', Component: IntegrationIcon, href: '/connections' },
  { name: 'Biblioteca de Ferramentas', Component: Library, href: '/library' },
]

export const menuConfig = [
  { name: 'Assinatura', Component: Payment, href: '/billing' },
  { name: 'Configurações', Component: Settings, href: '/settings' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]

export const EditorCanvasDefaultCardTypes = {
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Shopify: {
    description: 'Um dos ecommerce mais utilizados no mundo, ótima fonte de dados!',
    type: 'Action',
  },
  WhatsApp: {
    description: 'Um ótimo canal de atendimento e vendas, deixe a Cleo fazer isso.',
    type: 'Action',
  },
  Yampi: {
    description: 'Um belo checkout conectado com uma Inteligência Artificial da Vistune.',
    type: 'Action',
  },
  Bling: {
    description: 'Uma forma fácil de gerenciar sua empresa, deixe a Cleo por dentro.',
    type: 'Action',
  },
  Instagram: {
    description: 'O seu direct nas mãos da Cleo, atendimento e vendas a todo momento!',
    type: 'Action',
  },
  Telegram: {
    description: 'Um canal de atendimento em massa e a Cleo cuida disso para você.',
    type: 'Action',
  },
  Gmail: {
    description: 'Todos email de cliente podem ser respondidos pela Cleo agora!',
    type: 'Action',
  },
  MetaAdsense: {
    description: 'Coleta completa dos dados de campanhas na Meta.',
    type: 'Action',
  },
  GoogleAnalytics: {
    description: 'Visão completa dos dados de tráfego do seu site.',
    type: 'Action',
  },
  GoogleAdsense: {
    description: 'Monitore o desempenho das campanhas do Adsense.',
    type: 'Action',
  },
  YoutubeInsights: {
    description: 'Analise as métricas do seu canal no YouTube.',
    type: 'Action',
  },
  InstagramInsights: {
    description: 'Analise o desempenho das postagens no Instagram.',
    type: 'Action',
  }
}

export const CONNECTIONS: Connection[] = [
  {
    title: 'Shopify',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-shopify.png',
    connectionKey: 'shopifyNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'WhatsApp',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-whatsapp.png',
    connectionKey: 'whatsappNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Yampi',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-yampi.png',
    connectionKey: 'yampiNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Bling',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-bling.png',
    connectionKey: 'blingNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Instagram',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-instagram.png',
    connectionKey: 'instagramNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Telegram',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-telegram.png',
    connectionKey: 'telegramNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Gmail',
    model: 'Cleo',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-gmail.png',
    connectionKey: 'gmailNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Meta Adsense',
    model: 'Vision',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-meta-adsense.png',
    connectionKey: 'metaAdsenseNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Google Analytics',
    model: 'Vision',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-google-analytics.png',
    connectionKey: 'googleAnalyticsNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Google Adsense',
    model: 'Vision',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-google-adsense.png',
    connectionKey: 'googleAdsenseNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Youtube Insights',
    model: 'Vision',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-youtube-insights.png',
    connectionKey: 'youtubeInsightsNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Instagram Insights',
    model: 'Vision',
    description: 'Use slack to send notifications to team members through your own custom bot.',
    image: '/integrations-instagram-insights.png',
    connectionKey: 'instagramInsightsNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]
