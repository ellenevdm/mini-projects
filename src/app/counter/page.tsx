"use client";
import Counter from "@/components/counter/Counter";
import InProgress from "@/components/main/InProgress";
import Button from "@/components/ui/Button";
import { FC, useState } from "react";

interface CounterPageProps {}

const CounterPage: FC<CounterPageProps> = () => {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center h-full">
      <h2 className="text-6xl font-bold">Counter App</h2>
      <Counter />
    </div>
  );
};

export default CounterPage;
