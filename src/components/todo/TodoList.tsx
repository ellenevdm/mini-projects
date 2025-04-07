import { Todo } from "@/types/task";
import { FC } from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  categories: string[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ onDeleteTodo, todos, categories }) => {
  console.log("Rendering TodoList with categories:", categories); // Debugging log
  return (
    <>
      <h1 className="text-xl font-bold ">Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="border p-4 rounded shadow w-60 min-h-20"
          >
            <h2 className="text-lg font-semibold mb-2">{category}</h2>
            <ul className="space-y-2">
              {todos
                .filter((todo) => todo.category === category)
                .map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
