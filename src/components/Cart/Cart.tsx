import OrderSummary from "../OrderSummary/OrderSummary"
import ProductInCart from "../ProductInCart/ProductInCart"
import "./Cart.css"

const Cart = () => {
  return (
    <div className="col-12">
      <p className="h4">My Cart</p>
      <div className="row">
        <div className="col-lg-8 col-sm-12 mb-3">
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </div>
        <div className="col-lg-4 col-sm-12">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Cart
