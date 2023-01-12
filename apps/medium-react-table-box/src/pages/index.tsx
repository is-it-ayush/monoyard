import { type NextPage } from "next";
import { data } from "../utils/data";

const Home: NextPage = () => {
  console.log(data);
  return (
    <main className="flex min-h-screen items-center justify-center p-5"></main>
  );
};

export default Home;
