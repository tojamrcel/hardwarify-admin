import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router";

function useProducts() {
  const [searchParams] = useSearchParams();

  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const {
    data: products,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(curPage),
  });

  return { products, isLoading, error };
}

export default useProducts;
