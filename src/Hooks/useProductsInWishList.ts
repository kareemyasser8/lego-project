import React from "react"
import wishListService, {
  elementToBeSentOrRemovedFromWishList,
} from "../services/wishListService"
import { useQuery, QueryKey } from "@tanstack/react-query"

interface ProductInWishList {
  createdAt: Date
  updatedAt: Date
  WishListId: string
  ProductId: number
}

interface WishListResponse {
  id: string
  createdAt: Date
  updatedAt: Date
  WishList_Products: ProductInWishList[]
}

const useProductsInWishList = (id: string) => {
  return useQuery<elementToBeSentOrRemovedFromWishList, Error, WishListResponse, any>({
    queryKey: ["WishList"],
    enabled: !!id,
    queryFn: () => wishListService.getOne(id),
    placeholderData: {
      id: '',
      createdAt: '', 
      updatedAt: '',
      WishList_Products: []
    }
  })
}

export default useProductsInWishList
