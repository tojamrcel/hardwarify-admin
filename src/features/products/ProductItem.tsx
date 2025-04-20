import { HiPencil, HiTrash } from "react-icons/hi";
import { Product } from "../../types/types";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

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
    <Modal>
      <li className="grid grid-cols-[auto_1fr] rounded-md bg-stone-100">
        <img
          src={image}
          alt={name}
          width={96}
          height={96}
          className="rounded-l-md"
        />
        <div className="relative flex h-full flex-col justify-center px-4">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-600">{name}</h2>
            <span className="text-sm text-gray-500">#{id}</span>
          </div>
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
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="delete">
            <ConfirmDelete />
          </Modal.Window>
          <Modal.Window name="edit">
            <div>Edit</div>
          </Modal.Window>
        </div>
      </li>
    </Modal>
  );
}

export default ProductItem;
