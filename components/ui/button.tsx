'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 uppercase tracking-widest',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-darkblue text-white hover:bg-brand-orange disabled:bg-brand-lightgrey disabled:text-brand-graydark',
        secondary:
          'border border-brand-graydark text-brand-graydark hover:bg-brand-graydark hover:text-white disabled:border-brand-lightgrey disabled:bg-transparent disabled:text-brand-lightgrey',
      },
      size: {
        default: 'px-6 py-3 text-sm',
        sm: 'px-3 py-1.5 text-sm',
        withIcon: 'text-sm',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
