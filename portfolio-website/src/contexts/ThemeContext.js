import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
  return useContext(ThemeContext)
}
