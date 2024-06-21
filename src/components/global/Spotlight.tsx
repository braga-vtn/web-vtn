import React from "react";
import { cn } from '@/lib/utils'

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function SpotlightPreview() {
  return (
    <div className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-transparent relative overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Vistune. <br /> O seu futuro
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Uma startup <strong>brasileira</strong> com um desenvolvimento audacioso de tecnologias de <strong>Deep Learning.</strong></p>
        <p className="mt-10 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
          <a href="#">Joint Ventures</a> <br />
          <a href="#">Vistune Tools</a> <br />
          <a href="#">Biblioteca de ferramentas</a> <br />
          <a href="#">Termos e Políticas</a> <br />
          <a href="#">Suporte</a> <br />
        </p>
      </div>
    </div>

  );
}


export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
