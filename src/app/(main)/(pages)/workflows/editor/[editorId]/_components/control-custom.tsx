import React from 'react';
import { EditorNodeType } from '@/lib/types';
import {
  Card, CardContent,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

type Props = {
  node: EditorNodeType | EditorNodeType[] | undefined;
};

const ControlCustom = ({ node }: Props) => {

  return (
    <div>
      {!Array.isArray(node) && node && (node as EditorNodeType).data && (
        <>
          <ScrollArea className="h-[75vh] w-full">
            <Card className="w-full h-full border-hidden">
              <CardContent>
                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>O controle está em suas mãos!</AlertTitle>
                  <AlertDescription className='text-muted-foreground text-xs'>
                    Você pode conversar com um modelo mais preparado para suas necessidades!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </ScrollArea>
        </>
      )}
    </div>
  );
};

export default ControlCustom;