import { Product } from "../../types/types";

function OrderProductItem({ item }: { item: Product }) {
  const {
    product_name: name,
    regular_price: price,
    discount,
    quantity,
    image,
  } = item;

  return (
    <li className="grid min-h-24 min-w-24 grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100 dark:bg-gray-800">
      <img src={image} alt={name} width={96} height={96} />
      <div className="relative flex h-full flex-col justify-center px-4">
        <h2 className="font-semibold text-gray-600 dark:text-gray-300">
          {name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          {price - Number(discount)}$
        </p>
        <p className="font-semibold text-gray-500 dark:text-gray-400">
          {quantity}x
        </p>
      </div>
    </li>
  );
}

export default OrderProductItem;
