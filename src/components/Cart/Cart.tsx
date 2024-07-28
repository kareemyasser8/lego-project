import useTempCartProducts, {
  TempCartResponseProduct,
} from "../../Hooks/useTempCartProducts"
import { APILink } from "../../constants/APILink"
import AnimatedDiv from "../AnimatedDiv"
import EmptyCartOrWishList from "../EmptyCartOrWishlist/EmptyCartOrWishList"
import OrderSummary from "../OrderSummary/OrderSummary"
import ProductInCart from "../ProductInCart/ProductInCart"
import "./Cart.css"

const Cart = () => {
  const { data, isLoading, isError } = useTempCartProducts()
  // console.log(data)

  if (data?.TemporaryCartItems?.length === 0 || data === undefined) {
    return <EmptyCartOrWishList type="Cart" />;
  }

  return (
    <div className="col-12 w-100">
      <p className="h4">My Cart</p>
      <div className="row">
        <div className="col-lg-8 col-sm-12 mb-3 cartProducts-container">
          {data?.TemporaryCartItems?.map(
            (value: TempCartResponseProduct, index: number) => (
              <AnimatedDiv key={index} index={index}>
                <ProductInCart
                  image={value.Product.Images[0].url}
                  price={value.unit_price}
                  title={value.Product.title}
                  tempCartId={data.id}
                  productId={value.Product.id}
                  quantity={value.quantity}
                />
              </AnimatedDiv>
            )
          )}
        </div>

        <div className="col-lg-4 col-sm-12">
          <AnimatedDiv>
            <OrderSummary totalPrice={data?.totalPrice || 0} />
          </AnimatedDiv>
        </div>
      </div>
    </div>
  )
}

export default Cart
