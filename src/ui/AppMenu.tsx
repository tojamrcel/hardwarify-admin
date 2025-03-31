import { IoMdPerson } from "react-icons/io";
import Button from "./Button";
import Navigation from "./Navigation";

function AppMenu() {
  return (
    <div className="row-span-full hidden w-72 flex-col gap-8 bg-stone-100 px-6 lg:flex">
      <div className="flex h-20 w-full items-center justify-center text-3xl font-semibold tracking-tight text-gray-800">
        hardwarify
      </div>
      <Navigation />
      <div className="my-4 mt-auto flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4 text-lg text-gray-600 antialiased">
          <IoMdPerson />
          <span>Logged as USERNAME</span>
        </div>
        <div className="flex items-center justify-center">
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default AppMenu;
