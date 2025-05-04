import { Product } from "../../types/types";
import Title from "../../ui/Title";
import AddProductForm from "./AddProductForm";

function UpdateProduct({
  product,
  onCloseModal,
}: {
  product: Product;
  onCloseModal?: () => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto md:w-[40rem]">
      <Title>Edit product</Title>
      <AddProductForm product={product} onCloseModal={onCloseModal} />
    </div>
  );
}

export default UpdateProduct;
