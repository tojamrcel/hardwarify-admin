import OrderActions from "./OrderActions";
import useOrder from "./useOrder";

interface OrderSummaryProps {
  price: number;
}

function OrderSummary({ price }: OrderSummaryProps) {
  const { order } = useOrder();

  return (
    <div className="flex flex-col items-center gap-2 md:items-center">
      <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
        Summary
      </h2>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            STATUS:
          </span>
          <span
            className={`font-bold tracking-tight ${order?.status === "pending" ? "text-green-500 dark:text-green-700" : ""} ${order?.status === "sent" ? "text-yellow-600 dark:text-yellow-700" : ""} ${order?.status === "delivered" ? "text-red-700 dark:text-red-800" : ""} uppercase`}
          >
            {order?.status}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            FINAL PRICE:
          </span>
          <span className="font-bold tracking-tight text-gray-600 dark:text-gray-300">
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
