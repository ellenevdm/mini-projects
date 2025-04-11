"use client";
import Counter from "@/components/counter/Counter";

import { FC } from "react";

const CounterPage: FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-">
      <h2 className="text-4xl font-bold">Counter App</h2>
      <Counter />
    </div>
  );
};

export default CounterPage;
