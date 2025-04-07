"use client";
import {
  questions as allQuestions,
  getShuffledQuestions,
} from "@/data/quizQuestions";
import { FC, useEffect, useState } from "react";
import QuizQuestions from "./Questions";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import Button from "../ui/Button";

export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

const Quiz: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    const shuffledQuestions = getShuffledQuestions(allQuestions);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  function handleAnswerClick(selectedAnswer: string) {
    if (quizQuestions[currentQuestion].answer === selectedAnswer) {
      setScore((prev) => prev + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    const shuffledQuestions = getShuffledQuestions(allQuestions);
    setQuizQuestions(shuffledQuestions.slice(0, 10));
  }

  if (quizQuestions.length === 0) {
    return;
  }

  return (
    <div className="container w-full items-center">
      {showScore ? (
        <div className="flex flex-col">
          <h2 className="text-5xl">Quiz Complete</h2>
          <p>
            You scored {score} out of {quizQuestions.length}
          </p>
          <Button onClick={handleReset}>Play Again</Button>
        </div>
      ) : (
        <QuizQuestions
          question={quizQuestions[currentQuestion].question}
          options={quizQuestions[currentQuestion].options}
          onSelect={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
