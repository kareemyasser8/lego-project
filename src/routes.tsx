import { createBrowserRouter } from "react-router-dom"

// import AccountOverview from "./components/AccountOverview/AccountOverview"
// import EditProduct from "./components/EditProduct/EditProduct"
// import ProductsTable from "./components/ProductsTable/ProductsTable"
// import AccountManagePage from "./pages/AccountManagePage"
// import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
// import LoginPage from "./pages/LoginPage"
// import RegisterationPage from "./pages/RegisterationPage"
// import ShopPage from "./pages/ShopPage"
// import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"
// import PrivateRoutes from "./pages/PrivateRoutes"
// import AdminRoutes from "./pages/AdminRoutes"
// import UnAuthorizedPage from "./pages/UnAuthorizedPage"
// import Cart from "./components/Cart/Cart"
// import WishList from "./components/WishList/WishList"
// import CartPage from "./pages/CartPage"
// import WishListPage from "./pages/WishListPage/WishListPage"
import React, { lazy, Suspense } from "react"
import Loading from "./components/Loading/Loading"

const ShopPage = lazy(() => import("./pages/ShopPage"))
const AccountOverview = lazy(
  () => import("./components/AccountOverview/AccountOverview")
)
const EditProduct = lazy(() => import("./components/EditProduct/EditProduct"))
const ProductsTable = lazy(
  () => import("./components/ProductsTable/ProductsTable")
)
const AccountManagePage = lazy(() => import("./pages/AccountManagePage"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterationPage = lazy(() => import("./pages/RegisterationPage"))
const ProductDetailsPage = lazy(
  () => import("./pages/ProductDetailsPage/ProductDetailsPage")
)
const PrivateRoutes = lazy(() => import("./pages/PrivateRoutes"))
const AdminRoutes = lazy(() => import("./pages/AdminRoutes"))
const UnAuthorizedPage = lazy(() => import("./pages/UnAuthorizedPage"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const WishList = lazy(() => import("./components/WishList/WishList"))
const CartPage = lazy(() => import("./pages/CartPage"))
const WishListPage = lazy(() => import("./pages/WishListPage/WishListPage"))
// const HomePage =  lazy(()=>import("./pages/HomePage"))
// const Layout =  lazy(()=>import("./pages/Layout"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoutes />
          </Suspense>
        ),
        children: [
          {
            path: "user",
            element: (
              <Suspense fallback={<Loading />}>
                <AccountManagePage />
              </Suspense>
            ),
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
                path: "cart",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Cart />
                  </Suspense>
                ),
              },
              {
                path: "wishList",
                element: (
                  <Suspense fallback={<Loading />}>
                    <WishList />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "shop",
        element: (
          <Suspense fallback={<Loading />}>
            <ShopPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "wishList",
        element: (
          <Suspense fallback={<Loading />}>
            <WishListPage />
          </Suspense>
        ),
      },
      {
        path: "shop/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "unauthorized",
    element: (
      <Suspense fallback={<Loading />}>
        <UnAuthorizedPage />
      </Suspense>
    ),
  },
  {
    path: "registeration",
    element: (
      <Suspense fallback={<Loading />}>
        <RegisterationPage />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
])

export default router
