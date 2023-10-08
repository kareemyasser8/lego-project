import { Dispatch, ReactNode, useReducer } from "react"
import loginReducer, { LoginPopupAction } from "../reducers/loginPopupReducer"
import React from "react"

interface LoginPopupContextType {
  showLoginPopup: boolean
  dispatch: Dispatch<LoginPopupAction>
}

interface Props{
  children: ReactNode
}

const LoginPopupContext = React.createContext<LoginPopupContextType>(
  {} as LoginPopupContextType
)


export const LoginPopupContextProvider = ({children}: Props) => {
  const [showLoginPopup, dispatch] = useReducer(loginReducer, false)
  return (
    <LoginPopupContext.Provider value={{ showLoginPopup, dispatch }}>
      {children}
    </LoginPopupContext.Provider>
  )
}

export default LoginPopupContext;

