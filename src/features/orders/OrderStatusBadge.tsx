import { Status } from "../../types/types";

interface OrderStatusBadgeProps {
  status: Status;
}

function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  return (
    <span
      className={`rounded-full ${status === "pending" && "bg-green-500 dark:bg-green-700"} ${status === "sent" && "bg-yellow-600 dark:bg-yellow-700"} ${status === "delivered" && "bg-red-700 dark:bg-red-800"} w-24 px-2 text-center text-sm font-semibold tracking-tight text-stone-100 sm:text-base`}
    >
      {status.toUpperCase()}
    </span>
  );
}

export default OrderStatusBadge;
