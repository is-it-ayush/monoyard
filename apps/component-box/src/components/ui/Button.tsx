import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'flex px-3 py-2 w-full items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed my-2 transition-colors duration-200',
  {
    variants: {
      style: {
        base: 'text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black',
      },
    },
    defaultVariants: {
      style: 'base',
    },
  }
);

interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, disabled = false, type = 'button', ...props }, ref) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        ref={ref}
        className={ButtonStyles(props)}>
        {children}
      </button>
    );
  }
);
