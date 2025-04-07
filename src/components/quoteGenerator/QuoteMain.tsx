"use client";

import { Quote, TAGS } from "@/types/quotes";
import { fetchQuoteByTag } from "@/utils/quoteApiFetcher";
import { FC, useEffect, useState } from "react";
import TagSelector from "./TagSelector";
import QuoteCard from "./QuoteCard";
import { quotesAboutQuotes } from "@/data/quotes";

const QuoteMain: FC = () => {
  const [quoteData, setQuoteData] = useState<Quote>({
    content: "",
    author: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>(TAGS[0]);

  const getNewQuote = async () => {
    setLoading(true);
    const data = await fetchQuoteByTag(selectedTag);
    setQuoteData(data);
    setLoading(false);
  };

  useEffect(() => {
    getNewQuote();
  }, [selectedTag]);

  return (
    <>
      <div>
        <TagSelector onTagChange={setSelectedTag} selectedTag={selectedTag} />
        <QuoteCard
          author={quoteData.author}
          loading={loading}
          onNewQuote={getNewQuote}
          quote={quoteData.content}
        />
      </div>
    </>
  );
};

export default QuoteMain;
