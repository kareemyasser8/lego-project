import { useQuery } from '@tanstack/react-query';
import productService, { ResponseProduct } from '../services/productService';

const useProducts = (page: number, pageSize: number) => {
  return useQuery<ResponseProduct, Error>({
    queryKey: ["products", page, pageSize],
    queryFn: () => productService.getAllPaginated(page, pageSize),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins 
  })
}

export default useProducts
