"use client";

import { FC, useState } from "react";
import Button from "../ui/Button";

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const [count, setCount] = useState(0);
  function increaseCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex gap-6">
        <p className="text-4xl font-semibold">{count}</p>
        <Button
          className=" bg-gray-200 border border-black p-2"
          onClick={reset}
          aria-label="reset"
        >
          Reset
        </Button>
      </div>
      <div className="flex gap-5">
        <Button
          className="text-lg text-red-800 bg-red-200 border border-red-800 py-2 px-4 rounded-full hover:border-3 hover:font-semibold"
          onClick={decreaseCounter}
          aria-label="decrease"
        >
          Decrease
        </Button>
        <Button
          className="text-lg text-green-900 bg-green-200 border border-green-800 py-2 px-4 rounded-full hover:border-3 hover:font-semibold"
          onClick={increaseCounter}
          aria-label="increase"
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export default Counter;
