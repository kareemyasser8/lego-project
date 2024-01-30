import useTempCartProducts, {
  TempCartResponseProduct,
} from "../../Hooks/useTempCartProducts"
import { APILink } from "../../constants/APILink"
import OrderSummary from "../OrderSummary/OrderSummary"
import ProductInCart from "../ProductInCart/ProductInCart"
import "./Cart.css"

const Cart = () => {
  const { data, isLoading, isError } = useTempCartProducts()
  // console.log(data)

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
              />
            )
          )}
        </div>
        <div className="col-lg-4 col-sm-12">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Cart
