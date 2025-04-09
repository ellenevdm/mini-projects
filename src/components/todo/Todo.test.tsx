import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoMain from "./Todo";

describe("Todo Component", () => {
  it("should render todo main component", () => {
    render(<TodoMain />);
    const catForm = screen.getByText(/Add Category Form/i);
    const todoForm = screen.getByText(/Add Todo Form/i);
    const todoList = screen.getByText(/Todo List/i);
    expect(catForm).toBeInTheDocument();
    expect(todoForm).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });
  it("should add new todo and display on TodoList", async () => {
    render(<TodoMain />);
    const todoInput = screen.getByLabelText(/Todo Name:/i);
    const categorySelect = screen.getByRole("combobox");
    const addTodoBtn = screen.getByRole("button", { name: /Add Todo/i });
    fireEvent.change(todoInput, { target: { value: "Test Todo" } });
    fireEvent.change(categorySelect, { target: { value: "Work" } });
    fireEvent.click(addTodoBtn);

    await waitFor(() => {
      const todoItem = screen.getByText(/Test Todo/i);
      expect(todoItem).toBeInTheDocument();
      const todoCategories = screen.getAllByText(/Work/i);
      expect(todoCategories[1]).toBeInTheDocument(); // Assert on the second occurrence
    });
  });
  it("should delete a todo from the Todo List", async () => {
    render(<TodoMain />);

    const todoInput = screen.getByLabelText(/Todo Name:/i);
    const categorySelect = screen.getByRole("combobox");
    const addTodoBtn = screen.getByRole("button", { name: /Add Todo/i });
    fireEvent.change(todoInput, { target: { value: "Test" } });
    fireEvent.change(categorySelect, { target: { value: "Personal" } });
    fireEvent.click(addTodoBtn);

    await waitFor(() => {
      const todoItem = screen.getByText(/Test/i);
      expect(todoItem).toBeInTheDocument();
    });

    const deleteBtn = screen.getByLabelText("delete");
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      expect(screen.queryByText(/Test/i)).not.toBeInTheDocument();
    });
  });

  it("should add a new category and display it in the TodoForm and Todo List", () => {
    render(<TodoMain />);
    const categoryInput = screen.getByLabelText(/New Category:/i);
    const addCategoryBtn = screen.getByRole("button", {
      name: /Add Category/i,
    });

    // Add a new category
    fireEvent.change(categoryInput, { target: { value: "Test" } });
    fireEvent.click(addCategoryBtn);

    // Verify the new category is displayed in the TodoForm dropdown

    waitFor(() => {
      const newCategoryOption = screen.getByRole("option", {
        name: /Test/i,
      });
      const newCategorySection = screen.getByRole("heading", {
        name: /Test/i,
        level: 2,
      });
      expect(newCategoryOption).toBeInTheDocument();
      expect(newCategorySection).toBeInTheDocument();
    });
  });
  it("should not add duplicate categories", () => {
    render(<TodoMain />);

    const categoryInput = screen.getByLabelText(/New Category:/i);
    const addCategoryBtn = screen.getByRole("button", {
      name: /Add Category/i,
    });

    fireEvent.change(categoryInput, { target: { value: "Test" } });
    fireEvent.click(addCategoryBtn);

    fireEvent.change(categoryInput, { target: { value: "Test" } });
    fireEvent.click(addCategoryBtn);

    waitFor(() => {
      const newCategoryOption = screen.getAllByRole("option", {
        name: /Test/i,
      });
      expect(newCategoryOption).toHaveLength(1);
    });
  });
});
