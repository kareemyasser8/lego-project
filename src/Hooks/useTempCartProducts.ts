import { useQuery, useQueryClient } from "@tanstack/react-query"
import temporaryCartService, {
  productToBeSentForTemporaryCart,
} from "../services/temporaryCartService"

export interface TempCartResponseImage {
  url: string
}

export interface TempCartResponseProduct {
  Product: { id: string, title: string; Images: TempCartResponseImage[] }
  quantity: number
  unit_price: number
}

interface TempCartResponse {
  TemporaryCartItems: TempCartResponseProduct[]
  totalPrice: number
  id: string
}

const useTempCartProducts = () => {
  const temporaryCartId = localStorage.getItem("temporaryCartId");
  return useQuery<productToBeSentForTemporaryCart, Error, TempCartResponse, any>({
    queryKey: ["temporaryCart", temporaryCartId],
    queryFn: () => temporaryCartService.getOne(temporaryCartId || ""),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins
  })
}

export default useTempCartProducts
