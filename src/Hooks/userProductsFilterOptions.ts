import { useQuery, QueryKey } from "@tanstack/react-query";
import filterOptionsService, { initialFilterOptions }  from "../services/filterOptionsService";

const useProductsFilterOptions = () => {
  return useQuery({
    queryKey: ["productFilterOptions"],
    queryFn: ()=> filterOptionsService.getAll(),
    placeholderData: initialFilterOptions,
    staleTime: 10 * (60 * 1000), // 10 mins
    cacheTime: 15 * (60 * 1000), // 15 mins,
  });
};

export default useProductsFilterOptions;