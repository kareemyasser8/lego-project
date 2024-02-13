import React, { ReactNode, useEffect, useState, useCallback } from "react"
import { calculateRemainingTime, retrieveStoredToken } from "./authHelpers"
import { jwtDecode } from "jwt-decode"

interface AuthContextType {
  token: string | null | undefined
  isLoggedIn: boolean
  isAdmin: boolean
  login: (token: string, expirationTime: string) => void
  logout: () => void
}

interface Props {
  children: ReactNode
}

let logoutTimer: NodeJS.Timeout

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: Props) => {
  const tokenData = retrieveStoredToken()

  let initialToken
  let isAdminUser = false;

  if (tokenData) {
    initialToken = tokenData.token
    if(tokenData.token){
      let decoded = jwtDecode<any>(tokenData.token);
      isAdminUser = decoded.isAdmin
      // console.log("is admin? : ", isAdminUser)
    }
  }

  const [token, setToken] = useState(initialToken)

  const userIsLoggedIn = !!token

  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("expirationTime")

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token)
    localStorage.setItem("token", token)
    localStorage.setItem("expirationTime", expirationTime)

    logoutTimer = setTimeout(
      logoutHandler,
      calculateRemainingTime(expirationTime)
    )
  }

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
  }, [tokenData, logoutHandler])

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    isAdmin: isAdminUser,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
