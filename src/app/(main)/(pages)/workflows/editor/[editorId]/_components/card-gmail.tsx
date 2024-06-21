import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Position, useNodeId, NodeProps, NodeToolbar, Handle } from 'reactflow';
import { useEditor } from '@/providers/editor-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EditorCanvasCardType } from '@/lib/types';
import { AlertCircle, Copy, Save, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FloatingLabelInput } from '@/components/ui/FloatingInput';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { fetchGmailData } from '../../../_actions/gmailRequest';

interface CardGmailProps extends NodeProps {
  data: EditorCanvasCardType;
  demo: boolean;
  onDeleteNode: (id: string) => void;
}

const CardGmail: React.FC<CardGmailProps> = ({ data, demo, onDeleteNode }) => {
  const [gmailData, setGmailData] = useState<{ mailGmail: string; connectedGmail: boolean } | null>(null);

  useEffect(() => {
    fetchGmailData().then((data) => {
      setGmailData(data);
    });
  }, []);

  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();

  const isConnected = useMemo(() => {
    return state.editor.edges.some(edge => edge.source === nodeId || edge.target === nodeId);
  }, [state.editor.edges, nodeId]);

  const handleCopy = useCallback(() => { }, []);
  const handleClone = useCallback(() => { }, []);
  const handleDelete = useCallback(() => {
    onDeleteNode(nodeId!);
  }, [nodeId, onDeleteNode]);

  const generateUniqueId = () => `handle-${Math.random().toString(36).substr(2, 9)}`;
  const targetHandleId = useMemo(() => generateUniqueId(), []);

  return (
    <>
      {data.type !== 'Trigger' && (
        <Handle type="target" position={Position.Left} style={{ zIndex: 100 }} id="b" />
      )}
      <NodeToolbar position={Position.Top}>
        <Button disabled variant="outline" size="icon3" className="mr-1" onClick={handleCopy}>
          <Save className="h-3 w-3" />
        </Button>
        <Button disabled variant="outline" size="icon3" className="mr-1" onClick={handleClone}>
          <Copy className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="icon3" onClick={handleDelete}>
          <Trash2 className="h-3 w-3" />
        </Button>
      </NodeToolbar>
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((n) => n.id === nodeId);
          if (val) {
            dispatch({
              type: 'SELECTED_ELEMENT',
              payload: { element: val },
            });
          }
        }}
        className="relative h-full w-96 border-neutral-950 dark:border-neutral-300"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src="/avatar-gmail.jpg" alt="avatar-gmail" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-md">
              {data.title}
            </CardTitle>
            <CardDescription>
              {data.description}
            </CardDescription>
          </div>
        </CardHeader>
        <Separator className="mb-5" />
        <CardContent>
          {demo || (gmailData && gmailData.connectedGmail) ?
            <FloatingLabelInput value={gmailData?.connectedGmail && gmailData ? gmailData.mailGmail : "example@vistune.ai"} disabled={true} id="mail-gmail" label="Email" />
            :
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Não está Conectado!</AlertTitle>
              <AlertDescription className='text-muted-foreground text-xs'>
                Sua conta do Gmail não está integrada à Vistune.
              </AlertDescription>
            </Alert>
          }
        </CardContent>
        <div className={`absolute left-3 top-4 h-2 w-2 rounded-full ${demo|| gmailData ? demo || (gmailData?.connectedGmail && isConnected) ? "bg-green-500" : !gmailData?.connectedGmail && isConnected ? "bg-yellow-400" : "bg-red-600" : isConnected ? "bg-green-500" : "bg-red-600"}`}>
        </div>
      </Card>
    </>
  );
};

interface DemoProps {
  demo: boolean;
}

const CardGmailWrapper: React.FC<NodeProps & DemoProps & { onDeleteNode: (id: string) => void }> = (props) => {
  return <CardGmail {...props} onDeleteNode={props.onDeleteNode} demo={props.demo} />;
};

export default CardGmail;
export { CardGmailWrapper };