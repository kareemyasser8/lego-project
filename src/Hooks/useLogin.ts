import { useMutation } from "@tanstack/react-query"
import loginService, { loginResponse } from "../services/loginService"
import Account from "../entities/Account"
import { AxiosError } from "axios"
import { jwtDecode } from "jwt-decode"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../state-management/contexts/authContext"

const useLogin = () => {

  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation<any, AxiosError<any>, Account>({
    mutationFn: (account: Account) => loginService.post(account),
    onSuccess: (token: string)=>{
      let decoded: any
      decoded = jwtDecode(token)
      authCtx.login(token, decoded.exp)
      navigate("/")
    }
  })
}

export default useLogin
