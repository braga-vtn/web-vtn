import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea2, Textarea2Props } from './textArea2';

const FloatingTextArea = React.forwardRef<HTMLTextAreaElement, Textarea2Props>(
  ({ className, ...props }, ref) => {
    return <Textarea2 rows={1} placeholder=" " className={cn('peer', className)} ref={ref} {...props} />;
  }
);
FloatingTextArea.displayName = 'FloatingTextArea';

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = 'FloatingLabel';

type FloatingLabelTextAreaProps = Textarea2Props & { label?: string };

const FloatingLabelTextArea = React.forwardRef<
  React.ElementRef<typeof FloatingTextArea>,
  React.PropsWithoutRef<FloatingLabelTextAreaProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingTextArea ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelTextArea.displayName = 'FloatingLabelTextArea';

export { FloatingTextArea, FloatingLabel, FloatingLabelTextArea };