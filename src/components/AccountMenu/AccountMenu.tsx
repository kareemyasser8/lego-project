import { Link, NavLink, useLocation } from "react-router-dom"
import "./AccountMenu.css"

const AccountMenu = () => {
 
  const location = useLocation();
   
  return (
    <ul className="list-group list">
      <Link
        to={"/user"}
      >
        <li className={location.pathname === '/user'? "list-group-item active" : "list-group-item"}>Account Overview</li>
      </Link>
      <Link to={"/user/products"}>
        <li className={location.pathname === '/user/products'? "list-group-item active" : "list-group-item"}>Products</li>
      </Link>
      <li className="list-group-item">Orders</li>
      <li className="list-group-item">Users</li>
      <li className="list-group-item">Logout</li>
    </ul>
  )
}

export default AccountMenu
