import APIClient from "./apiClient"

export interface productToBeSentForTemporaryCart {
  temporaryCartId: string | null
  productId: string
  change: number //either positive or negative number
}

export interface ProductToBeDeletedFromTempCart {
  temporaryCartId: string
  productId: string
}

export default new APIClient<
  productToBeSentForTemporaryCart | ProductToBeDeletedFromTempCart
>("/temporaryCart")
