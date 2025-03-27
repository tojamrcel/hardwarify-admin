import { IoMdMenu, IoMdPerson } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router";
import Button from "./Button";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { useState } from "react";
import RoundedBtn from "./RoundedBtn";

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
          <div className="mr-4 lg:hidden">
            <RoundedBtn size={12} textSize="2xl" onClick={handleOpenMobileNav}>
              <IoMdMenu />
            </RoundedBtn>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-800 lg:hidden">
            hardwarify
          </h1>
          <div className="ml-auto">
            <RoundedBtn size={10} textSize="2xl">
              <MdDarkMode />
              {/* <MdLightMode /> */}
            </RoundedBtn>
          </div>
        </div>
        <div className="col-start-2 p-16">
          <Outlet />
        </div>
        <MobileNav open={isMobileNavOpen} closeFn={handleCloseMobileNav} />
      </div>

      {isMobileNavOpen && (
        <div className="absolute top-0 left-0 h-screen max-h-full w-screen max-w-full backdrop-blur-xs lg:hidden"></div>
      )}
    </div>
  );
}

export default Layout;
