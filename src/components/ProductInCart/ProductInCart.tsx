import './ProductInCart.css'
import noImage from "../../assets/no-image-placeholder.webp"
import AddToCartCounter from "../AddToCartCounter/AddToCartCounter"
import { AiOutlineHeart } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props{
    image: string,
    title: string,
    price: string
}

const ProductInCart = () => {
  return (
    <div className="productInCart-Container">
    <div className="productInCart-Container__productImg">
      <img src={noImage} alt="" />
    </div>
    <div className="productInCart-Container__productTitlePrice">
      <div className="productTitlePrice__title">
        Gingerbread Ornaments
      </div>

      <div className="productTitlePrice__price">$12.99</div>
    </div>
    <div className="productInCart-Container__counter">
      <AddToCartCounter />
    </div>
    <div className="productInCart-Container__wishList">
       
      <div className="wishList__heart-product">
        <AiOutlineHeart size={18} color={"black"} />
      </div>
      Add to wish list
    </div>
    <div className="productInCart-Container__delete">
        <RiDeleteBin6Line size={25} color={"#005595"} />
    </div>
  </div>
  )
}

export default ProductInCart