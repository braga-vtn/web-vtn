import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaRendererProps {
  text: string;
}

const MathFormulaRenderer: React.FC<MathFormulaRendererProps> = ({ text }) => {
  const regex = /(\\\\\[.*?\\\])|(\\\(.*?\\\))/gs;

  const renderLatex = (latex: string, displayMode: boolean) => {
    try {
      return katex.renderToString(latex, { displayMode, throwOnError: false });
    } catch (error) {
      return latex;
    }
  };

  const processText = (text: string): Array<string | React.ReactNode> => {
    const parts = [];
    let lastIndex = 0;

    text.replace(regex, (match, block, inline, offset) => {
      if (lastIndex !== offset) {
        parts.push(text.slice(lastIndex, offset));
      }

      const isBlock = !!block;
      const latex = isBlock ? block.slice(2, -2) : inline.slice(2, -1);

      const renderedHTML = renderLatex(latex, isBlock);
      parts.push(
        <span key={offset} className={isBlock ? 'block' : 'inline-block'} dangerouslySetInnerHTML={{ __html: renderedHTML }} />
      );

      lastIndex = offset + match.length;
      return '';
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const processedText = processText(text);
  return (
    <div>
      {processedText.map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}
    </div>
  );
};

export default MathFormulaRenderer;