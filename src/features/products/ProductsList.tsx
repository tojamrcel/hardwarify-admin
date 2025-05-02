import ProductItem from "./ProductItem";
import useProducts from "./useProducts";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function ProductsList({ searchValue }: { searchValue: string }) {
  const { data, isLoading, error } = useProducts(searchValue);

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (!data?.products?.length)
    return (
      <div className="my-5">
        <p className="text-center text-lg text-gray-500 dark:text-gray-400">
          We could not find product that you're looking for :(
        </p>
      </div>
    );

  return (
    <>
      <ul className="mt-2 flex max-w-full flex-col gap-4">
        <Menus>
          {data?.products?.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </Menus>
        {error && <p className="text-center text-red-700">{error.message}</p>}
      </ul>
      <Pagination count={data?.count} />
    </>
  );
}

export default ProductsList;
