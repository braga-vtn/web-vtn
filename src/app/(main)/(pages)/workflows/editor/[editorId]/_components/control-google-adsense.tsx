import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, LinkIcon } from 'lucide-react';
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { fetchGoogleAdsenseData } from '../../../_actions/googleAdsenseRequest';

const ControlGoogleAdsense = () => {
  const [googleAdsenseData, setGoogleAdsenseData] = useState<{ accountGoogleAdsense: string; connectedGoogleAdsense: boolean } | null>(null);

  useEffect(() => {
    fetchGoogleAdsenseData().then((data) => {
      setGoogleAdsenseData(data);
    });
  }, []);

  return (
    <div>
      {googleAdsenseData?.connectedGoogleAdsense ?
        <Card className="w-full h-full border-hidden">
          <CardContent>
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Você está conectado!</AlertTitle>
              <AlertDescription className='text-muted-foreground text-xs'>
                Tudo certo com sua integração com o Google Adsense. Não há mais configurações no momento!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        :
        <Card className="w-full h-full border-hidden">
          <CardContent>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Não está Conectado!</AlertTitle>
              <AlertDescription className='text-muted-foreground text-xs'>
                Sua conta do Google Adsense ainda não está integrado à Vistune.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="mt-2">
            <Link href="/connections" className='w-full'>
              <Button className="w-full mb-16">
                <LinkIcon className="mr-2 h-4 w-4" />
                Conectar Agora
              </Button>
            </Link>
          </CardFooter>
        </Card>
      }
    </div>
  );
};

export default ControlGoogleAdsense;