import ProductItem from "./ProductItem";
import useProducts from "./useProducts";
import Menus from "../../ui/Menus";

function ProductsList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      <Menus>
        {products?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Menus>
      {error && <p className="text-center text-red-700">{error.message}</p>}
    </ul>
  );
}

export default ProductsList;
