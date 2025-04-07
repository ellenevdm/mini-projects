import InProgress from "@/components/main/InProgress";
import QuoteMain from "@/components/quoteGenerator/QuoteMain";
import { FC } from "react";

interface QuoteGeneratorPageProps {}

const QuoteGeneratorPage: FC<QuoteGeneratorPageProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">Quote Generator with Api</h1>
      <QuoteMain />
    </div>
  );
};

export default QuoteGeneratorPage;
