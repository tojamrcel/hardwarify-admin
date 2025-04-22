import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as APIlogout } from "../../services/apiAuth";
import { useNavigate } from "react-router";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: APIlogout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout };
}

export default useLogout;
