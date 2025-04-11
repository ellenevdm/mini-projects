"use client";
import { FC, useState } from "react";
import { Todo } from "@/types/task";
import { categories } from "@/data/todoCategories";
import CategoryForm from "./CategoryForm";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoMain: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>(categories);

  function addTodo(text: string, category: string) {
    setTodos([...todos, { id: Date.now(), text, category }]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  async function addCategory(category: string) {
    if (category && !categoryList.includes(category)) {
      setCategoryList((prev) => {
        const updatedList = [...prev, category];
        console.log("Updated category list:", updatedList); // Debugging log
        return updatedList;
      });
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center flex-wrap justify-center m-5 lg:w-200">
        <div className="flex flex-col lg:flex-row  justify-center gap-10 lg:w-200">
          <TodoForm onAddTodo={addTodo} categories={categoryList} />
          <CategoryForm onAddCategory={addCategory} />
        </div>
        <div>
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            categories={categoryList}
          />
        </div>
      </div>
    </>
  );
};

export default TodoMain;
