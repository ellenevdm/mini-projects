import { useTipCalculatorCtx } from "@/context/calculatorContext";
import { FC, useEffect, useState } from "react";
import CalculatorInput from "./Input";

import {
  tipCalculatorSchema,
  TipCalculatorSchema,
} from "../../types/tipCalculatorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const tipPercentOptions = [
  { value: 5, label: "5%" },
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
];

const CalculationDisplay: FC = () => {
  const { setTipPerPerson, setTotalTipAmount } = useTipCalculatorCtx();
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TipCalculatorSchema>({
    resolver: zodResolver(tipCalculatorSchema),
    defaultValues: {
      bill: 0,
      customTip: "",
      numberOfPeople: 1,
    },
  });

  const bill = watch("bill");
  const customTip = watch("customTip");
  const numberOfPeople = watch("numberOfPeople");

  const tipPercentage =
    customTip !== "" && !isNaN(Number(customTip))
      ? Number(customTip) / 100
      : selectedButton !== null
      ? tipPercentOptions[selectedButton].value / 100
      : 0;

  useEffect(() => {
    if (bill > 0 && numberOfPeople > 0 && tipPercentage > 0) {
      const totalTip = bill * tipPercentage;
      let tipPerPerson = totalTip / numberOfPeople;
      let totalPerPerson = bill / numberOfPeople + tipPerPerson;
      setTotalTipAmount(parseFloat(totalPerPerson.toFixed(2)));
      setTipPerPerson(parseFloat(tipPerPerson.toFixed(2)));

      console.log(
        `Total Tip: $${totalTip.toFixed(
          2
        )}, Tip Per Person: $${tipPerPerson.toFixed(
          2
        )}, Total Per Person: $${totalPerPerson.toFixed(2)}`
      );
    }
  }, [bill, numberOfPeople, tipPercentage, setTipPerPerson, setTotalTipAmount]);

  const handleTipButtonClick = (value: number, index: number) => {
    setValue("customTip", "");
    setSelectedButton(index);
  };
  return (
    <form>
      <div>
        <label htmlFor="bill">Bill</label>
        {errors.bill && (
          <p className="text-red-500 text-sm">{errors.bill.message}</p>
        )}
        <div className="relative w-full">
          <span className="absolute font-xl text-grey-500 translate-x-4 translate-y-1/2 ">
            $
          </span>
          <CalculatorInput
            id="bill"
            placeholder="0"
            {...register("bill", { valueAsNumber: true })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="tip">Select Tip %</label>
        {errors.customTip && (
          <p className="text-red-500 text-sm">{errors.customTip.message}</p>
        )}
        <div className="grid grid-cols-3 gap-2">
          {tipPercentOptions.map((option, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleTipButtonClick(option.value, i)}
              className={`rounded-sm p-2 hover:bg-green-400 hover:text-green-900 transition-colors duration-300 ${
                selectedButton === i
                  ? "bg-green-400 text-green-900"
                  : "bg-green-900 text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
          <CalculatorInput
            type="number"
            value={customTip}
            placeholder="Custom"
            {...register("customTip")}
            onChange={(e) => {
              setValue("customTip", e.target.value);
              setSelectedButton(null);
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="people">Number of People</label>
        <div className="relative w-full">
          <span className="absolute ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#5e7a7d"
              className="size-4 text-grey-400 translate-x-4 translate-y-3"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <CalculatorInput
            type="number"
            {...register("numberOfPeople", { valueAsNumber: true })}
          />
        </div>
      </div>
    </form>
  );
};
export default CalculationDisplay;
