import OrderItem from "./OrderItem";
import useOrders from "./useOrders";

function OrdersList() {
  const { orders, isLoading } = useOrders();
  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      {isLoading && <div>Loading...</div>}
      {orders?.map((order) => <OrderItem order={order} key={order.id} />)}
    </ul>
  );
}

export default OrdersList;
