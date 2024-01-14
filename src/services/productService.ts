import { Product } from "../Products";
import APIClient from "./apiClient";

export interface ResponseProduct {
    page: number
    pageSize: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
    products: Product[]
    count: number
  }

export default new APIClient<any>("/products")