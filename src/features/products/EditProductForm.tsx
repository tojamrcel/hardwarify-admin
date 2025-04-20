import { Product } from "../../types/types";

function EditProductForm({ product }: { product: Product }) {
  return <div>Edit product #{product.id}</div>;
}

export default EditProductForm;
