import Account from "../entities/Account";
import APIClient from "./apiClient";

export interface loginResponse{
    token: string
}

export default new APIClient<Account>('/auth');