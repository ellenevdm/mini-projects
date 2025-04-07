import InProgress from "@/components/main/InProgress";
import TodoMain from "@/components/todo/Todo";
import { FC } from "react";

interface ToDoPageProps {}

const ToDoPage: FC<ToDoPageProps> = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Todo App</h1>
        <TodoMain />
      </div>
    </>
  );
};

export default ToDoPage;
