import { fireEvent, render, screen } from "@testing-library/react";
import TagSelector from "./TagSelector";
import {
  mockOnTagChange,
  mockTag,
  tags as mockTags,
} from "../../../__mocks__/quoteGeneratorQuotesMock";

describe("Tag selector component", () => {
  beforeEach(() => {
    mockOnTagChange.mockClear();
  });
  it("should render component successfully by rendering all tags", () => {
    render(<TagSelector onTagChange={mockOnTagChange} selectedTag={mockTag} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(mockTags.length);
    mockTags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
  it("should call onTagChange with the selected tag when changed", () => {
    render(<TagSelector onTagChange={mockOnTagChange} selectedTag={mockTag} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: mockTags[1] } });
    expect(mockOnTagChange).toHaveBeenCalledTimes(1);
    expect(mockOnTagChange).toHaveBeenCalledWith("wisdom");
  });
});
