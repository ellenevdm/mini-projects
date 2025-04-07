import { Todo } from "@/types/task";
import { FC } from "react";
import Button from "../ui/Button";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ onDelete, todo }) => {
  return (
    <>
      <li className="flex bg-gray-300 py-2 px-4 justify-between w-50">
        <p className="">{todo.text}</p>
        <Button aria-label="delete" onClick={() => onDelete(todo.id)}>
          ❌
        </Button>
      </li>
    </>
  );
};

export default TodoItem;
