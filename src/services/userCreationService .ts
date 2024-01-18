import User from "../entities/User";
import APIClient from "./apiClient";

export default new APIClient<User>('/users');