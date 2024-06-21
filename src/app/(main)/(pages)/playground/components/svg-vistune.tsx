import React from 'react';

interface SvgOpenAIProps {
  width?: string;
  height?: string;
  fill?: string;
}

const SvgVistune: React.FC<SvgOpenAIProps> = (props) => {
  const { width = "1.2rem", height = "1.2rem", fill = "currentColor" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7" /></svg>
  );
}

export default SvgVistune;