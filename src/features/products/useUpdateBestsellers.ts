import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBestsellerStatus as updateBestsellersStatusAPI } from "../../services/apiProducts";
import toast from "react-hot-toast";

function useUpdateBestsellers() {
  const queryClient = useQueryClient();

  const {
    mutate: updateBestsellerStatus,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: (id: number) => updateBestsellersStatusAPI(id),
    onSuccess: () => {
      toast.success("Product bestseller status has been updated.");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Couldn't update product bestseller status.");
    },
  });

  return { updateBestsellerStatus, isUpdating, error };
}

export default useUpdateBestsellers;
