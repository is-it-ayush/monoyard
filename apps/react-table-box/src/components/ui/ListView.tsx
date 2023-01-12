import type { Person, DriverGroup, Instrument } from '@prisma/client';
import { isPersonArray, isDriverGroupArray, isInstrumentArray } from './table/TypeGaurds';
import { UserIcon } from '@heroicons/react/24/outline';

interface ListViewProps<TData> {
  data: TData[];
}

const ListView = <TData extends object>({ data }: ListViewProps<TData>) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="my-5 font-mono text-4xl font-bold">List View Test</h1>
      {data.length > 0 ? (
        isPersonArray(data) ? (
          data.map((person: Person) => {
            return (
              <div
                className="flex cursor-pointer flex-row items-center gap-2 border-2 border-[#F2F5D0] p-5 transition-colors duration-100 hover:bg-[#F2F5D0]"
                key={person.id}>
                <div className="flex p-5">
                  <UserIcon className="h-10 w-10 text-[#555D09]" />
                </div>
                <div className="flex flex-col">
                  <h2 className="flex text-xl font-semibold ">
                    {person.first_name} {person.last_name}
                  </h2>
                  <h6 className="flex text-gray-500">{person.email}</h6>
                </div>
              </div>
            );
          })
        ) : isDriverGroupArray(data) ? (
          data.map((driverGroup: DriverGroup) => {
            return (
              <div className="flex flex-col gap-2 rounded-md border-2 border-gray-300 p-5" key={driverGroup.id}>
                <h2 className="text-xl">{driverGroup.name}</h2>
                <h6 className="truncate">{driverGroup.description}</h6>
              </div>
            );
          })
        ) : isInstrumentArray(data) ? (
          data.map((instrument: Instrument) => {
            return (
              <div className="flex flex-col gap-2 rounded-md border-2 border-gray-300 p-5" key={instrument.id}>
                <h2 className="text-xl">{instrument.name}</h2>
                <div className="flex flex-row divide-x-2">
                  <h6 className="truncate">{instrument.network_type}</h6>
                  <h6 className="truncate">{instrument.hardware_id}</h6>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col gap-5">
            {Array(10)
              .fill(0)
              .map((_, i) => {
                return (
                  <div
                    className="flex min-w-[300px] animate-pulse flex-col gap-2 rounded-md border-2 border-gray-300 p-5"
                    key={i}>
                    <h2 className="h-4 w-1/2 bg-gray-300 text-xl"></h2>
                    <h6 className="h-4 w-1/2 bg-gray-300"></h6>
                  </div>
                );
              })}
          </div>
        )
      ) : null}
    </div>
  );
};

// // https://github.com/vercel/next.js/issues/42292
// export async function getServerSideProps() {
//   const data = (await getMockData("person", 10)) as Person[];

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default ListView;
