import ProductItem from "../features/products/ProductItem";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Products() {
  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Products</Title>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        <ProductItem />
      </ul>
      <div className="ml-auto">
        <Button type="secondary">Add new item</Button>
      </div>
    </div>
  );
}

export default Products;
