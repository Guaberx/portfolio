import React, { Dispatch, SetStateAction } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<"light" | "dark" | "otro">>;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  setTheme: (prev) => prev,
});
