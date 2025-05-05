"use client";

import { FC } from "react";
import CalculationDisplay from "./Calculations";
import ResultDisplay from "./ResultDisplay";

interface TipCalculatorMainProps {}

const TipCalculatorMain: FC<TipCalculatorMainProps> = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex w-full h-full flex-wrap lg:flex-nowrap gap-4">
      <CalculationDisplay />
      <ResultDisplay />
    </div>
  );
};

export default TipCalculatorMain;
