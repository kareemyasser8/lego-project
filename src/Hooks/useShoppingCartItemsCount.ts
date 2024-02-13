import React, { useEffect, useState } from "react"
import useTempCartProducts from "./useTempCartProducts"

const useShoppingCartItemsCount = () => {
  const { data, isLoading, isError } = useTempCartProducts()
  const [shoppingCartItemCount, setShoppingCartItemCount] = useState(0)

  useEffect(() => {
    setShoppingCartItemCount(0)

    if (data?.TemporaryCartItems) {
      setShoppingCartItemCount((prevCount) =>
        data.TemporaryCartItems.reduce(
          (totalCount, product) => totalCount + product.quantity,
          prevCount
        )
      )
    }
  }, [data])

  return{
    shoppingCartItemCount
  }

}

export default useShoppingCartItemsCount
