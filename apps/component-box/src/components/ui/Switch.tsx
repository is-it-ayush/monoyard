import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@src/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-300 data-[state=checked]:bg-black dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900 dark:data-[state=unchecked]:bg-black/30 dark:data-[state=checked]:bg-white',
      className
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5 data-[state=unchecked]:bg-black data-[state=checked]:bg-white dark:data-[state=unchecked]:bg-white dark:data-[state=checked]:bg-black'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const SwitchLabel = ({
  label,
  className,
  htmlFor,
}: {
  label?: string;
  className?: string;
  htmlFor?: string;
}) => {
  return (
    <label
      className={cn('text-black dark:text-white', className)}
      htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export { Switch, SwitchLabel };
