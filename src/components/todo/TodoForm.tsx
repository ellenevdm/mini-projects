"use client";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button";

interface TodoFormProps {
  onAddTodo: (text: string, category: string) => void;
  categories: string[];
}

interface TodoInput {
  text: string;
  category: string;
}

const TodoForm: FC<TodoFormProps> = ({ categories, onAddTodo }) => {
  const { register, handleSubmit, reset } = useForm<TodoInput>();
  const [error, setError] = useState<Error | null>(null);
  const onSubmit: SubmitHandler<TodoInput> = (data) => {
    console.info("data", data);
    if (!data.text) return;
    if (!data.category) {
      setError(new Error("Please select a category"));
      return;
    }
    onAddTodo(data.text, data.category);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {error && <p className="text-red-500">{error.message}</p>}
        <h3 className="text-xl font-bold text-center">Add Todo Form</h3>
        <p className="flex flex-col ">
          {" "}
          <label className="font-semibold" htmlFor="todo">
            Todo Name:
          </label>
          <input
            className="bg-white border p-2"
            id="todo"
            placeholder="Enter todo"
            {...register("text", { required: true })}
            required
          />
        </p>
        <p className="flex flex-col">
          <label className="font-semibold" htmlFor="category">
            Select Category
          </label>
          <select
            id="category"
            className="bg-white border p-2 hover:cursor-pointer w-full"
            {...register("category")}
          >
            <option value="" disabled>
              Categories
            </option>
            {categories.map((category) => (
              <option
                key={category}
                value={category}
                className="bg-white border p-2 hover:cursor-pointer"
                aria-label={category}
              >
                {category}
              </option>
            ))}
          </select>
        </p>
        <Button
          type="submit"
          className="w-full bg-green-900 text-white p-2 rounded"
        >
          Add Todo
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
