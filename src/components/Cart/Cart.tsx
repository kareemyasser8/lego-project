import useTempCartProducts, {
  TempCartResponseProduct,
} from "../../Hooks/useTempCartProducts"
import { APILink } from "../../constants/APILink"
import EmptyCart from "../EmptyCart/EmptyCart"
import OrderSummary from "../OrderSummary/OrderSummary"
import ProductInCart from "../ProductInCart/ProductInCart"
import "./Cart.css"

const Cart = () => {
  const { data, isLoading, isError } = useTempCartProducts()
  // console.log(data)

  if (data && data?.TemporaryCartItems.length == 0) {
    return <EmptyCart />
  }

  return (
    <div className="col-12">
      <p className="h4">My Cart</p>
      <div className="row">
        <div className="col-lg-8 col-sm-12 mb-3 cartProducts-container">
          {data?.TemporaryCartItems.map(
            (value: TempCartResponseProduct, index: number) => (
              <ProductInCart
                key={index}
                image={APILink + "/" + value.Product.Images[0].url}
                price={value.unit_price}
                title={value.Product.title}
                tempCartId={data.id}
                productId={value.Product.id}
                quantity={value.quantity}
              />
            )
          )}
        </div>

        <div className="col-lg-4 col-sm-12">
          <OrderSummary totalPrice={data?.totalPrice || 0} />
        </div>
      </div>
    </div>
  )
}

export default Cart
