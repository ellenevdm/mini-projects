import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoForm from "./TodoForm";

import { mockAddTodo, mockCategories } from "../../../__mocks__/todoMock";

describe("Todo form", () => {
  it("should render the todo form and elements", () => {
    render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
    expect(screen.getByLabelText("Todo Name:")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(7);
    expect(
      screen.getByRole("button", { name: "Add Todo" })
    ).toBeInTheDocument();
  });
  it("should change input value on change", () => {
    render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
    const input = screen.getByLabelText("Todo Name:");
    fireEvent.change(input, { target: { value: "Shopping" } });

    expect(input).toHaveValue("Shopping");
  });
  it("should render the category select list", () => {
    render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
    const select = screen.getByRole("combobox");
    const options = screen.getAllByRole("option");
    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(7);
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("should submit the input and the selected category ", async () => {
    render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
    const input = screen.getByLabelText("Todo Name:");
    const select = screen.getByRole("combobox");
    const button = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.change(input, { target: { value: "Shopping" } });
    fireEvent.change(select, { target: { value: "Work" } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockAddTodo).toHaveBeenCalledTimes(1);
      expect(mockAddTodo).toHaveBeenCalledWith("Shopping", "Work");
    });
    expect(input).toHaveValue("");
  });
  it("should not submit form if input is empty ", async () => {
    const mockAddTodo = jest.fn();
    render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
    const button = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(button);
    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
it("should select a category option", () => {
  render(<TodoForm categories={mockCategories} onAddTodo={mockAddTodo} />);
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Personal" } });
  expect(select).toHaveValue("Personal");
});
