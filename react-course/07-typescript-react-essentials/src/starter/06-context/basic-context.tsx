import { createContext, useContext } from "react";

// const ThemeProviderContext = createContext<string | undefined>(undefined);
const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProviderContext.Provider value="ram">
    <ThemeProviderContext.Provider value={{ name: "ram" }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within the ThemeProvider");
  return context;
};
