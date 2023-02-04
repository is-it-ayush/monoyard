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
        default:
          'border-purple-300 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-500 text-purple-900 dark:text-purple-100 focus:ring-purple-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-purple-400 dark:focus:ring-offset-purple-900 dark:disabled:opacity-50',
        slate:
          'border-slate-300 dark:border-slate-700 focus:border-slate-500 dark:focus:border-slate-500 text-slate-900 dark:text-slate-100 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:disabled:opacity-50',
        yellow:
          'border-yellow-300 dark:border-yellow-700 focus:border-yellow-500 dark:focus:border-yellow-500 text-yellow-900 dark:text-yellow-100 focus:ring-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-900 dark:disabled:opacity-50',
        red: 'border-red-300 dark:border-red-700 focus:border-red-500 dark:focus:border-red-500 text-red-900 dark:text-red-100 focus:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-red-400 dark:focus:ring-offset-red-900 dark:disabled:opacity-50',
      },
    },
    defaultVariants: {
      style: 'default',
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
      <div
        className={cn(
          error && error?.length > 0
            ? InputStyles({ style: 'red' })
            : InputStyles({ style }),
          'flex w-full flex-row'
        )}>
        <input
          className="w-full rounded-md border border-white bg-transparent px-0 py-2 pr-2 outline-none ring-0 focus:border-white focus:outline-none focus:ring-0 dark:border-black dark:focus:border-black"
          type={getType()}
          {...rest}
        />
        {type === 'password' ? (
          <button
            className="flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:hover:bg-gray-800/30 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900"
            type="button"
            onClick={() => {
              toggleShowPassword();
            }}>
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        ) : null}
      </div>
      {error && error.length > 0 && (
        <span className="text-xs text-red-900 dark:text-red-700">{error}</span>
      )}
    </div>
  );
};
