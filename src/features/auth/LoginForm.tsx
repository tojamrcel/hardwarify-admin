import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useLogin from "./useLogin";
import { useForm } from "react-hook-form";
import { LoginData } from "../../types/types";

function LoginForm() {
  const { login, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    login(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-90 flex-col gap-2"
    >
      <label className="font-semibold text-gray-500">Email</label>
      <div className="flex flex-col">
        <Input
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.email && (
          <span className="text-sm text-red-800">
            {errors.email.message?.toString()}
          </span>
        )}
      </div>
      <label className="font-semibold text-gray-500">Password</label>
      <div className="flex flex-col">
        <Input
          type="password"
          register={register("password", {
            required: "Password is required.",
          })}
        />
        {errors?.password && (
          <span className="text-sm text-red-800">
            {errors.password.message?.toString()}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-col">
        <Button>Login</Button>
      </div>
      {error && (
        <span className="text-center text-sm text-red-800">
          Email or password is incorrect.
        </span>
      )}
    </form>
  );
}

export default LoginForm;
