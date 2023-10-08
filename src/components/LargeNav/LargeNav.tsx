import { FiHeart } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { LuSearch } from "react-icons/lu"
import Logo from "../../assets/LegoLogo.png"
import MiniNav from "../MiniNav"
import "./LargeNav.css"

const LargeNav = () => {
  
  return (
    <>
      <div className="position-fixed mb-5 col-12 z-2">
        <MiniNav />
        <nav className="navbar navbar-expand-lg px-3">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img className="nav-logo" src={Logo}></img>
            </div>
            <ul className="navbar-nav ms-5 me-auto gap-5 mb-2 mb-lg-0">
              <li className="nav-item">SHOP</li>
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
