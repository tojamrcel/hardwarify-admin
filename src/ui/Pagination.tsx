import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Pagination() {
  return (
    <div className="flex w-full items-center justify-center gap-2 text-gray-500">
      <button className="cursor-pointer transition-all duration-150 hover:text-gray-400">
        <FaAngleLeft />
      </button>
      <p className="cursor-default font-semibold">1</p>
      <button className="cursor-pointer transition-all duration-150 hover:text-gray-400">
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
