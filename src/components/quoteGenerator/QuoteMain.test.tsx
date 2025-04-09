import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import QuoteMain from "./QuoteMain";
import { mockQuote, tags } from "../../../__mocks__/quoteGeneratorQuotesMock";
import { fetchQuoteByTag } from "@/utils/quoteApiFetcher";

jest.mock("@/utils/quoteApiFetcher", () => ({
  fetchQuoteByTag: jest.fn(),
}));

describe("Main Quote Component", () => {
  const mockTags = tags;

  jest.mock("@/types/quotes", () => ({
    TAGS: mockTags,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render component successfully", () => {
    render(<QuoteMain />);
    const headingText = screen.getByText(/Your Quote/i);
    expect(headingText).toBeInTheDocument();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Get new random quote" });
    expect(button).toBeInTheDocument();
  });
  it("should fetch and display a quote when the component loads", () => {
    (fetchQuoteByTag as jest.Mock).mockReturnValue({
      mockQuote,
    });
    render(<QuoteMain />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByText(mockQuote.quote)).toBeInTheDocument();
      expect(screen.getByText(mockQuote.author)).toBeInTheDocument();
    });
  });
  it("should update the quote when a new tag is selected", () => {
    (fetchQuoteByTag as jest.Mock)
      .mockResolvedValue({
        content: mockQuote.quote,
        author: mockQuote.author,
      })
      .mockResolvedValue({
        content: "Test Quote",
        author: "Test Author",
      });
    render(<QuoteMain />);

    waitFor(() => {
      expect(screen.getByText(mockQuote.quote)).toBeInTheDocument();
      expect(screen.getByText(mockQuote.author)).toBeInTheDocument();
    });

    const tagSelector = screen.getByRole("combobox");
    fireEvent.change(tagSelector, { target: { value: "love" } });

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByText("Test Quote")).toBeInTheDocument();
      expect(screen.getByText("Test Author")).toBeInTheDocument();
    });
  });
  it("should display a loading state while fetching a quote", () => {
    (fetchQuoteByTag as jest.Mock).mockResolvedValue({
      content: "Test quote",
      author: "Test Author",
    });
    render(<QuoteMain />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });
  it("should call getNewQuote when the button is clicked", () => {
    (fetchQuoteByTag as jest.Mock).mockResolvedValue({
      content: "Test quote",
      author: "Test Author",
    });

    render(<QuoteMain />);

    waitFor(() => {
      expect(screen.getByText("Test quote")).toBeInTheDocument();
    });

    const newQuoteButton = screen.getByRole("button", {
      name: "Get new random quote",
    });
    fireEvent.click(newQuoteButton);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    waitFor(() => {
      expect(fetchQuoteByTag).toHaveBeenCalledTimes(2);
    });
  });
});
