import { Person } from './data';
import { ColumnDef } from '@tanstack/react-table';

export const personDefinition: ColumnDef<Person>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Phone',
    accessorKey: 'phone',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
  {
    header: 'City',
    accessorKey: 'city',
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
  {
    header: 'Zip',
    accessorKey: 'zip',
  },
];
