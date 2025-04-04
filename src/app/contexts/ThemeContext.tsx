"use client";

import React, { useContext, createContext, useState } from "react";

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

type ThemeProviderProps = {
  initialTheme: Theme;
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme | undefined;
  setTheme: ((theme: Theme) => void) | undefined;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: undefined,
  setTheme: undefined,
});

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  // see https://tailwindcss.com/docs/dark-mode (bottom of page)
  const [theme, _setTheme] = useState<Theme>(initialTheme);

  const setTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * @returns {ThemeContextType} theme and setTheme
 */
export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};

/**
 * @returns TailwindCSS class names for basic styles pertaining to the theme (based on light or dark)
 */
export const useThemeClass = () => {
  const { theme } = useTheme()!;
  return (
    (theme === "LIGHT"
      ? "text-primary bg-secondary"
      : "text-secondary bg-primary") + " transition-color duration-300"
  );
};

export default ThemeProvider;
