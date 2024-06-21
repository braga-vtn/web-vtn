'use client'
import { createContext, useContext, useState } from 'react'

export type ConnectionProviderProps = {
  discordNode: {
    webhookURL: string
    content: string
    webhookName: string
    guildName: string
  }
  setDiscordNode: React.Dispatch<React.SetStateAction<any>>
  googleNode: {}[]
  setGoogleNode: React.Dispatch<React.SetStateAction<any>>
  notionNode: {
    accessToken: string
    databaseId: string
    workspaceName: string
    content: ''
  }
  workflowTemplate: {
    discord?: string
    notion?: string
    slack?: string
  }
  setNotionNode: React.Dispatch<React.SetStateAction<any>>
  slackNode: {
    appId: string
    authedUserId: string
    authedUserToken: string
    slackAccessToken: string
    botUserId: string
    teamId: string
    teamName: string
    content: string
  }
  shopifyNode: {
    appId: string
  }
  whatsappNode: {
    appId: string
  }
  yampiNode: {
    appId: string
  }
  blingNode: {
    appId: string
  }
  instagramNode: {
    appId: string
  }
  telegramNode: {
    appId: string
  }
  gmailNode: {
    appId: string
  }
  metaAdsenseNode: {
    appId: string
  }
  googleAnalyticsNode: {
    appId: string
  }
  googleAdsenseNode: {
    appId: string
  }
  youtubeInsightsNode: {
    appId: string
  }
  instagramInsightsNode: {
    appId: string
  }
  setSlackNode: React.Dispatch<React.SetStateAction<any>>
  setWorkFlowTemplate: React.Dispatch<
    React.SetStateAction<{
      discord?: string
      notion?: string
      slack?: string
    }>
  >
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type ConnectionWithChildProps = {
  children: React.ReactNode
}

const InitialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: '',
    content: '',
    webhookName: '',
    guildName: '',
  },
  googleNode: [],
  notionNode: {
    accessToken: '',
    databaseId: '',
    workspaceName: '',
    content: '',
  },
  workflowTemplate: {
    discord: '',
    notion: '',
    slack: '',
  },
  slackNode: {
    appId: '',
    authedUserId: '',
    authedUserToken: '',
    slackAccessToken: '',
    botUserId: '',
    teamId: '',
    teamName: '',
    content: '',
  },
  shopifyNode: {
    appId: '',
  },
  whatsappNode: {
    appId: '',
  },
  yampiNode: {
    appId: '',
  },
  blingNode: {
    appId: '',
  },
  instagramNode: {
    appId: '',
  },
  telegramNode: {
    appId: '',
  },
  gmailNode: {
    appId: '',
  },
  metaAdsenseNode: {
    appId: '',
  },
  googleAnalyticsNode: {
    appId: '',
  },
  googleAdsenseNode: {
    appId: '',
  },
  youtubeInsightsNode: {
    appId: '',
  },
  instagramInsightsNode: {
    appId: '',
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setIsLoading: () => undefined,
  setWorkFlowTemplate: () => undefined,
}

const ConnectionsContext = createContext(InitialValues)
const { Provider } = ConnectionsContext

export const ConnectionsProvider = ({ children }: ConnectionWithChildProps) => {
  const [discordNode, setDiscordNode] = useState(InitialValues.discordNode)
  const [googleNode, setGoogleNode] = useState(InitialValues.googleNode)
  const [notionNode, setNotionNode] = useState(InitialValues.notionNode)
  const [slackNode, setSlackNode] = useState(InitialValues.slackNode)
  const [isLoading, setIsLoading] = useState(InitialValues.isLoading)


  const [shopifyNode, setShopifyNode] = useState(InitialValues.shopifyNode)
  const [whatsappNode, setwhatsappNode] = useState(InitialValues.whatsappNode)
  const [yampiNode, setYampiNode] = useState(InitialValues.yampiNode)
  const [blingNode, setBlingNode] = useState(InitialValues.blingNode)
  const [instagramNode, setInstagramNode] = useState(InitialValues.instagramNode)
  const [telegramNode, setTelegramNode] = useState(InitialValues.telegramNode)
  const [gmailNode, setGmailNode] = useState(InitialValues.gmailNode)
  const [metaAdsenseNode, setMetaAdsenseNode] = useState(InitialValues.metaAdsenseNode)
  const [googleAnalyticsNode, setGoogleAnalyticsNode] = useState(InitialValues.googleAnalyticsNode)
  const [googleAdsenseNode, setGoogleAdsenseNode] = useState(InitialValues.googleAdsenseNode)
  const [youtubeInsightsNode, setYoutubeInsightsNode] = useState(InitialValues.youtubeInsightsNode)
  const [instagramInsightsNode, setInstagramInsightsNode] = useState(InitialValues.instagramInsightsNode)
  const [workflowTemplate, setWorkFlowTemplate] = useState(
    InitialValues.workflowTemplate
  )

  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    isLoading,
    setIsLoading,
    workflowTemplate,
    setWorkFlowTemplate,


    shopifyNode,
    setShopifyNode,
    whatsappNode,
    setwhatsappNode,
    yampiNode,
    setYampiNode,
    blingNode,
    setBlingNode,
    instagramNode,
    setInstagramNode,
    telegramNode,
    setTelegramNode,
    gmailNode,
    setGmailNode,
    metaAdsenseNode,
    setMetaAdsenseNode,
    googleAnalyticsNode,
    setGoogleAnalyticsNode,
    googleAdsenseNode,
    setGoogleAdsenseNode,
    youtubeInsightsNode,
    setYoutubeInsightsNode,
    instagramInsightsNode,
    setInstagramInsightsNode,
  }

  return <Provider value={values}>{children}</Provider>
}

export const useNodeConnections = () => {
  const nodeConnection = useContext(ConnectionsContext)
  return { nodeConnection }
}
