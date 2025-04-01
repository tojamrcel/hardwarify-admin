import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as APIlogin } from "../../services/data_service";
import { useNavigate } from "react-router";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, error } = useMutation({
    mutationFn: APIlogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: () => {
      throw new Error("Invalid credentials");
    },
  });

  return { login, error };
}

export default useLogin;
