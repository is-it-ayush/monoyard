import Link from "next/link";
import {FiClock} from "react-icons/fi";
import {BiServer} from "react-icons/bi";
import {GoBrowser} from "react-icons/go";
import HoverWrap from "../components/HoverWrap";

export default function Home() {
    return (
        <div className="flex font-poppins h-screen justify-center items-center dark:bg-black dark:text-black">
            <main className="flex flex-col">
                <div className="flex flex-col lg:flex-row">
                    <HoverWrap to="/csr">
                        <GoBrowser className="flex text-3xl mx-2 place-self-center" />
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex text-xl font-semibold ">CSR</div>
                        </div>
                    </HoverWrap>
                    <HoverWrap to="/ssr">
                        <BiServer className="flex text-3xl mx-2 place-self-center" />
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex text-xl font-semibold ">SSR</div>
                        </div>
                    </HoverWrap>
                    <HoverWrap to="/isr">
                        <GoBrowser className="flex text-3xl mx-2 place-self-center" />
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex text-xl font-semibold ">ISR</div>
                        </div>
                    </HoverWrap>
                </div>
                <div className="flex-flex-row"></div>
            </main>
            <footer className="fixed bottom-5 w-[90%] text-center">
                <div className="flex flex-col lg:flex-row justify-evenly dark:text-black dark:bg-white rounded-[5px] p-1">
                    <h1 className="">Benchmarking NextJS 12</h1>
                    <div className="flex flex-row whitespace-nowrap justify-center">
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
