import ProductItem from "./ProductItem";
import useProducts from "./useProducts";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";

function ProductsList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );

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
