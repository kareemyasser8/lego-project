import "./ProductInWishList.css"
import { RiDeleteBin6Line } from "react-icons/ri"
import { APILink } from "../../constants/APILink"
import useAddOrDeleteProductToWishList from "../../Hooks/useAddOrDeleteProductToWishList"
import { elementToBeSentOrRemovedFromWishList } from "../../services/wishListService"
import { Link } from "react-router-dom"

interface Props {
  productTitle: string
  lastUpdate: string
  img: string
  productId: string
}

const ProductInWishList = ({
  productTitle,
  lastUpdate,
  img,
  productId,
}: Props) => {
  const date = new Date(lastUpdate)
  const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "/")
  const { mutate } = useAddOrDeleteProductToWishList()

  const handleRemove = () => {
    let element: elementToBeSentOrRemovedFromWishList = {
      productId: productId,
      wishListId: localStorage.getItem("wishListId"),
    }
    mutate(element)
  }

  return (
    <div className="wishlist-container page-layout">
      <div className="wishlist-container__details">
        <div className="details__section">
          <Link to={`/shop/${productId}`}>
            <div className="wishlist-details__header">{productTitle}</div>
          </Link>
          <div className="wishlist-details__footer">
            Last updated: {formattedDate}
          </div>
        </div>
        <div className="wishlist-details__prevImg">
          {/* <img src={APILink + "/" + img} loading="lazy" /> */}
          <img src={img} loading="lazy" />
        </div>
      </div>

      <div className="wishlist-container__removeProduct" onClick={handleRemove}>
        <RiDeleteBin6Line size={25} color={"#005595"} />
      </div>
    </div>
  )
}

export default ProductInWishList
