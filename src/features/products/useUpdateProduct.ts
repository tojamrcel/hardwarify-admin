import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductAPI } from "../../services/apiProducts";
import { Product } from "../../types/types";
import toast from "react-hot-toast";

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const {
    mutate: updateProduct,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: (data: Product) => updateProductAPI(data),
    onSuccess: () => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Couldn't update product.");
    },
  });

  return { updateProduct, isUpdating, error };
}

export default useUpdateProduct;
