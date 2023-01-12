import { FiClock } from "react-icons/fi";
import { TiMediaFastForward } from "react-icons/ti";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="font-poppins flex h-screen items-center justify-center">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <Link
            className="min-w-fit-[150px] m-5 flex flex-row rounded-lg p-2 duration-200 hover:bg-gray-200"
            href="/csr"
          >
            <FiClock className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col">
              <div className="flex text-xl font-semibold ">CSR</div>
            </div>
          </Link>
        </div>
      </main>
      <footer className="fixed bottom-5 w-full text-center">
        <div className="flex flex-col justify-evenly lg:flex-row">
          <h1 className="">Benchmarking Next13</h1>
          <div className="my-2 flex flex-row justify-center whitespace-nowrap lg:m-0">
            <h1 className="mx-2">Follow:</h1>
            <button className="mx-2">Twitter</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
