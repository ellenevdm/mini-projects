import { fireEvent, render, screen } from "@testing-library/react";
import QuizQuestions from "./Questions";
// import { mockQuestion } from '../../../__mocks__/quizQuestionsMock';
import {
  mockOnSelect,
  mockOptions,
  mockQuestion,
} from "../../../__mocks__/quizQuestionsMock";

// in the following test suite i will test the following for the quizQuestion Component:
// 1. Verify that the question text is displyed
// 2.  Verify that all options are rendered

// 3. Ensure that clicking an option triggers the callback with the correct value.
// 4. Test the component when there are no options
// 5. Test how the component behaves when the question is an empty string

describe("QuizQuestions component tests", () => {
  //Clear the mock before each render
  beforeEach(() => {
    mockOnSelect.mockClear();
  });
  //   it("debugs", () => {
  //     screen.debug();
  //   });
  it("renders the question text", () => {
    render(
      <QuizQuestions
        onSelect={mockOnSelect}
        options={mockOptions}
        question={mockQuestion}
      />
    );
    const question = screen.getByText(mockQuestion);
    expect(question).toBeInTheDocument();
  });

  it("calls onSelect with the option that was selected", () => {
    render(
      <QuizQuestions
        onSelect={mockOnSelect}
        options={mockOptions}
        question={mockQuestion}
      />
    );
    const optionBtns = screen.getAllByRole("button");

    fireEvent.click(optionBtns[0]);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith("Paris");
  });
  it("renders correctly when the question is empty", () => {
    render(
      <QuizQuestions
        onSelect={mockOnSelect}
        options={mockOptions}
        question=""
      />
    );
    const question = screen.queryByText(mockQuestion);
    expect(question).not.toBeInTheDocument();
    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
  it("renders correctly when the option list is empty", () => {
    render(
      <QuizQuestions
        onSelect={mockOnSelect}
        options={[]}
        question={mockQuestion}
      />
    );
    expect(screen.getByText(mockQuestion)).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
