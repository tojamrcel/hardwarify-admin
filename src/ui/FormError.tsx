import { ReactNode } from "react";

function FormError({ children }: { children: ReactNode }) {
  return <span className="text-sm text-red-800">{children}</span>;
}

export default FormError;
