import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@src/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const hasRange = Array.isArray(props.defaultValue || value);
  const thumbsArray = hasRange
    ? props.defaultValue || value
    : [props.defaultValue || value];

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full grow touch-none select-none items-center data-[orientation="horizontal"]:h-[15px] data-[orientation="vertical"]:w-[8px] data-[orientation="vertical"]:flex-col',
        className
      )}
      {...props}>
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-white/5">
        <SliderPrimitive.Range className="absolute bg-black data-[orientation='horizontal']:h-full data-[orientation='vertical']:w-full dark:bg-white" />
      </SliderPrimitive.Track>
      {thumbsArray
        ? thumbsArray.map((_, i) => {
            return (
              <SliderPrimitive.Thumb
                key={i}
                className="block h-5 w-5 rounded-full border-2 border-black bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-white dark:bg-white dark:focus:ring-white dark:focus:ring-offset-black"
              />
            );
          })
        : null}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
