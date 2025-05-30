import Title from "../ui/Title";
import OrdersList from "../features/orders/OrdersList";

function Orders() {
  return (
    <div className="flex max-w-full flex-col gap-2">
      <Title>Orders</Title>
      <OrdersList />
    </div>
  );
}

export default Orders;
