import { useQuery, QueryKey } from "@tanstack/react-query";
import filterOptionsService from "../services/filterOptionsService";

const useProductsFilterOptions = () => {
  return useQuery({
    queryKey: ["productFilterOptions"],
    queryFn: ()=> filterOptionsService.getAll(),
    staleTime: 10 * (60 * 1000), // 10 mins
    cacheTime: 15 * (60 * 1000), // 15 mins
  });
};

export default useProductsFilterOptions;