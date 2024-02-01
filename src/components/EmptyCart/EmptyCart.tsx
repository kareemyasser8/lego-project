import { HiOutlineShoppingBag } from "react-icons/hi"
import "./EmptyCart.css"
import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="emptyCart-container">
      <HiOutlineShoppingBag
        fontSize={"1.6rem"}
        color="#005595"
        className="mb-4"
      />
      <h3 className="fw-bold">You don't have anything in your cart</h3>
      <Link to="/shop" className="text-black">
        <p className="emptyCart-container-link">Start Shopping</p>
      </Link>
    </div>
  )
}

export default EmptyCart
