import { Link, useLocation } from "react-router-dom"
import "./AccountMenu.css"
import useAuth from "../../Hooks/useAuth"

const AccountMenu = () => {
  const location = useLocation()
  const { logout, isAdmin } = useAuth()

  const accountMenuOptions = [
    { optionName: "Account Overview", path: "/user", adminPage: false },
    { optionName: "Products", path: "/user/products", adminPage: true },
    { optionName: "My Cart", path: "/user/cart", adminPage: false },
    { optionName: "Wish List", path: "/user/wishList", adminPage: false },
  ]

  return (
    <ul className="list-group list">
      {accountMenuOptions.map((option, index) =>
        option.adminPage ? (
          isAdmin && (
            <Link key={index} to={option.path}>
              <li
                className={`list-group-item ${
                  location.pathname == option.path ? "active" : ""
                }`}
              >
                {option.optionName}
              </li>
            </Link>
          )
        ) : (
          <Link key={index} to={option.path}>
            <li
              className={`list-group-item ${
                location.pathname == option.path ? "active" : ""
              }`}
            >
              {option.optionName}
            </li>
          </Link>
        )
      )}

      <li className="list-group-item cursor-pointer" onClick={() => logout()}>
        Logout
      </li>
    </ul>
  )
}

export default AccountMenu
