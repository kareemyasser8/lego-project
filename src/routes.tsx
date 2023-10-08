import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import RegisterationPage from "./pages/RegisterationPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/registeration",
    element: <RegisterationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
])

export default router
