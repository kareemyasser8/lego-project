import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { LuSearch } from "react-icons/lu"
import Logo from "../../assets/LegoLogo.png"
import MiniNav from "../MiniNav"
import "./LargeNav.css"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const LargeNav = () => {
  const navbar = useRef<HTMLDivElement>(null)
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop
  let scrollTopPosition = 0

  const handleScrollUp = () => {
    scrollTopPosition = window.scrollY || document.documentElement.scrollTop

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
      <div className="position-fixed mb-5 col-12 z-2" ref={navbar}>
        <MiniNav />
        <nav className="navbar navbar-expand-lg px-3">
          <div className="container-fluid">
            <div className="navbar-brand">
              <Link to="/">
              <img className="nav-logo" src={Logo}></img>
              </Link>
            </div>
            <ul className="navbar-nav ms-5 me-auto gap-5 mb-2 mb-lg-0">
              <Link to="/shop">
                <li className="nav-item">SHOP</li>
              </Link>
              <li className="nav-item">DISCOVER</li>
              <li className="nav-item">HELP</li>
            </ul>

            <div className="navbar-nav me-3 gap-4 mb-2 mb-lg-0">
              <div className="search-bg rounded-circle">
                <LuSearch className="search-icon" />
              </div>
              <div className="nav-right-item">
                <FiHeart className="heart-icon" />
              </div>
              <div className="nav-right-item">
                <HiOutlineShoppingBag className="cart-icon" />
                <div className="cart-counter">(0)</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default LargeNav
