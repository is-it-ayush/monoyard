import { ReactNode } from 'react';
import { cn } from '@src/lib/utils';

interface TextProps {
  children: ReactNode;
  heading?: boolean;
  headingSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Text = ({
  children,
  heading = false,
  headingSize,
  className,
}: TextProps) => {
  if (heading) {
    switch (headingSize) {
      case 'h1':
        return (
          <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
        );
      case 'h2':
        return (
          <h2 className={cn('text-xl font-bold', className)}>{children}</h2>
        );
      case 'h3':
        return (
          <h3 className={cn('text-lg font-bold', className)}>{children}</h3>
        );
      case 'h4':
        return (
          <h4 className={cn('text-base font-bold', className)}>{children}</h4>
        );
      case 'h5':
        return (
          <h5 className={cn('text-sm font-bold', className)}>{children}</h5>
        );
      case 'h6':
        return (
          <h6 className={cn('text-xs font-bold', className)}>{children}</h6>
        );
      default:
        return (
          <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
        );
    }
  }
  return <p className={cn('text-base', className)}>{children}</p>;
};
