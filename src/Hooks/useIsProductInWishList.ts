import wishListService from "../services/wishListService"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

interface InWishList {
  isProductInWishList: boolean
}

const useIsProductInWishList = (productId: string | number) => {
  let wishListId = localStorage.getItem("wishListId")
  let queryString = `?productId=${productId}&wishListId=${wishListId}`

  return useQuery<any, Error, InWishList>({
    queryKey: wishListId ? ["productInWishList", productId] : [],
    queryFn: () => wishListId ? wishListService.getOne(queryString) : Promise.resolve(undefined),
    placeholderData: { isProductInWishList: false },
    staleTime: 5 * 60 * 1000, // 5 mins
    cacheTime: 15 * 60 * 1000, // 15 mins
  })
}

export default useIsProductInWishList
