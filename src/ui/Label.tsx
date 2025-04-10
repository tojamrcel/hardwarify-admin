import { ReactNode } from "react";

function Label({ children }: { children: ReactNode }) {
  return <label className="font-semibold text-gray-600">{children}</label>;
}

export default Label;
