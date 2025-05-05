import OrderProductItem from "../features/order/OrderProductItem";
import OrderSummary from "../features/order/OrderSummary";
import Title from "../ui/Title";
import useOrder from "../features/order/useOrder";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

function Order() {
  const { order, isLoading, error } = useOrder();

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (!order || error)
    return (
      <div className="flex h-1/2 flex-col items-center justify-center gap-2 dark:text-gray-300">
        <h2 className="text-3xl">
          We couldn't find the order you looking for.
        </h2>
        <div>
          <Button link="/orders" type="secondary">
            Go back to orders.
          </Button>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      <Title>Order #{order?.id}</Title>
      <div className="grid gap-8 md:grid-cols-2 md:gap-32">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Items
          </h2>
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
