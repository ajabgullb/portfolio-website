import React from 'react'
import { Outlet, useLocation } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Layout() {
  const MainLayout = () => {
    <>
      <Header/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
    </>
  }
  
  const AuthLayoutComponent = () =>  <Outlet />
  const location = useLocation()
  const isAuthRoute = ["/login", "/singup"].includes(location.pathname)

  return (
    isAuthRoute ? <AuthLayoutComponent /> : <Layout />
  )
}

