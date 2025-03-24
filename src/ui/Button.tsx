import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="transition-color rounded-md bg-red-700 px-4 py-2 font-semibold text-stone-100 uppercase duration-300 hover:cursor-pointer hover:bg-red-800">
      {children}
    </button>
  );
}

export default Button;
