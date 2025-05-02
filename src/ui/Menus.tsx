import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { HiDotsVertical } from "react-icons/hi";
import RoundedBtn from "./RoundedBtn";
import { IconType } from "react-icons";
import { useClickOutside } from "../hooks/useClickOutside";

interface MenuContextType {
  openId: string;
  open: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

const MenuContext = createContext<MenuContextType | null>(null);

function Menus({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string>("");
  const open = setOpenId;

  function close() {
    setOpenId("");
  }

  return (
    <MenuContext.Provider value={{ openId, open, close }}>
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return children;
}

function Toggle({ id }: { id: string }) {
  const { open, close, openId } = useContext(MenuContext)!;

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    if (openId === "" || openId !== id) {
      open(id);
    } else if (openId === id) {
      close();
    }
  }

  return (
    <RoundedBtn size={8} textSize="md" onClick={handleToggle}>
      <HiDotsVertical />
    </RoundedBtn>
  );
}

function List({ id, children }: { id: string; children: ReactNode }) {
  const { openId, close } = useContext(MenuContext)!;
  const ref = useClickOutside<HTMLUListElement>(close);

  if (id !== openId) return null;
  return (
    <ul
      ref={ref}
      className="absolute top-12 -right-5 z-10 flex flex-col overflow-clip rounded-md bg-stone-100 shadow-sm sm:-right-8 dark:bg-gray-800"
    >
      {children}
    </ul>
  );
}

function Button({
  children,
  onClick,
  icon,
}: {
  children: ReactNode;
  onClick?: () => void;
  icon: ReactElement<IconType>;
}) {
  return (
    <li className="flex w-full flex-col">
      <button
        onClick={onClick}
        className="group flex w-full cursor-pointer items-center gap-2 px-2 py-3 text-start tracking-tight text-gray-600 transition-all duration-150 hover:bg-gray-200 sm:px-4 dark:text-gray-400 dark:hover:bg-gray-900"
      >
        <span className="text-xl group-hover:text-red-800">{icon}</span>
        <span className="text-sm text-gray-700 sm:text-base dark:text-gray-300">
          {children}
        </span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
