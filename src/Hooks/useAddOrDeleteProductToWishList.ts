import { elementToBeSentOrRemovedFromWishList } from "./../services/wishListService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import wishListService from "../services/wishListService"
import toast from "react-hot-toast"

const useAddOrDeleteProductToWishList = () => {

  let queryClient = useQueryClient();

  return useMutation({
    mutationFn: (element: elementToBeSentOrRemovedFromWishList) =>
      wishListService.post(element),
    onSuccess: (result: any) => {
      if (result && !localStorage.getItem("wishListId")) {
        localStorage.setItem("wishListId", result.WishListId);
      }
      if(result && result.WishListId){
        toast.success("Product added to WishList")
      }else{
        toast.success(result)
      }
    
      queryClient.invalidateQueries(["WishList"])
      queryClient.invalidateQueries(["temporaryCart"]);
      // queryClient.invalidateQueries(['temporaryCart'])
      // queryClient.invalidateQueries(["products"])
      
    },
    onError() {
      toast.error("Product failed to be added To WishList")
      // return error
    },
  })
}

export default useAddOrDeleteProductToWishList
