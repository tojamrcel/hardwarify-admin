import {
  createContext,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode")!)
      : window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error(
      "Dark mode context was used outside of dark mode provider.",
    );

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
