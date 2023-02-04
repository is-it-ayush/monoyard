import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@src/lib/utils';

const ProgressStyles = cva(
  'h-full w-full flex-1 transition-all rounded-[5px] ',
  {
    variants: {
      state: {
        default:
          'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900',
        error:
          'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-red-800 to-rose-400',
        warning:
          'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-900 via-amber-800 to-yellow-400',
      },
      indeterminate: {
        true: 'w-[50%] animate-indeterminate relative top-0 left-0',
        false: '',
      },
      thickness: {
        medium: 'h-2',
        small: 'h-1',
      },
    },
    defaultVariants: {
      state: 'default',
      indeterminate: false,
      thickness: 'medium',
    },
  }
);

interface ProgressProps
  extends React.ComponentPropsWithRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof ProgressStyles> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>((props, ref) => {
  const { state, thickness, indeterminate, className, value, ...rest } = props;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative w-full overflow-hidden bg-slate-200 dark:bg-black/5',
        className,
        thickness
      )}
      {...rest}>
      <ProgressPrimitive.Indicator
        className={cn(
          ProgressStyles({
            state,
            thickness,
            indeterminate,
          }),
          ''
        )}
        style={{
          transform: !indeterminate
            ? `translateX(-${100 - (value || 0)}%)`
            : ``,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
