import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { LuBox } from "react-icons/lu";
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <div className="row-span-full flex w-64 flex-col gap-8 bg-stone-100">
          <div className="flex h-20 w-full items-center justify-center text-3xl font-semibold tracking-tight text-gray-800">
            hardwarify
          </div>
          <ul className="flex flex-col gap-8 px-4">
            <NavLink
              to="/dashboard"
              className="group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200"
            >
              <HiOutlineHome className="text-2xl transition-all duration-300 group-hover:text-red-800" />
              <span className="group-hover:text-gray-800">Dashboard</span>
            </NavLink>
            <NavLink
              to="/products"
              className="group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200"
            >
              <AiOutlineProduct className="text-2xl transition-all duration-300 group-hover:text-red-800" />
              <span className="group-hover:text-gray-800">Products</span>
            </NavLink>
            <NavLink
              to="/orders"
              className="group flex h-8 items-center gap-2 rounded-md px-2 py-6 text-xl text-gray-700 transition-all duration-200 hover:bg-gray-200"
            >
              <LuBox className="text-2xl transition-all duration-300 group-hover:text-red-800" />
              <span className="group-hover:text-gray-800">Orders</span>
            </NavLink>
          </ul>
        </div>
        <div className="h-20 bg-stone-100"></div>
        <div className="col-start-2 bg-gray-200 p-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
