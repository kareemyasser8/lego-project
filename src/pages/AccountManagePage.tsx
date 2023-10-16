import { Outlet } from "react-router-dom"
import AccountMenu from "../components/AccountMenu/AccountMenu"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import LargeFooter from "../components/LargeFooter/LargeFooter"

const AccountManagePage = () => {
  return (
    <>
      <div className=" row justify-content-center">
        <div className="col-12 px-4 page">
          <div className="
            d-sm-flex
            flex-wrap
            mt-5
            mx-3
            mb-4">
            <div className="col-12">
              <BreadCrumb/>
            </div>
            <div className="
              col-lg-3
              col-md-12
              col-sm-12
              mb-3
               ">
              <AccountMenu />
            </div>
            <div className="
              col-lg-9
              col-md-12
              col-sm-12
              px-lg-4
              "
              >
                <Outlet/>
              </div>
          </div>
        </div>
        <LargeFooter />
      </div>
    </>
  )
}

export default AccountManagePage
