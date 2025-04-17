import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "../../services/data_service";
import { Product, NewProduct } from "../../types/types";
import { useNavigate } from "react-router";

function useAddProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: createProduct,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (data: NewProduct) => createProductAPI(data),
    onSuccess: (data) => {
      queryClient.setQueryData(["products"], (oldData: Product[]) => {
        return [...oldData, data];
      });
      navigate("/products");
    },
  });

  return { createProduct, isLoading, error };
}

export default useAddProduct;
