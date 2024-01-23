import { Link, NavLink, useLocation } from "react-router-dom"
import "./AccountMenu.css"
import useAuth from "../../Hooks/useAuth"

const AccountMenu = () => {
  const location = useLocation()
  const { logout, isAdmin } = useAuth()

  return (
    <ul className="list-group list">
      <Link to={"/user"}>
        <li
          className={
            location.pathname === "/user"
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          Account Overview
        </li>
      </Link>
      {isAdmin && (
        <Link to={"/user/products"}>
          <li
            className={`list-group-item ${
              location.pathname.includes("/user/products") ? "active" : ""
            }`}
          >
            Products
          </li>
        </Link>
      )}
      <Link to={"/user/cart"}>
        <li
          className={`list-group-item ${
            location.pathname.includes("/user/cart") ? "active" : ""
          }`}
        >
          My Cart
        </li>
      </Link>
      <li className="list-group-item">My Orders </li>
      <li className="list-group-item">Wish List</li>
      <li className="list-group-item cursor-pointer" onClick={() => logout()}>
        Logout
      </li>
    </ul>
  )
}

export default AccountMenu
