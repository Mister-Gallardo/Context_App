import React, { createContext, PropsWithChildren, useContext } from "react";

interface IThemeContext {
  color: "light" | "dark";
  toggleColor: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [color, setColor] = React.useState<"light" | "dark">("light");

  const toggleColor = () => {
    setColor((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ color, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) throw new Error('useTheme must be used within a ThemeProvider');

    return context;
}
