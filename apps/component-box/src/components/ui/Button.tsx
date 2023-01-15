import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva('', {
  variants: {},
  defaultVariants: {},
});

interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, type = 'button', ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type} className={ButtonStyles(props)}>
      {children}
    </button>
  );
};
