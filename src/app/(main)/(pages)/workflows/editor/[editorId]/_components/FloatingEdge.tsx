import React, { useCallback, useMemo } from 'react';
import { useStore, getBezierPath, EdgeProps, Node, XYPosition } from 'reactflow';
import { getEdgeParams } from '../../../_components/getEdgeParams';

// Garantindo que os nós tenham posição absoluta (XYPosition)
interface NodeWithAbsolutePosition extends Node {
  positionAbsolute: XYPosition;
  width?: number; // `width` pode ser opcional
  height?: number; // `height` pode ser opcional
}

const FloatingEdge: React.FC<EdgeProps> = ({ id, source, target, markerEnd, style }) => {
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source) as NodeWithAbsolutePosition, [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target) as NodeWithAbsolutePosition, [target]));

  // Memoiza a chamada para getEdgeParams
  const edgeParams = useMemo(() => {
    if (!sourceNode || !targetNode) {
      return null;
    }
    return getEdgeParams(sourceNode, targetNode);
  }, [sourceNode, targetNode]);

  const edgePath = useMemo(() => {
    if (!edgeParams) {
      return '';
    }
    const { sx, sy, tx, ty, sourcePos, targetPos } = edgeParams;
    const [path] = getBezierPath({
      sourceX: sx,
      sourceY: sy,
      sourcePosition: sourcePos,
      targetPosition: targetPos,
      targetX: tx,
      targetY: ty,
    });
    return path;
  }, [edgeParams]);

  if (!edgeParams) {
    return null;
  }

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      style={style}
    />
  );
};

export default FloatingEdge;