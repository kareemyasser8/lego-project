import { useQuery } from '@tanstack/react-query';

import productService from '../services/productService';
import {FetchedProduct} from '../entities/FetchedProduct';

const useSingleProduct = (id: string) => {
  return useQuery<FetchedProduct,Error>({
    queryKey: ['product', id],
    queryFn: ()=> productService.getOne(id),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins 
  })
}

export default useSingleProduct
