import { type NextPage } from 'next';
import { makeData, Person } from '../utils/data';

import { personDefinition } from '../utils/table.definitions';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';


const Home: NextPage = () => {
  const [data, setData] = useState<Person[]>([]);
  useEffect(() => {
    (async () => {
      const data = await makeData();
      setData(data);
    })();

    return () => {
      console.log('unmounting');
    };
  }, []);

  const tableInstance = useReactTable({
    data,
    columns: personDefinition,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5">
      <div className="my-5 flex">
        <input
          className="w-full border-2 border-violet-300 p-2 text-violet-700 outline-none transition-colors duration-200 focus:border-violet-500"
          placeholder="Search..."></input>
      </div>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      colSpan={header.colSpan}
                      key={header.id}
                      className="border-2 border-violet-300 p-2 text-violet-700 transition-colors duration-200 hover:bg-violet-200">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
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
                  return (
                    <td key={cell.id} className="border-2 p-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-5 flex flex-row items-center justify-around gap-10 border-2 p-5">
        <div className="flex flex-row gap-5">
          <button
            className="border-2 border-white p-2 text-violet-700 transition-colors duration-200 hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              tableInstance.setPageIndex(0);
            }}
            disabled={!tableInstance.getCanPreviousPage()}>
            First Page
          </button>
          <button
            className="border-2 border-white p-2 text-violet-700 transition-colors duration-200 hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              tableInstance.previousPage();
            }}
            disabled={!tableInstance.getCanPreviousPage()}>
            Previous Page
          </button>
          <button
            className="border-2 border-white p-2 text-violet-700 transition-colors duration-200 hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              tableInstance.nextPage();
            }}
            disabled={!tableInstance.getCanNextPage()}>
            Next Page
          </button>
          <button
            className="border-2 border-white p-2 text-violet-700 transition-colors duration-200 hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              tableInstance.setPageIndex(tableInstance.getPageCount() - 1);
            }}
            disabled={!tableInstance.getCanNextPage()}>
            Last Page
          </button>
        </div>
        <span className="h-8 w-1 border-r-2 border-violet-800" />
        <div className="flex flex-row gap-5">
          <span className="p-2 text-violet-500">
            {`Page ${
              tableInstance.getState().pagination.pageIndex + 1
            } of ${tableInstance.getPageCount()}`}
          </span>
          <select
            className="border-2 border-violet-300 p-2 text-violet-700 outline-none transition-colors duration-200 hover:bg-violet-200"
            value={tableInstance.getState().pagination.pageSize}
            onChange={(e) => {
              tableInstance.setPageSize(Number(e.target.value));
            }}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </main>
  );
};

export default Home;
