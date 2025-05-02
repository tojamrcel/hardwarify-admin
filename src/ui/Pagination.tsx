import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { PER_PAGE } from "../utils/constants";

function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / PER_PAGE);

  function nextPage() {
    const next = curPage === pageCount ? curPage : curPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = curPage - 1 === 0 ? curPage : curPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
      <button
        onClick={prevPage}
        disabled={curPage === 1}
        className="cursor-pointer transition-all duration-150 hover:text-gray-400 disabled:cursor-default disabled:text-gray-400 hover:dark:text-gray-500"
      >
        <FaAngleLeft />
      </button>
      <p className="cursor-default font-semibold">{curPage}</p>
      <button
        disabled={curPage === pageCount}
        onClick={nextPage}
        className="cursor-pointer transition-all duration-150 hover:text-gray-400 disabled:cursor-default disabled:text-gray-400 hover:dark:text-gray-500"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
