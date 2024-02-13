import { useMutation } from "@tanstack/react-query"
import React, { useContext } from "react"
import userCreationService from "../services/userCreationService "
import User from "../entities/User"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import AuthContext from "../state-management/contexts/authContext"

interface fetchedUser {
  token: string
  user: { fname: string; lname: string; email: string; password: string }
}

const useCreateUser = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  return useMutation<any, AxiosError<any, any>, User>({
    mutationFn: (user: User) => userCreationService.post(user),
    onSuccess: (data: fetchedUser) => {
      let decoded: any
      decoded = jwtDecode(data.token)
      authCtx.login(data.token, decoded.exp)
      navigate("/")
    },
    onError(error) {
      return error
    },
  })
}

export default useCreateUser
