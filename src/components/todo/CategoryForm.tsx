"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button"; // Button is used in the form

interface CategoryFormProps {
  onAddCategory: (category: string) => void;
}

interface CategoryInput {
  category: string;
}

const CategoryForm: FC<CategoryFormProps> = ({ onAddCategory }) => {
  const { register, handleSubmit, reset } = useForm<CategoryInput>();

  const onSubmit: SubmitHandler<CategoryInput> = (data) => {
    if (!data.category) return;
    console.log("Submitting category:", data.category); // Debugging log
    onAddCategory(data.category);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-5 shadow rounded-lg bg-gray-100 max-w-sm m-5 lg:w-200"
      >
        <h3 className="text-xl font-bold text-center">Add Category Form</h3>
        <p className="flex gap-2 items-baseline justify-center flex-col">
          <label htmlFor="category" className="font-semibold">
            New Category:
          </label>
          <input
            className="p-2 bg-white border w-full"
            id="category"
            placeholder="New category"
            {...register("category", { required: true })}
            required
          />
        </p>
        <Button
          type="submit"
          className="p-2 bg-red-900 text-white rounded w-full"
        >
          Add Category
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
