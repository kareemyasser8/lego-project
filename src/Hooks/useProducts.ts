import { useQuery } from "@tanstack/react-query"
import productService, { ResponseProduct } from "../services/productService"
import { productQuery } from "../state-management/useFilterStore"
export interface productQuerytoSend {
  price: string
  theme: string
  interest: string
}

const convertArrayToString = (filter: string[] | null): string => {
  if (filter) {
    return filter.join(",")
  } else {
    return ""
  }
}

const useProducts = (page: number, pageSize: number, filters?: productQuery) => {
  const productQueryToSend: productQuerytoSend = {
    price: convertArrayToString(filters?.price || []),
    theme: convertArrayToString(filters?.theme || []),
    interest: convertArrayToString(filters?.interest || []),
  }

  // console.log(productQueryToSend)

  return useQuery<ResponseProduct, Error>({
    queryKey: ["products", page, pageSize, filters],
    queryFn: () =>
      productService.getAllPaginated(page, pageSize, productQueryToSend),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins
  })
}

export default useProducts
