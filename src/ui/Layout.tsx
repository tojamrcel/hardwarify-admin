import { IoMdPerson } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router";
import Button from "./Button";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div>
      <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <div className="row-span-full flex w-64 flex-col gap-8 bg-stone-100 px-4">
          <div className="flex h-20 w-full items-center justify-center text-3xl font-semibold tracking-tight text-gray-800">
            hardwarify
          </div>
          <Navigation />
          <div className="my-4 mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-4 text-lg text-gray-600 antialiased">
              <IoMdPerson />
              <span>Logged as USERNAME</span>
            </div>
            <div className="flex items-center justify-center">
              <Button>Logout</Button>
            </div>
          </div>
        </div>
        <div className="flex h-20 items-center justify-end bg-stone-100 px-8">
          <button className="transition-color flex h-12 w-12 items-center justify-center rounded-full text-2xl text-gray-700 duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800">
            <MdDarkMode />
            {/* <MdLightMode /> */}
          </button>
        </div>
        <div className="col-start-2 rounded-md bg-gray-200 p-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
