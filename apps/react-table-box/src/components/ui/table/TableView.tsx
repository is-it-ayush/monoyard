import React, { useEffect, useRef } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type ColumnResizeMode,
  type ColumnFiltersState,
  type ColumnOrderState,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { DebouncedInput } from '../DebouncedInput';
import { fuzzyFilter } from './SortingLogic';
import { AnimatePresence, motion } from 'framer-motion';

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

const TableView = <TData extends object>({ data, columns }: TableProps<TData>) => {
  /**
   * This is the state that is managed by the table.
   * - The columnFilters state is used to control the filters that are applied to the table. We might not need this state if we can get the filters globally from the table. Will decide later.
   * - The globalFilter state is used to control the global filter that is applied to the table.
   * - The columnVisibility state is used to control the visibility of columns.
   * - The columnOrder state is used to control the order of columns.
   * - The columnResizeMode state is used to control how the columns resize. onChange will resize the columns as the user drags the resize handle. onDoubleClick will resize the column when the user double clicks the resize handle.
   */
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([]);
  const [columnResizeMode] = React.useState<ColumnResizeMode>('onChange');

  const table = useReactTable({
    columns,
    data,
    columnResizeMode,
    state: {
      columnVisibility,
      columnOrder,
      columnFilters,
      globalFilter,
    },

    // Filters
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,

    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),

    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),

    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  const randomizeCols = () => {
    table.setColumnOrder(
      table
        .getAllLeafColumns()
        .map((column) => column.id)
        .sort(() => Math.random() - 0.5)
    );
  };

  //
  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="flex max-w-full flex-col gap-5 overflow-y-hidden overflow-x-scroll">
      <h1 className="my-5 font-mono text-4xl font-bold">Table View Test</h1>
      {/** These are the extra controls that could be enabled and disabled by user. (Properties will be passed down as props hopefully) */}
      <div>
        <div className="flex flex-row px-1">
          <div>
            <DebouncedInput
              debounce={200}
              value={globalFilter ?? ''}
              onChange={(value) => setGlobalFilter(String(value))}
              className="font-lg border-3 mx-3 min-w-[500px] p-3 px-5 outline-none focus:border-[#CAD37E] focus:outline-none focus:ring focus:ring-[#CAD37E] focus:ring-opacity-50"
              placeholder="Search all columns..."
            />
          </div>
          <div className="flex flex-row">
            <button
              className="border-2 border-[#F2F5D0] px-5 text-[#3B4200] hover:bg-[#F2F5D0] focus:border-[#CAD37E] focus:outline-none focus:ring focus:ring-[#CAD37E] focus:ring-opacity-50"
              onClick={table.getToggleAllColumnsVisibilityHandler()}>
              Hide Table
            </button>
          </div>
        </div>
      </div>
      {/** This is the main table component. Will be extracted later and this fragment will be turned into a component.*/}
      <div className="max-w-screen">
        <table className="w-full">
          <thead className="relative box-border border-2 text-center font-semibold text-[#3B4200]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="border-2 border-[#F2F5D0] shadow-md hover:bg-[#F2F5D0]"
                    key={header.id}
                    {...{
                      colSpan: header.colSpan,
                      style: {
                        position: 'relative',
                        height: '50px',
                        width: header.getSize(),
                      },
                    }}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={header.column.getCanSort() ? 'flex cursor-pointer select-none flex-row pl-5' : ''}
                        onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {/** These are the sorting icons for headers that are !placeholder && sortable. Icons are direct svg's from Heroicons. */}
                        <div className="flex items-center justify-center px-2">
                          {{
                            asc: <ArrowUpIcon className="top-[10px] h-[16px] w-[16px] transition-all duration-500" />,
                            desc: (
                              <ArrowDownIcon className="top-[10px] h-[16px] w-[16px] transition-all duration-500" />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </div>
                    )}

                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}></div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            <AnimatePresence mode="sync">
              {table.getRowModel().rows.map((row) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-2 border-[#F2F5D0] bg-[#F9FBE9] transition-colors duration-100 hover:cursor-pointer hover:bg-[#CAD37E]">
                  {row.getVisibleCells().map((cell) => (
                    <motion.td
                      key={cell.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-[40px] pl-3"
                      {...{
                        style: {
                          width: cell.column.getSize(),
                        },
                      }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </motion.td>
                  ))}
                </motion.tr>
              ))}
              {
                // This is the empty row that will be displayed when there are no rows in the table.
                table.getRowModel().rows.length === 0 && (
                  <tr className="border-2 border-[#F2F5D0] bg-[#F9FBE9] hover:cursor-pointer hover:bg-[#CAD37E]">
                    <td className="h-[40px] pl-3" colSpan={table.getAllLeafColumns().length}>
                      <div className="flex items-center justify-center">
                        <h6 className="text-[#3B4200]">The data you're looking for is not found.</h6>
                      </div>
                    </td>
                  </tr>
                )
              }
            </AnimatePresence>
          </tbody>
          {/** This is the footer. Maybe a enableFooter prop? */}
          {/* <tfoot className="border-2 font-normal italic text-[#CAD37E]">
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>

        {/** These are the pagination options */}
        {table.getCanNextPage() || table.getCanPreviousPage() || table.getState().pagination.pageSize > 10 ? (
          <div className="flex flex-row items-center justify-between border-2 p-5">
            <button
              className="transition-color cursor-pointer border-2 p-3 duration-200 hover:bg-[#C99A2E] hover:text-white"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}>
              <ChevronDoubleLeftIcon className="h-[20px] w-[20px]" />
            </button>
            <button
              className="transition-color cursor-pointer border-2 p-3 duration-200 hover:bg-[#C99A2E] hover:text-white"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              <ChevronLeftIcon className="h-[20px] w-[20px]" />
            </button>
            <button
              className="transition-color cursor-pointer border-2 p-3 duration-200 hover:bg-[#C99A2E] hover:text-white"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              <ChevronRightIcon className="h-[20px] w-[20px]" />
            </button>
            <button
              className="transition-color cursor-pointer border-2 p-3 duration-200 hover:bg-[#C99A2E] hover:text-white"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}>
              <ChevronDoubleRightIcon className="h-[20px] w-[20px]" />
            </button>
            <span className="flex flex-row items-center gap-1">
              <div className="text-[#808646]">Page</div>
              <strong className="text-[#555D09]">
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1 text-[#808646]">
              Show Page
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                min={1}
                max={table.getPageCount()}
                className="font-lg mx-3 min-w-[20px] border-2 border-gray-300 p-3 outline-none focus:border-[#CAD37E] focus:outline-none focus:ring focus:ring-[#CAD37E] focus:ring-opacity-50"
              />
            </span>
            <select
              className="font-lg mx-3 min-w-[100px] border-2 border-gray-300 p-3 outline-none focus:border-[#CAD37E] focus:outline-none focus:ring focus:ring-[#CAD37E] focus:ring-opacity-50"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TableView;
