'use client'
import React, { useState } from 'react';

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = async (copyText: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 1000);
    } catch (err) {
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        onClick={() => copyToClipboard(text)}
        style={{ cursor: 'pointer' }}
      >
      </span>
      <div style={{
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translate(-50%, -8px)',
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'black',
        fontSize: '12px',
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        opacity: showTooltip ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none' 
      }}>
        Copiado!
      </div>
    </div>
  );
};

export default CopyToClipboard;