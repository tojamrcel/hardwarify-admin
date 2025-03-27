import { IoMdClose } from "react-icons/io";
import Navigation from "./Navigation";

interface MobileNavProps {
  open: boolean;
  closeFn: () => void;
}

function MobileNav({ open, closeFn }: MobileNavProps) {
  return (
    <div
      className={`absolute top-0 left-0 ml-auto flex h-screen max-h-full w-72 flex-col items-center gap-12 bg-stone-100 px-2 py-4 transition-all duration-150 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex w-full items-center px-4">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 lg:hidden">
          hardwarify
        </h1>
        <button
          onClick={closeFn}
          className="transition-color mt-2 ml-auto flex h-12 w-12 items-center justify-center rounded-full text-3xl text-gray-700 duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800"
        >
          <IoMdClose />
        </button>
      </div>
      <div className="w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default MobileNav;
