import { useEditor } from '@/providers/editor-provider'
import React, { CSSProperties, useMemo } from 'react'
import { Handle, HandleProps } from 'reactflow'

// Função para gerar um ID único baseado em Math.random
const generateUniqueId = () => `handle-${Math.random().toString(36).substr(2, 9)}`;

type Props = HandleProps & { style?: CSSProperties }

const CustomHandle = (props: Props) => {
  const { state } = useEditor()

  // Gera um ID único ou usa o ID passado como props
  const handleId = useMemo(() => props.id || generateUniqueId(), [props.id]);

  return (
    <Handle
      {...props}
      id={handleId} // Use o ID gerado ou o ID passado como props
      isValidConnection={(e) => {
        const sourcesFromHandleInState = state.editor.edges.filter(
          (edge) => edge.source === e.source
        ).length
        const sourceNode = state.editor.elements.find(
          (node) => node.id === e.source
        )
        //target
        const targetFromHandleInState = state.editor.edges.filter(
          (edge) => edge.target === e.target
        ).length

        if (targetFromHandleInState === 1) return false
        if (sourcesFromHandleInState < 1) return true
        return false
      }}
      style={{ left: -9, width: 18, height: 18, zIndex: 100 }}
      className="dark:bg-neutral-800"
    />
  )
}

export default CustomHandle