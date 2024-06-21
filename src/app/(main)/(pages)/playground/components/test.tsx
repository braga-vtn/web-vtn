import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import CodeRenderer from './CodeRenderer';
import ChartRenderer from './ChartRenderer';
import ImageRenderer from './ImageRenderer';

interface MathRendererProps {
  text: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ text }) => {
  const regexCodeBlock = /```([^`]+)```/g;
  const regexChartBlock = /~~~\s*([\s\S]*?)~~~\n?/g;
  const regexImageBlock = /!\[([^\]]*)\]\(([^)]+)\)/g;

  const renderMath = (text: string) => {
    const regexBlock = /\\\[(.*?)\\\]/g;
    const regexInline = /\\\((.*?)\\\)/g;

    const renderPart = (part: string) => {
      try {
        return katex.renderToString(part, { throwOnError: false });
      } catch (e) {
        return part;
      }
    };

    const processText = (text: string, regex: RegExp, className: string) =>
      text.split(regex).map((segment, index) =>
        index % 2 === 0
          ? segment
          : (
            <span
              key={`${className}-${index}`}
              className={className}
              dangerouslySetInnerHTML={{ __html: renderPart(segment) }}
            />
          )
      );

    const processImageBlocks = (segment: string) => {
      const matches = Array.from(segment.matchAll(regexImageBlock));
      return matches.flatMap((match, imageIndex) => {
        const [, alt, src] = match;
        return (
          <div key={`image-${imageIndex}`} className="image-block mt-4">
            <ImageRenderer src={src} alt={alt} />
          </div>
        );
      });
    };

    const parts = text.split(regexCodeBlock).flatMap((part, index) => {
      if (index % 2 === 0) {
        return processText(part, regexBlock, 'katex-block').flatMap((part, index) =>
          typeof part === 'string'
            ? processText(part, regexInline, 'katex-inline')
            : part
        ).flatMap((part, index) =>
          typeof part === 'string'
            ? part.split(regexChartBlock).flatMap((segment, subIndex) => {
              if (subIndex % 2 === 0) {
                return processImageBlocks(segment);
              } else {
                try {
                  const chartData = JSON.parse(segment);
                  return (
                    <div key={`chart-${index}-${subIndex}`} className="chart-block mt-4">
                      <ChartRenderer data={chartData} />
                    </div>
                  );
                } catch (e) {
                  return segment;
                }
              }
            })
            : [part]
        );
      } else {
        const language = detectCodeLanguage(part);

        return (
          <div key={`code-${index}`} className="code-block mt-4">
            <CodeRenderer code={part.trim()} language={language} />
          </div>
        );
      }
    });

    return parts.flat();
  };

  return <>{renderMath(text)}</>;
};

const detectCodeLanguage = (code: string): string => {
  if (code.startsWith('def ') || code.includes('import ') || code.includes('print(')) {
    return 'python';
  }

  if (code.includes('function ') || code.includes('console.log') || code.includes('var ') || code.includes('let ') || code.includes('const ')) {
    return 'javascript';
  }

  if (code.includes('#include') && code.includes('int main(')) {
    return 'c';
  }

  if (code.includes('#include') && code.includes('std::') && code.includes('int main(')) {
    return 'cpp';
  }

  if (code.includes('class ') && code.includes('public static void main(')) {
    return 'java';
  }

  return 'python';
};

export default MathRenderer;
