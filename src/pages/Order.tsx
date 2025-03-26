import OrderProductItem from "../features/order/OrderProductItem";
import OrderSummary from "../features/order/OrderSummary";
import Title from "../ui/Title";

function Order() {
  return (
    <div className="flex flex-col gap-6">
      <Title>Order #12313123123</Title>
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-600">Items</h2>
          <ul className="flex max-h-96 flex-col gap-2 overflow-auto px-2">
            <OrderProductItem />
            <OrderProductItem />
            <OrderProductItem />
          </ul>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Order;
