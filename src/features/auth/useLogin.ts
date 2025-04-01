import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as APIlogin } from "../../services/data_service";
import { useNavigate } from "react-router";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: APIlogin,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
  });

  return { login };
}

export default useLogin;
