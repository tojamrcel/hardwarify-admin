interface OrderStatusBadgeProps {
  status: "pending" | "sent" | "delivered";
}

function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  return (
    <span
      className={`rounded-full ${status === "pending" && "bg-green-500"} ${status === "sent" && "bg-yellow-600"} ${status === "delivered" && "bg-red-700"} px-2 font-semibold tracking-tight text-stone-100`}
    >
      {status.toUpperCase()}
    </span>
  );
}

export default OrderStatusBadge;
