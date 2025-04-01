import { useEffect } from "react";
import { useNavigate } from "react-router";
import useLogin from "../features/auth/useLogin";
import useUser from "../features/auth/useUser";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Login() {
  const { login } = useLogin();
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  function handleLogin() {
    login();
  }

  useEffect(() => {
    if (isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex h-[80vh] max-h-3/4 flex-col items-center justify-center gap-2">
        <h1 className="text-center text-5xl font-bold text-gray-700 uppercase">
          Login
        </h1>
        <form className="flex w-90 flex-col gap-2">
          <label className="font-semibold text-gray-500">Email</label>
          <Input type="email" />
          <label className="font-semibold text-gray-500">Password</label>
          <Input type="password" />
          <div className="mt-2 flex flex-col">
            <Button>Login</Button>
          </div>
        </form>
        <button onClick={handleLogin}>test login</button>
      </div>
    </div>
  );
}

export default Login;
