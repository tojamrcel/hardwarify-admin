import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/apiAuth";

function useProfile() {
  const { data: profile, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return { profile, error };
}

export default useProfile;
