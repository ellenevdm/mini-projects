import { FC } from "react";

type CalculatorInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean;
};

const CalculatorInput: FC<CalculatorInputProps> = ({
  error,
  className,
  ...props
}) => {
  return (
    <input
      type="number"
      className={`${className} text-2xl p-1 bg-grey-50 outline-none rounded-sm caret-green-400 text-right ${
        error
          ? "border-2 border-orange-700 text-orange-900"
          : " border-2 border-transparent focus:border-2 focus:border-green-400 text-green-900"
      }`}
      {...props}
    />
  );
};

export default CalculatorInput;
