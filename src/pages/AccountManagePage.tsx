import { Navigate, Outlet, useNavigate } from "react-router-dom"
import AccountMenu from "../components/AccountMenu/AccountMenu"
import PageContent from "./PageContent"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import TitleBar from "../components/TitleBar"

const AccountManagePage = () => {
  return (
    <>
      <div className="max-content mx-auto">
        <BreadCrumb />
        {/* <TitleBar>admin</TitleBar> */}
        <div className="grid grid--1x2 page-layout mt-4 mb-4">
          <AccountMenu />
          <Outlet />
        </div>
      </div>
      {/* </PageContent> */}
    </>
  )
}

export default AccountManagePage
