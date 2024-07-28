import "./MiniNav.css"

import { useContext } from "react"
import { TbLego } from "react-icons/tb"

import loginPopupContext from "../../state-management/contexts/loginPopupContext"
import AuthContext from "../../state-management/contexts/authContext"
import { Link } from "react-router-dom"

const MiniNav = () => {
  const { showLoginPopup, dispatch } = useContext(loginPopupContext)
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      <div className=" mini-nav" >
        <div className="mini-nav__content max-content mx-auto">
          <p></p>
          <p className="ms-5">FREE Shipping with orders over $35!*</p>

          <div
            onClick={() => {
              if (!isLoggedIn) {
                dispatch({ type: "SHOW_LOGIN_POPUP" })
              }
            }}
            className="sign-in-section d-flex gap-2 px-4"
          >
            <TbLego className="sign-in-icon" />

            {isLoggedIn == true ? (
              <Link to="/user">
                <p className="text-black">Account</p>
              </Link>
            ) : (
              <p>Sign In</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniNav
