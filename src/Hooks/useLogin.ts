import { useMutation } from "@tanstack/react-query"
import loginService, { loginResponse } from "../services/loginService"
import Account from "../entities/Account"
import { AxiosError } from "axios"

const useLogin = () => {
  return useMutation<any, AxiosError<any>, Account>({
    mutationFn: (account: Account) => loginService.post(account),
  })
}

export default useLogin
