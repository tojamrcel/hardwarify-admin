import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

function useProducts(searchTerm: string | undefined) {
  const {
    data: products,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => getProducts(searchTerm),
  });

  return { products, isLoading, error };
}

export default useProducts;
