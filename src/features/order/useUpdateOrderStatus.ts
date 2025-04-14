import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus as updateStatusAPI } from "../../services/data_service";
import { Order, Status } from "../../types/types";

function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateOrderStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, status }: { id: number; status: Status }) =>
      updateStatusAPI({ id, status }),
    onSuccess: (data) => {
      queryClient.setQueryData(["order", data.id], (oldData: Order) => {
        return { ...oldData, status: data.status };
      });
    },
  });

  return { updateOrderStatus, isUpdating };
}

export default useUpdateOrderStatus;
