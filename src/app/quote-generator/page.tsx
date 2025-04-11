import QuoteMain from "@/components/quoteGenerator/QuoteMain";
import { FC } from "react";

const QuoteGeneratorPage: FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10">
      <h1 className="text-6xl font-bold">Quote Generator with Api</h1>
      <QuoteMain />
    </div>
  );
};

export default QuoteGeneratorPage;
