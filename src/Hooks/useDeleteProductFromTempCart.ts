import { useMutation, useQueryClient } from "@tanstack/react-query"
import temporaryCartService, {
  ProductToBeDeletedFromTempCart,
} from "../services/temporaryCartService"

const useDeleteProductFromTempCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (p: ProductToBeDeletedFromTempCart) =>
      temporaryCartService.deleteByProduct(p),
    onSuccess: (response: any) => {
      queryClient.invalidateQueries(["temporaryCart"])
    },
  })
}

export default useDeleteProductFromTempCart
