import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ThemeProvider } from "./contexts/ThemeContext.js"

function Layout() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => setThemeMode("dark")
  const lightMode = () => setThemeMode("light")

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <Header/>
        <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}

export default Layout
