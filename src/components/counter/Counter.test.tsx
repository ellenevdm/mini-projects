import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";

describe("It renders the counter component", () => {
  it("renders the counter", () => {
    render(<Counter />);
    const counter = screen.getByRole("paragraph");
    expect(counter).toBeInTheDocument();
  });
  it("it renders a reset, increase, and decrease button", () => {
    render(<Counter />);
    const increaseButton = screen.getByRole("button", {
      name: /increase/i,
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease/i,
    });
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });

    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
  it("increases counter on increase counter press", () => {
    render(<Counter />);

    const increaseButton = screen.getByRole("button", {
      name: /increase/i,
    });

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("descreases the counter on decrease press", () => {
    render(<Counter />);
    const decreaseButton = screen.getByRole("button", {
      name: /decrease/i,
    });
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);
    expect(screen.getByText("-3")).toBeInTheDocument();
  });
  it("resets counter on reset press", () => {
    render(<Counter />);

    const increaseButton = screen.getByRole("button", {
      name: /increase/i,
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease/i,
    });
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });

    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    fireEvent.click(decreaseButton);
    fireEvent.click(decreaseButton);

    fireEvent.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
