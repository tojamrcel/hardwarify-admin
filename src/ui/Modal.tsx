import {
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalContextType {
  openName: string;
  open: Dispatch<SetStateAction<string>>;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<string>("");
  const open = setOpenName;

  function close() {
    setOpenName("");
  }

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open<T extends { onClick?: () => void }>({
  children,
  opens: opensWindowName,
}: {
  children: ReactElement<T>;
  opens: string;
}) {
  const { open } = useContext(ModalContext)!;

  return cloneElement(children, { onClick: () => open(opensWindowName) } as T);
}

function Window() {}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
