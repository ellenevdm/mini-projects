"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context
interface TipCalculatorContextType {
  tipPerPerson: number;
  setTipPerPerson: (value: number) => void;
  totalTipAmount: number;
  setTotalTipAmount: (value: number) => void;
}

// Create the context with a default value
export const TipCalculatorCtx = createContext<
  TipCalculatorContextType | undefined
>(undefined);

// Define the provider component
interface TipCalculatorProviderProps {
  children: ReactNode;
}

export const TipCalculatorProvider: React.FC<TipCalculatorProviderProps> = ({
  children,
}: TipCalculatorProviderProps) => {
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalTipAmount, setTotalTipAmount] = useState<number>(0);

  return (
    <TipCalculatorCtx.Provider
      value={{
        tipPerPerson,
        setTipPerPerson,
        totalTipAmount,
        setTotalTipAmount,
      }}
    >
      {children}
    </TipCalculatorCtx.Provider>
  );
};

export const useTipCalculatorCtx = () => {
  const ctx = useContext(TipCalculatorCtx);
  if (!ctx) {
    throw new Error(
      "useTipCalculatorCtx must be used within a TipCalculatorProvider"
    );
  }
  return ctx;
};
