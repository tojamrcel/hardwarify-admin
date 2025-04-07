import OrderStatusBadge from "./OrderStatusBadge";
import Button from "../../ui/Button";
import { Order } from "../../types/types";

function OrderItem({ order }: { order: Order }) {
  const { id, total_price: price, status, order_items: orderItems } = order;

  return (
    <li className="flex h-32 flex-col overflow-hidden rounded-md bg-stone-100">
      <div className="relative flex h-full flex-col gap-2 p-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-600">Order #{id}</h2>
          <OrderStatusBadge status={status} />
        </div>
        <div className="flex max-w-3/4 gap-2 overflow-clip">
          {orderItems.map((item) => (
            <img
              src={item.image}
              alt={item.product_name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-md"
              key={item.id}
            />
          ))}
        </div>
        <div className="absolute right-3 bottom-3">
          <Button link={`/order/${id}`} type="secondary">
            Manage order
          </Button>
        </div>
        <div className="absolute top-4 right-4 text-lg">
          <p className="text-gray-500">{price}$</p>
        </div>
      </div>
    </li>
  );
}

export default OrderItem;
