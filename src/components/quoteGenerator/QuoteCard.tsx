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
      <div>
        <h1>Your Quote</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>{quote}</p>
            <p>- {author}</p>
          </>
        )}
        <Button className="py-2 px-4 bg-gray-200 rounded" onClick={onNewQuote}>
          Get new random quote
        </Button>
      </div>
    </>
  );
};

export default QuoteCard;
