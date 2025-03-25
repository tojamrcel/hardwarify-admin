import ProductItem from "../features/products/ProductItem";
import Title from "../ui/Title";

function Products() {
  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Products</Title>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        <ProductItem />
      </ul>
      <div className="ml-auto">
        <button className="border-b-2 border-transparent font-semibold text-gray-600 transition-all duration-150 hover:cursor-pointer hover:border-gray-500">
          Add new item
        </button>
      </div>
    </div>
  );
}

export default Products;
