import { Status } from "../../types/types";
import OrderActions from "./OrderActions";

interface OrderSummaryProps {
  status: Status;
  price: number;
}

function OrderSummary({ status, price }: OrderSummaryProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold text-gray-600">Summary</h2>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="font-semibold text-gray-600">STATUS:</span>
          <span
            className={`font-bold tracking-tight ${status === "pending" ? "text-green-500" : ""} ${status === "sent" ? "text-yellow-600" : ""} ${status === "delivered" ? "text-red-700" : ""} uppercase`}
          >
            {status}
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
        <OrderActions status={status} />
      </div>
    </div>
  );
}

export default OrderSummary;
