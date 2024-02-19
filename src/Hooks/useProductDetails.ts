import { useParams } from "react-router-dom"
import { FetchedProduct } from "../entities/FetchedProduct"
import useSingleProduct from "./useSingleProduct"
import { useEffect, useState } from "react"
import useTempCartProducts from "./useTempCartProducts"
import useIsProductInWishList from "./useIsProductInWishList"

const useProductDetails = () => {
  const { id } = useParams()

  const temporaryCartId = localStorage.getItem("temporaryCartId")
  const { data } = useTempCartProducts()
  const [displayedQuantity, setDisplayedQuantity] = useState(0)

  let singleProductData: FetchedProduct | undefined
  let singleProductLoading: boolean = false
  let singleProductError: Error | null = {} as Error
  let numOfImages: number = 0
  let isProductInWishList = false


  ;({
    data: singleProductData,
    isLoading: singleProductLoading,
    error: singleProductError,
  } = useSingleProduct(id!))

  numOfImages = singleProductData?.Images.length || 0
  const { data: wishListResult } = useIsProductInWishList(singleProductData?.id!)
  isProductInWishList = wishListResult?.isProductInWishList || false


  const checkProductInCart = (productId: string) => {
    const result = data?.TemporaryCartItems.findIndex(
      (item) => item.Product.id == productId
    )
    return result
  }

  const getQuantityInCart = (index: number) => {
    let productFound = data?.TemporaryCartItems[index]
    let quantity = productFound?.quantity ? productFound?.quantity : 0
    return quantity
  }

  useEffect(() => {
    // Ensure that the product data is loaded before checking in the cart
    if (!singleProductLoading) {
      let index = checkProductInCart(id || "")
      if (index != undefined) {
        let quantity = getQuantityInCart(index)
        setDisplayedQuantity(quantity)
      }
    }
  }, [singleProductLoading, id, data])

  return {
    temporaryCartId,
    displayedQuantity,
    singleProductData,
    singleProductLoading,
    singleProductError,
    numOfImages,
    isProductInWishList
  }
}

export default useProductDetails
