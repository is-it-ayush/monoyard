import { Benchmark } from "../../components/benchmark";
import { FiClock } from "react-icons/fi";
import { TiMediaFastForward } from "react-icons/ti";

export default async function Page() {
  // SSR Fetching

  //   <div className="flex flex-col">
  //     <div>Page is Created at: {new Date().getTime()}</div>

  //     <Benchmark>NextJS13 Perf</Benchmark>

  //     <pre>
  //       <code>{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   </div>
  // );

  return (
    <div className="font-poppins flex h-screen items-center justify-center">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <div className="m-5 flex min-w-[150px] flex-row rounded-lg p-2 duration-200 hover:bg-gray-200">
            <FiClock className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">Requested At</h1>
              <h1 className="flex text-sm">{new Date().getTime()}</h1>
            </div>
          </div>
          <div className="m-5 flex min-w-[150px] flex-row rounded-lg p-2 duration-200 hover:bg-gray-200">
            <TiMediaFastForward className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">RTRT</h1>
              <Benchmark>NextJS13 Perf</Benchmark>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-5 w-full text-center">
        <div className="flex flex-col justify-evenly lg:flex-row">
          <h1>RTRT: Request To Render Time</h1>
          <h1>SSR: Server Side Rendering</h1>
        </div>
      </footer>
    </div>
  );
}
