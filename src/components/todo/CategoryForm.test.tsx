import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CategoryForm from "./CategoryForm";
import { mockAddCategory } from "../../../__mocks__/todoMock";

describe("Category Form", () => {
  it("should render the form corectly", () => {
    render(<CategoryForm onAddCategory={mockAddCategory} />);

    // Check if the input field and button are rendered
    expect(screen.getByLabelText("New Category:")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /new category:/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Category" })
    ).toBeInTheDocument();
  });

  it("should update input value on change", () => {
    render(<CategoryForm onAddCategory={mockAddCategory} />);

    const input = screen.getByRole("textbox", { name: /new category:/i });
    fireEvent.change(input, { target: { value: "New Category" } });

    expect(input).toHaveValue("New Category");
  });

  it("should call onAddCategory with value when submitted and reset value", async () => {
    const addCat = jest.fn();
    render(<CategoryForm onAddCategory={addCat} />);

    const input = screen.getByRole("textbox", { name: /new category:/i });
    fireEvent.change(input, { target: { value: "New Category" } });

    const button = screen.getByRole("button", { name: "Add Category" });
    fireEvent.click(button);

    await waitFor(() => {
      expect(addCat).toHaveBeenCalledTimes(1);
      expect(addCat).toHaveBeenCalledWith("New Category");
    });
    expect(screen.getByPlaceholderText("New category")).toHaveValue("");
  });

  it("should not call onAddCategory if input is empty", () => {
    const addCat = jest.fn();
    render(<CategoryForm onAddCategory={addCat} />);

    const button = screen.getByRole("button", { name: "Add Category" });
    fireEvent.click(button);

    expect(addCat).not.toHaveBeenCalled();
  });
});
