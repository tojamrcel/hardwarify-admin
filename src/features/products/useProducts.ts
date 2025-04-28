import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router";
import { PER_PAGE } from "../../utils/constants";

function useProducts(searchTerm: string | undefined) {
  const queryClient = useQueryClient();
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

  if (data) {
    const pageCount = Math.ceil(data.count / PER_PAGE);

    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["products", searchTerm, page + 1],
        queryFn: () => getProducts({ searchTerm, page: page + 1 }),
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["products", searchTerm, page - 1],
        queryFn: () => getProducts({ searchTerm, page: page - 1 }),
      });
  }

  return { data, isLoading, error };
}

export default useProducts;
