import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import DialogShopify from './dialog-shopify'
import DialogWhatsapp from './dialog-whatsapp'
import DialogYampi from './dialog-yampi'
import DialogBling from './dialog-bling'
import DialogInstagram from './dialog-instagram'
import DialogTelegram from './dialog-telegram'
import DialogGmail from './dialog-gmail'
import DialogMetaAdsense from './dialog-meta-adsense'
import DialogGoogleAnalytics from './dialog-google-analytics'
import DialogGoogleAdsense from './dialog-google-adsense'
import DialogYoutubeInsights from './dialog-youtube-insights'
import DialogInstagramInsights from './dialog-instagram-insights'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  model: string
  description: string
  callback?: () => void
}

const ConnectionCard = ({
  description,
  type,
  icon,
  model,
  title,
}: Props) => {
  return (
    <Card className="flex flex-col items-center justify-center m-3 dark:bg-neutral-900 bg-zinc-100">
      <CardHeader className="w-full flex justify-between items-center">
        <div className="flex flex-col p-1 mb-8">
          <CardTitle className="text-lg flex items-center">
            {title}
            <span className="px-2 py-1 ml-1 flex items-center">
              <Badge variant="zinc" className="mb-0">{model}</Badge>
            </span>
          </CardTitle>
          {model && (
            ''
          )}
          <CardDescription className='mt-3'>{description}</CardDescription>
        </div>
        <Image
          src={icon}
          alt={title}
          height={120}
          width={120}
          className="object-contain"
        />
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4 w-full">
        {title == 'Shopify' ?
          <DialogShopify /> :
          ''}
        {title == 'WhatsApp' ?
          <DialogWhatsapp /> :
          ''}
        {title == 'Yampi' ?
          <DialogYampi /> :
          ''}
        {title == 'Bling' ?
          <DialogBling /> :
          ''}
        {title == 'Instagram' ?
          <DialogInstagram /> :
          ''}
        {title == 'Telegram' ?
          <DialogTelegram /> :
          ''}
        {title == 'Gmail' ?
          <DialogGmail /> :
          ''}
        {title == 'Meta Adsense' ?
          <DialogMetaAdsense /> :
          ''}
        {title == 'Google Analytics' ?
          <DialogGoogleAnalytics /> :
          ''}
        {title == 'Google Adsense' ?
          <DialogGoogleAdsense /> :
          ''}
        {title == 'Youtube Insights' ?
          <DialogYoutubeInsights /> :
          ''}
        {title == 'Instagram Insights' ?
          <DialogInstagramInsights /> :
          ''}
      </div>
    </Card>
  )
}

export default ConnectionCard