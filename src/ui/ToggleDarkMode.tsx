import { useDarkMode } from "../contexts/DarkModeContext";
import RoundedBtn from "./RoundedBtn";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode()!;

  function handleToggle() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <RoundedBtn size={10} textSize="2xl" onClick={handleToggle}>
      {isDarkMode && <MdLightMode />}
      {!isDarkMode && <MdDarkMode />}
    </RoundedBtn>
  );
}

export default ToggleDarkMode;
