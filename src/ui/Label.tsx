import { ReactNode } from "react";

function Label({ children }: { children: ReactNode }) {
  return <label className="font-semibold text-gray-500">{children}</label>;
}

export default Label;
