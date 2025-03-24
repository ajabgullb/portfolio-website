import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import './index.css'
import { Home, About, Portfolio, Blogs, Contact, AddBlog, AuthLayout, RTE } from "./components/index"
import Layout from "./Layout"

// Routing Logic
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <AuthLayout authentication={false}>
        <Route path='' element={<Home/>}/>
      </AuthLayout>
      <AuthLayout authentication={false}>
        <Route path='home' element={<Home/>}/>
      </AuthLayout>
      <AuthLayout authentication={false}>
        <Route path='about' element={<About/>}/>
      </AuthLayout>
      <AuthLayout authentication={false}>
        <Route path='portfolio' element={<Portfolio/>}/>
      </AuthLayout>
      <AuthLayout authentication={false}>
        <Route path='contact' element={<Contact/>}/>
      </AuthLayout>
      <AuthLayout authentication>
        <Route path='blogs' element={<Blogs/>}/>
      </AuthLayout>
      <AuthLayout authentication>
        <Route path='add-blog' element={<AddBlog />}/>
      </AuthLayout>
      <AuthLayout authentication>
        <Route path='/edit-blog/:slug' element={<RTE />}/>
      </AuthLayout>
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

