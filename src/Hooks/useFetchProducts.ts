import axios from "axios";
import { Product } from "../Products";
import { useQuery } from "@tanstack/react-query";

interface ProductQuery {
  page: number;
  pageSize: number;
}

interface ResponseProduct {
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  products: Product[];
}

const useFetchProducts = ({ page, pageSize }: ProductQuery) => {
  const url = "http://localhost:3000/api/products/";

  const fetchProducts = () => {
    return axios
      .get<ResponseProduct>(url, {
        params: {
          page: page,
          pageSize: pageSize,
        },
      })
      .then((res) => res.data);
  };

  return useQuery<ResponseProduct, Error>({
    queryKey: ["products", page, pageSize],
    queryFn: fetchProducts,
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
  });
};

export default useFetchProducts;
