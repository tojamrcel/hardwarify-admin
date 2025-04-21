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
    <div className="flex w-auto flex-col gap-2 md:w-[40rem]">
      <Title>Edit product</Title>
      <AddProductForm product={product} onCloseModal={onCloseModal} />
    </div>
  );
}

export default UpdateProduct;
