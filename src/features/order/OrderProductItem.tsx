function OrderProductItem() {
  return (
    <li className="grid min-h-24 min-w-24 grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
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
  );
}

export default OrderProductItem;
