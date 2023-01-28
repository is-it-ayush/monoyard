import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'flex px-3 py-2 border-2 w-full items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed my-2 transition-colors duration-200',
  {
    variants: {
      style: {
        base: 'text-black border-gray hover:border-black',
      },
    },
    defaultVariants: {
      style: 'base',
    },
  }
);

interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={ButtonStyles(props)}>
      {children}
    </button>
  );
};
