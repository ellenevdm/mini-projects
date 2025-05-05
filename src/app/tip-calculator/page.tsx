import CalculationDisplay from "@/components/tip-calculator/Calculations";
import ResultDisplay from "@/components/tip-calculator/ResultDisplay";
import TipCalculatorMain from "@/components/tip-calculator/TipCalculatorMain";
import { FC } from "react";

interface TipCalculatorPageProps {}

const TipCalculatorPage: FC<TipCalculatorPageProps> = () => {
  return (
    <div className="flex flex-col ">
      <div className="text-green-900 text-2xl text-center font-bold tracking-widest mt-20 mb-10">
        <h1 className="tracking-8 font-bold">SPLI</h1>
        <h1 className="tracking-8 font-bold">TTER</h1>
      </div>
      <div className="w-full lg:w-fit bg-white h-full flex flex-col lg:flex-row gap-4 rounded-md">
        <TipCalculatorMain />
      </div>
    </div>
  );
};

export default TipCalculatorPage;
