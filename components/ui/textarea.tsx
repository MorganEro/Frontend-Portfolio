import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive dark:aria-invalid:ring-destructive aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full bg-brand-orange-muted p-6 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
