import { FC } from "react";
import Button from "../ui/Button";

interface QuoteCardProps {
  quote: string;
  author: string;

  loading: boolean;
  onNewQuote: () => void;
}

const QuoteCard: FC<QuoteCardProps> = ({
  author,
  loading,
  onNewQuote,
  quote,
}) => {
  return (
    <>
      <div className="flex flex-wrap flex-col">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex ">
            <p className="text-2xl font-semibold text-gray-900 p-5">
              {quote} <em className="font-medium text-lg">- {author}</em>
            </p>
          </div>
        )}
        <Button
          className="py-2 px-4 bg-gray-200 rounded font-semibold"
          onClick={onNewQuote}
        >
          Get new random quote
        </Button>
      </div>
    </>
  );
};

export default QuoteCard;
