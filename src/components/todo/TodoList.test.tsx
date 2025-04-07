import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";
import {
  mockCategories,
  mockDeleteTodo,
  mockTodos,
  mockWithFalseTodo,
} from "../../../__mocks__/todoMock";

describe("Todo List Component", () => {
  beforeEach(() => {
    mockDeleteTodo.mockClear();
  });
  it("should render the Todo List component without crashing", () => {
    render(
      <TodoList
        categories={mockCategories}
        onDeleteTodo={mockDeleteTodo}
        todos={mockTodos}
      />
    );
    const headingText = screen.getByText(/Todo List/i);
    expect(headingText).toBeInTheDocument();
  });
  it("should render all default category sections", () => {
    render(
      <TodoList
        categories={mockCategories}
        onDeleteTodo={mockDeleteTodo}
        todos={mockTodos}
      />
    );
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings).toHaveLength(mockCategories.length);
    mockCategories.forEach((category) => {
      expect(
        screen.getByRole("heading", { name: category, level: 2 })
      ).toBeInTheDocument();
    });
  });
  it("should render todos under the correct category", () => {
    render(
      <TodoList
        categories={mockCategories}
        onDeleteTodo={mockDeleteTodo}
        todos={mockTodos}
      />
    );
    mockCategories.forEach((category) => {
      expect(
        screen.getByRole("heading", { name: category, level: 2 })
      ).toBeInTheDocument();
    });

    mockTodos.forEach((todo) => {
      const categoryEl = screen
        .getAllByText(todo.category)
        .find((el) => el.tagName === "H2");
      const todoEls = screen.getAllByText(todo.text);
      const todoEl = todoEls.find((el) => el.closest("li"));

      expect(categoryEl).toBeInTheDocument();
      expect(todoEl).toBeInTheDocument();
      expect(categoryEl?.closest("div")).toContainElement(todoEl!);
    });
  });
  it("should not render todos that do not match any category", () => {
    render(
      <TodoList
        categories={mockCategories}
        onDeleteTodo={mockDeleteTodo}
        todos={mockWithFalseTodo}
      />
    );
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings).toHaveLength(mockCategories.length);
    const washingEl = screen.queryByText("Washing");
    const shoppingEl = screen.getByText("Shower");
    const meetingEl = screen.getByText("Meeting");
    expect(washingEl).not.toBeInTheDocument();
    expect(shoppingEl).toBeInTheDocument();
    expect(meetingEl).toBeInTheDocument();
  });
  it("should call onDeleteTodo when delete button is clicked", async () => {
    render(
      <TodoList
        categories={mockCategories}
        onDeleteTodo={mockDeleteTodo}
        todos={mockTodos}
      />
    );
    const deleteButtons = screen.getAllByRole("button");
    const deleteButton = deleteButtons.find((button) =>
      button.closest("li")?.textContent?.includes("Washing")
    )!;

    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
  });
});
