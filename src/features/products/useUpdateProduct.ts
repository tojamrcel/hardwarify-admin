import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductAPI } from "../../services/data_service";
import { Product } from "../../types/types";

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const {
    mutate: updateProduct,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: (data: Product) => updateProductAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return { updateProduct, isUpdating, error };
}

export default useUpdateProduct;
