interface OrderStatusBadgeProps {
  status: "pending" | "sent" | "delivered";
}

function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  return (
    <span
      className={`rounded-full ${status === "pending" && "bg-green-500"} ${status === "sent" && "bg-yellow-600"} ${status === "delivered" && "bg-red-700"} w-24 px-2 text-center font-semibold tracking-tight text-stone-100`}
    >
      {status.toUpperCase()}
    </span>
  );
}

export default OrderStatusBadge;
