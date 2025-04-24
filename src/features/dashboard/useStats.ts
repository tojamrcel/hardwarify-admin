import { useQuery } from "@tanstack/react-query";
import { getOrdersStats } from "../../services/apiOrders";

function useStats() {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getOrdersStats,
  });

  return { stats, isLoading, error };
}

export default useStats;
