import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBestsellerStatus as updateBestsellersStatusAPI } from "../../services/apiProducts";

function useUpdateBestsellers() {
  const queryClient = useQueryClient();

  const {
    mutate: updateBestsellerStatus,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: (id: number) => updateBestsellersStatusAPI(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  return { updateBestsellerStatus, isUpdating, error };
}

export default useUpdateBestsellers;
