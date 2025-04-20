import OrderProductItem from "../features/order/OrderProductItem";
import OrderSummary from "../features/order/OrderSummary";
import Title from "../ui/Title";
import useOrder from "../features/order/useOrder";
import Spinner from "../ui/Spinner";

function Order() {
  const { order, isLoading, error } = useOrder();

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  if (!order) return <div>No order found</div>;

  return (
    <div className="flex flex-col gap-6">
      <Title>Order #{order?.id}</Title>
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-600">Items</h2>
          <ul className="flex max-h-96 flex-col gap-2 overflow-auto px-2">
            {order.order_items.map((item) => (
              <OrderProductItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <OrderSummary price={order.total_price} />
      </div>
    </div>
  );
}

export default Order;
