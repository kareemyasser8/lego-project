import { useMutation } from '@tanstack/react-query'
import productService, { ResponseProduct } from '../services/productService'

const useEditProduct = () => {
  return useMutation<ResponseProduct, Error, FormData>({
    mutationFn: (product: any)=> productService.update(product.get("id"), product)
  })
}

export default useEditProduct
