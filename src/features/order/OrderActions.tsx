import { Status } from "../../types/types";
import Button from "../../ui/Button";

interface OrderActionsProps {
  status: Status;
}

function OrderActions({ status }: OrderActionsProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {status !== "pending" && status !== "delivered" && (
        <button className="w-48 rounded-md bg-green-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-green-700">
          SET AS PENDING
        </button>
      )}
      {status !== "sent" && status !== "delivered" && (
        <button className="w-48 rounded-md bg-yellow-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-yellow-700">
          SET AS SENT
        </button>
      )}
      {status !== "delivered" && (
        <button className="w-48 rounded-md bg-red-700 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-red-800">
          SET AS DELIVERED
        </button>
      )}
      {status !== "delivered" && <Button type="secondary">CANCEL ORDER</Button>}
    </div>
  );
}

export default OrderActions;
