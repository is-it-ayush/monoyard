"use client";

import React from "react";
import { useRouter } from "next/router";

const getLastTime = (key: string) => {
  if (typeof window === "undefined") return -1;
  const store = JSON.parse(localStorage?.getItem(`${key}store`) ?? "[]");
  const lastel = store[store.length - 1];
  return lastel;
};

export const Benchmark: React.FC<{ children: string }> = ({ children }) => {
  const lastTime = getLastTime(children);

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <h4 id="givemetime" className="mr-2">
          {lastTime ?? "dont know!"}
        </h4>
        <div>ms</div>
      </div>
      <script>
        {`
                const currentTime = new Date(); // round trip time
                const fullTime = currentTime - window.performance.timing.requestStart;
                console.log(\`It took ${children}\`, fullTime);
                document.getElementById(\`givemetime\`).innerHTML = fullTime;
                const times = JSON.parse(localStorage.getItem(\`${children}store\`)) ?? [];
                times.push(fullTime);
                localStorage.setItem(\`${children}store\`, JSON.stringify(times));
        `}
      </script>
    </>
  );
};
