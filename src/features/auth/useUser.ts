import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/data_service";

function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const isAuthenticated = data?.role === "authenticated";
  return { data, isLoading, isAuthenticated };
}

export default useUser;
