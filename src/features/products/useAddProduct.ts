import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductAPI } from "../../services/apiProducts";
import { Product, NewProduct } from "../../types/types";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

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
      toast.success("Product created successfully");
      queryClient.setQueryData(["products"], (oldData: Product[]) => {
        return [...oldData, data];
      });
      navigate("/products");
    },
    onError: () => {
      toast.error("Couldn't create product.");
    },
  });

  return { createProduct, isLoading, error };
}

export default useAddProduct;
