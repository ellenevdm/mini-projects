"use client";

import { Quote, TAGS } from "@/types/quotes";
import { fetchQuoteByTag } from "@/utils/quoteApiFetcher";
import { FC, useCallback, useEffect, useState } from "react";
import TagSelector from "./TagSelector";
import QuoteCard from "./QuoteCard";

const QuoteMain: FC = () => {
  const [quoteData, setQuoteData] = useState<Quote>({
    content: "",
    author: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<string>(TAGS[0]);

  const getNewQuote = useCallback(async () => {
    setLoading(true);
    const data = await fetchQuoteByTag(selectedTag);
    setQuoteData(data);
    setLoading(false);
  }, [selectedTag]);

  useEffect(() => {
    getNewQuote();
  }, [selectedTag, getNewQuote]);

  return (
    <>
      <div className="flex flex-col p-5 lg:p-20 shadow-md rounded-lg max-w-2xl m-5 lg:w-200  justidy-center gap-5">
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
