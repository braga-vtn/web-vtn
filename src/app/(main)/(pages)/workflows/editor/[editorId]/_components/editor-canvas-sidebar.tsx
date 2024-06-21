import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, ChevronUp, Plus } from 'lucide-react'
import { ScrollArea2 } from '@/components/ui/scroll-area'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { useFuzzieStore } from '@/store'
import { fetchBotSlackChannels, onConnections, onDragStart } from '@/lib/editor-utils'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { EditorCanvasDefaultCardTypes } from '@/lib/constant'
import SvgReload2 from './svgReload-2'
import { capitalizeFirstLetter } from '@/lib/utils'

type Props = {
  nodes: EditorNodeType[];
  nameTrigger: string;
  nodeControl: EditorNodeType | undefined;
}

const acceptedTitlesForCleo: EditorCanvasTypes[] = [
  'Trigger',
  'Shopify',
  'WhatsApp',
  'Yampi',
  'Bling',
  'Instagram',
  'Telegram',
  'Gmail',
]

const acceptedTitlesForVision: EditorCanvasTypes[] = [
  'Trigger',
  'MetaAdsense',
  'GoogleAnalytics',
  'GoogleAdsense',
  'YoutubeInsights',
  'InstagramInsights'
]

const acceptedTitlesForDefault: EditorCanvasTypes[] = [
  'Trigger',
  'Shopify',
  'Yampi',
  'Bling',
  'MetaAdsense',
  'GoogleAnalytics',
  'GoogleAdsense',
  'YoutubeInsights',
  'InstagramInsights'
]

const EditorCanvasSidebar = ({ nodes, nameTrigger, nodeControl }: Props) => {
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()
  const { googleFile, setSlackChannels } = useFuzzieStore()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (state) {
      onConnections(nodeConnection, state, googleFile)
    }
  }, [state])

  useEffect(() => {
    if (nodeConnection.slackNode.slackAccessToken) {
      fetchBotSlackChannels(
        nodeConnection.slackNode.slackAccessToken,
        setSlackChannels
      )
    }
  }, [nodeConnection])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (nodeControl && nodeControl.id) {
      setIsDropdownOpen(false)
      setSaving(true)
      timer = setTimeout(() => {
        setSaving(false)
      }, 1000)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [nodeControl])

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const addedNodeTypes = nodes.map(node => node.type)

  const availableCardTypes = Object.entries(EditorCanvasDefaultCardTypes).filter(
    ([cardKey, _]) =>
    (!addedNodeTypes.includes(cardKey as EditorCanvasTypes) &&
      (nameTrigger === "cleo" ?
        acceptedTitlesForCleo.includes(cardKey as EditorCanvasTypes) :
        nameTrigger === "vision" ?
          acceptedTitlesForVision.includes(cardKey as EditorCanvasTypes) :
          acceptedTitlesForDefault.includes(cardKey as EditorCanvasTypes))
    )
  )

  const allNodesAdded = availableCardTypes.length === 0

  return (
    <aside className="relative">
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <Button
          variant={isDropdownOpen ? "gooeyLeftDark" : "gooeyLeftCurrent"}
          size="icon"
          onClick={toggleDropdown}
          disabled={allNodesAdded}
        >
          {isDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </Button>
      </div>
      {!isDropdownOpen && (
        <div>
          {saving ? <SvgReload2 /> : <Check className="h-5 w-5 ml-[10px] mt-6" />}
        </div>
      )}
      {isDropdownOpen && (
        <div>
          <ScrollArea2 className="h-[70vh]">
            {availableCardTypes
              .filter(
                ([_, cardType]) =>
                  (!nodes.length && cardType.type === 'Trigger') ||
                  (nodes.length && cardType.type === 'Action')
              )
              .map(([cardKey]) => (
                <Card
                  key={cardKey}
                  draggable
                  className="w-44 h-12 mb-3 cursor-grab border-neutral-950 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-950"
                  onDragStart={(event) =>
                    onDragStart(event, cardKey as EditorCanvasTypes)
                  }
                >
                  <CardHeader className="flex flex-row items-center p-3">
                    <CardTitle className="text-md">
                      {
                        cardKey == "Trigger" ? capitalizeFirstLetter(nameTrigger) :
                          cardKey == "MetaAdsense" ? "Meta Adsense" :
                            cardKey == "GoogleAnalytics" ? "Google Analytics" :
                              cardKey == "GoogleAdsense" ? "Google Adsense" :
                                cardKey == "YoutubeInsights" ? "Youtube Insights" :
                                  cardKey == "InstagramInsights" ? "Instagram Insights"
                                    : cardKey

                      }
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
          </ScrollArea2>
        </div>
      )}
    </aside>
  )
}

export default EditorCanvasSidebar