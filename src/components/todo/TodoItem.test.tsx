import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import {
  mockDeleteTodo,
  mockEmptyTodo,
  mockTodo,
} from "../../../__mocks__/todoMock";

describe("Todo Item", () => {
  beforeEach(() => {
    mockDeleteTodo.mockClear();
  });
  it("should render the todo item elements", () => {
    render(<TodoItem onDelete={mockDeleteTodo} todo={mockTodo} />);
    expect(screen.getByText("Washing")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });
  it("should trigger onDelete callback when the delete button is clicked", () => {
    render(<TodoItem onDelete={mockDeleteTodo} todo={mockTodo} />);
    const deleteButton = screen.getByLabelText("delete");

    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
  it("should render correctly when item text is not in the document", () => {
    render(<TodoItem onDelete={mockDeleteTodo} todo={mockEmptyTodo} />);
    expect(screen.queryByText("Washing")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
