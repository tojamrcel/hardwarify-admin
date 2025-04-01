import { HiDotsVertical } from "react-icons/hi";
import RoundedBtn from "../../ui/RoundedBtn";
import { Product } from "../../types/types";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const { product_name: name, regular_price: price, image, discount } = product;

  return (
    <li className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
      <img src={image} alt={name} width={96} height={96} />
      <div className="relative flex h-full flex-col justify-center px-4">
        <h2 className="font-semibold text-gray-600">{name}</h2>
        <div className="flex items-center gap-2">
          <p className={`text-gray-500 ${discount ? "line-through" : ""}`}>
            {price}$
          </p>
          {discount && (
            <p className="text-red-500 italic">{price - discount}$</p>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <RoundedBtn size={8} textSize="md">
            <HiDotsVertical />
          </RoundedBtn>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
