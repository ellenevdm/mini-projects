import { render, screen, fireEvent, act } from "@testing-library/react";
import Quiz from "./MainQuiz";

jest.mock("@/data/quizQuestions", () => ({
  questions: [
    {
      id: 1,
      question: "Test question 1?",
      options: ["A", "B", "C"],
      answer: "A",
    },
    {
      id: 2,
      question: "Test question 2?",
      options: ["D", "E", "F"],
      answer: "E",
    },
    {
      id: 3,
      question: "Test question 3?",
      options: ["G", "H", "I"],
      answer: "H",
    },
  ],
  getShuffledQuestions: jest.fn((questions) => questions),
}));

describe("MainQuiz Component", () => {
  it("renders the first question correctly", () => {
    render(<Quiz />);
    expect(screen.getByText("Test question 1?")).toBeInTheDocument();
  });

  it("handles correct answer selection", () => {
    render(<Quiz />);
    act(() => {
      fireEvent.click(screen.getByText("A")); // Correct answer for question 1
    });
    expect(screen.getByText("Test question 2?")).toBeInTheDocument();
  });

  it("handles incorrect answer selection", () => {
    render(<Quiz />);
    act(() => {
      fireEvent.click(screen.getByText("B")); // Incorrect answer for question 1
    });
    expect(screen.getByText("Test question 2?")).toBeInTheDocument();
  });

  it("shows the score after completing the quiz", () => {
    render(<Quiz />);
    act(() => {
      fireEvent.click(screen.getByText("A")); // Correct for question 1
    });
    act(() => {
      fireEvent.click(screen.getByText("E")); // Correct for question 2
    });
    act(() => {
      fireEvent.click(screen.getByText("H")); // Correct for question 3
    });
    expect(screen.getByText("Quiz Complete")).toBeInTheDocument();
    expect(screen.getByText("You scored 3 out of 3")).toBeInTheDocument();
  });

  it("resets the quiz when 'Play Again' is clicked", () => {
    render(<Quiz />);
    act(() => {
      fireEvent.click(screen.getByText("A")); // Correct for question 1
    });
    act(() => {
      fireEvent.click(screen.getByText("E")); // Correct for question 2
    });
    act(() => {
      fireEvent.click(screen.getByText("H")); // Correct for question 3
    });
    act(() => {
      fireEvent.click(screen.getByText("Play Again"));
    });
    expect(screen.getByText("Test question 1?")).toBeInTheDocument();
  });
});
