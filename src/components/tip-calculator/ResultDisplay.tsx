import { useTipCalculatorCtx } from "@/context/calculatorContext";
import { FC } from "react";

const ResultDisplay: FC = () => {
  const { tipPerPerson, totalTipAmount } = useTipCalculatorCtx();
  return (
    <div className="bg-green-900 p-7 rounded-lg w-full">
      <div className="flex justify-between items-center mb-5">
        <div>
          <p className="text-white font-semibold">Tip Amount</p>
          <span className="text-sm text-grey-500"> / person</span>
        </div>
        <h2 className="flex items-center text-5xl text-green-400 font-bold mt-2">
          <span className="text-3xl font-bold">$</span>
          {tipPerPerson}
        </h2>
      </div>
      <div className="flex justify-between items-center mb-5">
        <div>
          <p className="text-white font-semibold">Total</p>
          <span className="text-sm text-grey-500"> / person</span>
        </div>
        <h2 className="flex items-center text-5xl text-green-400 font-bold mt-2">
          <span className="text-3xl font-bold">$</span>
          {totalTipAmount}
        </h2>
      </div>
    </div>
  );
};

export default ResultDisplay;
