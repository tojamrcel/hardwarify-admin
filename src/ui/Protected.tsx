import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../features/auth/useUser";
import Spinner from "./Spinner";

function Protected({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading)
    return (
      <div className="flex h-screen max-h-full w-screen max-w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default Protected;
