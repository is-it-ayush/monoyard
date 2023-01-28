import { ReactNode } from 'react';

export const Container = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="m-5 flex flex-col">
      <h1 className="my-3 flex text-xl font-light text-black">{title}</h1>
      <div className="flex items-center justify-center rounded-[5px] border-2 border-gray-200 p-5">
        {children}
      </div>
    </div>
  );
};
