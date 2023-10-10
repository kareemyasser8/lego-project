import "./AuthLayout.css"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"
import legoLogo from "../../assets/LegoLogo.png"

interface Props {
  children: ReactNode
  type: "login" | "registeration"
}

const AuthLayout = ({ children, type }: Props) => {
  return (
    <>
      <div className="auth-content-page">
        <Link to="/">
          <div className="auth-exit-icon">
            <RxCross2 />
          </div>
        </Link>

        <img
          src={legoLogo}
          alt="logo"
          style={{ width: "45px", height: "45px" }}
        />

        {type == "registeration" && (
          <>
            <h2 className="fw-bold fs-2 text-dark mt-4 text-center">
              Create your LEGO account
            </h2>
            <p className="text-dark text-center">Already have an account?</p>
            <Link
              to="/login"
              className="link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            >
              <p style={{ marginTop: "-10px", color: "#005595" }}>Sign in</p>
            </Link>
          </>
        )}

        {type == "login" && (
          <>
            <h2 className="fw-bold fs-2 text-dark mt-4 text-center mb-3">
              Sign in
            </h2>
          </>
        )}

        {children}
      </div>
    </>
  )
}

export default AuthLayout
