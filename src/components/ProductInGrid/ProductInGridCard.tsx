import { HiOutlineShoppingBag } from "react-icons/hi"
import yellowStar from "../../assets/yellowStar.svg"
import SmallImageCarousel from "../SmallImageCarousel/SmallImageCarousel"
import { Product } from "../../Products"
import useCreateOrUpdateProductInTempCart from "../../Hooks/useCreateOrUpdateProductInTempCart"
import { productToBeSentForTemporaryCart } from "../../services/temporaryCartService"
import useTempCartStore from "../../state-management/useTempCartStore"

interface Props {
  product: Product
}

const ProductInGridCard = ({ product }: Props) => {
  const { mutate, isLoading } = useCreateOrUpdateProductInTempCart()
  // const {temporaryCartId} = useTempCartStore();

  const addProductToCart = (productId: string) => {
    const productTobeSent: productToBeSentForTemporaryCart = {
      temporaryCartId: localStorage.getItem("temporaryCartId"),
      productId: productId,
      change: 1
    }

    mutate(productTobeSent)
  }

  return (
    <>
      <div className="p-2 ruled-grid__card">
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
            <p>${product.price}</p>
          </div>

          {/* <button type="button" className="addToBag2"> */}
          <button
            type="button"
            onClick={() => {
              addProductToCart(product.id)
            }}
            className={`butn btn--orange btn--rounded ${
              isLoading ? ` btn--loading` : ``
            } `}
          >
            <HiOutlineShoppingBag fontSize={"1.3rem"} />
            Add to Bag
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductInGridCard
