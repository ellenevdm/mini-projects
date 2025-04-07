import { FC } from "react";
import Button from "../ui/Button";
interface QuizQuestionsProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
}

const QuizQuestions: FC<QuizQuestionsProps> = ({
  onSelect,
  options,
  question,
}) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center">{question}</h2>
      <div className="flex flex-col items-center gap-5 mt-5 ">
        {options.map((option, index) => (
          <Button
            aria-label={option}
            key={index}
            onClick={() => onSelect(option)}
            className="bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-100 w-1/3  flex font-bold p-4 rounded-2xl hover:border-blue-800  active:bg-blue-900 active:font-bold active:border-2"
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
};

export default QuizQuestions;
