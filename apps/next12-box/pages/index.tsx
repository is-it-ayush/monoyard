import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { BiServer } from "react-icons/bi";
import { GoBrowser } from "react-icons/go";
import HoverWrap from "../components/HoverWrap";

export default function Home() {
  return (
    <div className="font-poppins flex h-screen items-center justify-center dark:bg-black dark:text-black">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <HoverWrap to="/csr">
            <GoBrowser className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex text-xl font-semibold ">CSR</div>
            </div>
          </HoverWrap>
          <HoverWrap to="/ssr">
            <BiServer className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex text-xl font-semibold ">SSR</div>
            </div>
          </HoverWrap>
          <HoverWrap to="/isr">
            <GoBrowser className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col items-center justify-center">
              <div className="flex text-xl font-semibold ">ISR</div>
            </div>
          </HoverWrap>
        </div>
        <div className="flex-flex-row"></div>
      </main>
      <footer className="fixed bottom-5 w-[90%] text-center">
        <div className="flex flex-col justify-evenly rounded-[5px] p-1 dark:bg-white dark:text-black lg:flex-row">
          <h1 className="">Benchmarking NextJS 12</h1>
          <div className="flex flex-row justify-center whitespace-nowrap">
            <h1 className="">twitter@</h1>
            <Link href="https://twitter.com/is_it_ayush" target="_blank">
              is-it-ayush
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
