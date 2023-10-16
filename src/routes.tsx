import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import RegisterationPage from "./pages/RegisterationPage"
import LoginPage from "./pages/LoginPage"
import ErrorPage from "./pages/ErrorPage"
import AccountManagePage from "./pages/AccountManagePage"
import AccountOverview from "./components/AccountOverview/AccountOverview"
import ProductsTable from "./components/ProductsTable/ProductsTable"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <AccountManagePage />,
        children: [
          {
            index: true,
            element: <AccountOverview />,
          },
          {
            path: 'products',
            element: <ProductsTable />,
          },
        ],
      },
    ],
  },
  {
    path: "registeration",
    element: <RegisterationPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
])

export default router
