import React, { useEffect, useState } from "react"
import useTempCartProducts from "./useTempCartProducts"

const useShoppingCartItemsCount = () => {
  const { data, isLoading, isError } = useTempCartProducts()

  const getShoppingCartItemCount = () => {
    if (data && data.TemporaryCartItems.length) {
      return data.TemporaryCartItems.reduce(
        (totalCount, product) => totalCount + product.quantity,
        0
      )
    }
    return 0;
  }

  const [shoppingCartItemCount, setShoppingCartItemCount] = useState(getShoppingCartItemCount())

  useEffect(() => {
    setShoppingCartItemCount(getShoppingCartItemCount())
  }, [isLoading, data])

  return {
    shoppingCartItemCount
  }
}

export default useShoppingCartItemsCount
