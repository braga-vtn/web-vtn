import React from "react";

interface GridBackgroundDemoProps {
  children: React.ReactNode;
}

export function GridBackgroundDemo({ children }: GridBackgroundDemoProps) {
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.45] bg-dot-black/[0.8] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Renderizando os filhos aqui */}
      <div>
        {children}
      </div>
    </div>
  );
}
