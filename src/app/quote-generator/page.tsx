import QuoteMain from "@/components/quoteGenerator/QuoteMain";
import { FC } from "react";

const QuoteGeneratorPage: FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">Quote Generator with Api</h1>
      <QuoteMain />
    </div>
  );
};

export default QuoteGeneratorPage;
