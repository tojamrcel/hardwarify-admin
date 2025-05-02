import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../features/auth/useUser";
import LoginForm from "../features/auth/LoginForm";

function Login() {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, navigate, isLoading]);

  return (
    <div>
      <div className="flex h-[80vh] max-h-3/4 flex-col items-center justify-center gap-2">
        <h1 className="text-center text-5xl font-bold text-gray-700 uppercase dark:text-gray-400">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
