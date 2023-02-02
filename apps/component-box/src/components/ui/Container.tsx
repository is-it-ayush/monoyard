import { ReactNode } from 'react';
import { cn } from '@src/lib/utils';

export const Container = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="m-5 flex flex-col">
      <h1 className="my-3 flex text-xl font-light text-black dark:text-white ">
        {title}
      </h1>
      <div className="relative mt-5 rounded-sm">
        <div className="bg-400 absolute inset-0.5 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 opacity-75 blur-lg"></div>
        <div
          className={cn(
            'relative flex items-center justify-center bg-white p-5 dark:bg-black',
            className
          )}>
          {children}
        </div>
      </div>
    </div>
  );
};
