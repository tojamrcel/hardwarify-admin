import ProductsList from "../features/products/ProductsList";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Products() {
  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Products</Title>
      <ProductsList />
      <div className="ml-auto">
        <Button link="/products/add" type="secondary">
          Add new item
        </Button>
      </div>
    </div>
  );
}

export default Products;
