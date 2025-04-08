import { HiPencil, HiTrash } from "react-icons/hi";
import { Product } from "../../types/types";
import Menus from "../../ui/Menus";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const {
    id,
    product_name: name,
    regular_price: price,
    image,
    discount,
  } = product;

  return (
    <li className="grid grid-cols-[auto_1fr] rounded-md bg-stone-100">
      <img
        src={image}
        alt={name}
        width={96}
        height={96}
        className="rounded-l-md"
      />
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
          <Menus.Toggle id={id.toString()} />
        </div>
        <Menus.List id={id.toString()}>
          <Menus.Button icon={<HiPencil />} onClick={() => {}}>
            Edit
          </Menus.Button>
          <Menus.Button icon={<HiTrash />} onClick={() => {}}>
            Delete
          </Menus.Button>
        </Menus.List>
      </div>
    </li>
  );
}

export default ProductItem;
