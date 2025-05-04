import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AppMenu from "./AppMenu";
import Header from "./Header";
import MobileNav from "./MobileNav";

function Layout() {
  const [isInfoShown, setIsInfoShown] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  function handleOpenMobileNav() {
    setIsMobileNavOpen(true);
  }

  function handleCloseMobileNav() {
    setIsMobileNavOpen(false);
  }

  useEffect(() => {
    const timerShow = setTimeout(() => {
      setIsInfoShown(true);
    }, 150);

    return () => clearTimeout(timerShow);
  }, []);

  useEffect(() => {
    const timerHide = setTimeout(() => {
      setIsInfoShown(false);
    }, 5000);

    return () => clearTimeout(timerHide);
  }, [isInfoShown]);

  return (
    <>
      <div
        className={`absolute top-0 left-0 z-50 flex h-16 w-full items-center justify-center bg-red-900 text-white transition-all duration-150 ${isInfoShown ? "translate-0" : "-translate-y-full"}`}
      >
        <p className="text-center text-lg font-bold text-gray-300">
          🙋‍♂️ Some data mutations (insert, update, delete) are disabled in demo.
        </p>
      </div>
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
    </>
  );
}

export default Layout;
