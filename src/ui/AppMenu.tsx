import Navigation from "./Navigation";
import UserInfo from "./UserInfo";

function AppMenu() {
  return (
    <div className="row-span-full hidden w-72 flex-col gap-8 bg-stone-100 px-6 lg:flex dark:bg-gray-800">
      <div className="flex h-20 w-full items-center justify-center text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-300">
        hardwarify
      </div>
      <Navigation />
      <UserInfo />
    </div>
  );
}

export default AppMenu;
