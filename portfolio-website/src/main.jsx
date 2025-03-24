import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import './index.css'
import { Home, About, Portfolio, Blogs, Contact } from "./components/index"
import Layout from "./Layout"

// Routing Logic
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </StrictMode>,
)

