import { HiDotsVertical } from "react-icons/hi";
import RoundedBtn from "../../ui/RoundedBtn";

function ProductItem() {
  return (
    <li className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md bg-stone-100">
      <div className="h-24 w-24 bg-red-800"></div>
      <div className="relative flex h-full flex-col justify-center px-4">
        <h2 className="font-semibold text-gray-600">Product name</h2>
        <p className="text-gray-500">xxx$</p>
        <div className="absolute top-3 right-3">
          <RoundedBtn size={8} textSize="md">
            <HiDotsVertical />
          </RoundedBtn>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
