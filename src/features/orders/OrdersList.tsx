import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import OrderItem from "./OrderItem";
import useOrders from "./useOrders";

function OrdersList() {
  const { data, isLoading } = useOrders();

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        {data?.orders?.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </ul>
      <Pagination count={Number(data?.count)} />
    </>
  );
}

export default OrdersList;
