import { HiDotsVertical } from "react-icons/hi";
import Title from "../ui/Title";

function Orders() {
  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Orders</Title>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        <li className="flex h-32 flex-col overflow-hidden rounded-md bg-stone-100">
          <div className="relative flex h-full flex-col gap-2 p-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-600">
                Order #21313121282834283
              </h2>
              <span className="rounded-full bg-green-500 px-2 font-semibold tracking-tight text-stone-100">
                PENDING
              </span>
            </div>
            <div className="flex max-w-3/4 gap-2 overflow-clip">
              <div className="min-h-14 min-w-14 rounded-md bg-red-700"></div>
              <div className="min-h-14 min-w-14 rounded-md bg-red-700"></div>
              <div className="min-h-14 min-w-14 rounded-md bg-red-700"></div>
            </div>
            <div className="absolute top-3 right-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200">
                <HiDotsVertical className="text-xl text-gray-600" />
              </button>
            </div>
            <div className="absolute right-4 bottom-4 text-lg">
              <p className="text-gray-500">xxx$</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Orders;
