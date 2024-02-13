import { useEffect, useState } from "react"
import "./AddToCartCounter.css"
import useCreateOrUpdateProductInTempCart from "../../Hooks/useCreateOrUpdateProductInTempCart"
import Spinner from "../Spinner/Spinner"

interface Props {
  quantity: number
  productId: string
  cartId: string
  limit: number
}

const AddToCartCounter = ({ quantity, productId, cartId, limit }: Props) => {
  const { mutate, isLoading } = useCreateOrUpdateProductInTempCart()
  const [counter, setCounter] = useState(quantity)
  const maxLimit = limit || 1
  const minLimit = 1

  useEffect(() => {
    setCounter(quantity)
  }, [quantity])

  const handleIncrementClick = () => {
    if (counter + 1 > maxLimit) return
    mutate({
      change: 1,
      productId: productId,
      temporaryCartId: cartId,
    })
  }

  const handleDecrementClick = () => {
    if (counter - 1 < minLimit) return
    mutate({
      change: -1,
      productId: productId,
      temporaryCartId: cartId,
    })
    // setCounter(counter - 1)
  }

  return (
    <>
      <div className="counter-btns-container">
        <div
          className={`container__btn ${
            counter == minLimit ? "counter-disabled" : ""
          }`}
          onClick={handleDecrementClick}
        >
          -
        </div>
        <div className="container__counter-number">
          {isLoading == true ? (
            <Spinner size="1.5rem" borderWidth="0.2rem" color="text-warning" />
          ) : (
            counter
          )}
        </div>
        <div
          className={`container__btn ${
            counter == maxLimit ? "counter-disabled" : ""
          }`}
          onClick={handleIncrementClick}
        >
          +
        </div>
      </div>
    </>
  )
}

export default AddToCartCounter
