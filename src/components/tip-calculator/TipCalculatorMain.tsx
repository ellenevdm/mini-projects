"use client";

import { FC, useState } from "react";
import CalculationDisplay from "./Calculations";
import ResultDisplay from "./ResultDisplay";
import { useTipCalculatorCtx } from "@/context/calculatorContext";

interface TipCalculatorMainProps {}

const TipCalculatorMain: FC<TipCalculatorMainProps> = () => {
  const { tipPerPerson, totalTipAmount } = useTipCalculatorCtx();
  return (
    <div className="bg-white p-4 rounded-lg shadow flex w-full h-full flex-wrap lg:flex-nowrap gap-4">
      <CalculationDisplay />
      <ResultDisplay />
    </div>
  );
};

export default TipCalculatorMain;
