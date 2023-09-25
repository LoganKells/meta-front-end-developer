import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  // Give the child component a `theme` state
  const [theme, setTheme] = useState("light");

  // Return a `ThemeContext.Provider` component that receives an object
  // as its value prop, with a `theme` string and a `toggleTheme` function
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Change `useTheme` so that it returns `useContext(ThemeContext);`
// instead of the `{theme: "light"}` object
const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => children;
// export const useTheme = () => ({ theme: "light" });
export { ThemeProvider, useTheme };
