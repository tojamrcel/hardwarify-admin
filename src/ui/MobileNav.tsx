import { IoMdClose } from "react-icons/io";
import Navigation from "./Navigation";
import RoundedBtn from "./RoundedBtn";
import UserInfo from "./UserInfo";

interface MobileNavProps {
  open: boolean;
  closeFn: () => void;
}

function MobileNav({ open, closeFn }: MobileNavProps) {
  return (
    <div
      className={`absolute top-0 left-0 z-50 ml-auto flex h-screen max-h-full w-72 flex-col items-center gap-12 bg-stone-100 px-2 py-4 transition-all duration-150 lg:hidden dark:bg-gray-800 ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex w-full items-center px-4">
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 lg:hidden dark:text-gray-300">
          hardwarify
        </h1>
        <div className="mt-2 ml-auto">
          <RoundedBtn onClick={closeFn} size={12} textSize="3xl">
            <IoMdClose />
          </RoundedBtn>
        </div>
      </div>
      <div className="w-full">
        <Navigation />
      </div>
      <UserInfo />
    </div>
  );
}

export default MobileNav;
