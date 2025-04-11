import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="flex gap-5 bg-gray-800 justify-center items-center p-5 text-lg font-bold text-white rounded-lg shadow-lg">
        <button className="py-2 px-4   text-white">
          <Link className="cursor-pointer" href="/counter">
            Counter App
          </Link>
        </button>
        <button className="cursor-pointer py-2 px-4   text-white">
          <Link className="cursor-pointer" href="/quiz">
            Quiz App
          </Link>
        </button>
        <button className="cursor-pointer py-2 px-4   text-white">
          <Link className="cursor-pointer" href="/todo">
            Todo App
          </Link>
        </button>
        <button className="cursor-pointer py-2 px-4   text-white">
          <Link className="cursor-pointer" href="/quote-generator">
            Quote Generator App
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header;
