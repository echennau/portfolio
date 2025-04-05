import { FiMoon, FiSun } from "react-icons/fi";
import { Theme, useTheme } from "../contexts/ThemeContext";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  // embarassing one-time hack
  //   theme = theme!;
  //   setTheme = setTheme!;

  return (
    <button
      className="relative w-6 h-10 rounded-full flex items-center justify-center overflow-y-hidden"
      onClick={() => setTheme!(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      <FiMoon
        className={`absolute size-6 transition-all duration-500 ${
          theme === Theme.DARK
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        } hover:text-accent`}
      />

      <FiSun
        className={`absolute size-6 transition-all duration-500 ${
          theme === Theme.LIGHT
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        } hover:text-accent`}
      />
    </button>
  );
};

export default ThemeSwitch;
