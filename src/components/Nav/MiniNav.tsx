import "./MiniNav.css"
import { TbLego } from "react-icons/tb"

const MiniNav = () => {
  return (
    <>
      <div
        className="mini-nav
        d-flex
        align-items-center
        justify-content-between
        pt-3
        gap-1"
        >
        <p></p>
        <p className="ms-5">
          FREE Shipping with orders over $35!*
        </p>
        <div className="sign-in-section d-flex gap-2 me-5 ">
          <TbLego className="sign-in-icon" />
          <p>Sign In </p>
        </div>
      </div>
    </>
  )
}

export default MiniNav
