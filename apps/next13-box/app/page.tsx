import { FiClock } from "react-icons/fi";
import { TiMediaFastForward } from "react-icons/ti";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex font-poppins h-screen justify-center items-center">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <Link
            className="flex flex-row m-5 p-2 hover:bg-gray-200 duration-200 rounded-lg min-w-fit-[150px]"
            href="/csr"
          >
            <FiClock className="flex text-3xl mx-2 place-self-center" />
            <div className="flex flex-col">
              <div className="flex text-xl font-semibold ">CSR</div>
            </div>
          </Link>
        </div>
      </main>
      <footer className="fixed bottom-5 w-full text-center">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <h1 className="">Benchmarking Next13</h1>
          <div className="flex flex-row whitespace-nowrap justify-center my-2 lg:m-0">
            <h1 className="mx-2">Follow:</h1>
            <button className="mx-2">Twitter</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
