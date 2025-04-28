import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

function useProducts() {
  const {
    data: products,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isLoading, error };
}

export default useProducts;
