import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { LuBox } from "react-icons/lu";
import { NavLink, useLocation } from "react-router";

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col gap-8">
      <NavLink
        to="/dashboard"
        className={`group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200 ${pathname.startsWith("/dashboard") ? "bg-gray-200" : ""}`}
      >
        <HiOutlineHome
          className={`text-2xl transition-all duration-300 group-hover:text-red-800 ${pathname.startsWith("/dashboard") ? "text-red-800" : ""}`}
        />
        <span
          className={`group-hover:text-gray-800 ${pathname.startsWith("/dashboard") ? "text-gray-800" : ""}`}
        >
          Dashboard
        </span>
      </NavLink>
      <NavLink
        to="/products"
        className={`group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200 ${pathname.startsWith("/products") ? "bg-gray-200" : ""}`}
      >
        <AiOutlineProduct
          className={`text-2xl transition-all duration-300 group-hover:text-red-800 ${pathname.startsWith("/products") ? "text-red-800" : ""}`}
        />
        <span
          className={`group-hover:text-gray-800 ${pathname.startsWith("/products") ? "text-gray-800" : ""}`}
        >
          Products
        </span>
      </NavLink>
      <NavLink
        to="/orders"
        className={`group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200 ${pathname.startsWith("/order") ? "bg-gray-200" : ""}`}
      >
        <LuBox
          className={`text-2xl transition-all duration-300 group-hover:text-red-800 ${pathname.startsWith("/order") ? "text-red-800" : ""}`}
        />
        <span
          className={`group-hover:text-gray-800 ${pathname.startsWith("/order") ? "text-gray-800" : ""}`}
        >
          Orders
        </span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
