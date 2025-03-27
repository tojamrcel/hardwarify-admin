import { IoMdMenu, IoMdPerson } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router";
import Button from "./Button";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { useState } from "react";

function Layout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  function handleOpenMobileNav() {
    setIsMobileNavOpen(true);
  }

  function handleCloseMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <div>
      <div className="h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] lg:grid">
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
        <div className="flex h-20 items-center bg-stone-100 px-8">
          <button
            onClick={handleOpenMobileNav}
            className="transition-color mr-4 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-gray-700 duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800 lg:hidden"
          >
            <IoMdMenu />
          </button>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-800 lg:hidden">
            hardwarify
          </h1>
          <button className="transition-color ml-auto flex h-12 w-12 items-center justify-center rounded-full text-2xl text-gray-700 duration-200 hover:cursor-pointer hover:bg-gray-200 hover:text-gray-800">
            <MdDarkMode />
            {/* <MdLightMode /> */}
          </button>
        </div>
        <div className="col-start-2 p-16">
          <Outlet />
        </div>
        <MobileNav open={isMobileNavOpen} closeFn={handleCloseMobileNav} />
      </div>
    </div>
  );
}

export default Layout;
