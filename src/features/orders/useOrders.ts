import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router";
import { PER_PAGE } from "../../utils/constants";

function useOrders() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", curPage],
    queryFn: () => getOrders(curPage),
  });

  if (data) {
    const pageCount = Math.ceil(data.count / PER_PAGE);

    if (curPage < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["orders", curPage + 1],
        queryFn: () => getOrders(curPage + 1),
      });

    if (curPage > 1)
      queryClient.prefetchQuery({
        queryKey: ["orders", curPage - 1],
        queryFn: () => getOrders(curPage - 1),
      });
  }

  return { data, isLoading, error };
}

export default useOrders;
