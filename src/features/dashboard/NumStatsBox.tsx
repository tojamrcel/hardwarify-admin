import { ReactNode } from "react";

interface NumStatsProps {
  children: ReactNode;
  number: number;
  color: "green" | "yellow" | "red";
}

function NumStatsBox({ children, number, color }: NumStatsProps) {
  return (
    <div className="grid h-24 grid-cols-[auto_1fr] items-center gap-4 rounded-md bg-stone-100 p-4 text-gray-700 shadow-md dark:bg-gray-800 dark:text-stone-300">
      <span
        className={`border-r border-gray-300 px-2 text-4xl font-bold text-green-500 ${color === "green" && "text-green-500"} ${color === "red" && "text-red-700"} ${color === "yellow" && "text-yellow-600"}`}
      >
        {number}
      </span>
      <p className="text-center text-lg font-semibold">{children}</p>
    </div>
  );
}

export default NumStatsBox;
