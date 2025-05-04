import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus as updateStatusAPI } from "../../services/apiOrders";
import { Order, Status } from "../../types/types";
import toast from "react-hot-toast";

function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateOrderStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, status }: { id: number; status: Status }) =>
      updateStatusAPI({ id, status }),
    onSuccess: (data) => {
      toast.success("Order status updated successfully");
      queryClient.setQueryData(["order", data.id], (oldData: Order) => {
        return { ...oldData, status: data.status };
      });
    },
  });

  return { updateOrderStatus, isUpdating };
}

export default useUpdateOrderStatus;
