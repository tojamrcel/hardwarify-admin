import OrderActions from "./OrderActions";
import useOrder from "./useOrder";

interface OrderSummaryProps {
  price: number;
}

function OrderSummary({ price }: OrderSummaryProps) {
  const { order } = useOrder();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-gray-600">Summary</h2>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="font-semibold text-gray-600">STATUS:</span>
          <span
            className={`font-bold tracking-tight ${order?.status === "pending" ? "text-green-500" : ""} ${order?.status === "sent" ? "text-yellow-600" : ""} ${order?.status === "delivered" ? "text-red-700" : ""} uppercase`}
          >
            {order?.status}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-600">FINAL PRICE:</span>
          <span className="font-bold tracking-tight text-gray-600">
            ${price}
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-col items-start gap-4">
        <OrderActions />
      </div>
    </div>
  );
}

export default OrderSummary;
