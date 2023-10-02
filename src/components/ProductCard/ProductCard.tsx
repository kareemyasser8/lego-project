import { Product } from "../../Products"
import "./ProductCard.css"
import yellowStar from "../../assets/yellowStar.svg"
import grayStar from "../../assets/grayStar.svg"
import halfStar from "../../assets/halfStar.svg"
import {AiOutlineHeart} from 'react-icons/ai';

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
        <div className="ratings-stars-section col-12 d-flex align-items-center">
          {Array.from({ length: Math.floor(product.ratings) }, (_, index) => (
            <img key={index} className="h-100" src={yellowStar} alt="" />
          ))}
          {product.ratings % 1 !== 0 && (
            <img className="h-100" src={halfStar} alt="" />
          )}
          {Array.from(
            { length: 5 - Math.ceil(product.ratings) },
            (_, index) => (
              <img key={index} className="h-100" src={grayStar} alt="" />
            )
          )}
        </div>
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
