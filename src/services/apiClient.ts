import axios from "axios"
import { APILink } from "../constants/APILink"

const axiosInstance = axios.create({
  baseURL: APILink,
})

class APIClient<T> {
  endpoint: string = ""

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data)
  }

  getAllPaginated(page: number, pageSize: number) {
    return axiosInstance
      .get<T>(this.endpoint, { params: { page: page, pageSize: pageSize } })
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
