import { ReactNode } from "react";

function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl font-bold text-gray-600">{children}</h1>;
}

export default Title;
