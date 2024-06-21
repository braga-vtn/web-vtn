import * as React from "react";

import { cn } from "@/lib/utils";

export type Textarea2Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea2 = React.forwardRef<HTMLTextAreaElement, Textarea2Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] max-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea2.displayName = "Textarea2";

export { Textarea2 };