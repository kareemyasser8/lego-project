import "./OrderSummary.css"
import bankTypes from "../../assets/bank-types.jpg"

interface Props{
  totalPrice: number
}

const OrderSummary = ({totalPrice}: Props) => {
  return (
    <section className="OrderSummary">
      <header className="OrderSummary__header">
        <h4>Order Summary</h4>
      </header>
      <div className="OrderSummary__container">
        <div className="container__priceLine mt-3">
          <span className="priceLine__text">Subtotal</span>
          <span className="priceLine__number">${totalPrice}</span>
        </div>

        <div className="container__priceLine">
          <span className="priceLine__text">Standard shipping</span>
          <span className="priceLine__number">Free</span>
        </div>

        <div className="container__priceLine priceLine--total">
          <span className="priceLine__text">Subtotal</span>
          <span className="priceLine__number">${totalPrice}</span>
        </div>

        <button className="butn btn--orange btn--rounded btn--block ">
          Check out
        </button>

        <div className="creditCardOptions">
          <img src={bankTypes} alt="Credit Card Options" />
        </div>
      </div>
    </section>
  )
}

export default OrderSummary
