import { useState } from "react";
import { Outlet } from "react-router";
import AppMenu from "./AppMenu";
import Header from "./Header";
import MobileNav from "./MobileNav";

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
      <div className="h-screen max-h-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] lg:grid">
        <AppMenu />
        <Header handleOpen={handleOpenMobileNav} />
        <div className="col-start-2 max-h-[85dvh] overflow-auto px-8 py-2 lg:p-16">
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
