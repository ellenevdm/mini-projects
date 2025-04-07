import { FC } from "react";
import Image from "next/image";

interface InProgressProps {
  appName: string;
}

const InProgress: FC<InProgressProps> = ({ appName }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold text-red-600 mt-10">
        Work in Progress
      </h1>
      <p className="font-bold text-4xl mt-10 ">
        The {appName} app is still under development!
      </p>
      <Image
        alt="under development"
        src="/OE60SH0.jpg"
        width={900}
        height={800}
      />
    </div>
  );
};

export default InProgress;
