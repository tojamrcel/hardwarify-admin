import ProductItem from "./ProductItem";
import useProducts from "./useProducts";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";

function ProductsList() {
  const { products, isLoading, error } = useProducts();

  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      {isLoading && (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}
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
