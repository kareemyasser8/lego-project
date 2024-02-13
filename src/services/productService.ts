import { Product } from "../Products";
import APIClient from "./apiClient";

export interface ResponseProduct {
    page: number | null
    pageSize: number | null
    totalPages: number
    hasNextPage: boolean | null
    hasPrevPage: boolean
    products: Product[]
    count: number
  }

export default new APIClient<any>("/products")