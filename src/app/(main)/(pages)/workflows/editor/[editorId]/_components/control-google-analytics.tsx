import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, LinkIcon } from 'lucide-react';
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { fetchGoogleAnalyticsData } from '../../../_actions/googleAnalyticsRequest';

const ControlGoogleAnalytics = () => {
  const [googleAnalyticsData, setGoogleAnalticsData] = useState<{ accountGoogleAnalytics: string; connectedGoogleAnalytics: boolean } | null>(null);

  useEffect(() => {
    fetchGoogleAnalyticsData().then((data) => {
      setGoogleAnalticsData(data);
    });
  }, []);

  return (
    <div>
      {googleAnalyticsData?.connectedGoogleAnalytics ?
        <Card className="w-full h-full border-hidden">
          <CardContent>
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Você está conectado!</AlertTitle>
              <AlertDescription className='text-muted-foreground text-xs'>
                Tudo certo com sua integração com o Google Analytics. Não há mais configurações no momento!
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
                Sua conta do Google Analytics ainda não está integrado à Vistune.
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

export default ControlGoogleAnalytics;