'use client';

import { EditorNodeType, EditorCanvasTypes } from '@/lib/types';
import { useEditor } from '@/providers/editor-provider';
import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import ReactFlow, {
  Background,
  Edge,
  EdgeChange,
  NodeChange,
  ReactFlowInstance,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeProps,
  useStoreApi,
  Node,
  NodeDragHandler,
  ReactFlowProvider,
  MarkerType,
  OnConnect,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { toast } from 'sonner';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { EditorCanvasDefaultCardTypes } from '@/lib/constant';
import EditorCanvasSidebar from './editor-canvas-sidebar';
import { onGetNodesEdges } from '../../../_actions/workflow-connections';
import SvgReload from '../svgs/reload-svg';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import ControlNodes from './control-nodes';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import EditorCanvasCardModel from './editor-canvas-card-model';
import { CardGmailWrapper } from './card-gmail';
import FloatingEdge from './FloatingEdge';
import { CardShopifyWrapper } from './card-shopify';
import { CardWhatsappWrapper } from './card-whatsapp';
import { CardYampiWrapper } from './card-yampi';
import { CardBlingWrapper } from './card-bling';
import { CardInstagramWrapper } from './card-instagram';
import { CardTelegramWrapper } from './card-telegram';
import PageError from '@/app/(main)/pageError';
import { CardMetaAdsenseWrapper } from './card-meta-adsense';
import { CardGoogleAnalyticsWrapper } from './card-google-analytics';
import { CardGoogleAdsenseWrapper } from './card-google-adsense';
import { CardYoutubeInsightsWrapper } from './card-youtube-insights';
import { CardInstagramInsightsWrapper } from './card-instagram-insights';

type Props = {
  demo: boolean;
}

const initialNodes: EditorNodeType[] = [
  {
    id: 'trigger-node',
    type: 'Trigger',
    position: { x: 250, y: 150 },
    data: {
      title: 'Trigger',
      description: 'Initial trigger node',
      completed: false,
      current: false,
      metadata: {},
      type: 'Trigger',
    },
  },
];
const initialEdges: { id: string; source: string; target: string }[] = [];

const edgeTypes = {
  floating: FloatingEdge,
};

const createNodeTypes = (nameFlow: string, demo: boolean, handleDeleteNode: (nodeId: string) => void) => ({
  Trigger: (props: NodeProps) => <EditorCanvasCardModel {...props} demo={demo} nameTrigger={nameFlow} />,
  Shopify: (props: NodeProps) => <CardShopifyWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  WhatsApp: (props: NodeProps) => <CardWhatsappWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  Yampi: (props: NodeProps) => <CardYampiWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  Bling: (props: NodeProps) => <CardBlingWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  Instagram: (props: NodeProps) => <CardInstagramWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  Telegram: (props: NodeProps) => <CardTelegramWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  Gmail: (props: NodeProps) => <CardGmailWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  MetaAdsense: (props: NodeProps) => <CardMetaAdsenseWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  GoogleAnalytics: (props: NodeProps) => <CardGoogleAnalyticsWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  GoogleAdsense: (props: NodeProps) => <CardGoogleAdsenseWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  YoutubeInsights: (props: NodeProps) => <CardYoutubeInsightsWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
  InstagramInsights: (props: NodeProps) => <CardInstagramInsightsWrapper {...props} demo={demo} onDeleteNode={handleDeleteNode} />,
});

const EditorCanvasInner = (props: Props) => {
  const { dispatch, state } = useEditor();
  const [nodes, setNodes] = useState<EditorNodeType[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [nameFlow, setNameFlow] = useState("");
  const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false);
  const [isPageError, setIsPageError] = useState<boolean>(false);
  const [visibleControl, setVisibleControl] = useState<boolean>(false);
  const [nodeControl, setNodeControl] = useState<EditorNodeType | undefined>(undefined);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
  const pathname = usePathname();
  const nodesRef = useRef<EditorNodeType[]>([]);
  const store = useStoreApi();
  const demo = props.demo;

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onNodeClick = useCallback((node: EditorNodeType | undefined) => {
    setNodeControl(node);
    setVisibleControl(true);
  }, []);

  const onNodeSelect = useCallback((id: string) => {
    const selectedNode = nodesRef.current.find(node => node.id === id);
    onNodeClick(selectedNode);
  }, [onNodeClick]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const newChanges = changes.filter(change => change.type !== 'remove' || change.id !== 'trigger-node');
      const changesDelete = changes.filter(change => change.type !== 'remove');

      if (changes.length !== changesDelete.length) {
        setVisibleControl(false)
      }

      if (changes.length !== newChanges.length) {
        setVisibleControl(false)
        toast('Todas as conexões foram excluídas!');
      }

      if (newChanges[0] && newChanges[0].type === "position" && !newChanges[0].dragging) {
        onNodeSelect(newChanges[0].id);
      }
      setNodes((nds) => applyNodeChanges(newChanges, nds) as EditorNodeType[]);
    },
    [onNodeSelect]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    []
  );

  const onConnect: OnConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'floating',
            markerEnd: { type: MarkerType.Arrow }
          },
          eds
        )
      );
    },
    []
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow') as EditorCanvasTypes;

      if (typeof type === 'undefined' || !type) {
        return;
      }

      if (!reactFlowInstance) return;

      const reactFlowBounds = (event.target as HTMLElement).getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode: EditorNodeType = {
        id: uuidv4(),
        type,
        position,
        data: {
          title: type,
          description: EditorCanvasDefaultCardTypes[type].description,
          completed: false,
          current: false,
          metadata: {},
          type: type,
        },
      };
      onNodeClick(newNode);
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, state, onNodeClick]
  );

  const handleClickCanvas = () => {
    dispatch({
      type: 'SELECTED_ELEMENT',
      payload: {
        element: {
          data: {
            completed: false,
            current: false,
            description: '',
            metadata: {},
            title: '',
            type: 'Trigger',
          },
          id: '',
          position: { x: 0, y: 0 },
          type: 'Trigger',
        },
      },
    });
  };

  useEffect(() => {
    if (nodes.length > 0) {
      dispatch({ type: 'LOAD_DATA', payload: { edges, elements: nodes } });
    }
  }, [nodes, edges, dispatch]);

  const handleDeleteNode = useCallback((nodeId: string) => {
    if (nodeId === 'trigger-node') {
      toast('Todas as conexões foram excluídas!');
      return;
    }

    setVisibleControl(false)
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  }, []);

  const nodeTypes = useMemo(
    () => createNodeTypes(nameFlow, demo, handleDeleteNode),
    [handleDeleteNode, nameFlow]
  );

  const onGetWorkFlow = async () => {
    setIsWorkFlowLoading(true);
    const response = await onGetNodesEdges(pathname.split('/').pop()!);
    if (response) {
      const loadedNodes = JSON.parse(response.nodes!);
      const loadedEdges = JSON.parse(response.edges!);
      const name = response.name!;

      const triggerExists = loadedNodes.some((node: EditorNodeType) => node.type === 'Trigger');
      if (!triggerExists) {
        loadedNodes.push({
          id: 'trigger-node',
          type: 'Trigger',
          position: { x: 250, y: 150 },
          data: {
            title: 'Trigger',
            description: 'Initial trigger node',
            completed: false,
            current: false,
            metadata: {},
            type: 'Trigger',
          },
        });
      }

      setEdges(loadedEdges);
      setNodes(loadedNodes);
      setNameFlow(name);
      setIsWorkFlowLoading(false);
    } else if (props.demo) {
      const response2 = await onGetNodesEdges("78ab5s89-8120-46f1-a7f2-n8astd6s58b5");
      if (response2) {
        const loadedNodes = JSON.parse(response2.nodes!);
        const loadedEdges = JSON.parse(response2.edges!);
        const name = response2.name!;

        const triggerExists = loadedNodes.some((node: EditorNodeType) => node.type === 'Trigger');
        if (!triggerExists) {
          loadedNodes.push({
            id: 'trigger-node',
            type: 'Trigger',
            position: { x: 250, y: 150 },
            data: {
              title: 'Trigger',
              description: 'Initial trigger node',
              completed: false,
              current: false,
              metadata: {},
              type: 'Trigger',
            },
          });
        }

        setEdges(loadedEdges);
        setNodes(loadedNodes);
        setNameFlow(name);
        setIsWorkFlowLoading(false);
      } else {
        setIsPageError(true)
      }
    } else {
      setIsPageError(true)
    }
  };

  useEffect(() => {
    onGetWorkFlow();
  }, []);

  const onClickHandle = () => {
    setVisibleControl(false);
  };

  type ProximityEdge = Edge & { className?: string };
  type ClosestNode = { node: Node<any, string | undefined> | null; distance: number };

  const MIN_DISTANCE = 1000;

  const isSourceNode = (node: Node): boolean => {
    return node.type === 'Trigger';
  };

  const isTargetNode = (node: Node): boolean => {
    return node.type !== 'Trigger';
  };

  const getClosestEdge = useCallback((node: Node): ProximityEdge | null => {
    const { nodeInternals } = store.getState();
    const storeNodes = Array.from(nodeInternals.values()) as Node<any, string | undefined>[];
    const isNodeSource = isSourceNode(node);

    const closestNode = storeNodes.reduce(
      (res: ClosestNode, n: Node<any, string | undefined>) => {
        if (
          n.id !== node.id &&
          n.positionAbsolute &&
          node.positionAbsolute &&
          ((isNodeSource && isTargetNode(n)) || (!isNodeSource && isSourceNode(n)))
        ) {
          const dx = n.positionAbsolute.x - node.positionAbsolute.x;
          const dy = n.positionAbsolute.y - node.positionAbsolute.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < res.distance && d < MIN_DISTANCE) {
            res.distance = d;
            res.node = n;
          }
        }

        return res;
      },
      {
        distance: Number.MAX_VALUE,
        node: null,
      }
    );

    if (!closestNode.node || !node.positionAbsolute || !closestNode.node.positionAbsolute) {
      return null;
    }

    const edge = {
      id: isNodeSource ? `${node.id}-${closestNode.node.id}-${uuidv4()}` : `${closestNode.node.id}-${node.id}-${uuidv4()}`,
      source: isNodeSource ? node.id : closestNode.node.id,
      target: isNodeSource ? closestNode.node.id : node.id,
      type: 'floating',
      markerEnd: { type: MarkerType.Arrow },
      className: 'temp'
    } as ProximityEdge;

    if (!edge.source || !edge.target) {
      return null;
    }

    return edge;
  }, [store]);

  const onNodeDrag: NodeDragHandler = useCallback(
    (_, node) => {
      const closeEdge = getClosestEdge(node);

      setEdges((es) => {
        const nextEdges = es.filter((e) => (e as ProximityEdge).className !== 'temp');

        if (
          closeEdge &&
          !nextEdges.find(
            (ne) =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          closeEdge.className = 'temp';
          nextEdges.push(closeEdge);
        }

        return nextEdges;
      });
    },
    [getClosestEdge, setEdges]
  );

  const onNodeDragStop: NodeDragHandler = useCallback(
    (_, node) => {
      const closeEdge = getClosestEdge(node);

      setEdges((es) => {
        const nextEdges = es.filter((e) => (e as ProximityEdge).className !== 'temp');

        if (
          closeEdge &&
          !nextEdges.find(
            (ne) =>
              ne.source === closeEdge.source && ne.target === closeEdge.target,
          )
        ) {
          closeEdge.className = undefined;
          nextEdges.push(closeEdge);
        }

        return nextEdges;
      });
    },
    [getClosestEdge, setEdges]
  );

  const proOptions = { hideAttribution: true };

  return (
    <>
      {
        isPageError ?
          <PageError srcReturn={"/workflows"} textButtonReturn={"Voltar para o Flow"} /> :
          <>
            <ResizablePanelGroup direction="horizontal">
              {!demo && visibleControl && (
                <>
                  <ResizablePanel
                    defaultSize={0}
                    minSize={25}
                    className="relative sm:block"
                  >
                    <ControlNodes node={nodeControl} onExample={onClickHandle} nameTrigger={nameFlow} />
                    <div className="flex items-center justify-center h-full">
                      <Button
                        variant="gooeyLeftDark"
                        size="icon3"
                        onClick={onClickHandle}
                        className="absolute top-0 right-0 mt-2 mr-2"
                      >
                        <ChevronLeft className="h-3 w-3" />
                      </Button>
                    </div>
                  </ResizablePanel>
                </>
              )}
              <ResizablePanel defaultSize={100}>
                <div className="flex h-full items-center justify-center">
                  <div style={{ width: '100%', height: '100%' }} className="relative">
                    {isWorkFlowLoading ? (
                      <SvgReload />
                    ) : (
                      <div className="floatingedges">
                        <ReactFlow
                          className="bg-neutral-100 dark:bg-neutral-900"
                          onDrop={onDrop}
                          onDragOver={onDragOver}
                          proOptions={proOptions}
                          nodes={nodes}
                          onNodesChange={onNodesChange}
                          edges={edges}
                          onEdgesChange={onEdgesChange}
                          onConnect={onConnect}
                          onInit={setReactFlowInstance}
                          fitView
                          onClick={handleClickCanvas}
                          nodeTypes={nodeTypes}
                          edgeTypes={edgeTypes}
                          onNodeDrag={onNodeDrag}
                          onNodeDragStop={onNodeDragStop}
                          minZoom={0}
                        >
                          <Background
                            // @ts-ignore
                            variant="dots"
                            gap={60}
                            size={1.4}
                          />
                        </ReactFlow>
                      </div>
                    )}
                    <div className="absolute top-10 right-0 m-4">
                      {!demo && !isWorkFlowLoading && (
                        <EditorCanvasSidebar nodeControl={nodeControl} nodes={nodes} nameTrigger={nameFlow} />
                      )}
                    </div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup >
          </>
      }
    </>
  );
};

const EditorCanvas = (props: Props) => (
  <ReactFlowProvider>
    <EditorCanvasInner {...props} />
  </ReactFlowProvider>
);

export default EditorCanvas;