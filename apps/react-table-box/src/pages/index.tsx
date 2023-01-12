import { type NextPage } from 'next';
import { api } from '../utils/api';
import ListView from '../components/ui/ListView';
import { getColumnData, getColumnDefinations } from '../components/ui/table/ColumnDefinations';
import TableView from '../components/ui/table/TableView';
import React from 'react';
import type { Person, DriverGroup, Instrument } from '@prisma/client';
import type { ColumnDef } from '@tanstack/react-table';

const Home: NextPage = () => {
  const [tab, setTab] = React.useState(false);
  const [unit, setUnit] = React.useState<'person' | 'driverGroup' | 'instrument'>('person');

  const [columnType, setColumnType] = React.useState<ColumnDef<object, unknown>[]>([]);
  const [dataType, setDataType] = React.useState<object[]>([]);

  // Mutations
  const person = api.mocks.addPersonData.useMutation();
  const driverGroup = api.mocks.addDriverGroupData.useMutation();
  const instrument = api.mocks.addInstrumentData.useMutation();

  const addMockData = async () => {
    if (unit === 'person') {
      await person.mutateAsync({
        size: 10,
      });
    } else if (unit === 'driverGroup') {
      await driverGroup.mutateAsync({
        size: 10,
      });
    } else if (unit === 'instrument') {
      await instrument.mutateAsync({
        size: 10,
      });
    }
    req.refetch();
  };

  const req = api.mocks.getData.useQuery({
    type: unit,
  });

  React.useEffect(() => {
    if (req.isSuccess) {
      
      const res = req.data as Person[] | DriverGroup[] | Instrument[];
      const columnType = getColumnDefinations(res) as ColumnDef<object>[];
      const dataType = getColumnData(res);

      if (columnType && dataType) {
        setColumnType(columnType);
        setDataType(dataType);
      }
    }
  }, [req.isSuccess, req.isFetching]);

  return (
    <main className="flex min-h-screen flex-col justify-center p-5">
      <div className="flex flex-row justify-center gap-5">
        <button onClick={() => setTab(!tab)} className="flex items-center justify-center bg-black p-3 text-white">
          Switch View
        </button>
        <button
          className="flex items-center justify-center border-2 border-black bg-white px-2 text-black"
          onClick={addMockData}>
          Add 10 Unit Mock Data
        </button>
        <select
          className="flex items-center justify-center bg-black p-3 text-white"
          onChange={(e) => setUnit(e.target.value as 'person' | 'driverGroup' | 'instrument')}>
          <option value="person">Person Unit</option>
          <option value="driverGroup">Driver Group Unit</option>
          <option value="instrument">Instrument Unit</option>
        </select>
      </div>
      {tab ? <TableView data={dataType} columns={columnType} /> : <ListView data={dataType} />}
    </main>
  );
};

export default Home;
