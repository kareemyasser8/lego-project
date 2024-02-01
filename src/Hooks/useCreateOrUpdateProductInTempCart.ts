import { AxiosError } from "axios"
import temporaryCartService, {
  productToBeSentForTemporaryCart,
} from "../services/temporaryCartService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import useTempCartStore from "../state-management/useTempCartStore"
import toast from "react-hot-toast"

const useCreateOrUpdateProductInTempCart = () => {
  const { setTempCart } = useTempCartStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (product: productToBeSentForTemporaryCart) =>
      temporaryCartService.post(product),
    onSuccess: (result: any) => {
      if (!localStorage.getItem("temporaryCartId")) {
        localStorage.setItem("temporaryCartId", result.id)
        setTempCart(result.id)
      }
      toast.success("Product added To Cart successfully")
      queryClient.invalidateQueries(["temporaryCart"])
      console.log(result)
    },
    onError(error) {
      toast.error("Product failed to be added To Cart")
      return error
    },
  })
}

export default useCreateOrUpdateProductInTempCart
