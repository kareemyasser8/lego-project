import { Outlet } from "react-router-dom"
import AccountMenu from "../components/AccountMenu/AccountMenu"
import PageContent from "./PageContent"

const AccountManagePage = () => {
  return (
    <>
      <PageContent>
        <AccountMenu />
        <Outlet />
      </PageContent>
    </>
  )
}

export default AccountManagePage
