import APIClient from "./apiClient";

export interface productToBeSentForTemporaryCart{
    temporaryCartId: string | null,
    productId: string,
    quantity: number
}

export default new APIClient<productToBeSentForTemporaryCart>("/temporaryCart")