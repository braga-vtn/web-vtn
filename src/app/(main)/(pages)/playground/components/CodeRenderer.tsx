import React from 'react';
import Highlight from 'react-highlight.js';
import 'highlight.js/styles/vs2015.css';

interface CodeRendererProps {
  code: string;
  language: string;
}

const CodeRenderer: React.FC<CodeRendererProps> = ({ code, language }) => {
  return (
    <Highlight language={"python"} className="bg-[#1e1e1e] text-white rounded-md p-2 overflow-auto">
      {code}
    </Highlight>
  );
};

export default CodeRenderer;