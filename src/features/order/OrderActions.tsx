import { Status } from "../../types/types";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import useOrder from "./useOrder";
import useUpdateOrderStatus from "./useUpdateOrderStatus";

function OrderActions() {
  const { order } = useOrder();
  const { updateOrderStatus, isUpdating } = useUpdateOrderStatus();

  if (!order) throw new Error("No order found.");

  const { id, status } = order;

  function handleStatusChange(newStatus: Status) {
    updateOrderStatus({ id, status: newStatus });
  }

  if (isUpdating)
    return (
      <div className="ml-14 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-3">
      {status !== "pending" && status !== "delivered" && (
        <button
          onClick={() => handleStatusChange("pending")}
          className="w-48 rounded-md bg-green-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-green-700"
        >
          SET AS PENDING
        </button>
      )}
      {status !== "sent" && status !== "delivered" && (
        <button
          onClick={() => handleStatusChange("sent")}
          className="w-48 rounded-md bg-yellow-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-yellow-700"
        >
          SET AS SENT
        </button>
      )}
      {status !== "delivered" && (
        <button
          onClick={() => handleStatusChange("delivered")}
          className="w-48 rounded-md bg-red-700 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-red-800"
        >
          SET AS DELIVERED
        </button>
      )}
      {status !== "delivered" && <Button type="secondary">CANCEL ORDER</Button>}
    </div>
  );
}

export default OrderActions;
