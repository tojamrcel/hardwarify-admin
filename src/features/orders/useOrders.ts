import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/data_service";

function useOrders() {
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { orders, isLoading, error };
}

export default useOrders;
