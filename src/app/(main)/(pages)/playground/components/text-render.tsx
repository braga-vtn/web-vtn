import React from 'react';
import 'katex/dist/katex.min.css';
import CodeRenderer from './CodeRenderer';
import ChartRenderer from './ChartRenderer';
import MathFormulaRenderer from './MathFormulaRenderer';
import ImageRenderer from './ImageRenderer';

const MemoizedCodeRenderer = React.memo(CodeRenderer);
const MemoizedChartRenderer = React.memo(ChartRenderer);
const MemoizedMathFormulaRenderer = React.memo(MathFormulaRenderer);

const MemoizedImageRenderer = React.memo(ImageRenderer);

interface TextRendererProps {
    text: string;
}

const TextRenderer: React.FC<TextRendererProps> = ({ text }) => {
    const regexCodeBlock = /```([^`]+)```/g;
    const regexChartBlock = /~~~\s*([\s\S]*?)~~~\n?/g;
    const regexImageURL = /%%IMAGE%(.+?)%%IMAGE%/g;

    const renderContent = (text: string) => {
        const parts = text.split(regexCodeBlock).flatMap((part, index) => {
            if (index % 2 === 0) {
                const sections = part.split(regexChartBlock).flatMap((segment, subIndex) => {
                    if (subIndex % 2 === 0) {
                        const textsAndImages = segment.split(regexImageURL).flatMap((subSegment, segmentIndex) => {
                            if (segmentIndex % 2 === 0) {
                                return subSegment;
                            } else {
                                return (
                                    <div key={`image-${index}-${subIndex}-${segmentIndex}`} className="image-block mt-2">
                                        <MemoizedImageRenderer src={subSegment.trim()} alt={`Image at ${subSegment.trim()}`} />
                                    </div>
                                );
                            }
                        });
                        return textsAndImages;
                    } else {
                        try {
                            const chartData = JSON.parse(segment);
                            return (
                                <div key={`chart-${index}-${subIndex}`} className="chart-block  
                                my-2">
                                    <MemoizedChartRenderer data={chartData} />
                                </div>
                            );
                        } catch (e) {
                            return segment;
                        }
                    }
                });
                return sections;
            } else {
                const language = detectCodeLanguage(part);
                return (
                    <div key={`code-${index}`} className="code-block mt-2">
                        <MemoizedCodeRenderer code={part.trim()} language={language} />
                    </div>
                );
            }
        });

        return parts.flat().map((segment, index) =>
            typeof segment === 'string'
                ? <MemoizedMathFormulaRenderer key={`math-${index}`} text={segment} />
                : segment
        );

    };

    return <>{renderContent(text)}</>;
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

export default TextRenderer;