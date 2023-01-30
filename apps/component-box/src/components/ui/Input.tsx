import React, { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { cn } from '@src/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const InputStyles = cva(
  'flex h-10 w-full rounded-md border bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none',
  {
    variants: {
      style: {
        base: 'border-gray-300 dark:border-gray-700 focus:border-gray-500 dark:focus:border-gray-500 text-gray-900 dark:text-gray-100 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:disabled:opacity-50',
        primary:
          'border-primary-300 dark:border-primary-700 focus:border-primary-500 dark:focus:border-primary-500 text-primary-900 dark:text-primary-100 focus:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary-400 dark:focus:ring-offset-primary-900 dark:disabled:opacity-50',
        secondary:
          'border-secondary-300 dark:border-secondary-700 focus:border-secondary-500 dark:focus:border-secondary-500 text-secondary-900 dark:text-secondary-100 focus:ring-secondary-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-secondary-400 dark:focus:ring-offset-secondary-900 dark:disabled:opacity-50',
        info: 'border-info-300 dark:border-info-700 focus:border-info-500 dark:focus:border-info-500 text-info-900 dark:text-info-100 focus:ring-info-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-info-400 dark:focus:ring-offset-info-900 dark:disabled:opacity-50',
        error:
          'border-error-300 dark:border-error-700 focus:border-error-500 dark:focus:border-error-500 text-error-900 dark:text-error-100 focus:ring-error-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-error-400 dark:focus:ring-offset-error-900 dark:disabled:opacity-50',
      },
    },
    defaultVariants: {
      style: 'base',
    },
  }
);

interface InputProps extends VariantProps<typeof InputStyles> {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string | number;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: ClassValue;
  error?: string;
}

export const Input = ({
  disabled,
  onChange,
  placeholder,
  type = 'text',
  value,
  className,
  error,
  id,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const getType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  return (
    <div className="flex h-14 flex-col space-y-2">
      <div className="relative flex flex-row">
        <input
          id={id}
          className={cn(
            error && error.length > 0
              ? InputStyles({ style: 'error' })
              : InputStyles(props),
            className,
            'relative'
          )}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          type={getType()}
          value={value}
        />
        {type === 'password' ? (
          <button	
            className="absolute right-2 top-[50%] flex h-8 w-8 -translate-y-[50%] items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:hover:bg-gray-800/30 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
            type="button"
            onClick={() => {
              toggleShowPassword();
            }}>
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        ) : null}
      </div>
      {error && error.length > 0 && (
        <span className="text-error-300 dark:text-error-700 text-xs">
          {error}
        </span>
      )}
    </div>
  );
};
