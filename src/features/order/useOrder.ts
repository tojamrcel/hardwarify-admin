import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../../services/apiOrders";
import { useParams } from "react-router";

function useOrder() {
  const { orderId } = useParams();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order", Number(orderId)],
    queryFn: () => getOrderById(Number(orderId)),
  });

  return { order, isLoading, error };
}

export default useOrder;
