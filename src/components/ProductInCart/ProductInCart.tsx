import "./ProductInCart.css"
import noImage from "../../assets/no-image-placeholder.webp"
import AddToCartCounter from "../AddToCartCounter/AddToCartCounter"
import { AiOutlineHeart } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri"
import useDeleteProductFromTempCart from "../../Hooks/useDeleteProductFromTempCart"
import Spinner from "../Spinner/Spinner"
import { ProductToBeDeletedFromTempCart } from "../../services/temporaryCartService"

interface Props {
  image: string
  title: string
  price: number
  quantity: number
  tempCartId: string
  productId: string
}

const ProductInCart = ({
  image,
  title,
  price,
  tempCartId,
  productId,
  quantity
}: Props) => {
  const { mutate, error, isLoading } = useDeleteProductFromTempCart()

  const removeProductFromCart = () => {
    let removedProduct: ProductToBeDeletedFromTempCart = {
      temporaryCartId: tempCartId,
      productId: productId,
    }
    mutate(removedProduct)
  }

  if (error) {
    return (
      <div
        className="alert alert-danger"
        role="alert"
        style={{ maxHeight: "100px" }}
      >
        <p>Unknown error from devtools</p>
      </div>
    )
  }

  if (isLoading) {
    return <Spinner color="text-warning" />
  }

  return (
    <div className="productInCart-Container">
      <div className="productInCart-Container__productImg">
        <img src={image ? image : noImage} alt={title} />
      </div>
      <div className="productInCart-Container__productTitlePrice">
        <div className="productTitlePrice__title">{title}</div>

        <div className="productTitlePrice__price">${price}</div>
      </div>
      <div className="productInCart-Container__counter">
        <AddToCartCounter
          cartId={tempCartId} 
          productId={productId}
          quantity={quantity}
         />
      </div>
      <div className="productInCart-Container__wishList">
        <div className="wishList__heart-product">
          <AiOutlineHeart size={18} color={"black"} />
        </div>
        Add to wish list
      </div>
      <div
        className="productInCart-Container__delete"
        onClick={removeProductFromCart}
      >
        <RiDeleteBin6Line size={25} color={"#005595"} />
      </div>
    </div>
  )
}

export default ProductInCart
