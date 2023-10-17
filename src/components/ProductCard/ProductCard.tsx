import { Product } from "../../Products"
import "./ProductCard.css"
import {AiOutlineHeart} from 'react-icons/ai';
import ProductRating from "../ProductRating/ProductRating"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="product-card flex-direction-column gap-3 ">
        <div
          className="
            img-container
            p-4
            d-flex
            position-relative
            border
            align-items-center
            justify-content-center"
        >
          <div className="badge bg-warning text-dark z-1 position-absolute">New</div>
          <div className="heart-product">
            <AiOutlineHeart size={20} color={"#006DB7"}/>
          </div>
          <img className="w-100" src={product.image} alt="" />
        </div>
        <div className="card-Title mt-2 fw-bold">
          <p>{product.title}</p>
        </div>
        <ProductRating ratings={product.ratings}/>
        <div className="product-price fs-5 fw-bold">
          <p> ${product.price}</p>
        </div>
        <button type="button" className="addToBag w-100">
          Add to Bag
        </button>
      </div>
    </>
  )
}

export default ProductCard
