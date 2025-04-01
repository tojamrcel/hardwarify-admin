import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../features/auth/useUser";

function Protected({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) return children;
}

export default Protected;
