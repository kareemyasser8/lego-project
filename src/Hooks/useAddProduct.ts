import { useMutation } from "@tanstack/react-query"
import productService, { ResponseProduct } from "../services/productService"

const useAddProduct = () => {
  return useMutation<ResponseProduct, Error, FormData>({
    mutationFn: (product: any) => productService.post(product),
    onSuccess: (success) => {
      //   console.log(success);
      // },
      // onError: (error)=>{
      //   console.log("product add Error: ", error)
      // }
    },
  })
}

export default useAddProduct
