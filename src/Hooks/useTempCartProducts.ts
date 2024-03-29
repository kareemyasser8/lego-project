import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query"
import temporaryCartService, {
  productToBeSentForTemporaryCart,
} from "../services/temporaryCartService"

export interface TempCartResponseImage {
  url: string
}

export interface TempCartResponseProduct {
  Product: { id: string; title: string; Images: TempCartResponseImage[] }
  quantity: number
  unit_price: number
}

interface TempCartResponse {
  TemporaryCartItems: TempCartResponseProduct[]
  totalPrice: number
  id: string
}

const useTempCartProducts = () => {
  const temporaryCartId = localStorage.getItem("temporaryCartId")

  return useQuery<
    productToBeSentForTemporaryCart,
    Error,
    TempCartResponse,
    any
  >({
    queryKey: temporaryCartId ? ["temporaryCart", temporaryCartId] : [],
    queryFn: () => temporaryCartId ? temporaryCartService.getOne(temporaryCartId) : Promise.resolve({
      TemporaryCartItems: [],
      totalPrice: 0,
    }),
    // staleTime: 10 * (60 * 1000), // 10 mins
    // cacheTime: 15 * (60 * 1000), // 15 mins
    placeholderData: {
      TemporaryCartItems: [],
      totalPrice: 0,
      id: temporaryCartId || "defaultId", // Use a default id if temporaryCartId is falsy
    },
  })
}


export default useTempCartProducts
