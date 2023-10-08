import "./MobileNav.css"
import { IoIosMenu } from "react-icons/io"
import legoLogo from "../../assets/LegoLogo.png"
import { LuSearch } from "react-icons/lu"
import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { TbLego } from "react-icons/tb"
import { useContext, useEffect, useRef } from "react"
import LoginPopupContext from "../../state-management/contexts/loginPopupContext"

const MobileNav = () => {
  const { dispatch } = useContext(LoginPopupContext)

  const navbar = useRef<HTMLDivElement>(null)
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop

  const handleScrollUp = () => {
    const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop

    if (scrollTopPosition > lastScrollTop) {
      //scroll down
      if (navbar.current) {
        navbar.current.style.top = "-300px"
        navbar.current.style.transition = "0.8s ease-out"
      }
    } else if (scrollTopPosition < lastScrollTop) {
      //scroll up
      if (navbar.current) {
        navbar.current.style.top = "0px"
        navbar.current.style.transition = "0.5s ease-out"
      }
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUp)

    return () => {
      window.removeEventListener("scroll", handleScrollUp)
    }
  }, [])

  return (
    <>
      <div
        ref={navbar}
        className="
          mobile-nav
          py-2
          w-100
          m-0
          row
          z-3
          align-items-center"
      >
        <div className="col-6 d-flex">
          <div
            className="
              mobile-menu-btn
              d-flex
              flex-column
              justify-content-center
              align-items-center
              ms-2
              "
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          >
            <IoIosMenu size={"40px"} />
            <div style={{ fontSize: "0.6rem" }}>MENU</div>
          </div>

          <div
            className="mobile-logo border ms-3"
            style={{ cursor: "pointer", width: "40px", height: "40px" }}
          >
            <img className="w-100" src={legoLogo} alt="Logo" />
          </div>
        </div>
        <div
          className="
                col-6
                d-flex
                pe-4
                align-items-center
                justify-content-end gap-3"
        >
          <LuSearch className="mobile-nav-item" size={"23px"} />
          <TbLego
            className="mobile-nav-item"
            size={"23px"}
            onClick={() => dispatch({ type: "SHOW_LOGIN_POPUP" })}
          />
          <FiHeart className="mobile-nav-item" size={"23px"} />
          <div className="d-flex flex-column align-items-center position-relative">
            <HiOutlineShoppingBag className="mobile-nav-item" size={"23px"} />
            <div
              className="position-absolute"
              style={{ fontSize: "0.6rem", top: "100%" }}
            >
              (0)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
