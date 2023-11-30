import { useMutation } from "@tanstack/react-query";
import productService from "../services/productService";

const useDeleteProduct = () => {
    return useMutation<string,Error,string>({
        mutationFn: (id: string) => productService.delete(id),
    })
}

export default useDeleteProduct;
