import { HiPencil, HiTrash } from "react-icons/hi";
import { Product } from "../../types/types";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import UpdateProduct from "./UpdateProduct";
import useDeleteProduct from "./useDeleteProduct";
import { HiBookmark } from "react-icons/hi";
import BestsellerBadge from "./BestsellerBadge";
import useUpdateBestsellers from "./useUpdateBestsellers";
import ConfirmationBox from "../../ui/ConfirmationBox";

interface ProductItemProps {
  product: Product;
}
function ProductItem({ product }: ProductItemProps) {
  const { deleteProduct } = useDeleteProduct();
  const { updateBestsellerStatus } = useUpdateBestsellers();

  const {
    id,
    product_name: name,
    regular_price: price,
    image,
    discount,
    isBestseller,
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
            {isBestseller && <BestsellerBadge />}
            <h2 className="font-semibold text-gray-600">{name}</h2>
            <span className="text-sm text-gray-500">#{id}</span>
          </div>
          <div className="flex items-center gap-2">
            <p className={`text-gray-500 ${discount ? "line-through" : ""}`}>
              {price}$
            </p>
            {Number(discount) > 0 && (
              <p className="text-red-500 italic">{price - Number(discount)}$</p>
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
            <Modal.Open opens="changeBestseller">
              <Menus.Button icon={<HiBookmark />}>
                {isBestseller
                  ? "Remove from bestsellers"
                  : "Set as a bestseller"}
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="delete">
            <ConfirmationBox
              type="delete"
              onConfirm={() => deleteProduct(product.id)}
            />
          </Modal.Window>
          <Modal.Window name="changeBestseller">
            <ConfirmationBox
              type="bestseller"
              onConfirm={() => updateBestsellerStatus(id)}
            />
          </Modal.Window>
          <Modal.Window name="edit">
            <UpdateProduct product={product} />
          </Modal.Window>
        </div>
      </li>
    </Modal>
  );
}

export default ProductItem;
