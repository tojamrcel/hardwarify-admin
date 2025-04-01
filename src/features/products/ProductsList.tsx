import ProductItem from "./ProductItem";
import useProducts from "./useProducts";

function ProductsList() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
      {error && <p className="text-center text-red-700">{error.message}</p>}
    </ul>
  );
}

export default ProductsList;
