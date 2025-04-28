import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSearchParams } from "react-router";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const curPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  function nextPage() {
    const next = curPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = curPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full items-center justify-center gap-2 text-gray-500">
      <button
        onClick={prevPage}
        className="cursor-pointer transition-all duration-150 hover:text-gray-400"
      >
        <FaAngleLeft />
      </button>
      <p className="cursor-default font-semibold">{curPage}</p>
      <button
        onClick={nextPage}
        className="cursor-pointer transition-all duration-150 hover:text-gray-400"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Pagination;
