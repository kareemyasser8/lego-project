import { HiOutlineShoppingBag } from "react-icons/hi"
import { FiHeart } from "react-icons/fi"
import "./EmptyCartOrWishList.css"
import { Link } from "react-router-dom"

interface Props {
  type: "Cart" | "WishList"
}

const EmptyCartOrWishList = ({ type }: Props) => {
  return (
    <div className="emptyCart-container">
      {type == "Cart" ? (
        <HiOutlineShoppingBag
          fontSize={"1.6rem"}
          color="#005595"
          className="mb-4"
        />
      ) : (
        <FiHeart
          fontSize={"1.6rem"}
          color="#005595"
          className="mb-4"
        />
      )}
      <h3 className="fw-bold">{`You don't have anything in your ${
        type == "Cart" ? `cart` : `wish list`
      } `}</h3>
      <Link to="/shop" className="text-black">
        <p className="emptyCart-container-link">Start Shopping</p>
      </Link>
    </div>
  )
}

export default EmptyCartOrWishList
