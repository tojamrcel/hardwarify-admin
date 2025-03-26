import Title from "../ui/Title";
import AddProductForm from "../features/products/AddProductForm";

function AddNewProduct() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Title>Add new product</Title>
      <AddProductForm />
    </div>
  );
}

export default AddNewProduct;
