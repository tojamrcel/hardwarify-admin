import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import ProductsList from "../features/products/ProductsList";
import Button from "../ui/Button";
import Title from "../ui/Title";

function Products() {
  const [searchValue, setSearchValue] = useState<string>("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="flex max-w-3/4 flex-col gap-2">
      <Title>Products</Title>
      <div className="relative flex h-10 w-full items-center justify-center">
        <input
          type="text"
          className="transition-full h-10 w-full rounded-full border-2 border-transparent bg-stone-100 px-4 pl-10 text-gray-600 duration-200 placeholder:italic focus:border-red-700 focus:outline-none"
          placeholder="Search for products..."
          onChange={onChange}
        />
        <div className="absolute left-4 text-gray-500">
          <HiSearch />
        </div>
      </div>
      <ProductsList searchValue={searchValue} />
      <div className="ml-auto">
        <Button link="/products/add" type="secondary">
          Add new item
        </Button>
      </div>
    </div>
  );
}

export default Products;
