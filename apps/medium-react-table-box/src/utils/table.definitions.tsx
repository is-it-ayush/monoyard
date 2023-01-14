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
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Company',
    accessorKey: 'company',
  },
  {
    header: 'Twitter',
    accessorKey: 'twitter',
  },
];
