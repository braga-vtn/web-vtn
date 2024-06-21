import React, { useMemo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { EditorCanvasCardType, EditorNodeType } from '@/lib/types';
import { useEditor } from '@/providers/editor-provider';
import SceneRenderer from '@/components/global/SceneRenderer';

interface EditorCanvasCardModelProps {
  data: EditorNodeType['data'];
  demo: boolean;
  nameTrigger: string;
}

const generateUniqueId = () => `handle-${Math.random().toString(36).substr(2, 9)}`;

const EditorCanvasCardModel = ({ data, demo, nameTrigger }: EditorCanvasCardModelProps) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();

  const sourceHandleId = useMemo(() => generateUniqueId(), []);

  return (
    <>
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((n) => n.id === nodeId);
          if (val)
            dispatch({
              type: 'SELECTED_ELEMENT',
              payload: {
                element: val,
              },
            });
        }}
        className="relative w-96 border-neutral-950 dark:border-neutral-300"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>
            <CardTitle className="text-md">
              {
                nameTrigger == "cleo" ? "Cleo" :
                  nameTrigger == "vision" ? "Vision" :
                  nameTrigger == "vistune" ? "Vistune" :
                    nameTrigger == "custom" ? "Personalizado" :
                      data.title
              }
            </CardTitle>
            <CardDescription>
              <p>
                {
                  nameTrigger == "cleo" ? "Um modelo para suporte de excelência e realizar vendas de produtos e serviços." :
                    nameTrigger == "vision" ? "Um modelo focado em analisar todas as métricas que recebe, um verdadeiro analista de dados!" :
                    nameTrigger == "vistune" ? "A Vistune é o seu passaporte para o novo futuro, tecnologia com facilidade, garantimos isso!" :
                      nameTrigger == "custom" ? "Um modelo exclusivo, com habilidades surpreendentes e únicas!" :
                        data.description
                }
              </p>
            </CardDescription>
          </div>
        </CardHeader>
        <Separator className="mb-5" />
        <CardContent className="h-64 w-96 p-0 relative">
          <div className="h-full w-full">
            <SceneRenderer nameTrigger={nameTrigger} />
          </div>
        </CardContent>
      </Card>
      <Handle
        type="source"
        position={Position.Right}
        id={sourceHandleId}
        style={{ zIndex: 100 }}
      />
    </>
  );
};

export default EditorCanvasCardModel;