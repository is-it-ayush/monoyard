import { inferProcedureOutput } from "@trpc/server";
import React, { useEffect, useState } from "react";
import { AppRouter } from "../server/trpc/router/_app";
import { trpc } from "../utils/trpc";

export type ReturnType = inferProcedureOutput<AppRouter["example"]["hello"]>;

interface HomePageProps {
  counter: number;
}

export const HomePage = ({ counter }: HomePageProps) => {
  const [data, setData] = useState<ReturnType["greeting"]>();
  const myQuery = trpc.example.hello.useQuery(
    { text: "from tRPC" },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    (async () => {
      const result = await myQuery.refetch(); // calling refetch() will trigger the query even if it's disabled
      setData(result.data?.greeting);
    })();
  }, []); // [] = important, ensures the effect is only fired once.

  return (
    <div className="min-w-screen flex flex-col items-center justify-center bg-white">
      <h1 className="flex">{data}</h1>
      <h1 className="flex">{counter}</h1>
    </div>
  );
};
