import axios, { AxiosRequestConfig } from "axios"
import { APILink } from "../constants/APILink"
import { productQuerytoSend } from "../Hooks/useProducts"

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: APILink,
})

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
},)

class APIClient<T> {
  endpoint: string = ""

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data)
  }

  getAllPaginated(
    page: number,
    pageSize: number,
    filters: productQuerytoSend,
    ordering?: string
  ) {
    return axiosInstance
      .get<T>(this.endpoint, {
        params: {
          page: page,
          pageSize: pageSize,
          ...filters,
          ordering: ordering,
        },
      })
      .then((res) => res.data)
  }

  getOne(id: string) {
    return axiosInstance
      .get<T>(this.endpoint.concat(`/${id}`))
      .then((res) => res.data)
  }

  post(data: T) {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data)
  }

  update(id: string, data: T) {
    return axiosInstance
      .put<T>(this.endpoint.concat(`/${id}`), data)
      .then((res) => res.data)
  }

  delete(id: string) {
    return axiosInstance
      .delete<T>(this.endpoint.concat(`/${id}`))
      .then((res) => res.data)
  }
}

export default APIClient
