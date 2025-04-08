import { ReactNode } from "react";

interface RoundedBtnProps {
  children: ReactNode;
  size: number;
  textSize: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function RoundedBtn({ children, size, textSize, onClick }: RoundedBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`w-${size} h-${size} transition-color flex items-center justify-center rounded-full text-${textSize} text-gray-700 duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800`}
    >
      {children}
    </button>
  );
}

export default RoundedBtn;
