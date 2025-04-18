import Spinner from "../../ui/Spinner";
import OrderItem from "./OrderItem";
import useOrders from "./useOrders";

function OrdersList() {
  const { orders, isLoading } = useOrders();
  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
      {orders?.map((order) => <OrderItem order={order} key={order.id} />)}
    </ul>
  );
}

export default OrdersList;
