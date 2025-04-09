"use client";

import Quiz from "@/components/quiz-app/MainQuiz";

import { FC } from "react";

const QuizPage: FC = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-6xl font-bold">Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default QuizPage;
