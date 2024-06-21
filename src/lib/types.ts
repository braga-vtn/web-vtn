import { ConnectionProviderProps } from '@/providers/connections-provider'
import { float } from 'aws-sdk/clients/cloudfront'
import { z } from 'zod'
import { type ClientUploadedFileData } from "uploadthing/types"

export const EditUserProfileSchema = z.object({
  email: z.string().email('Obrigatório'),
  name: z.string().min(1, 'Obrigatório'),
})

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, 'Obrigatório'),
  description: z.string().min(1, 'Obrigatório'),
})

export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord' |
  'Shopify' | 'WhatsApp' | 'Yampi' | 'Bling' | 'Instagram' | 'Telegram' | 'Gmail' |
  'Meta Adsense' | 'Google Analytics' | 'Google Adsense' | 'Youtube Insights' | 'Instagram Insights'

export interface StateProps {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
}

export interface CountryProps {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
  }[];
  translations: Record<string, string>;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

export type Connection = {
  title: ConnectionTypes
  model: string
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}

export type Training = {
  id: string
  title: string
  model: string
  url: string
  date: string
  type: string
  similarity: number
  utilization: float
  parameters: number
}

export type EditorCanvasTypes =
  | 'Trigger'
  | 'Shopify'
  | 'WhatsApp'
  | 'Yampi'
  | 'Bling'
  | 'Instagram'
  | 'Telegram'
  | 'Gmail'
  | 'MetaAdsense'
  | 'GoogleAnalytics'
  | 'GoogleAdsense'
  | 'YoutubeInsights'
  | 'InstagramInsights'

export type EditorCanvasCardType = {
  title: string
  description: string
  completed: boolean
  current: boolean
  metadata: any
  type: EditorCanvasTypes
}

export type EditorNodeType = {
  id: string
  type: EditorCanvasCardType['type']
  position: {
    x: number
    y: number
  }
  data: EditorCanvasCardType
}

export type EditorNode = EditorNodeType

export type EditorActions =
  | {
    type: 'LOAD_DATA'
    payload: {
      elements: EditorNode[]
      edges: {
        id: string
        source: string
        target: string
      }[]
    }
  }
  | {
    type: 'UPDATE_NODE'
    payload: {
      elements: EditorNode[]
    }
  }
  | { type: 'REDO' }
  | { type: 'UNDO' }
  | {
    type: 'SELECTED_ELEMENT'
    payload: {
      element: EditorNode
    }
  }

export const nodeMapper: Record<string, string> = {
  Notion: 'notionNode',
  Slack: 'slackNode',
  Discord: 'discordNode',
  'Google Drive': 'googleNode',
  Shopify: 'shopifyNode',
  WhatsApp: 'whatsappNode',
  Yampi: 'yampiNode',
  Bling: 'blingNode',
  Instagram: 'instagramNode',
  Telegram: 'telegramNode',
  Gmail: 'gmailNode',
  MetaAdsense: 'metaAdsenseNode',
  GoogleAnalytics: 'googleAnalyticsNode',
  GoogleAdsense: 'googleAdsenseNode',
  YoutubeInsights: 'youtubeInsightsNode',
  InstagramInsights: 'instagramInsightsNode',
}

export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> { }
