"use client";

import setGlobalColourTheme from "@/lib/theme-color";
import { useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { createContext, useContext, useEffect, useState } from "react";

// allow for setting any color in the child component
const ThemeContext = createContext<ThemeColourStateParams>(
  {} as ThemeColourStateParams,
);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  // selected color store
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc";
    } catch (error) {
      "Zinc" as ThemeColors;
    }
  };

  //to avoid the screen flicker when changing the color
  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors,
  );
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
    //setGlobalColourTheme(theme as "light" | "dark", themeColor);
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
