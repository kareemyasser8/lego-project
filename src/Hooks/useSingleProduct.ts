import { UseQueryResult, useQuery } from "@tanstack/react-query"

import productService from "../services/productService"
import { FetchedProduct } from "../entities/FetchedProduct"

const useSingleProduct = (id: string) => useQuery<FetchedProduct, Error>({
    queryKey: ["product", id],
    queryFn: () => productService.getOne(id),
  })

export default useSingleProduct
