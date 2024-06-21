import React from 'react';
import { getBezierPath, Position, Node, XYPosition } from 'reactflow';
import { getEdgeParams } from '../../../_components/getEdgeParams';

interface NodeWithAbsolutePosition extends Node {
  positionAbsolute: XYPosition;
  width: number | null | undefined;
  height: number | null | undefined;
}

interface FloatingConnectionLineProps {
  toX: number;
  toY: number;
  fromPosition: Position;
  toPosition: Position;
  fromNode: NodeWithAbsolutePosition | null;
}

const FloatingConnectionLine: React.FC<FloatingConnectionLineProps> = ({ toX, toY, fromPosition, toPosition, fromNode }) => {
  if (!fromNode) {
    return null;
  }

  const safeFromNode = ensureSafeNode(fromNode);

  if (!safeFromNode) {
    return null;
  }

  const targetNode = createSafeTargetNode(toX, toY);

  const { sx, sy } = getEdgeParams(safeFromNode, targetNode);

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: fromPosition,
    targetPosition: toPosition,
    targetX: toX,
    targetY: toY
  });

  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        className="animated"
        d={edgePath}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke="#222"
        strokeWidth={1.5}
      />
    </g>
  );
};

function ensureSafeNode(node: NodeWithAbsolutePosition): SafeNodeWithAbsolutePosition | null {
  if (node.width == null || node.height == null) {
    return null;
  }
  return node as SafeNodeWithAbsolutePosition;
}

function createSafeTargetNode(toX: number, toY: number): SafeNodeWithAbsolutePosition {
  return {
    id: 'connection-target',
    width: 1,
    height: 1,
    positionAbsolute: { x: toX, y: toY },
    position: { x: 0, y: 0 },
    data: {},
    dragHandle: '',
    type: ''
  };
}

interface SafeNodeWithAbsolutePosition extends NodeWithAbsolutePosition {
  width: number;
  height: number;
}

export default FloatingConnectionLine;