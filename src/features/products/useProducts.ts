import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router";

function useProducts(searchTerm: string | undefined) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    data,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products", searchTerm, page],
    queryFn: () => getProducts({ searchTerm, page }),
  });

  return { data, isLoading, error };
}

export default useProducts;
