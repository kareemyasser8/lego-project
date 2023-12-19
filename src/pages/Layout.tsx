import LoginPopup from "../components/LoginPopup/LoginPopup"
import Nav from "../components/Nav"
import LargeFooter from "../components/LargeFooter/LargeFooter"
import { LoginPopupContextProvider } from "../state-management/contexts/loginPopupContext"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="position-relative">
        <LoginPopupContextProvider>
          <LoginPopup />
          <Nav />
        </LoginPopupContextProvider>
      </div>
      <Outlet />
      <LargeFooter/>
    </>
  )
}

export default Layout
