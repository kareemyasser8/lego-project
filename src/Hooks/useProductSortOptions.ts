import { useQuery } from "@tanstack/react-query"
import sortOptionsService from "../services/sortOptionsService"

const useProductSortOptions = () => {
  return useQuery({
    queryKey: ["productSortingOptions"],
    queryFn: () => sortOptionsService.getAll(),
    staleTime: 10 * (60 * 1000), // 10 mins
    cacheTime: 15 * (60 * 1000), // 15 mins
    initialData: [
      "Recommended",
      "Price: Low to High",
      "Price: High to Low",
      "Rating: High to Low",
      "Rating: Low to High",
      "A-Z",
    ],
  })
}

export default useProductSortOptions
