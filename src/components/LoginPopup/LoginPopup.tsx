import "./LoginPopup.css"

import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { ImCross } from "react-icons/im"

import legoLogo from "../../assets/LegoLogo.png"
import loginPopupContext from "../../state-management/contexts/loginPopupContext"

const LoginPopup = () => {
  const { showLoginPopup, dispatch } = useContext(loginPopupContext)

  return (
    <AnimatePresence>
      {showLoginPopup && (
        <motion.div
          key="login-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="login-popup-bg"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, type: "ease-in" }}
            className="login-popup-container"
          >
            <div
              className="
             m-0
             ps-3
             d-flex 
             align-items-center
             "
              style={{ height: "80px" }}
            >
              <img
                src={legoLogo}
                alt="legoLogo"
                style={{ height: "50px", width: "50px" }}
              />

              <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                <div className="ms-3 text-black " style={{ width: "200px" }}>
                  Sign In to your LEGO® Account
                </div>
              </div>

              <div
                onClick={() => dispatch({ type: "HIDE_LOGIN_POPUP" })}
                role="button"
                className="
                border-start
                ms-auto
                border-2
                h-100
                d-flex
                align-items-center
                justify-content-center"
                style={{ width: "75px" }}
              >
                <ImCross size={"20px"} />
              </div>
            </div>
            <div className="w-100 p-3">
              <button className="w-100 signInBtn" style={{ height: "50px" }}>
                Sign In
              </button>
              <div
                className="w-100 d-flex align-items-center py-5 border-bottom border-2"
                style={{ fontSize: "1.0rem" }}
              >
                <div>Don't have an account ?</div>
                <div
                  className="ms-4"
                  style={{
                    fontSize: "1rem",
                    color: "#005595",
                    cursor: "pointer",
                  }}
                >
                  Register
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoginPopup
