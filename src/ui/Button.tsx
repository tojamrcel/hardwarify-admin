import { ReactNode } from "react";
import { NavLink } from "react-router";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary";
  link?: string;
  disabled?: boolean;
}

function Button({ children, type, onClick, link, disabled }: ButtonProps) {
  if ((!type || type === "primary") && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="transition-color rounded-md bg-red-700 px-4 py-2 font-semibold text-stone-100 uppercase duration-300 hover:cursor-pointer hover:bg-red-800 disabled:bg-gray-400 dark:bg-red-800 dark:hover:bg-red-900"
      >
        {children}
      </button>
    );

  if (type === "secondary" && !link)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="border-b-2 border-transparent font-semibold text-gray-600 transition-all duration-150 hover:cursor-pointer hover:border-gray-500 disabled:bg-gray-400 dark:text-gray-500"
      >
        {children}
      </button>
    );

  if ((!type || type === "primary") && link)
    return (
      <NavLink
        to={link}
        className="transition-color rounded-md bg-red-700 px-4 py-2 font-semibold text-stone-100 uppercase duration-300 hover:cursor-pointer hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-900"
      >
        {children}
      </NavLink>
    );

  if (type === "secondary" && link)
    return (
      <NavLink
        to={link}
        className="border-b-2 border-transparent font-semibold text-gray-600 transition-all duration-150 hover:cursor-pointer hover:border-gray-500 dark:text-gray-500"
      >
        {children}
      </NavLink>
    );
}

export default Button;
