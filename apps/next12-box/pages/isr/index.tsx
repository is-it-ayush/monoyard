import { Benchmark } from "../../components/Benchmark";
import { FiClock } from "react-icons/fi";
import { TiMediaFastForward } from "react-icons/ti";
import { GetServerSideProps, GetStaticProps } from "next";
import HoverWrap from "../../components/HoverWrap";

export default function ISRPage({ time }: { time: Date }) {
  return (
    <div className="font-poppins flex h-screen items-center justify-center dark:bg-black dark:text-black">
      <main className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <HoverWrap to={"#"}>
            <FiClock className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">Requested At</h1>
              <h1 className="flex text-sm">{time.toString()}</h1>
            </div>
          </HoverWrap>
          <HoverWrap to={"#"}>
            <TiMediaFastForward className="mx-2 flex place-self-center text-3xl" />
            <div className="flex flex-col">
              <h1 className="flex text-xl font-semibold ">RTRT</h1>
              <Benchmark>NextJS13 Perf</Benchmark>
            </div>
          </HoverWrap>
        </div>
      </main>
      <footer className="fixed bottom-5 w-full text-center">
        <div className="flex flex-col justify-evenly dark:text-white lg:flex-row">
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
    props: { time: t },
    revalidate: 10,
  };
};
