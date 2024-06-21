import { EditorNodeType } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import ControlWhatsapp from "./control-whatsapp";
import ControlShopify from "./control-shopify";
import ControlYampi from "./control-yampi";
import ControlBling from "./control-bling";
import ControlInstagram from "./control-instagram";
import ControlTelegram from "./control-telegram";
import ControlGmail from "./control-gmail";
import { capitalizeFirstLetter } from "@/lib/utils";
import ControlCleo from "./control-cleo";
import ControlGoogleAnalytics from "./control-google-analytics";
import ControlMetaAdsense from "./control-meta-adsense";
import ControlGoogleAdsense from "./control-google-adsense";
import ControlYoutubeInsights from "./control-youtube-insights";
import ControlInstagramInsights from "./control-instagram-insights";
import ControlVision from "./control-vision";
import ControlCustom from "./control-custom";

type Props = {
  nameTrigger: string;
  node: EditorNodeType | EditorNodeType[] | undefined;
  onExample: () => void;
}

const ControlNodes = ({ node, nameTrigger, onExample }: Props) => {
  const isArray = Array.isArray(node);

  return (
    <div>
      {!isArray && node && (node as EditorNodeType).data && (
        <>
          <Card className="w-full h-full border-hidden">
            <CardHeader className="min-h-28">
              <CardTitle>
                {(node as EditorNodeType).data.title == "Trigger" ? capitalizeFirstLetter(nameTrigger == "custom" ? "Personalizado" : nameTrigger) :
                  (node as EditorNodeType).data.title == "MetaAdsense" ? "Meta Adsense" :
                    (node as EditorNodeType).data.title == "GoogleAnalytics" ? "Google Analytics" :
                      (node as EditorNodeType).data.title == "GoogleAdsense" ? "Google Adsense" :
                        (node as EditorNodeType).data.title == "YoutubeInsights" ? "Youtube Insights" :
                          (node as EditorNodeType).data.title == "InstagramInsights" ? "Instagram Insights" :
                            (node as EditorNodeType).data.title
                }
              </CardTitle>
              <CardDescription>
                {
                  node.type == "Trigger" && nameTrigger == "cleo" ? "Um modelo para suporte de excelência e realizar vendas de produtos e serviços." :
                    node.type == "Trigger" && nameTrigger == "vision" ? "Um modelo focado em analisar todas as métricas que recebe, um verdadeiro analista de dados!" :
                      node.type == "Trigger" && nameTrigger == "custom" ? "Um modelo exclusivo, com habilidades surpreendentes e únicas!" :
                        (node as EditorNodeType).data.description
                }
              </CardDescription>
            </CardHeader>
            <Separator className="mb-5" />
            {node.type == "Shopify" && <ControlShopify />}
            {node.type == "Yampi" && <ControlYampi />}
            {node.type == "Bling" && <ControlBling />}
            {node.type == "MetaAdsense" && <ControlMetaAdsense />}
            {node.type == "GoogleAnalytics" && <ControlGoogleAnalytics />}
            {node.type == "GoogleAdsense" && <ControlGoogleAdsense />}
            {node.type == "YoutubeInsights" && <ControlYoutubeInsights />}
            {node.type == "InstagramInsights" && <ControlInstagramInsights />}
            {node.type == "WhatsApp" && <ControlWhatsapp node={node} onExample={onExample} />}
            {node.type == "Instagram" && <ControlInstagram node={node} onExample={onExample} />}
            {node.type == "Telegram" && <ControlTelegram node={node} onExample={onExample} />}
            {node.type == "Gmail" && <ControlGmail node={node} onExample={onExample} />}
            {node.type == "Trigger" && nameTrigger == "cleo" && <ControlCleo node={node} onExample={onExample} />}
            {node.type == "Trigger" && nameTrigger == "vision" && <ControlVision node={node} onExample={onExample} />}
            {node.type == "Trigger" && nameTrigger == "custom" && <ControlCustom node={node} />}
          </Card>
        </>
      )}
    </div>
  );
}

export default ControlNodes;
