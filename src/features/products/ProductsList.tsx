import ProductItem from "./ProductItem";
import useProducts from "./useProducts";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";

function ProductsList({ searchValue }: { searchValue: string }) {
  const { products, isLoading, error } = useProducts();
  const [searchedProducts, setSearchedProducts] = useState(products);

  useEffect(() => {
    if (searchValue) {
      const productsFiltered = products
        ?.map((product) =>
          product.product_name
            .toLowerCase()
            .startsWith(searchValue.toLowerCase())
            ? product
            : null,
        )
        .filter((prod) => prod !== null);

      setSearchedProducts(productsFiltered);
    } else if (!searchValue) {
      setSearchedProducts(products);
    }
  }, [products, searchValue, setSearchedProducts]);

  if (isLoading)
    return (
      <div className="flex h-90 w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (!searchedProducts?.length)
    return (
      <div className="my-5">
        <p className="text-center text-lg text-gray-500">
          We could not find product that you're looking for :(
        </p>
      </div>
    );

  return (
    <ul className="mt-2 flex max-w-full flex-col gap-4">
      <Menus>
        {searchedProducts?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Menus>
      {error && <p className="text-center text-red-700">{error.message}</p>}
    </ul>
  );
}

export default ProductsList;
