import { useQuery } from '@tanstack/react-query';
import productService, { ResponseProduct } from '../services/productService';
import { productQuery } from '../state-management/useFilterStore';

const useProducts = (page: number, pageSize: number, filters?: productQuery) => {
  return useQuery<ResponseProduct, Error>({
    queryKey: ["products", page, pageSize, filters],
    queryFn: () => productService.getAllPaginated(page, pageSize, filters),
    staleTime: 10 * (60 * 1000), // 10 mins,
    cacheTime: 15 * (60 * 1000), // 15 mins 
  })
}

export default useProducts
