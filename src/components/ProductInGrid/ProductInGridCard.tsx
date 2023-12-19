import "./ProductInGridCard.css"
import { HiOutlineShoppingBag } from "react-icons/hi"
import yellowStar from "../../assets/yellowStar.svg"
import SmallImageCarousel from "../SmallImageCarousel/SmallImageCarousel"
import { Product } from "../../Products"

interface Props {
  product: Product
}

const ProductInGridCard = ({ product }: Props) => {
  return (
    <>
      <div className="p-2">
        <SmallImageCarousel product={product} />
        <div className="col-12">
          <div className="d-flex align-items-center gap-1 mt-2">
            <img style={{ width: "20px" }} src={yellowStar} alt="" />
            {product.rating}
          </div>

          <div className="mt-2 fw-bold">
            <p>{product.title}</p>
          </div>

          <div className="fw-bold" style={{ marginTop: "-10px" }}>
            <p>{product.price}</p>
          </div>

          {/* <button type="button" className="addToBag2"> */}
          <button type="button" className="btn btn--orange btn--rounded">
            <HiOutlineShoppingBag fontSize={"1.3rem"}/>
            Add to Bag
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductInGridCard
