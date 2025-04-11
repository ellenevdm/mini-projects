import TodoMain from "@/components/todo/Todo";
import { FC } from "react";

const ToDoPage: FC = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-bold">Todo App</h1>
        <TodoMain />
      </div>
    </>
  );
};

export default ToDoPage;
