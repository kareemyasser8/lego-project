import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { LuSearch } from "react-icons/lu"
import Logo from "../../assets/LegoLogo.png"
import MiniNav from "../MiniNav"
import "./LargeNav.css"
import { useEffect, useRef, useState } from "react"
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
        navbar.current.classList.remove("top-0")
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
      <div className="navbar-down-space"></div>
      <div className={`position-fixed col-12 z-2 top-0`} ref={navbar}>
        <MiniNav />
        {/* navbar-expand-lg */}

        <nav className="nav">
          <div className="nav__menu">
            <div className="nav__menu__logo">
              <Link to="/">
                <img className="nav-logo" src={Logo}></img>
              </Link>
            </div>

            <ul className="list nav__menu__list">
              <Link to="/shop">
                <li className="list__item">SHOP</li>
              </Link>
              <li className="list__item">DISCOVER</li>
              <li className="list__item">HELP</li>
            </ul>
          </div>

          {/*-------------------------------------------------  */}

          <div className="nav__actions-menu">
            <div className="nav__actions-menu-content">
              <div className="menu-content__icon icon-container">
                <LuSearch />
              </div>
              <div className="menu-content__icon mb-1">
                <FiHeart />
              </div>
              <Link to="/cart" className="text-black">
                <div className="menu-content__icon d-flex align-items-center">
                  <HiOutlineShoppingBag fontSize={"1.5rem"} />
                  <div className="cart-counter">(0)</div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default LargeNav
