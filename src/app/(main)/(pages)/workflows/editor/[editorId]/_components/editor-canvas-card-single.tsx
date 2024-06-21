import React, { useMemo, useState, useEffect } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import { EditorCanvasCardType } from '@/lib/types';
import { useEditor } from '@/providers/editor-provider';
import CustomHandle from './custom-handle'; 
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type EditorCanvasCardSingleProps = {
  data: EditorCanvasCardType;
};

const generateUniqueId = () => `handle-${Math.random().toString(36).substr(2, 9)}`;

const EditorCanvasCardSingle: React.FC<EditorCanvasCardSingleProps> = ({ data }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const [handleId, setHandleId] = useState<string>(generateUniqueId());

  const isConnected = useMemo(() => {
    return state.editor.edges.some(edge => edge.source === nodeId || edge.target === nodeId);
  }, [state.editor.edges, nodeId]);

  useEffect(() => {
    setHandleId(generateUniqueId());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    const val = state.editor.elements.find((n) => n.id === nodeId);
    if (val) {
      dispatch({ type: 'SELECTED_ELEMENT', payload: { element: val } });
    }
  };

  return (
    <>
      {data.type !== 'Trigger' && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ zIndex: 100 }}
          id={handleId} // Use handleId state
        />
      )}
      <Card onClick={handleClick} className="relative max-w-[400px] border-neutral-950 dark:border-neutral-300">
        <CardHeader className="flex flex-row items-center gap-4">
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">ID: </b>{nodeId}
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge variant="secondary" className="absolute right-2 top-2">
          {data.type}
        </Badge>
        <div className={`absolute left-3 top-4 h-2 w-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
      </Card>
    </>
  );
};

export default EditorCanvasCardSingle;