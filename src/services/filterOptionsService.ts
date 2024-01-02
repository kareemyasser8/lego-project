import APIClient from "./apiClient";

export interface filterOption{
    name: string,
    value: {name: string, count: number}[]
}

export default new APIClient<filterOption>("/productFilterOptions")