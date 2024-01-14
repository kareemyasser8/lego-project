import { useState } from "react"
import "./AddToCartCounter.css"

const AddToCartCounter = () => {
  const [counter, setCounter] = useState(1)
  const maxLimit = 5;
  const minLimit = 1;

  const handleIncrementClick = () => {
    if (counter + 1 > maxLimit) return
    setCounter(counter + 1)
  }

  const handleDecrementClick = () => {
    if (counter - 1 < minLimit) return
    setCounter(counter - 1)
  }

  return (
    <>
      <div className="counter-btns-container">
        <div
          className={`container__btn ${counter == minLimit ? "counter-disabled" : ""}`}
          onClick={handleDecrementClick}
        >
          -
        </div>
        <div className="container__counter-number">{counter}</div>
        <div className={`container__btn ${counter == maxLimit ? "counter-disabled" : ""}`} onClick={handleIncrementClick}>
          +
        </div>
      </div>
    </>
  )
}

export default AddToCartCounter
