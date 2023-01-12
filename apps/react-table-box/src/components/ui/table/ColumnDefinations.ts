import type { Person, Instrument, DriverGroup } from '@prisma/client';
import type { ColumnDef } from '@tanstack/react-table';
import { isPersonArray, isInstrumentArray } from './TypeGaurds';
import { fuzzySort } from './SortingLogic';

// ------------------------------ Column Definitions ------------------------------
/**
 * These definitions are used to define the columns of the table.
 * They are used to create the columns and the data model for the table.
 * You need to define them for each table you create since it's not possible
 * to predict the data model at runtime as it is dynamic (Changes based on the user position)
 * Hence, it's impossible to create a generic column definition that can be used for all tables.
 *
 * @author is-it-ayush
 */
export const personDef: ColumnDef<Person>[] = [
  {
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [
      {
        header: 'First Name',
        footer: (props) => props.column.id,
        id: 'first_name',
        accessorKey: 'first_name',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Last Name',
        footer: (props) => props.column.id,
        id: 'last_name',
        accessorKey: 'last_name',
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => `${row.first_name} ${row.last_name}`,
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
      },
    ],
  },
  {
    header: 'Information',
    footer: (props) => props.column.id,
    columns: [
      {
        header: 'Age',
        footer: (props) => props.column.id,
        id: 'age',
        accessorKey: 'age',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Email',
        footer: (props) => props.column.id,
        id: 'email',
        accessorKey: 'email',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Username',
        footer: (props) => props.column.id,
        id: 'username',
        accessorKey: 'username',
      },
    ],
  },
];

export const instrumentDef: ColumnDef<Instrument>[] = [
  {
    header: 'Instrument',
    footer: (props) => props.column.id,
    columns: [
      {
        header: 'Name',
        footer: (props) => props.column.id,
        id: 'name',
        accessorKey: 'name',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Hardware Id',
        footer: (props) => props.column.id,
        id: 'hardware_id',
        accessorKey: 'hardware_id',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Network Type',
        footer: (props) => props.column.id,
        id: 'network_type',
        accessorKey: 'network_type',
      },
    ],
  },
];

export const driverGroupDef: ColumnDef<DriverGroup>[] = [
  {
    header: 'Driver Group',
    footer: (props) => props.column.id,
    columns: [
      {
        header: 'Name',
        footer: (props) => props.column.id,
        id: 'name',
        accessorKey: 'name',
      },
      {
        header: 'Description',
        footer: (props) => props.column.id,
        id: 'description',
        accessorKey: 'description',
      },
      {
        header: 'Folder Name',
        footer: (props) => props.column.id,
        id: 'folder_name',
        accessorKey: 'folder_name',
      },
    ],
  },
];

// ------------------------------ Dependent Utility Functions ------------------------------
/**
 * This function is used to get the column definitions for the data array from the pre-defined column definitions.
 * @param data The data array to check
 * @returns returns the column definitions for the data array from the pre-defined column definitions
 */
export const getColumnDefinations = (data: Person[] | Instrument[] | DriverGroup[]) => {
  return isPersonArray(data) ? personDef : isInstrumentArray(data) ? instrumentDef : driverGroupDef;
};
/**
 * This function is used to get the data array casted to the correct type.
 * @param data The data array to check
 * @returns returns the data array casted to the correct type
 */
export const getColumnData = (data: Person[] | Instrument[] | DriverGroup[]) => {
  return isPersonArray(data)
    ? (data as Person[])
    : isInstrumentArray(data)
    ? (data as Instrument[])
    : (data as DriverGroup[]);
};
