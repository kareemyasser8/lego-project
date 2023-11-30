import { useQuery } from '@tanstack/react-query';

import productService, { ResponseProduct } from '../services/productService';

const useSingleProduct = (id: string) => {
  return useQuery<ResponseProduct,Error>({
    queryKey: ['product', id],
    queryFn: ()=> productService.getOne(id),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins 
  })
}

export default useSingleProduct
