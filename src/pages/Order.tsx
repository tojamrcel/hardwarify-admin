import Title from "../ui/Title";

function Order() {
  return (
    <div className="flex flex-col gap-6">
      <Title>Order #12313123123</Title>
      <div className="grid grid-cols-2 gap-32">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-600">Items</h2>
          <ul className="flex flex-col gap-2">
            <li className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
              <div className="h-24 w-24 bg-red-800"></div>
              <div className="relative flex h-full flex-col justify-center px-4">
                <h2 className="font-semibold text-gray-600">Product name</h2>
                <p className="text-gray-500">xxx$</p>
                <p className="font-semibold text-gray-500">2x</p>
                <div className="absolute top-3 right-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200"></button>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
              <div className="h-24 w-24 bg-red-800"></div>
              <div className="relative flex h-full flex-col justify-center px-4">
                <h2 className="font-semibold text-gray-600">Product name</h2>
                <p className="text-gray-500">xxx$</p>
                <p className="font-semibold text-gray-500">2x</p>
                <div className="absolute top-3 right-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200"></button>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
              <div className="h-24 w-24 bg-red-800"></div>
              <div className="relative flex h-full flex-col justify-center px-4">
                <h2 className="font-semibold text-gray-600">Product name</h2>
                <p className="text-gray-500">xxx$</p>
                <p className="font-semibold text-gray-500">2x</p>
                <div className="absolute top-3 right-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200"></button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-gray-600">Summary</h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <span className="font-semibold text-gray-600">STATUS:</span>
              <span className="font-bold tracking-tight text-green-500">
                PENDING
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-gray-600">FINAL PRICE:</span>
              <span className="font-bold tracking-tight text-gray-600">
                $999
              </span>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-start gap-4">
            <button className="w-48 rounded-md bg-green-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-green-700">
              SET AS DELIVERED
            </button>
            <button className="w-48 rounded-md bg-yellow-600 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-yellow-700">
              SET AS SENT
            </button>
            <button className="w-48 rounded-md bg-red-700 px-2 py-2 font-semibold text-stone-100 transition-all duration-200 hover:cursor-pointer hover:bg-red-800">
              CANCEL ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
