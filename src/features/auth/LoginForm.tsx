import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useLogin from "./useLogin";
import { useForm } from "react-hook-form";
import { LoginData } from "../../types/types";
import Label from "../../ui/Label";
import FormError from "../../ui/FormError";

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
      <Label>Email</Label>
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
          <FormError>{errors.email.message?.toString()}</FormError>
        )}
      </div>
      <Label>Password</Label>
      <div className="flex flex-col">
        <Input
          type="password"
          register={register("password", {
            required: "Password is required.",
          })}
        />
        {errors?.password && (
          <FormError>{errors.password.message?.toString()}</FormError>
        )}
      </div>
      <div className="mt-2 flex flex-col">
        <Button>Login</Button>
      </div>
      {error && (
        <span className="text-center text-sm text-red-800">
          {error.message}
        </span>
      )}
    </form>
  );
}

export default LoginForm;
