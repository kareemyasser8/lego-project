import wishListService from "../services/wishListService"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

interface InWishList {
  isProductInWishList: boolean
}

const useIsProductInWishList = (productId: string) => {
  let wishListId = localStorage.getItem("wishListId")

  let queryString = `?productId=${productId}&wishListId=${wishListId}`

  return wishListId != null
    ? useQuery<any, Error, InWishList>({
        queryKey: ["productInWishList", productId],
        queryFn: () => wishListService.getOne(queryString),
        staleTime: 5 * (60 * 1000), // 5 mins,
        cacheTime: 15 * (60 * 1000), // 15 mins
      })
    : ({} as UseQueryResult<any, Error>)
}

export default useIsProductInWishList
