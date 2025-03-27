import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

import { AuthLayout,  } from "./components/index"
import { Home, About, Portfolio, Blogs, Contact, AddBlog, RTE, LogIn, Signup } from "./pages/index"
import Layout from "./Layout"
import { Provider } from 'react-redux'
import store from "./store/store"

// Routing Logic
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/home",
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        )
      },
      {
        path: "/about",
        element: (
          <AuthLayout authentication={false}>
            <About />
          </AuthLayout>
        )
      },
      {
        path: "/portfolio",
        element: (
          <AuthLayout authentication={false}>
            <Portfolio />
          </AuthLayout>
        )
      },
      {
        path: "/blogs",
        element: (
          <AuthLayout authentication>
            <Blogs />
          </AuthLayout>
        )
      },
      {
        path: "/contact",
        element: (
          <AuthLayout authentication={false}>
            <Contact />
          </AuthLayout>
        )
      },
      {
        path: "/add-blog",
        element: (
          <AuthLayout authentication>
            <AddBlog />
          </AuthLayout>
        )
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LogIn />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/edit-blog/:slug",
        element: (
          <AuthLayout authentication>
            <RTE />
          </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </Provider>
)

