"use client";
import InProgress from "@/components/main/InProgress";
import Quiz from "@/components/quiz-app/MainQuiz";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";

interface QuizPageProps {}

const QuizPage: FC<QuizPageProps> = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-6xl font-bold">Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default QuizPage;
