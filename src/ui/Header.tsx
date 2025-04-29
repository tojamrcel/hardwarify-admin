import { IoMdMenu } from "react-icons/io";
import RoundedBtn from "./RoundedBtn";
import ToggleDarkMode from "./ToggleDarkMode";

function Header({ handleOpen }: { handleOpen: () => void }) {
  return (
    <div className="flex h-20 items-center bg-stone-100 px-8">
      <div className="mr-4 lg:hidden">
        <RoundedBtn size={12} textSize="2xl" onClick={handleOpen}>
          <IoMdMenu />
        </RoundedBtn>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-gray-800 lg:hidden">
        hardwarify
      </h1>
      <div className="ml-auto flex w-10 justify-center">
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default Header;
