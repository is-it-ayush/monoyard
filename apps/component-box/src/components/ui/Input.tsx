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
        rose: 'border-rose-300 dark:border-rose-700 focus:border-rose-500 dark:focus:border-rose-500 text-rose-900 dark:text-rose-100 focus:ring-rose-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-rose-400 dark:focus:ring-offset-rose-900 dark:disabled:opacity-50',
        amber:
          'border-amber-300 dark:border-amber-700 focus:border-amber-500 dark:focus:border-amber-500 text-amber-900 dark:text-amber-100 focus:ring-amber-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-amber-400 dark:focus:ring-offset-amber-900 dark:disabled:opacity-50',
        yellow:
          'border-yellow-300 dark:border-yellow-700 focus:border-yellow-500 dark:focus:border-yellow-500 text-yellow-900 dark:text-yellow-100 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-900 dark:disabled:opacity-50',
        red: 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 text-red-900 dark:text-red-100 focus:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-red-400 dark:focus:ring-offset-red-900 dark:disabled:opacity-50',
      },
    },
    defaultVariants: {
      style: 'base',
    },
  }
);

interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'style'>,
    VariantProps<typeof InputStyles> {
  type?: 'text' | 'password' | 'email' | 'number';
  error?: string;
}

export const Input = (props: InputProps) => {
  const { error, type = 'text', style, ...rest } = props;

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
          type={getType()}
          className={cn(
            error && error?.length > 0
              ? InputStyles({ style: 'red' })
              : InputStyles({ style })
          )}
          {...rest}
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
        <span className="text-xs text-red-300 dark:text-red-700">{error}</span>
      )}
    </div>
  );
};
