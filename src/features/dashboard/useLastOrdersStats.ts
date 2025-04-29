import { useQuery } from "@tanstack/react-query";
import { getLastOrdersStats } from "../../services/apiOrders";

function useLastOrdersStats() {
  const {
    data: lastOrdersStats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["lastOrdersStarts"],
    queryFn: getLastOrdersStats,
  });

  return { lastOrdersStats, isLoading, error };
}

export default useLastOrdersStats;
