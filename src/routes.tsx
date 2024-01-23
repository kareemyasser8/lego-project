import { createBrowserRouter } from "react-router-dom"

import AccountOverview from "./components/AccountOverview/AccountOverview"
import EditProduct from "./components/EditProduct/EditProduct"
import ProductsTable from "./components/ProductsTable/ProductsTable"
import AccountManagePage from "./pages/AccountManagePage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import LoginPage from "./pages/LoginPage"
import RegisterationPage from "./pages/RegisterationPage"
import ShopPage from "./pages/ShopPage"
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"
import PrivateRoutes from "./pages/PrivateRoutes"
import AdminRoutes from "./pages/AdminRoutes"
import UnAuthorizedPage from "./pages/UnAuthorizedPage"
import Cart from "./components/Cart/Cart"

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
        element: <PrivateRoutes />,
        children: [
          {
            path: "user",
            element: <AccountManagePage />,
            children: [
              {
                index: true,
                element: <AccountOverview />,
              },
              {
                element: <AdminRoutes />,
                children: [
                  {
                    path: "products",
                    element: <ProductsTable />,
                  },
                  {
                    path: "products/new",
                    element: <EditProduct />,
                  },
                  {
                    path: "products/edit/:id",
                    element: <EditProduct />,
                  },
                ],
              },
              {
                path:"cart",
                element: <Cart/>
              }
            ],
          },
        ],
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },{
    path: "unauthorized",
    element: <UnAuthorizedPage/>
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
