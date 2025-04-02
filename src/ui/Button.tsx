import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

function Button({ children, type, onClick }: ButtonProps) {
  if (!type || type === "primary")
    return (
      <button
        onClick={onClick}
        className="transition-color rounded-md bg-red-700 px-4 py-2 font-semibold text-stone-100 uppercase duration-300 hover:cursor-pointer hover:bg-red-800"
      >
        {children}
      </button>
    );
  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        className="border-b-2 border-transparent font-semibold text-gray-600 transition-all duration-150 hover:cursor-pointer hover:border-gray-500"
      >
        {children}
      </button>
    );
}

export default Button;
