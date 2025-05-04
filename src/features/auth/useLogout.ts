import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as APIlogout } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: APIlogout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout };
}

export default useLogout;
