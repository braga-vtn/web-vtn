import React, { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import NextImage from 'next/image';

interface ImageRendererProps {
  src: string;
  alt: string;
}

const ImageRenderer: React.FC<ImageRendererProps> = ({ src, alt }) => {
  const [naturalWidth, setNaturalWidth] = useState<number>(16);
  const [naturalHeight, setNaturalHeight] = useState<number>(9);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setNaturalWidth(img.width);
      setNaturalHeight(img.height);
    };
  }, [src]);

  return (
    <div className="w-72 mx-auto flex justify-center items-center h-full">
      <AspectRatio ratio={naturalWidth / naturalHeight}>
        <NextImage src={src} alt={alt} layout="fill" className="rounded-md object-cover" />
      </AspectRatio>
    </div>
  );
};

export default ImageRenderer;
