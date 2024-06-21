import React from 'react';

interface SvgOpenAIProps {
  width?: string;
  height?: string;
  fill?: string;
}

const SvgGemini: React.FC<SvgOpenAIProps> = (props) => {
  const { width = "1.2rem", height = "1.2rem", fill = "currentColor" } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={fill} d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68q.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58a12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68q-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96q2.19.93 3.81 2.55t2.55 3.81" />
    </svg>
  );
}

export default SvgGemini;