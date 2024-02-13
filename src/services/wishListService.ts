import APIClient from "./apiClient"

export interface elementToBeSentOrRemovedFromWishList{
    wishListId: string | null,
    productId: string
}

export default new APIClient<elementToBeSentOrRemovedFromWishList>("/wishList")
