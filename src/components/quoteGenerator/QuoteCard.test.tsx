import { fireEvent, render, screen } from "@testing-library/react";
import QuoteCard from "./QuoteCard";
import {
  mockOnNewQuote,
  mockQuote,
} from "../../../__mocks__/quoteGeneratorQuotesMock";

describe("Quote Card Component", () => {
  it("should render Quote card successfully", () => {
    render(
      <QuoteCard
        author={mockQuote.author}
        onNewQuote={mockOnNewQuote}
        quote={mockQuote.quote}
        loading={false}
      />
    );

    const quoteText = screen.getByText(mockQuote.quote);
    expect(quoteText).toBeInTheDocument();
    const authorText = screen.getByText(`- ${mockQuote.author}`);
    expect(authorText).toBeInTheDocument();
    const buttonText = screen.getByRole("button", {
      name: /Get new random quote/i,
    });
    expect(buttonText).toBeInTheDocument();
  });
  it("should display a loading message when loading is true", () => {
    render(
      <QuoteCard
        author=""
        onNewQuote={mockOnNewQuote}
        quote=""
        loading={true}
      />
    );
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();

    expect(screen.queryByText(mockQuote.quote)).not.toBeInTheDocument();
    expect(screen.queryByText(`- ${mockQuote.author}`)).not.toBeInTheDocument();
  });
  it("should display the quote and author when loading is false", () => {
    render(
      <QuoteCard
        author={mockQuote.author}
        onNewQuote={mockOnNewQuote}
        quote={mockQuote.quote}
        loading={false}
      />
    );
    const quoteText = screen.getByText(mockQuote.quote);
    expect(quoteText).toBeInTheDocument();
    const authorText = screen.getByText(`- ${mockQuote.author}`);
    expect(authorText).toBeInTheDocument();
    const loadingText = screen.queryByText(/Loading.../i);
    expect(loadingText).not.toBeInTheDocument();
  });
  it("should call the onNewQuote function when the button is clicked", () => {
    render(
      <QuoteCard
        author={mockQuote.author}
        onNewQuote={mockOnNewQuote}
        quote={mockQuote.quote}
        loading={false}
      />
    );
    const button = screen.getByRole("button", {
      name: /Get new random quote/i,
    });
    fireEvent.click(button);
    expect(mockOnNewQuote).toHaveBeenCalledTimes(1);
  });
});
