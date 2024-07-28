import LoginPopup from "../components/LoginPopup/LoginPopup"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
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

      <Footer />
    </>
  )
}

export default Layout
