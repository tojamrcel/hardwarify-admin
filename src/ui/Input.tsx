import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: "email" | "password" | "text" | "number";
  register?: UseFormRegisterReturn;
}

function Input({ type, register }: InputProps) {
  return (
    <input
      type={type}
      className="transition-color h-10 rounded-sm border-2 border-transparent bg-stone-100 px-2 text-gray-800 duration-200 focus:border-red-700 focus:outline-0 dark:bg-gray-800 dark:text-gray-400"
      {...register}
    />
  );
}

export default Input;
