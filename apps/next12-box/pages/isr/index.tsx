import {Benchmark} from "../../components/Benchmark";
import {FiClock} from "react-icons/fi";
import {TiMediaFastForward} from "react-icons/ti";
import {GetServerSideProps, GetStaticProps} from "next";
import HoverWrap from "../../components/HoverWrap";

export default function ISRPage({time}: {time: Date}) {
    return (
        <div className="flex font-poppins h-screen justify-center items-center dark:bg-black dark:text-black">
            <main className="flex flex-col">
                <div className="flex flex-col lg:flex-row">
                    <HoverWrap to={"#"}>
                        <FiClock className="flex text-3xl mx-2 place-self-center" />
                        <div className="flex flex-col">
                            <h1 className="flex text-xl font-semibold ">Requested At</h1>
                            <h1 className="flex text-sm">{time.toString()}</h1>
                        </div>
                    </HoverWrap>
                    <HoverWrap to={"#"}>
                        <TiMediaFastForward className="flex text-3xl mx-2 place-self-center" />
                        <div className="flex flex-col">
                            <h1 className="flex text-xl font-semibold ">RTRT</h1>
                            <Benchmark>NextJS13 Perf</Benchmark>
                        </div>
                    </HoverWrap>
                </div>
            </main>
            <footer className="fixed bottom-5 w-full text-center">
                <div className="flex flex-col lg:flex-row justify-evenly dark:text-white">
                    <h1>RTRT: Request To Render Time</h1>
                    <h1>ISR: Incremental Static Regeneration</h1>
                </div>
            </footer>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const t = new Date().getTime();

    return {
        props: {time: t},
        revalidate: 10,
    };
};
