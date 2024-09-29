type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange";

interface ThemeColourStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
