import { type NextPage } from 'next';
import { data } from '../utils/data';

import { personDefinition } from '../utils/table.definitions';
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';

const Home: NextPage = () => {
  const tableInstance = useReactTable({
    data,
    columns: personDefinition,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th colSpan={header.colSpan} key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Home;
