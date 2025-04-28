import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router";

function useOrders() {
  const [searchParams] = useSearchParams();
  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const { data, isLoading, error } = useQuery({
    queryKey: ["orders", curPage],
    queryFn: () => getOrders(curPage),
  });

  return { data, isLoading, error };
}

export default useOrders;
