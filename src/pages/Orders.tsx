import Title from "../ui/Title";
import OrderItem from "../features/orders/OrderItem";

function Orders() {
  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Orders</Title>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        <OrderItem />
      </ul>
    </div>
  );
}

export default Orders;
