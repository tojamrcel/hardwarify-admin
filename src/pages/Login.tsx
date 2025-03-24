import Button from "../ui/Button";
import Input from "../ui/Input";

function Login() {
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
      </div>
    </div>
  );
}

export default Login;
