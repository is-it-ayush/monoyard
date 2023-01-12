
import { Benchmark } from "../../components/benchmark";
import { FiClock } from "react-icons/fi";
import { TiMediaFastForward } from "react-icons/ti";


export default async function Page() {

  return (
    <div className="flex font-poppins h-screen justify-center items-center">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row m-5 p-2 hover:bg-gray-200 duration-200 rounded-lg min-w-[150px]">
            <FiClock className="flex text-3xl mx-2 place-self-center" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">Requested At</h1>
              <h1 className="flex text-sm">{new Date().getTime()}</h1>
            </div>
          </div>
          <div className="flex flex-row m-5 p-2 hover:bg-gray-200 duration-200 rounded-lg min-w-[150px]">
            <TiMediaFastForward className="flex text-3xl mx-2 place-self-center" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">RTRT</h1>
              <Benchmark>NextJS13 Perf</Benchmark>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-5 w-full text-center">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <h1>RTRT: Request To Render Time</h1>
          <h1>CSR: Client Side Rendering</h1>
        </div>
      </footer>
    </div>
  );
}
