import React, { useEffect, useState } from 'react';

type CopyToClipboardProps = {
  text: string;
};

const CopyText: React.FC<CopyToClipboardProps> = ({ text }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
    }
  };
  useEffect(() => {
    copyToClipboard(text);
  }, [text]);

  return (
    <span></span>
  );
};

export default CopyText;