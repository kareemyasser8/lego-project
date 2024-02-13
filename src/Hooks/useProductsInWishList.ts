import React from 'react'
import wishListService, { elementToBeSentOrRemovedFromWishList } from "../services/wishListService"
import { useQuery, QueryKey } from '@tanstack/react-query'

const useProductsInWishList = (id: string) => {
  return useQuery<elementToBeSentOrRemovedFromWishList,Error,any>({
    queryKey: ["WishList"],
    queryFn: ()=> wishListService.getOne(id),
    // staleTime: 10 * (60 * 1000), // 10 mins
    // cacheTime: 15 * (60 * 1000), // 15 mins
  })
}

export default useProductsInWishList