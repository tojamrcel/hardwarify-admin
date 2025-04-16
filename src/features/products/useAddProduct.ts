import { useMutation } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "../../services/data_service";
import { NewProduct } from "../../types/types";

function useAddProduct() {
  const {
    mutate: createProduct,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (data: NewProduct) => createProductAPI(data),
  });

  return { createProduct, isLoading, error };
}

export default useAddProduct;
